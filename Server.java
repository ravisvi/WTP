package connector;
import java.net.*;
import java.io.*;
import java.util.*;

public class Server 
{
	static Random randomGenerator = new Random();
	public static int nPlayers;
	static int capital;
	static int count = 1;
	static City[] arrayOfCities;
	static Player[] players;
	public static int turn;
	public static boolean[] flag;
	public static int rollDiceControl;
	//public static int[] status;
	public static ArrayList<String> proposal;
	
	
	public static int connectToServer(String ipaddress) throws UnknownHostException, IOException, InterruptedException
	{
		int returnValue;
		Socket clientSocket = new Socket(ipaddress, 9000);
		Thread.sleep(1000);
		returnValue = count - 1;
		while(count != nPlayers)
		{
			System.out.println(count);
			Thread.sleep(2000);
		}
		return returnValue;
	}
	
	public static boolean connect(int nPlayers) throws IOException
	{
		Server.nPlayers = nPlayers;
		ServerSocket serverSocket;
		Socket []clientSockets = new Socket[nPlayers - 1];
		serverSocket = new ServerSocket(9000);
		for(int i=1; i < nPlayers; ++i)
		{
			
			clientSockets[i-1] = serverSocket.accept();
			++count;
		}
		return true;
	}
	
	public static boolean refreshStatus(int id)
	{
		 boolean flag = Server.flag[id];
		 Server.flag[id] = false;
		 return flag;
	}
	
	
	
	public static void loadCities()
	{
		arrayOfCities[0] = new City("Go","",0,0,0,0,0,0,0,0,0);
		arrayOfCities[1] = new City("Bombay","red",3500,4200,1200,4000,5500,7500,9000,7500,7500);
		arrayOfCities[2] = new City("Water Works","white",3200,1600,0,0,0,0,0,0,0);
		arrayOfCities[3] = new City("Railways","white",9500,4700,0,0,0,0,0,0,0);
		arrayOfCities[4] = new City("Ahmedabad","red",4000,1700,300,1200,3000,4500,6000,5000,5000);
		arrayOfCities[5] = new City("IncomeTax","",0,0,0,0,0,0,0,0,0);
		arrayOfCities[6] = new City("Indore","blue",1500,700,100,600,1500,2500,3500,2000,2000);
		arrayOfCities[7] = new City("Chance","",0,0,0,0,0,0,0,0,0);
		arrayOfCities[8] = new City("Jaipur","blue",3000,1500,200,1500,2700,4000,5500,4000,4000);
		arrayOfCities[9] = new City("Jail","",0,0,0,0,0,0,0,0,0);
		arrayOfCities[10] = new City("Delhi","green", 6000, 3000,700,3000,4300,5500,7500,5000,5000);
		arrayOfCities[11] = new City("Chandigarh","green", 2500,1200,200,900,1600,2500,3500,3000,3000);
		arrayOfCities[12] = new City("Electric Company","white",2500,1200,0,0,0,0,0,0,0);
		arrayOfCities[13] = new City("Best","white",3500,1700,0,0,0,0,0,0,0);
		arrayOfCities[14] = new City("Shimla", "yellow", 2000,1100,200,1000,2700,4500,6000,3500,3500);
		arrayOfCities[15] = new City("Amritsar","yellow",3300,1600,300,1400,2800,4000,5000,4500,4500);
		arrayOfCities[16] = new City("Community Chest","",0,0,0,0,0,0,0,0,0);
		arrayOfCities[17] = new City("Srinagar","yellow",5000,2500,500,3500,5000,7000,8000,6000,6000);
		arrayOfCities[18] = new City("Club","",0,0,0,0,0,0,0,0,0);
		arrayOfCities[19] = new City("Agra","blue",2500,1200,200,900,1600,2500,3500,3000,3000);
		arrayOfCities[20] = new City("Chance","",0,0,0,0,0,0,0,0,0);
		arrayOfCities[21] = new City("Kanpur","blue",4000,2000,400,1500,3000,4500,5500,4500,4500);
		arrayOfCities[22] = new City("Patna","blue", 2000,1000,200,800,2000,3000,4500,2500,2500);
		arrayOfCities[23] = new City("Darjeeling","red",2500,1200,200,1200,2600,3500,5000,3000,3000);
		arrayOfCities[24] = new City("Air India","white",1200,5200,0,0,0,0,0,0,0);
		arrayOfCities[25] = new City("Calcutta","red",8000,3200,800,3200,4500,6500,8000,6000,6000);
		arrayOfCities[26] = new City("Hyderabad","red",3500,2000,400,1500,3000,4200,5000,4500,4500);
		arrayOfCities[27] = new City("Rest House","",0,0,0,0,0,0,0,0,0);
		arrayOfCities[28] = new City("Madras","yellow",7000,3500,900,3500,5000,7000,8500,6500,6500);
		arrayOfCities[29] = new City("Community Chest","",0,0,0,0,0,0,0,0,0);
		arrayOfCities[30] = new City("Bangalore","yellow",4000,2000,400,1500,3000,4500,5500,4500,4500);
		arrayOfCities[31] = new City("Wealth","",0,0,0,0,0,0,0,0,0);
		arrayOfCities[32] = new City("Ootacamund","green",2500,1200,200,1000,2500,3500,4500,3000,3000);
		arrayOfCities[33] = new City("Cochin","green", 3000, 1500,300,1500,2700,4000,5500,4000,4000);
		arrayOfCities[34] = new City("MotorBoat","white", 5500,2700,0,0,0,0,0,0,0);
		arrayOfCities[35] = new City("Margoa", "green", 4000, 2000, 400,2200,3500,5000,6500,4500,4500);
	}
	
