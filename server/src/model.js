let peopleDB = [
  {
    "id": 1,
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hairColor": "blond",
    "skinColor": "fair",
    "eyeColor": "blue",
    "birthYear": "19BBY",
    "gender": "male",
    "homeworld": 1,
    "films": [
      1,
      2,
      3,
      6
    ],
    "species": [],
    "vehicles": [
      14,
      30
    ],
    "starships": [
      12,
      22
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
  },
  {
    "id": 2,
    "name": "C-3PO",
    "height": "167",
    "mass": "75",
    "hairColor": "n/a",
    "skinColor": "gold",
    "eyeColor": "yellow",
    "birthYear": "112BBY",
    "gender": "n/a",
    "homeworld": 1,
    "films": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "species": [
      2
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T15:10:51.357000Z",
    "edited": "2014-12-20T21:17:50.309000Z",
  },
  {
    "id": 3,
    "name": "R2-D2",
    "height": "96",
    "mass": "32",
    "hairColor": "n/a",
    "skinColor": "white, blue",
    "eyeColor": "red",
    "birthYear": "33BBY",
    "gender": "n/a",
    "homeworld": 8,
    "films": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "species": [
      2
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T15:11:50.376000Z",
    "edited": "2014-12-20T21:17:50.311000Z"
  },
  {
    "id": 4,
    "name": "Darth Vader",
    "height": "202",
    "mass": "136",
    "hairColor": "none",
    "skinColor": "white",
    "eyeColor": "yellow",
    "birthYear": "41.9BBY",
    "gender": "male",
    "homeworld": 1,
    "films": [
      1,
      2,
      3,
      6
    ],
    "species": [],
    "vehicles": [],
    "starships": [
      13
    ],
    "created": "2014-12-10T15:18:20.704000Z",
    "edited": "2014-12-20T21:17:50.313000Z"
  },
  {
    "id": 5,
    "name": "Leia Organa",
    "height": "150",
    "mass": "49",
    "hairColor": "brown",
    "skinColor": "light",
    "eyeColor": "brown",
    "birthYear": "19BBY",
    "gender": "female",
    "homeworld": 2,
    "films": [
      1,
      2,
      3,
      6
    ],
    "species": [],
    "vehicles": [
      30
    ],
    "starships": [],
    "created": "2014-12-10T15:20:09.791000Z",
    "edited": "2014-12-20T21:17:50.315000Z"
  },
  {
    "id": 6,
    "name": "Owen Lars",
    "height": "178",
    "mass": "120",
    "hairColor": "brown, grey",
    "skinColor": "light",
    "eyeColor": "blue",
    "birthYear": "52BBY",
    "gender": "male",
    "homeworld": 1,
    "films": [
      1,
      5,
      6
    ],
    "species": [],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T15:52:14.024000Z",
    "edited": "2014-12-20T21:17:50.317000Z"
  },
  {
    "id": 7,
    "name": "Beru Whitesun lars",
    "height": "165",
    "mass": "75",
    "hairColor": "brown",
    "skinColor": "light",
    "eyeColor": "blue",
    "birthYear": "47BBY",
    "gender": "female",
    "homeworld": 1,
    "films": [
      1,
      5,
      6
    ],
    "species": [],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T15:53:41.121000Z",
    "edited": "2014-12-20T21:17:50.319000Z"
  },
  {
    "id": 8,
    "name": "R5-D4",
    "height": "97",
    "mass": "32",
    "hairColor": "n/a",
    "skinColor": "white, red",
    "eyeColor": "red",
    "birthYear": "unknown",
    "gender": "n/a",
    "homeworld": 1,
    "films": [
      1
    ],
    "species": [
      2
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T15:57:50.959000Z",
    "edited": "2014-12-20T21:17:50.321000Z"
  },
  {
    "id": 9,
    "name": "Biggs Darklighter",
    "height": "183",
    "mass": "84",
    "hairColor": "black",
    "skinColor": "light",
    "eyeColor": "brown",
    "birthYear": "24BBY",
    "gender": "male",
    "homeworld": 1,
    "films": [
      1
    ],
    "species": [],
    "vehicles": [],
    "starships": [
      12
    ],
    "created": "2014-12-10T15:59:50.509000Z",
    "edited": "2014-12-20T21:17:50.323000Z"
  },
  {
    "id": 10,
    "name": "Obi-Wan Kenobi",
    "height": "182",
    "mass": "77",
    "hairColor": "auburn, white",
    "skinColor": "fair",
    "eyeColor": "blue-gray",
    "birthYear": "57BBY",
    "gender": "male",
    "homeworld": 20,
    "films": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "species": [],
    "vehicles": [
      38
    ],
    "starships": [
      48,
      59,
      64,
      65,
      74
    ],
    "created": "2014-12-10T16:16:29.192000Z",
    "edited": "2014-12-20T21:17:50.325000Z",
  },
  {
    "id": 11,
    "name": "Anakin Skywalker",
    "height": "188",
    "mass": "84",
    "hairColor": "blond",
    "skinColor": "fair",
    "eyeColor": "blue",
    "birthYear": "41.9BBY",
    "gender": "male",
    "homeworld": 1,
    "films": [
      4,
      5,
      6
    ],
    "species": [],
    "vehicles": [
      44,
      46
    ],
    "starships": [
      39,
      59,
      65
    ],
    "created": "2014-12-10T16:20:44.310000Z",
    "edited": "2014-12-20T21:17:50.327000Z",
  },
  {
    "id": 12,
    "name": "Wilhuff Tarkin",
    "height": "180",
    "mass": "unknown",
    "hairColor": "auburn, grey",
    "skinColor": "fair",
    "eyeColor": "blue",
    "birthYear": "64BBY",
    "gender": "male",
    "homeworld": 21,
    "films": [
      1,
      6
    ],
    "species": [],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T16:26:56.138000Z",
    "edited": "2014-12-20T21:17:50.330000Z",
  },
  {
    "id": 13,
    "name": "Chewbacca",
    "height": "228",
    "mass": "112",
    "hairColor": "brown",
    "skinColor": "unknown",
    "eyeColor": "blue",
    "birthYear": "200BBY",
    "gender": "male",
    "homeworld": 14,
    "films": [
      1,
      2,
      3,
      6
    ],
    "species": [
      3
    ],
    "vehicles": [
      19
    ],
    "starships": [
      10,
      22
    ],
    "created": "2014-12-10T16:42:45.066000Z",
    "edited": "2014-12-20T21:17:50.332000Z",
  },
  {
    "id": 14,
    "name": "Han Solo",
    "height": "180",
    "mass": "80",
    "hairColor": "brown",
    "skinColor": "fair",
    "eyeColor": "brown",
    "birthYear": "29BBY",
    "gender": "male",
    "homeworld": 22,
    "films": [
      1,
      2,
      3
    ],
    "species": [],
    "vehicles": [],
    "starships": [
      10,
      22
    ],
    "created": "2014-12-10T16:49:14.582000Z",
    "edited": "2014-12-20T21:17:50.334000Z",
  },
  {
    "id": 15,
    "name": "Greedo",
    "height": "173",
    "mass": "74",
    "hairColor": "n/a",
    "skinColor": "green",
    "eyeColor": "black",
    "birthYear": "44BBY",
    "gender": "male",
    "homeworld": 23,
    "films": [
      1
    ],
    "species": [
      4
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T17:03:30.334000Z",
    "edited": "2014-12-20T21:17:50.336000Z",
  },
  {
    "id": 16,
    "name": "Jabba Desilijic Tiure",
    "height": "175",
    "mass": "1,358",
    "hairColor": "n/a",
    "skinColor": "green-tan, brown",
    "eyeColor": "orange",
    "birthYear": "600BBY",
    "gender": "hermaphrodite",
    "homeworld": 24,
    "films": [
      1,
      3,
      4
    ],
    "species": [
      5
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T17:11:31.638000Z",
    "edited": "2014-12-20T21:17:50.338000Z",
  },
  {
    "id": 17,
    "name": "Wedge Antilles",
    "height": "170",
    "mass": "77",
    "hairColor": "brown",
    "skinColor": "fair",
    "eyeColor": "hazel",
    "birthYear": "21BBY",
    "gender": "male",
    "homeworld": 22,
    "films": [
      1,
      2,
      3
    ],
    "species": [],
    "vehicles": [
      14
    ],
    "starships": [
      12
    ],
    "created": "2014-12-12T11:08:06.469000Z",
    "edited": "2014-12-20T21:17:50.341000Z",
  },
  {
    "id": 18,
    "name": "Jek Tono Porkins",
    "height": "180",
    "mass": "110",
    "hairColor": "brown",
    "skinColor": "fair",
    "eyeColor": "blue",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 26,
    "films": [
      1
    ],
    "species": [],
    "vehicles": [],
    "starships": [
      12
    ],
    "created": "2014-12-12T11:16:56.569000Z",
    "edited": "2014-12-20T21:17:50.343000Z",
  },
  {
    "id": 19,
    "name": "Yoda",
    "height": "66",
    "mass": "17",
    "hairColor": "white",
    "skinColor": "green",
    "eyeColor": "brown",
    "birthYear": "896BBY",
    "gender": "male",
    "homeworld": 28,
    "films": [
      2,
      3,
      4,
      5,
      6
    ],
    "species": [
      6
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-15T12:26:01.042000Z",
    "edited": "2014-12-20T21:17:50.345000Z",
  },
  {
    "id": 20,
    "name": "Palpatine",
    "height": "170",
    "mass": "75",
    "hairColor": "grey",
    "skinColor": "pale",
    "eyeColor": "yellow",
    "birthYear": "82BBY",
    "gender": "male",
    "homeworld": 8,
    "films": [
      2,
      3,
      4,
      5,
      6
    ],
    "species": [],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-15T12:48:05.971000Z",
    "edited": "2014-12-20T21:17:50.347000Z",
  },
  {
    "id": 21,
    "name": "Boba Fett",
    "height": "183",
    "mass": "78.2",
    "hairColor": "black",
    "skinColor": "fair",
    "eyeColor": "brown",
    "birthYear": "31.5BBY",
    "gender": "male",
    "homeworld": 10,
    "films": [
      2,
      3,
      5
    ],
    "species": [],
    "vehicles": [],
    "starships": [
      21
    ],
    "created": "2014-12-15T12:49:32.457000Z",
    "edited": "2014-12-20T21:17:50.349000Z",
  },
  {
    "id": 22,
    "name": "IG-88",
    "height": "200",
    "mass": "140",
    "hairColor": "none",
    "skinColor": "metal",
    "eyeColor": "red",
    "birthYear": "15BBY",
    "gender": "none",
    "homeworld": 28,
    "films": [
      2
    ],
    "species": [
      2
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-15T12:51:10.076000Z",
    "edited": "2014-12-20T21:17:50.351000Z",
  },
  {
    "id": 23,
    "name": "Bossk",
    "height": "190",
    "mass": "113",
    "hairColor": "none",
    "skinColor": "green",
    "eyeColor": "red",
    "birthYear": "53BBY",
    "gender": "male",
    "homeworld": 29,
    "films": [
      2
    ],
    "species": [
      7
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-15T12:53:49.297000Z",
    "edited": "2014-12-20T21:17:50.355000Z",
  },
  {
    "id": 24,
    "name": "Lando Calrissian",
    "height": "177",
    "mass": "79",
    "hairColor": "black",
    "skinColor": "dark",
    "eyeColor": "brown",
    "birthYear": "31BBY",
    "gender": "male",
    "homeworld": 30,
    "films": [
      2,
      3
    ],
    "species": [],
    "vehicles": [],
    "starships": [
      10
    ],
    "created": "2014-12-15T12:56:32.683000Z",
    "edited": "2014-12-20T21:17:50.357000Z",
  },
  {
    "id": 25,
    "name": "Lobot",
    "height": "175",
    "mass": "79",
    "hairColor": "none",
    "skinColor": "light",
    "eyeColor": "blue",
    "birthYear": "37BBY",
    "gender": "male",
    "homeworld": 6,
    "films": [
      2
    ],
    "species": [],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-15T13:01:57.178000Z",
    "edited": "2014-12-20T21:17:50.359000Z",
  },
  {
    "id": 26,
    "name": "Ackbar",
    "height": "180",
    "mass": "83",
    "hairColor": "none",
    "skinColor": "brown mottle",
    "eyeColor": "orange",
    "birthYear": "41BBY",
    "gender": "male",
    "homeworld": 31,
    "films": [
      3
    ],
    "species": [
      8
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-18T11:07:50.584000Z",
    "edited": "2014-12-20T21:17:50.362000Z",
  },
  {
    "id": 27,
    "name": "Mon Mothma",
    "height": "150",
    "mass": "unknown",
    "hairColor": "auburn",
    "skinColor": "fair",
    "eyeColor": "blue",
    "birthYear": "48BBY",
    "gender": "female",
    "homeworld": 32,
    "films": [
      3
    ],
    "species": [],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-18T11:12:38.895000Z",
    "edited": "2014-12-20T21:17:50.364000Z",
  },
  {
    "id": 28,
    "name": "Arvel Crynyd",
    "height": "unknown",
    "mass": "unknown",
    "hairColor": "brown",
    "skinColor": "fair",
    "eyeColor": "brown",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 28,
    "films": [
      3
    ],
    "species": [],
    "vehicles": [],
    "starships": [
      28
    ],
    "created": "2014-12-18T11:16:33.020000Z",
    "edited": "2014-12-20T21:17:50.367000Z",
  },
  {
    "id": 29,
    "name": "Wicket Systri Warrick",
    "height": "88",
    "mass": "20",
    "hairColor": "brown",
    "skinColor": "brown",
    "eyeColor": "brown",
    "birthYear": "8BBY",
    "gender": "male",
    "homeworld": 7,
    "films": [
      3
    ],
    "species": [
      9
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-18T11:21:58.954000Z",
    "edited": "2014-12-20T21:17:50.369000Z",
  },
  {
    "id": 30,
    "name": "Nien Nunb",
    "height": "160",
    "mass": "68",
    "hairColor": "none",
    "skinColor": "grey",
    "eyeColor": "black",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 33,
    "films": [
      3
    ],
    "species": [
      10
    ],
    "vehicles": [],
    "starships": [
      10
    ],
    "created": "2014-12-18T11:26:18.541000Z",
    "edited": "2014-12-20T21:17:50.371000Z",
  },
  {
    "id": 31,
    "name": "Qui-Gon Jinn",
    "height": "193",
    "mass": "89",
    "hairColor": "brown",
    "skinColor": "fair",
    "eyeColor": "blue",
    "birthYear": "92BBY",
    "gender": "male",
    "homeworld": 28,
    "films": [
      4
    ],
    "species": [],
    "vehicles": [
      38
    ],
    "starships": [],
    "created": "2014-12-19T16:54:53.618000Z",
    "edited": "2014-12-20T21:17:50.375000Z",
  },
  {
    "id": 32,
    "name": "Nute Gunray",
    "height": "191",
    "mass": "90",
    "hairColor": "none",
    "skinColor": "mottled green",
    "eyeColor": "red",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 18,
    "films": [
      4,
      5,
      6
    ],
    "species": [
      11
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-19T17:05:57.357000Z",
    "edited": "2014-12-20T21:17:50.377000Z",
  },
  {
    "id": 33,
    "name": "Finis Valorum",
    "height": "170",
    "mass": "unknown",
    "hairColor": "blond",
    "skinColor": "fair",
    "eyeColor": "blue",
    "birthYear": "91BBY",
    "gender": "male",
    "homeworld": 9,
    "films": [
      4
    ],
    "species": [],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-19T17:21:45.915000Z",
    "edited": "2014-12-20T21:17:50.379000Z",
  },
  {
    "id": 34,
    "name": "Padmé Amidala",
    "height": "185",
    "mass": "45",
    "hairColor": "brown",
    "skinColor": "light",
    "eyeColor": "brown",
    "birthYear": "46BBY",
    "gender": "female",
    "homeworld": 8,
    "films": [
      4,
      5,
      6
    ],
    "species": [],
    "vehicles": [],
    "starships": [
      39,
      49,
      64
    ],
    "created": "2014-12-19T17:28:26.926000Z",
    "edited": "2014-12-20T21:17:50.381000Z",
  },
  {
    "id": 35,
    "name": "Jar Jar Binks",
    "height": "196",
    "mass": "66",
    "hairColor": "none",
    "skinColor": "orange",
    "eyeColor": "orange",
    "birthYear": "52BBY",
    "gender": "male",
    "homeworld": 8,
    "films": [
      4,
      5
    ],
    "species": [
      12
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-19T17:29:32.489000Z",
    "edited": "2014-12-20T21:17:50.383000Z",
  },
  {
    "id": 36,
    "name": "Roos Tarpals",
    "height": "224",
    "mass": "82",
    "hairColor": "none",
    "skinColor": "grey",
    "eyeColor": "orange",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 8,
    "films": [
      4
    ],
    "species": [
      12
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-19T17:32:56.741000Z",
    "edited": "2014-12-20T21:17:50.385000Z",
  },
  {
    "id": 37,
    "name": "Rugor Nass",
    "height": "206",
    "mass": "unknown",
    "hairColor": "none",
    "skinColor": "green",
    "eyeColor": "orange",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 8,
    "films": [
      4
    ],
    "species": [
      12
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-19T17:33:38.909000Z",
    "edited": "2014-12-20T21:17:50.388000Z",
  },
  {
    "id": 38,
    "name": "Ric Olié",
    "height": "183",
    "mass": "unknown",
    "hairColor": "brown",
    "skinColor": "fair",
    "eyeColor": "blue",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 8,
    "films": [
      4
    ],
    "species": [],
    "vehicles": [],
    "starships": [
      40
    ],
    "created": "2014-12-19T17:45:01.522000Z",
    "edited": "2014-12-20T21:17:50.392000Z",
  },
  {
    "id": 39,
    "name": "Watto",
    "height": "137",
    "mass": "unknown",
    "hairColor": "black",
    "skinColor": "blue, grey",
    "eyeColor": "yellow",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 34,
    "films": [
      4,
      5
    ],
    "species": [
      13
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-19T17:48:54.647000Z",
    "edited": "2014-12-20T21:17:50.395000Z",
  },
  {
    "id": 40,
    "name": "Sebulba",
    "height": "112",
    "mass": "40",
    "hairColor": "none",
    "skinColor": "grey, red",
    "eyeColor": "orange",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 35,
    "films": [
      4
    ],
    "species": [
      14
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-19T17:53:02.586000Z",
    "edited": "2014-12-20T21:17:50.397000Z",
  },
  {
    "id": 41,
    "name": "Quarsh Panaka",
    "height": "183",
    "mass": "unknown",
    "hairColor": "black",
    "skinColor": "dark",
    "eyeColor": "brown",
    "birthYear": "62BBY",
    "gender": "male",
    "homeworld": 8,
    "films": [
      4
    ],
    "species": [],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-19T17:55:43.348000Z",
    "edited": "2014-12-20T21:17:50.399000Z",
  },
  {
    "id": 42,
    "name": "Shmi Skywalker",
    "height": "163",
    "mass": "unknown",
    "hairColor": "black",
    "skinColor": "fair",
    "eyeColor": "brown",
    "birthYear": "72BBY",
    "gender": "female",
    "homeworld": 1,
    "films": [
      4,
      5
    ],
    "species": [],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-19T17:57:41.191000Z",
    "edited": "2014-12-20T21:17:50.401000Z",
  },
  {
    "id": 43,
    "name": "Darth Maul",
    "height": "175",
    "mass": "80",
    "hairColor": "none",
    "skinColor": "red",
    "eyeColor": "yellow",
    "birthYear": "54BBY",
    "gender": "male",
    "homeworld": 36,
    "films": [
      4
    ],
    "species": [
      22
    ],
    "vehicles": [
      42
    ],
    "starships": [
      41
    ],
    "created": "2014-12-19T18:00:41.929000Z",
    "edited": "2014-12-20T21:17:50.403000Z",
  },
  {
    "id": 44,
    "name": "Bib Fortuna",
    "height": "180",
    "mass": "unknown",
    "hairColor": "none",
    "skinColor": "pale",
    "eyeColor": "pink",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 37,
    "films": [
      3
    ],
    "species": [
      15
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T09:47:02.512000Z",
    "edited": "2014-12-20T21:17:50.407000Z",
  },
  {
    "id": 45,
    "name": "Ayla Secura",
    "height": "178",
    "mass": "55",
    "hairColor": "none",
    "skinColor": "blue",
    "eyeColor": "hazel",
    "birthYear": "48BBY",
    "gender": "female",
    "homeworld": 37,
    "films": [
      4,
      5,
      6
    ],
    "species": [
      15
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T09:48:01.172000Z",
    "edited": "2014-12-20T21:17:50.409000Z",
  },
  {
    "id": 46,
    "name": "Ratts Tyerel",
    "height": "79",
    "mass": "15",
    "hairColor": "none",
    "skinColor": "grey, blue",
    "eyeColor": "unknown",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 38,
    "films": [
      4
    ],
    "species": [
      16
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T09:53:15.086000Z",
    "edited": "2014-12-20T21:17:50.410000Z",
  },
  {
    "id": 47,
    "name": "Dud Bolt",
    "height": "94",
    "mass": "45",
    "hairColor": "none",
    "skinColor": "blue, grey",
    "eyeColor": "yellow",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 39,
    "films": [
      4
    ],
    "species": [
      17
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T09:57:31.858000Z",
    "edited": "2014-12-20T21:17:50.414000Z",
  },
  {
    "id": 48,
    "name": "Gasgano",
    "height": "122",
    "mass": "unknown",
    "hairColor": "none",
    "skinColor": "white, blue",
    "eyeColor": "black",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 40,
    "films": [
      4
    ],
    "species": [
      18
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T10:02:12.223000Z",
    "edited": "2014-12-20T21:17:50.416000Z",
  },
  {
    "id": 49,
    "name": "Ben Quadinaros",
    "height": "163",
    "mass": "65",
    "hairColor": "none",
    "skinColor": "grey, green, yellow",
    "eyeColor": "orange",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 41,
    "films": [
      4
    ],
    "species": [
      19
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T10:08:33.777000Z",
    "edited": "2014-12-20T21:17:50.417000Z",
  },
  {
    "id": 50,
    "name": "Mace Windu",
    "height": "188",
    "mass": "84",
    "hairColor": "none",
    "skinColor": "dark",
    "eyeColor": "brown",
    "birthYear": "72BBY",
    "gender": "male",
    "homeworld": 42,
    "films": [
      4,
      5,
      6
    ],
    "species": [],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T10:12:30.846000Z",
    "edited": "2014-12-20T21:17:50.420000Z",
  },
  {
    "id": 51,
    "name": "Ki-Adi-Mundi",
    "height": "198",
    "mass": "82",
    "hairColor": "white",
    "skinColor": "pale",
    "eyeColor": "yellow",
    "birthYear": "92BBY",
    "gender": "male",
    "homeworld": 43,
    "films": [
      4,
      5,
      6
    ],
    "species": [
      20
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T10:15:32.293000Z",
    "edited": "2014-12-20T21:17:50.422000Z",
  },
  {
    "id": 52,
    "name": "Kit Fisto",
    "height": "196",
    "mass": "87",
    "hairColor": "none",
    "skinColor": "green",
    "eyeColor": "black",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 44,
    "films": [
      4,
      5,
      6
    ],
    "species": [
      21
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T10:18:57.202000Z",
    "edited": "2014-12-20T21:17:50.424000Z",
  },
  {
    "id": 53,
    "name": "Eeth Koth",
    "height": "171",
    "mass": "unknown",
    "hairColor": "black",
    "skinColor": "brown",
    "eyeColor": "brown",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 45,
    "films": [
      4,
      6
    ],
    "species": [
      22
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T10:26:47.902000Z",
    "edited": "2014-12-20T21:17:50.427000Z",
  },
  {
    "id": 54,
    "name": "Adi Gallia",
    "height": "184",
    "mass": "50",
    "hairColor": "none",
    "skinColor": "dark",
    "eyeColor": "blue",
    "birthYear": "unknown",
    "gender": "female",
    "homeworld": 9,
    "films": [
      4,
      6
    ],
    "species": [
      23
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T10:29:11.661000Z",
    "edited": "2014-12-20T21:17:50.432000Z",
  },
  {
    "id": 55,
    "name": "Saesee Tiin",
    "height": "188",
    "mass": "unknown",
    "hairColor": "none",
    "skinColor": "pale",
    "eyeColor": "orange",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 47,
    "films": [
      4,
      6
    ],
    "species": [
      24
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T10:32:11.669000Z",
    "edited": "2014-12-20T21:17:50.434000Z",
  },
  {
    "id": 56,
    "name": "Yarael Poof",
    "height": "264",
    "mass": "unknown",
    "hairColor": "none",
    "skinColor": "white",
    "eyeColor": "yellow",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 48,
    "films": [
      4
    ],
    "species": [
      25
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T10:34:48.725000Z",
    "edited": "2014-12-20T21:17:50.437000Z",
  },
  {
    "id": 57,
    "name": "Plo Koon",
    "height": "188",
    "mass": "80",
    "hairColor": "none",
    "skinColor": "orange",
    "eyeColor": "black",
    "birthYear": "22BBY",
    "gender": "male",
    "homeworld": 49,
    "films": [
      4,
      5,
      6
    ],
    "species": [
      26
    ],
    "vehicles": [],
    "starships": [
      48
    ],
    "created": "2014-12-20T10:49:19.859000Z",
    "edited": "2014-12-20T21:17:50.439000Z",
  },
  {
    "id": 58,
    "name": "Mas Amedda",
    "height": "196",
    "mass": "unknown",
    "hairColor": "none",
    "skinColor": "blue",
    "eyeColor": "blue",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 50,
    "films": [
      4,
      5
    ],
    "species": [
      27
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T10:53:26.457000Z",
    "edited": "2014-12-20T21:17:50.442000Z",
  },
  {
    "id": 59,
    "name": "Gregar Typho",
    "height": "185",
    "mass": "85",
    "hairColor": "black",
    "skinColor": "dark",
    "eyeColor": "brown",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 8,
    "films": [
      5
    ],
    "species": [],
    "vehicles": [],
    "starships": [
      39
    ],
    "created": "2014-12-20T11:10:10.381000Z",
    "edited": "2014-12-20T21:17:50.445000Z",
  },
  {
    "id": 60,
    "name": "Cordé",
    "height": "157",
    "mass": "unknown",
    "hairColor": "brown",
    "skinColor": "light",
    "eyeColor": "brown",
    "birthYear": "unknown",
    "gender": "female",
    "homeworld": 8,
    "films": [
      5
    ],
    "species": [],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T11:11:39.630000Z",
    "edited": "2014-12-20T21:17:50.449000Z",
  },
  {
    "id": 61,
    "name": "Cliegg Lars",
    "height": "183",
    "mass": "unknown",
    "hairColor": "brown",
    "skinColor": "fair",
    "eyeColor": "blue",
    "birthYear": "82BBY",
    "gender": "male",
    "homeworld": 1,
    "films": [
      5
    ],
    "species": [],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T15:59:03.958000Z",
    "edited": "2014-12-20T21:17:50.451000Z",
  },
  {
    "id": 62,
    "name": "Poggle the Lesser",
    "height": "183",
    "mass": "80",
    "hairColor": "none",
    "skinColor": "green",
    "eyeColor": "yellow",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 11,
    "films": [
      5,
      6
    ],
    "species": [
      28
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T16:40:43.977000Z",
    "edited": "2014-12-20T21:17:50.453000Z",
  },
  {
    "id": 63,
    "name": "Luminara Unduli",
    "height": "170",
    "mass": "56.2",
    "hairColor": "black",
    "skinColor": "yellow",
    "eyeColor": "blue",
    "birthYear": "58BBY",
    "gender": "female",
    "homeworld": 51,
    "films": [
      5,
      6
    ],
    "species": [
      29
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T16:45:53.668000Z",
    "edited": "2014-12-20T21:17:50.455000Z",
  },
  {
    "id": 64,
    "name": "Barriss Offee",
    "height": "166",
    "mass": "50",
    "hairColor": "black",
    "skinColor": "yellow",
    "eyeColor": "blue",
    "birthYear": "40BBY",
    "gender": "female",
    "homeworld": 51,
    "films": [
      5
    ],
    "species": [
      29
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T16:46:40.440000Z",
    "edited": "2014-12-20T21:17:50.457000Z",
  },
  {
    "id": 65,
    "name": "Dormé",
    "height": "165",
    "mass": "unknown",
    "hairColor": "brown",
    "skinColor": "light",
    "eyeColor": "brown",
    "birthYear": "unknown",
    "gender": "female",
    "homeworld": 8,
    "films": [
      5
    ],
    "species": [
      1
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T16:49:14.640000Z",
    "edited": "2014-12-20T21:17:50.460000Z",
  },
  {
    "id": 66,
    "name": "Dooku",
    "height": "193",
    "mass": "80",
    "hairColor": "white",
    "skinColor": "fair",
    "eyeColor": "brown",
    "birthYear": "102BBY",
    "gender": "male",
    "homeworld": 52,
    "films": [
      5,
      6
    ],
    "species": [
      1
    ],
    "vehicles": [
      55
    ],
    "starships": [],
    "created": "2014-12-20T16:52:14.726000Z",
    "edited": "2014-12-20T21:17:50.462000Z",
  },
  {
    "id": 67,
    "name": "Bail Prestor Organa",
    "height": "191",
    "mass": "unknown",
    "hairColor": "black",
    "skinColor": "tan",
    "eyeColor": "brown",
    "birthYear": "67BBY",
    "gender": "male",
    "homeworld": 2,
    "films": [
      5,
      6
    ],
    "species": [
      1
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T16:53:08.575000Z",
    "edited": "2014-12-20T21:17:50.463000Z",
  },
  {
    "id": 68,
    "name": "Jango Fett",
    "height": "183",
    "mass": "79",
    "hairColor": "black",
    "skinColor": "tan",
    "eyeColor": "brown",
    "birthYear": "66BBY",
    "gender": "male",
    "homeworld": 53,
    "films": [
      5
    ],
    "species": [],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T16:54:41.620000Z",
    "edited": "2014-12-20T21:17:50.465000Z",
  },
  {
    "id": 69,
    "name": "Zam Wesell",
    "height": "168",
    "mass": "55",
    "hairColor": "blonde",
    "skinColor": "fair, green, yellow",
    "eyeColor": "yellow",
    "birthYear": "unknown",
    "gender": "female",
    "homeworld": 54,
    "films": [
      5
    ],
    "species": [
      30
    ],
    "vehicles": [
      45
    ],
    "starships": [],
    "created": "2014-12-20T16:57:44.471000Z",
    "edited": "2014-12-20T21:17:50.468000Z",
  },
  {
    "id": 70,
    "name": "Dexter Jettster",
    "height": "198",
    "mass": "102",
    "hairColor": "none",
    "skinColor": "brown",
    "eyeColor": "yellow",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 55,
    "films": [
      5
    ],
    "species": [
      31
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T17:28:27.248000Z",
    "edited": "2014-12-20T21:17:50.470000Z",
  },
  {
    "id": 71,
    "name": "Lama Su",
    "height": "229",
    "mass": "88",
    "hairColor": "none",
    "skinColor": "grey",
    "eyeColor": "black",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 10,
    "films": [
      5
    ],
    "species": [
      32
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T17:30:50.416000Z",
    "edited": "2014-12-20T21:17:50.473000Z",
  },
  {
    "id": 72,
    "name": "Taun We",
    "height": "213",
    "mass": "unknown",
    "hairColor": "none",
    "skinColor": "grey",
    "eyeColor": "black",
    "birthYear": "unknown",
    "gender": "female",
    "homeworld": 10,
    "films": [
      5
    ],
    "species": [
      32
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T17:31:21.195000Z",
    "edited": "2014-12-20T21:17:50.474000Z",
  },
  {
    "id": 73,
    "name": "Jocasta Nu",
    "height": "167",
    "mass": "unknown",
    "hairColor": "white",
    "skinColor": "fair",
    "eyeColor": "blue",
    "birthYear": "unknown",
    "gender": "female",
    "homeworld": 9,
    "films": [
      5
    ],
    "species": [
      1
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T17:32:51.996000Z",
    "edited": "2014-12-20T21:17:50.476000Z",
  },
  {
    "id": 74,
    "name": "R4-P17",
    "height": "96",
    "mass": "unknown",
    "hairColor": "none",
    "skinColor": "silver, red",
    "eyeColor": "red, blue",
    "birthYear": "unknown",
    "gender": "female",
    "homeworld": 28,
    "films": [
      5,
      6
    ],
    "species": [],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T17:43:36.409000Z",
    "edited": "2014-12-20T21:17:50.478000Z",
  },
  {
    "id": 75,
    "name": "Wat Tambor",
    "height": "193",
    "mass": "48",
    "hairColor": "none",
    "skinColor": "green, grey",
    "eyeColor": "unknown",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 56,
    "films": [
      5
    ],
    "species": [
      33
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T17:53:52.607000Z",
    "edited": "2014-12-20T21:17:50.481000Z",
  },
  {
    "id": 76,
    "name": "San Hill",
    "height": "191",
    "mass": "unknown",
    "hairColor": "none",
    "skinColor": "grey",
    "eyeColor": "gold",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 57,
    "films": [
      5
    ],
    "species": [
      34
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T17:58:17.049000Z",
    "edited": "2014-12-20T21:17:50.484000Z",
  },
  {
    "id": 77,
    "name": "Shaak Ti",
    "height": "178",
    "mass": "57",
    "hairColor": "none",
    "skinColor": "red, blue, white",
    "eyeColor": "black",
    "birthYear": "unknown",
    "gender": "female",
    "homeworld": 58,
    "films": [
      5,
      6
    ],
    "species": [
      35
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T18:44:01.103000Z",
    "edited": "2014-12-20T21:17:50.486000Z",
  },
  {
    "id": 78,
    "name": "Grievous",
    "height": "216",
    "mass": "159",
    "hairColor": "none",
    "skinColor": "brown, white",
    "eyeColor": "green, yellow",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 59,
    "films": [
      6
    ],
    "species": [
      36
    ],
    "vehicles": [
      60
    ],
    "starships": [
      74
    ],
    "created": "2014-12-20T19:43:53.348000Z",
    "edited": "2014-12-20T21:17:50.488000Z",
  },
  {
    "id": 79,
    "name": "Tarfful",
    "height": "234",
    "mass": "136",
    "hairColor": "brown",
    "skinColor": "brown",
    "eyeColor": "blue",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 14,
    "films": [
      6
    ],
    "species": [
      3
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T19:46:34.209000Z",
    "edited": "2014-12-20T21:17:50.491000Z",
  },
  {
    "id": 80,
    "name": "Raymus Antilles",
    "height": "188",
    "mass": "79",
    "hairColor": "brown",
    "skinColor": "light",
    "eyeColor": "brown",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 2,
    "films": [
      1,
      6
    ],
    "species": [],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T19:49:35.583000Z",
    "edited": "2014-12-20T21:17:50.493000Z",
  },
  {
    "id": 81,
    "name": "Sly Moore",
    "height": "178",
    "mass": "48",
    "hairColor": "none",
    "skinColor": "pale",
    "eyeColor": "white",
    "birthYear": "unknown",
    "gender": "female",
    "homeworld": 60,
    "films": [
      5,
      6
    ],
    "species": [],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T20:18:37.619000Z",
    "edited": "2014-12-20T21:17:50.496000Z",
  },
  {
    "id": 82,
    "name": "Tion Medon",
    "height": "206",
    "mass": "80",
    "hairColor": "none",
    "skinColor": "grey",
    "eyeColor": "black",
    "birthYear": "unknown",
    "gender": "male",
    "homeworld": 12,
    "films": [
      6
    ],
    "species": [
      37
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T20:35:04.260000Z",
    "edited": "2014-12-20T21:17:50.498000Z",
  },
];

export const getPeople = () => peopleDB;

export const addPerson = (person) => {
  peopleDB.push({
    id: peopleDB[peopleDB.length - 1].id + 1,
    ...person,
  });

  return peopleDB;
}

export const removePerson = (id) => {
  const removingPersonIndex = peopleDB.findIndex((person) => person.id === +id);

  peopleDB = [
    ...peopleDB.slice(0, removingPersonIndex),
    ...peopleDB.slice(removingPersonIndex + 1),
  ];

  return peopleDB;
}

export const updatePerson = (id, person) => {
  const updatingPersonIndex = peopleDB.findIndex((existingPerson) => existingPerson.id === +id);

  peopleDB = [
    ...peopleDB.slice(0, updatingPersonIndex),
    {
      id,
      ...person,
    },
    ...peopleDB.slice(updatingPersonIndex + 1),
  ];

  return peopleDB;
}
