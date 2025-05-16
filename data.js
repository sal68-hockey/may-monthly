class Player {
  constructor(firstname, lastname, position, age, points, photo, fact, draftYear) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.position = position;
    this.age = age;
    this.points = points;
    this.photo = photo;
    this.fact = fact;
    this.draftYear = draftYear;
  }

  fullName() {
    return `${this.firstname} ${this.lastname}`;
  }
}

const players = [
  new Player("Wayne", "Gretzky", "Center", 64, 2857, "https://via.placeholder.com/150?text=Wayne+Gretzky", "Only player to score over 200 points in a season (4 times).", "Undrafted (WHA)"),
  new Player("Jaromír", "Jágr", "Right Wing", 52, 1921, "https://via.placeholder.com/150?text=Jaromír+Jágr", "Drafted 5th overall by Pittsburgh in 1990. Played professionally into his late 40s.", 1990),
  new Player("Mark", "Messier", "Center", 63, 1887, "https://via.placeholder.com/150?text=Mark+Messier", "The only player to captain two different teams to Stanley Cups.", 1979),
  new Player("Gordie", "Howe", "Right Wing", 88, 1850, "https://via.placeholder.com/150?text=Gordie+Howe", "Played in the NHL in five different decades. Known as 'Mr. Hockey.'", "Pre-Draft Era"),
  new Player("Ron", "Francis", "Center", 61, 1798, "https://via.placeholder.com/150?text=Ron+Francis", "Drafted 4th overall in 1981. Known for consistency and leadership.", 1981),
  new Player("Marcel", "Dionne", "Center", 72, 1771, "https://via.placeholder.com/150?text=Marcel+Dionne", "Third fastest to reach 1000 points.", 1971),
  new Player("Steve", "Yzerman", "Center", 59, 1755, "https://via.placeholder.com/150?text=Steve+Yzerman", "Captain of the Detroit Red Wings for over 20 seasons.", 1983),
  new Player("Mario", "Lemieux", "Center", 58, 1723, "https://via.placeholder.com/150?text=Mario+Lemieux", "Scored over 1700 points despite battling cancer and injuries.", 1984),
  new Player("Joe", "Sakic", "Center", 55, 1641, "https://via.placeholder.com/150?text=Joe+Sakic", "Captain of the Avalanche; one of the most clutch scorers ever.", 1987),
  new Player("Phil", "Esposito", "Center", 82, 1590, "https://via.placeholder.com/150?text=Phil+Esposito", "First player to score 100 points in a season five times.", 1963),
  new Player("Ray", "Bourque", "Defenseman", 63, 1579, "https://via.placeholder.com/150?text=Ray+Bourque", "Highest-scoring defenseman in NHL history.", 1979),
  new Player("Joe", "Thornton", "Center", 44, 1539, "https://via.placeholder.com/150?text=Joe+Thornton", "Drafted 1st overall in 1997. Played over 1700 NHL games.", 1997),
  new Player("Adam", "Oates", "Center", 61, 1420, "https://via.placeholder.com/150?text=Adam+Oates", "Undrafted but one of the best playmakers in history.", "Undrafted"),
  new Player("Doug", "Gilmour", "Center", 60, 1414, "https://via.placeholder.com/150?text=Doug+Gilmour", "Drafted 134th overall. Known for tenacity and scoring.", 1982),
  new Player("Sidney", "Crosby", "Center", 36, 1402, "https://via.placeholder.com/150?text=Sidney+Crosby", "Considered one of the greatest of the modern era.", 2005),
  new Player("Paul", "Coffey", "Defenseman", 62, 1531, "https://via.placeholder.com/150?text=Paul+Coffey", "Elite offensive defenseman, won 4 Stanley Cups.", 1980),
  new Player("Stan", "Mikita", "Center", 78, 1467, "https://via.placeholder.com/150?text=Stan+Mikita", "Innovator of the curved stick blade.", "Pre-Draft Era"),
  new Player("Dale", "Hawerchuk", "Center", 57, 1409, "https://via.placeholder.com/150?text=Dale+Hawerchuk", "Drafted 1st overall in 1981. Amazing junior and pro career.", 1981),
  new Player("Luc", "Robitaille", "Left Wing", 58, 1394, "https://via.placeholder.com/150?text=Luc+Robitaille", "Most goals ever by a left wing. Drafted 171st overall.", 1984),
  new Player("Brendan", "Shanahan", "Left Wing", 55, 1354, "https://via.placeholder.com/150?text=Brendan+Shanahan", "First player with 600 goals and 2000 penalty minutes.", 1987),
  new Player("Teemu", "Selänne", "Right Wing", 53, 1457, "https://via.placeholder.com/150?text=Teemu+Selänne", "Rookie record: 76 goals in a single season.", 1988),
  new Player("Bryan", "Trottier", "Center", 68, 1425, "https://via.placeholder.com/150?text=Bryan+Trottier", "Key part of the Islanders dynasty. 6-time Stanley Cup champ.", 1974),
  new Player("Mike", "Modano", "Center", 53, 1374, "https://via.placeholder.com/150?text=Mike+Modano", "Highest-scoring American-born NHL player.", 1988),
  new Player("Peter", "Stastny", "Center", 67, 1239, "https://via.placeholder.com/150?text=Peter+Stastny", "First European-trained player to score 100+ points in a season.", 1980),
]