	public static int[] placePlayer()
	{
		int j = 0;
		int[] coOrdinates = new int[Server.nPlayers*3];
		for(int i = 0; i < 36; ++i)
		{
			arrayOfCities[i].noOfPlayers = 0;
		}
		for( int i = 0; i < nPlayers; ++i)
		{
			int noOfPlayers = arrayOfCities[players[i].pos].noOfPlayers;
			int curPos = players[i].pos;
			if(curPos > 0 && curPos < 9)
			{	
				if(noOfPlayers == 0)
				{
					coOrdinates[j++] = 510-50*curPos;
					coOrdinates[j++] = 595;
				}
				else if(noOfPlayers == 1)
				{
					coOrdinates[j++] = 510-50*curPos+25;
					coOrdinates[j++] = 595;
				}
				else if(noOfPlayers == 2)
				{
					coOrdinates[j++] = 510-50*curPos;
					coOrdinates[j++] = 570;
				}
				else
				{
					coOrdinates[j++] = 510-50*curPos+25;
					coOrdinates[j++]= 570;
				}
			}
			else if(curPos > 9 && curPos < 18)
			{
				if(noOfPlayers == 0)
				{
					coOrdinates[j++] = 0;
					coOrdinates[j++] = 510-(curPos-9)*50;
				}
				else if(noOfPlayers == 1)
				{
					coOrdinates[j++] = 0;
					coOrdinates[j++] = 510-(curPos-9)*50+25;
				}
				else if(noOfPlayers == 2)
				{
					coOrdinates[j++] = 25;
					coOrdinates[j++] = 510-(curPos-9)*50;
				}
				else
				{
					coOrdinates[j++] = 25;
					coOrdinates[j++] = 510-(curPos-9)*50+25;
				}
			}
			else if(curPos > 18 && curPos < 27)
			{
				if(noOfPlayers == 0)
				{
					coOrdinates[j++] = 510-50*(27-curPos);
					coOrdinates[j++] = 0;
				}
				else if(noOfPlayers == 1)
				{
					coOrdinates[j++] = 510-50*(27-curPos)+25;
					coOrdinates[j++] = 0;
				}
				else if(noOfPlayers == 2)
				{
					coOrdinates[j++] = 510-50*(27-curPos);
					coOrdinates[j++] = 25;
				}
				else
				{
					coOrdinates[j++] = 510-50*(27-curPos)+25;
					coOrdinates[j++] = 25;
				}
			}
			else if(curPos > 27)
			{
				if(noOfPlayers == 0)
				{
					coOrdinates[j++] = 595;
					coOrdinates[j++] = 510-(36-curPos)*50;
				}
				else if(noOfPlayers == 1)
				{
					coOrdinates[j++] = 595;
					coOrdinates[j++] = 510-(36-curPos)*50+25;
				}
				else if(noOfPlayers == 2)
				{
					coOrdinates[j++] = 570;
					coOrdinates[j++] = 510-(36-curPos)*50;
				}
				else
				{
					coOrdinates[j++] = 570;
					coOrdinates[j++] = 510-(36-curPos)*50+25;
				}
			}
			else if(curPos == 0)
			{
				if(noOfPlayers == 0)
				{
					coOrdinates[j++] = 510;
					coOrdinates[j++] = 595;
				}
				else if(noOfPlayers == 1)
				{
					coOrdinates[j++] = 535;
					coOrdinates[j++] = 595;
				}
				else if(noOfPlayers == 2)
				{
					coOrdinates[j++] = 560;
					coOrdinates[j++] = 595;
				}
				else
				{
					coOrdinates[j++] = 585;
					coOrdinates[j++] = 595;
				}
			}
			else if(curPos == 9)
			{
				if(noOfPlayers == 0)
				{
					coOrdinates[j++] = 0;
					coOrdinates[j++] = 595;
				}
				else if(noOfPlayers == 1)
				{
					coOrdinates[j++] = 25;
					coOrdinates[j++] = 595;
				}
				else if(noOfPlayers == 2)
				{
					coOrdinates[j++] = 50;
					coOrdinates[j++] = 595;
				}
				else
				{
					coOrdinates[j++] = 75;
					coOrdinates[j++] = 595;
				}
			}
			else if(curPos == 18)
			{
				if(noOfPlayers == 0)
				{
					coOrdinates[j++] = 0;
					coOrdinates[j++] = 0;
				}
				else if(noOfPlayers == 1)
				{
					coOrdinates[j++] = 25;
					coOrdinates[j++] = 0;
				}
				else if(noOfPlayers == 2)
				{
					coOrdinates[j++] = 50;
					coOrdinates[j++] = 0;
				}
				else
				{
					coOrdinates[j++] = 75;
					coOrdinates[j++] = 0;
				}
			}
			else
			{
				if(noOfPlayers == 0)
				{
					coOrdinates[j++] = 510;
					coOrdinates[j++] = 0;
				}
				else if(noOfPlayers == 1)
				{
					coOrdinates[j++] = 535;
					coOrdinates[j++] = 0;
				}
				else if(noOfPlayers == 2)
				{
					coOrdinates[j++] = 560;
					coOrdinates[j++] = 0;
				}
				else
				{
					coOrdinates[j++] = 585;
					coOrdinates[j++] = 0;
				}
			}
			coOrdinates[j++] = i;
			arrayOfCities[players[i].pos].noOfPlayers += 1;
		}
		return coOrdinates;
	}
	public static int init(int nPlayers, int capital)
	{
		rollDiceControl = 0;
		turn = 0;
		Server.arrayOfCities = new City[36];
		Server.players = new Player[nPlayers];
		Server.nPlayers = nPlayers;
		Server.capital = capital;
		Server.flag = new boolean[nPlayers];
		//Server.status = new boolean[nPlayers];
		Server.proposal = new ArrayList<String>();
		for(int i=0; i < nPlayers; ++i)
		{
			flag[i] = false;
			//status[i] = false;
		}
		Server.loadCities();
		Server.createPlayers();
		
		return 0;
	}
	
