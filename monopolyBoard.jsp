<%@page import="connector.Server"%>
<%@page import="java.net.*"%>
<%@page import="java.util.*"%>
<!DOCTYPE html>
<!DOCTYPE html>
<html>
<head>
	<title> Monopoly Board</title>
	<script>
		function refresh()
		{
			if(xhr.responseText=="true")
			{
				window.location.reload();
			}
		}
		
		function setInt()
		{
			setInterval(function(){makeajax();}, 100);
		}
		
		function makeajax()
		{
			xhr = new XMLHttpRequest();
			id = String(window.location).split("id=")[1];
			<%
				String ipaddress = InetAddress.getLocalHost().getHostAddress();
			%>
			
			xhr.open("GET","http://"+"<%=ipaddress%>"+":8080/wtproject/refresh.jsp?id="+id,true);
			xhr.onreadystatechange=refresh;
			xhr.send(null);	
		}
		
	</script>
</head>
<body onload="setInt();">
	<jsp:useBean id="server" class="connector.Server" scope="request" />
	<div> <canvas id="myCanvas" width="620" height="620" style="border:2px solid #d3d3d3;" /> <br /> </div>
	
	<script src="board.js" ></script>
	
	<script>
		ctx.clearRect(0, 0, 620, 620);
		drawBorder();
	</script>
	<%
		int [] coOrdinates = server.placePlayer();
		for( int i = 0 ; i < coOrdinates.length;)
		{
	%>	
			<script>
			
				var x  = <%=coOrdinates[i++]%>
				var y  = <%=coOrdinates[i++]%>
				var id = <%=coOrdinates[i++]%>
				<%
					Thread.sleep(250);
				%>
			loadPlayer(x, y, id);
			
			</script>		
	<%
		}
	%>
	
	<div> 
		<form method="post" >
			<input type="submit" name="btnRollDice"  value="Roll Dice"> 
			<%
				if(request.getParameter("btnRollDice") != null)
				{
					server.rollDice(Integer.parseInt(request.getParameter("id")));
					Thread.sleep(250);
				}
			%>
			<input type="submit" name="btnBuy" value="Buy"> 
			<%
				if(request.getParameter("btnBuy") != null)
				{
					if(server.buy(Integer.parseInt(request.getParameter("id"))))
						out.println("bought");
					else
						out.println("can't be bought");
				}
			%>
			<input type="submit" name="btnEndTurn" value="End Turn"> 
			<%
				if(request.getParameter("btnEndTurn") != null)
				{
					server.endTurn(Integer.parseInt(request.getParameter("id")));
				}
			%>
			<br />
			
			Sellable House sites
			<select name='sellHouseName'>
			
			<%
					ArrayList<String> sellHouseList = server.sellHouseSites(Integer.parseInt(request.getParameter("id")));
					for(int i=0; i < sellHouseList.size(); ++i)
					{
			%>

			<option id="<%=i%>"> <%=sellHouseList.get(i)%> </option>
			<%			
					}
			%>
			</select>
			
			<input type="submit" name="btnSellHouse" value="Sell House"> 
			<%
				if(request.getParameter("btnSellHouse") != null)
				{
					int id = Integer.parseInt(request.getParameter("id"));
					String city = request.getParameter("sellHouseName");
					server.sellHouse(id, city);
				}
			%>
			<br />
			
			Sellable Hotel sites
			<select name='sellHotelName'>
			
			<%
					ArrayList<String> sellHotelList= server.sellHotelSites(Integer.parseInt(request.getParameter("id")));
					for(int i=0; i < sellHotelList.size(); ++i)
					{
			%>

			<option id="<%=i%>"> <%=sellHotelList.get(i)%> </option>
			<%			
					}
			%>
			</select>
			
			<input type="submit" name="btnSellHotel" value="Sell Hotel"> 
			<%
				if(request.getParameter("btnSellHotel") != null)
				{
					int id = Integer.parseInt(request.getParameter("id"));
					String city = request.getParameter("sellHotelName");
					server.sellHotel(id, city);
				}
			%>
			<br />
			
			Buildable house sites
			<select name='buildHouseName'>
			
			<%
					ArrayList<String> getHouseList = server.getHouseSites(Integer.parseInt(request.getParameter("id")));
					for(int i=0; i < getHouseList.size(); ++i)
					{
			%>

			<option id="<%=i%>"> <%=getHouseList.get(i)%> </option>
			<%			
					}
			%>
			</select>
			
			<input type="submit" name="btnBuildHouse" value="Build House"> 
			<%
				if(request.getParameter("btnBuildHouse") != null)
				{
					int id = Integer.parseInt(request.getParameter("id"));
					String city = request.getParameter("buildHouseName");
					server.buildHouse(id, city);
				}
			%>
			<br />
			
			Buildable hotel sites
			<select name='buildHotelName'>
			
			<%
					ArrayList<String> getHotelList = server.getHotelSites(Integer.parseInt(request.getParameter("id")));
					for(int i=0; i < getHotelList.size(); ++i)
					{
			%>

			<option id="<%=i%>"> <%=getHotelList.get(i)%> </option>
			<%			
					}
			%>
			</select>
			
			<input type="submit" name="btnBuildHotel" value="Build Hotel"> 
			<%
				if(request.getParameter("btnBuildHotel") != null)
				{
					int id = Integer.parseInt(request.getParameter("id"));
					String city = request.getParameter("buildHotelName");
					server.buildHotel(id, city);
				}
			%>
			<br />
			
			Sellable Sites
			
			<select name='sellSiteName'>
			
			<%
					int id = Integer.parseInt(request.getParameter("id"));
					ArrayList<String> sellSites = server.getSellSites(id);
					for(int i=0; i < sellSites.size(); ++i)
					{
			%>

			<option id="<%=i%>"> <%=sellSites.get(i)%> </option>
			<%			
					}
			%>
			</select>
			
			<select name = "playerId">
				<%
					for(int i=0; i < server.nPlayers; ++i)
					{
						if(i != id)
						{
				%>
			<option id="<%=i%>"> <%=i%> </option>
				<%
						}
					}
				%>
			<option id="Bank"> Bank </option>	
			</select>
			<input type="number" name ="sellingPrice"> 
			
			<input type="submit" name="sellSite" value="Sell Site"> 
			<%
				if(request.getParameter("sellSite") != null )
				{
					id = Integer.parseInt(request.getParameter("id"));
					String buyerId = request.getParameter("playerId");
					String city = request.getParameter("sellSiteName");
					int price = Integer.parseInt(request.getParameter("sellingPrice"));
					server.sellSite(id, buyerId, city, price);
				}
			%>
			
			<br />
			
			Proposed Sites
			<select name = "proposedSites">
				<%
					ArrayList<String> proposal = server.getProposals(id);
					for(int i=0; i < proposal.size(); ++i)
					{
				%>
				<option id="<%=i%>"> <%=proposal.get(i)%> </option>
				<%
					}
				%>
			</select>
			<input type="submit" name ="Accept" value = "Accept" > 
			<%
				if(request.getParameter("Accept") != null)
				{
					String site = request.getParameter("proposedSites");
					server.acceptProposals(id, site);
				}
			%>
			<input type="submit" name ="Deny" value = "Deny"> 
			<%
				if(request.getParameter("Deny") != null)
				{
					String site = request.getParameter("proposedSites");
					server.denyProposal(id, site);
				}
			%>
			
			<br />
		</form>
	</div>
</body>
</html>