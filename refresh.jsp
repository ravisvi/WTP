<%@page import="connector.Server"%><jsp:useBean id="server" class="connector.Server" scope="request" /><%
				int id = Integer.parseInt(request.getParameter("id"));
				boolean status = server.refreshStatus(id);
			%><%=status%>