	public static void createPlayers()
	{
		for( int i = 0; i < nPlayers; ++i)
		{
			players[i] = new Player(i, Server.capital);
			arrayOfCities[0].noOfPlayers += 1;
		}
	}
	
	public static void setRefresh()
	{
		for(int i=0; i < nPlayers; ++i)
		{
			flag[i] = true;
		}
	}
	
	public static void endTurn(int id)
	{
		if(id == turn && players[turn].balance >= 0)
			turn = (turn + 1) % nPlayers;
	}
	
	
	public static void rollDice(int id)
	{
		if(turn == rollDiceControl && turn == id && players[turn].balance >= 0)
		{
			int diceValue = randomGenerator.nextInt(11)+2;
			//int diceValue = 9;
			players[turn].prevPos = players[turn].pos;
			players[turn].pos = (players[turn].pos + diceValue)%36;
			rollDiceControl = (rollDiceControl + 1) % nPlayers;
			checkRent(diceValue);
			setRefresh();
		}
	}
	
	public static boolean buy(int id)
	{
		if(turn == id && players[turn].balance > arrayOfCities[players[turn].pos].price && !(arrayOfCities[players[turn].pos].group.equals("") && players[turn].balance >= 0)
		&& arrayOfCities[players[turn].pos].owner.equals("Bank") )
		{
			players[turn].balance -= arrayOfCities[players[turn].pos].price;
			arrayOfCities[players[turn].pos].owner=(new Integer(turn)).toString();
			return true;
		}
		return false;
	}
	
	public static ArrayList<String> getHouseSites(int id)
	{
		ArrayList <String> list = new ArrayList<String> ();
		for(int i=0; i < 36; ++i)
		{
			if(arrayOfCities[i].owner.equals((new Integer(id)).toString()) && !(arrayOfCities[i].group.equals("white"))
			&& arrayOfCities[i].noOfHouses < 3 && arrayOfCities[i].noOfHotels == 0)
			{
				list.add(arrayOfCities[i].name);
			}
		}
		return list;
	}
	
	public static ArrayList<String> getHotelSites(int id)
	{
		ArrayList <String> list = new ArrayList<String> ();
		for(int i=0; i < 36; ++i)
		{
			if(arrayOfCities[i].owner.equals((new Integer(id)).toString()) && !(arrayOfCities[i].group.equals("white"))
			&& arrayOfCities[i].noOfHouses == 3 && arrayOfCities[i].noOfHotels == 0)
			{
				list.add(arrayOfCities[i].name);
			}
		}
		return list;
	}
	
	public static ArrayList<String> sellHouseSites(int id)
	{
		ArrayList <String> list = new ArrayList<String> ();
		for(int i=0; i < 36; ++i)
		{
			if(arrayOfCities[i].owner.equals((new Integer(id)).toString()) && !(arrayOfCities[i].group.equals("white"))
			&& arrayOfCities[i].noOfHouses != 0 && arrayOfCities[i].noOfHotels == 0)
			{
				list.add(arrayOfCities[i].name);
			}
		}
		return list;
	}

	public static ArrayList<String> sellHotelSites(int id)
	{
		ArrayList <String> list = new ArrayList<String> ();
		for(int i=0; i < 36; ++i)
		{
			if(arrayOfCities[i].owner.equals((new Integer(id)).toString()) && !(arrayOfCities[i].group.equals("white"))
			&& arrayOfCities[i].noOfHouses == 3 && arrayOfCities[i].noOfHotels == 1)
			{
				list.add(arrayOfCities[i].name);
			}
		}
		return list;
	}
	
	public static int getCityPos(String city)
	{
		for(int i=0; i < 36; ++i)
		{
			if(arrayOfCities[i].name.equals(city))
			{
				return i;
			}
		}
		return -1;
	}
	
	public static boolean buildHotel(int id, String city)
	{
		int pos = getCityPos(city);
		if(pos >= 0 && turn == id && arrayOfCities[pos].noOfHouses == 3 && arrayOfCities[pos].noOfHotels == 0 &&
		players[turn].balance >= arrayOfCities[pos].costOfHotel && players[turn].balance >= 0)
		{
			arrayOfCities[pos].noOfHotels += 1;
			players[turn].balance -= arrayOfCities[pos].costOfHotel;
			return true;
		}
		return false;
	}
	
	public static boolean buildHouse(int id, String city)
	{
		int pos = getCityPos(city);
		System.out.println(city);
		if(pos >= 0 && turn == id && (arrayOfCities[pos].noOfHouses < 3) && (players[turn].balance >= arrayOfCities[pos].costOfHouse) && players[turn].balance >= 0)
		{	
			arrayOfCities[pos].noOfHouses += 1;
			players[turn].balance -= arrayOfCities[pos].costOfHouse;
			return true;
		}
		return false;
	}
	
	public static boolean sellHotel(int id, String city)
	{
		int pos = getCityPos(city);
		if(pos >= 0 && turn == id && arrayOfCities[pos].noOfHotels != 0)
		{	
			arrayOfCities[pos].noOfHotels -= 1;
			players[turn].balance += (arrayOfCities[pos].costOfHotel / 2);
			return true;
		}
		return false;
	}
	
	public static boolean sellHouse(int id, String city)
	{
		int pos = getCityPos(city);
		if(pos >= 0 && turn == id && arrayOfCities[pos].noOfHouses != 0 && arrayOfCities[pos].noOfHotels == 0)
		{
			arrayOfCities[pos].noOfHouses -= 1;
			players[turn].balance += (arrayOfCities[pos].costOfHouse / 2);
			return true;
		}
		return false;
	}
	
	public static void checkRent(int diceValue)
	{
		int pos = players[turn].pos;
		int player = 5;
		if(!(arrayOfCities[pos].owner.equals("Bank")))
			player = Integer.parseInt(arrayOfCities[pos].owner);
		
		if(players[turn].collect)
			players[turn].balance += 1500;
			
		if(arrayOfCities[pos].group.equals(""))
		{
			if(pos < players[turn].prevPos)
			{
				if(pos == 0)
				{
					players[turn].prevPos = 36 - diceValue;
					players[turn].collect = true;
				}
				else
				{
					int value = pos-diceValue;
					players[turn].prevPos = (value < 0) ? (36 + value) : value;
					players[turn].balance += 1500;
				}	
			}
			else if(pos == 5 || pos == 31)
			{
				for(int i=0 ; i < 36; ++i)
				{
					if(arrayOfCities[i].owner.equals((new Integer(turn)).toString()))
					{
						players[turn].balance -= 100;
					}
				}
			}
			else if(pos == 7 || pos == 20)
			{
				switch(diceValue)
				{
					case 2:
						players[turn].pos = 9;
						players[turn].balance -= 500;	//Go to jail code is remaining
						break;
					case 3:
						players[turn].balance += 2000;	// display he has won the lottery
						break;
					case 4:
						players[turn].balance -= 1000;	//school fees
						break;
					case 5:
						players[turn].balance += 2500;	//won the beauty contest
						break;
					case 6:
						players[turn].balance -= 2000;	//Marriage celebrations
						break;
					case 7:
						players[turn].balance += 2000;	//Income tax refund
						break;
					case 8:
					case 9:
							//increase maintaince house 100
						for(int i=0 ; i < 36; ++i)
						{
							if(arrayOfCities[i].owner.equals((new Integer(turn)).toString()) )
							{
								players[turn].balance -= (arrayOfCities[i].noOfHouses * 100);
								players[turn].balance -= (arrayOfCities[i].noOfHotels * 200);
							}
						}
						break;
					case 10:
					case 11:
						players[turn].balance -= 1500;
						break;
					case 12:
						players[turn].balance -= 2000;
						break;	
				}
			}
			
			else if(pos == 9)
			{
				players[turn].balance -= 500;
			}
			else if(pos == 16 || pos == 29)
			{
				switch(diceValue)
				{
					case 3:
						players[turn].pos = 9;
						players[turn].balance -= 500;	//Go to jail code is remaining
						break;
					case 2:
						players[turn].balance += 2000;	// display he has won the lottery
						break;
					case 5:
						players[turn].balance -= 1000;	//school fees
						break;
					case 4:
						players[turn].balance += 2500;	//won the beauty contest
						break;
					case 7:
						players[turn].balance -= 2000;	//Marriage celebrations
						break;
					case 6:
						players[turn].balance += 2000;	//Income tax refund
						break;
					case 8:
						players[turn].pos = 27;
						players[turn].balance += (100 * nPlayers);
						for(int i=0; i < nPlayers; ++i)
						{
							if(i!=turn)
							{
								players[i].balance -= 100;
							}
						}
					case 9:
							//increase maintaince house 100
						for(int i=0 ; i < 36; ++i)
						{
							if(Integer.parseInt(arrayOfCities[i].owner) == turn )
							{
								players[turn].balance -= (arrayOfCities[i].noOfHouses * 100);
								players[turn].balance -= (arrayOfCities[i].noOfHotels * 200);
							}
						}
						break;
					case 10:
						players[turn].balance += 1500;
						break;
					case 11:
						players[turn].balance -= 1500;
						break;
					case 12:
						players[turn].balance += 3000;
						break;	
				}
			}
			
			else if(pos == 18)
			{
				players[turn].balance -= (100 * nPlayers);
				for(int i=0; i < nPlayers; ++i)
				{
					if(i!=turn)
					{
						players[i].balance += 100;
					}
				}			
			}
			
			else if(pos == 27)
			{
				players[turn].balance += (100 * nPlayers);
				for(int i=0; i < nPlayers; ++i)
				{
					if(i!=turn)
					{
						players[i].balance -= 100;
					}
				}
			}
		}
		else 
		{
			if(!(arrayOfCities[pos].owner.equals((new Integer(turn)).toString())) && !(arrayOfCities[pos].owner.equals("Bank")))
			{
				if(arrayOfCities[pos].group.equals("white"))
				{
					switch(pos)
					{
						case 2:
							if(arrayOfCities[12].owner.equals(arrayOfCities[pos].owner))
							{
								players[turn].balance -= (200*diceValue);
								players[player].balance += (200*diceValue);
							}
							else
							{
								players[turn].balance -= (100*diceValue);
								players[player].balance += (100*diceValue);
							}
							break;
						case 3:
							if(arrayOfCities[13].owner == arrayOfCities[pos].owner)
							{
								players[turn].balance -= 1300;
								players[player].balance += 1300;
							}
							else
							{
								players[turn].balance -= 1000;
								players[player].balance += 1000;
							}
							break;
						case 12:
							if(arrayOfCities[34].owner.equals(arrayOfCities[pos].owner))
							{
								players[turn].balance -= (100*diceValue);
								players[player].balance += (100*diceValue);
							}
							else
							{
								players[turn].balance -= (50*diceValue);
								players[player].balance += (50*diceValue);
							}
							break;
						case 13:
							if(arrayOfCities[3].owner.equals(arrayOfCities[pos].owner))
							{
								players[turn].balance -= 1100;
								players[player].balance += 1100;
							}
							else
							{
								players[turn].balance -= 600;
								players[player].balance += 600;
							}
							break;
						case 24:
							if(arrayOfCities[2].owner.equals(arrayOfCities[pos].owner))
							{
								players[turn].balance -= 1500;
								players[player].balance += 1500;
							}
							else
							{
								players[turn].balance -= 1200;
								players[player].balance += 1200;
							}
							break;
						case 34:
							if(arrayOfCities[12].owner.equals(arrayOfCities[pos].owner))
							{
								players[turn].balance -= (200*diceValue);
								players[player].balance += (200*diceValue);
							}
							else
							{
								players[turn].balance -= (100*diceValue);
								players[player].balance += (100*diceValue);
							}
							break;
					}
					
				}
				else if(arrayOfCities[pos].noOfHotels == 0 && arrayOfCities[pos].noOfHouses == 0)
				{
					int count = 0;
					String owner = arrayOfCities[pos].owner;					
					String color = arrayOfCities[pos].group;
					for(int i=0; i < 36; ++i)
					{
						if(arrayOfCities[i].group.equals(color) && arrayOfCities[i].owner.equals(owner))
						{
							++count;
						}
					}
					if(!(color.equals("white")) && count == 5)
					{
						players[turn].balance -= (2*arrayOfCities[pos].rentSite);
						players[player].balance += (2*arrayOfCities[pos].rentSite);
					}
					else
					{
						players[turn].balance -= arrayOfCities[pos].rentSite;
						players[player].balance += arrayOfCities[pos].rentSite;
					}
				}
				else if(arrayOfCities[pos].noOfHotels != 0)
				{
					players[turn].balance -= arrayOfCities[pos].costOfHotel;
					players[player].balance += arrayOfCities[pos].costOfHotel;
				}
				else
				{
					switch(arrayOfCities[pos].noOfHouses)
					{
						case 1:
							players[turn].balance -= arrayOfCities[pos].rentOne;
							players[player].balance += arrayOfCities[pos].rentOne;
							break;
						case 2:
							players[turn].balance -= arrayOfCities[pos].rentTwo;
							players[player].balance += arrayOfCities[pos].rentTwo;
							break;
						case 3:
							players[turn].balance -= arrayOfCities[pos].rentThree;
							players[player].balance += arrayOfCities[pos].rentThree;
							break;
					}
				}
			}
		}
	}

	public static void removePlayer()
	{
		//to be continued....
	}
	
	public static boolean sellSite(int id, String buyerId, String city, int price)
	{
		int pos = getCityPos(city);
		if(buyerId.equals("Bank"))
		{
			players[turn].balance += (arrayOfCities[pos].price)/2 ;
			arrayOfCities[pos].owner = "Bank";
		}
		else if(price>=0 && pos >= 0 && turn == id && arrayOfCities[pos].noOfHotels == 0 && arrayOfCities[pos].noOfHouses == 0)
		{
			proposal.add((new Integer(id)).toString() + " "+ buyerId + " " + city + " "+ (new Integer(price)).toString());
			System.out.println((new Integer(id)).toString() + " "+ buyerId + " " + city + " "+ (new Integer(price)).toString());
			setRefresh();
			return true;
		}
		return false;
	}
	
	public static ArrayList<String> getSellSites(int id)
	{
		ArrayList <String> list = new ArrayList<String> ();
		for(int i=0; i < 36; ++i)
		{
			if(arrayOfCities[i].owner.equals((new Integer(id)).toString()) && !(arrayOfCities[i].group.equals(""))
			&& arrayOfCities[i].noOfHouses == 0 && arrayOfCities[i].noOfHotels == 0)
			{
				list.add(arrayOfCities[i].name);
			}
		}
		return list;
	}
	public static ArrayList<String> getProposals(int id)
	{
		ArrayList <String> list = new ArrayList<String> ();
		for(int i=0 ; i < proposal.size(); ++i)
		{
			int buyerId = Integer.parseInt(proposal.get(i).split(" ")[1]);
			if(buyerId == id)
			{
				String []str = proposal.get(i).split(" ");
				list.add(str[0] + " " + str[2] + " " + str[3]);
			}
		}
		return list;
	}
	
	public static void acceptProposals(int id, String site)
	{
		if(turn == id)
		{
			String str[];
			for(int i=0 ; i < proposal.size(); ++i)
			{
				str = proposal.get(i).split(" ");
				System.out.println(site.split(" ")[1] + "\t" + site.split(" ")[0] + "\t"+str[0] + "\t"+str[2]);
				if(str[2].equals(site.split(" ")[1]) && str[0].equals(site.split(" ")[0]))
				{
					System.out.println(proposal.get(i));
					proposal.remove(i);
					--i;
				}
				
			}
			int pos = getCityPos(site.split(" ")[1]);
			if(pos >= 0)
			{
				int price = Integer.parseInt(site.split(" ")[2]);
				int prevOwner = Integer.parseInt(arrayOfCities[pos].owner);
				players[prevOwner].balance += price;
				players[id].balance -= price;
				
				arrayOfCities[pos].owner = (new Integer(id)).toString();
				System.out.println(arrayOfCities[pos].owner + "\t"+ (new Integer(id)).toString() );
			}
			setRefresh();
		}
		
	}
	
	public static void denyProposal(int id, String site)
	{
		if(turn == id)
		{
			String str[] = site.split(" ");
			String temp = str[0] + " " + (new Integer(id)).toString() + " "+ str[1] +" "+ str[2];
			int index = proposal.indexOf(temp);
			proposal.remove(index);
			setRefresh();
		}
	}	
}


class City
{
	public String name;
	public String group;
	public int price;
	public int bankMortgage;
	public int rentSite;
	public int rentOne;
	public int rentTwo;
	public int rentThree;
	public int rentHotel;
	public int costOfHouse;
	public int costOfHotel;
	public int noOfPlayers;
	public int noOfHouses;
	public int noOfHotels;
	public String owner;
	
	public City(String name, String group, int price, int bankMortgage, int rentSite, int rentOne, int rentTwo, int rentThree, int rentHotel, int costOfHouse, int costOfHotel)
	{
		this.name = name;
		this.rentSite = rentSite;
		this.rentOne = rentOne;
		this.rentTwo = rentTwo;
		this.rentThree = rentThree;
		this.rentHotel = rentHotel;
		this.costOfHouse = costOfHouse;
		this.costOfHotel = costOfHotel;
		this.bankMortgage = bankMortgage;
		this.price = price;
		this.group = group;
		this.noOfPlayers = 0;
		this.noOfHouses = 0;
		this.noOfHotels = 0;
		this.owner = "Bank";
	}
}


class Player
{
	public int id;
	public int pos;
	public int balance;
	public boolean collect;
	public int prevPos;
	
	public Player(int id, int balance)
	{
		this.id  = id;
		this.pos = 0;
		this.balance = balance;
		this.collect = false;
		this.prevPos = 0;
	}
}




