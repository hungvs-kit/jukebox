const mockDB = {
  "A77027": {
    "title": "Sample Song 1",
    "artist": "ONE OK ROCK",
    "genre": "J-Pop",
    "date": "2022-10-31",
    "code": "A77027",
    "jukebox": "Box Osaka"
  },
  "B18725": {
    "title": "Sample Song 2",
    "artist": "宇多田ヒカル",
    "genre": "Jazz",
    "date": "2020-12-07",
    "code": "B18725",
    "jukebox": "Box Kyoto"
  },
  "C38227": {
    "title": "Sample Song 3",
    "artist": "米津玄師",
    "genre": "Rock",
    "date": "2018-04-27",
    "code": "C38227",
    "jukebox": "Box Osaka"
  },
  "D28024": {
    "title": "Sample Song 4",
    "artist": "King Gnu",
    "genre": "Ballad",
    "date": "2019-04-30",
    "code": "D28024",
    "jukebox": "Box Fukuoka"
  },
  "E74656": {
    "title": "Sample Song 5",
    "artist": "Aimer",
    "genre": "Rock",
    "date": "2020-05-27",
    "code": "E74656",
    "jukebox": "Box Nagoya"
  },
  "F40778": {
    "title": "Sample Song 6",
    "artist": "King Gnu",
    "genre": "Ballad",
    "date": "2018-09-13",
    "code": "F40778",
    "jukebox": "Box Tokyo"
  },
  "G11075": {
    "title": "Sample Song 7",
    "artist": "BUMP OF CHICKEN",
    "genre": "Rock",
    "date": "2022-03-15",
    "code": "G11075",
    "jukebox": "Box Tokyo"
  },
  "H98896": {
    "title": "Sample Song 8",
    "artist": "King Gnu",
    "genre": "Jazz",
    "date": "2022-01-01",
    "code": "H98896",
    "jukebox": "Box Fukuoka"
  },
  "I89408": {
    "title": "Sample Song 9",
    "artist": "LiSA",
    "genre": "Pop",
    "date": "2020-01-26",
    "code": "I89408",
    "jukebox": "Box Tokyo"
  },
  "J58961": {
    "title": "Sample Song 10",
    "artist": "米津玄師",
    "genre": "Anime",
    "date": "2021-08-22",
    "code": "J58961",
    "jukebox": "Box Kyoto"
  },
  "K78956": {
    "title": "Sample Song 11",
    "artist": "LiSA",
    "genre": "J-Pop",
    "date": "2015-05-22",
    "code": "K78956",
    "jukebox": "Box Osaka"
  },
  "L64599": {
    "title": "Sample Song 12",
    "artist": "YOASOBI",
    "genre": "Jazz",
    "date": "2019-06-15",
    "code": "L64599",
    "jukebox": "Box Fukuoka"
  },
  "M40982": {
    "title": "Sample Song 13",
    "artist": "Official髭男dism",
    "genre": "Folk",
    "date": "2021-11-28",
    "code": "M40982",
    "jukebox": "Box Fukuoka"
  },
  "N27635": {
    "title": "Sample Song 14",
    "artist": "RADWIMPS",
    "genre": "Pop",
    "date": "2017-11-06",
    "code": "N27635",
    "jukebox": "Box Fukuoka"
  },
  "O90716": {
    "title": "Sample Song 15",
    "artist": "宇多田ヒカル",
    "genre": "Ballad",
    "date": "2022-08-23",
    "code": "O90716",
    "jukebox": "Box Fukuoka"
  },
  "P61778": {
    "title": "Sample Song 16",
    "artist": "YOASOBI",
    "genre": "Electronic",
    "date": "2015-06-21",
    "code": "P61778",
    "jukebox": "Box Fukuoka"
  },
  "Q26812": {
    "title": "Sample Song 17",
    "artist": "King Gnu",
    "genre": "Ballad",
    "date": "2016-02-19",
    "code": "Q26812",
    "jukebox": "Box Nagoya"
  },
  "R53435": {
    "title": "Sample Song 18",
    "artist": "BUMP OF CHICKEN",
    "genre": "Ballad",
    "date": "2021-11-30",
    "code": "R53435",
    "jukebox": "Box Fukuoka"
  },
  "S48879": {
    "title": "Sample Song 19",
    "artist": "宇多田ヒカル",
    "genre": "Ballad",
    "date": "2019-10-31",
    "code": "S48879",
    "jukebox": "Box Fukuoka"
  },
  "T22851": {
    "title": "Sample Song 20",
    "artist": "YOASOBI",
    "genre": "Anime",
    "date": "2017-08-26",
    "code": "T22851",
    "jukebox": "Box Nagoya"
  },
  "U99732": {
    "title": "Sample Song 21",
    "artist": "ONE OK ROCK",
    "genre": "Ballad",
    "date": "2015-10-04",
    "code": "U99732",
    "jukebox": "Box Tokyo"
  },
  "V49331": {
    "title": "Sample Song 22",
    "artist": "YOASOBI",
    "genre": "Ballad",
    "date": "2022-01-31",
    "code": "V49331",
    "jukebox": "Box Tokyo"
  },
  "W51625": {
    "title": "Sample Song 23",
    "artist": "Aimer",
    "genre": "Electronic",
    "date": "2022-07-15",
    "code": "W51625",
    "jukebox": "Box Nagoya"
  },
  "X81041": {
    "title": "Sample Song 24",
    "artist": "King Gnu",
    "genre": "J-Pop",
    "date": "2018-07-03",
    "code": "X81041",
    "jukebox": "Box Nagoya"
  },
  "Y57313": {
    "title": "Sample Song 25",
    "artist": "BUMP OF CHICKEN",
    "genre": "Pop",
    "date": "2016-04-14",
    "code": "Y57313",
    "jukebox": "Box Osaka"
  },
  "Z31525": {
    "title": "Sample Song 26",
    "artist": "米津玄師",
    "genre": "J-Pop",
    "date": "2020-01-03",
    "code": "Z31525",
    "jukebox": "Box Nagoya"
  },
  "A50119": {
    "title": "Sample Song 27",
    "artist": "ONE OK ROCK",
    "genre": "Pop",
    "date": "2016-03-22",
    "code": "A50119",
    "jukebox": "Box Kyoto"
  },
  "B44861": {
    "title": "Sample Song 28",
    "artist": "LiSA",
    "genre": "Rock",
    "date": "2019-07-25",
    "code": "B44861",
    "jukebox": "Box Tokyo"
  },
  "C33482": {
    "title": "Sample Song 29",
    "artist": "YOASOBI",
    "genre": "Jazz",
    "date": "2017-09-25",
    "code": "C33482",
    "jukebox": "Box Osaka"
  },
  "D96239": {
    "title": "Sample Song 30",
    "artist": "米津玄師",
    "genre": "Pop",
    "date": "2016-03-03",
    "code": "D96239",
    "jukebox": "Box Tokyo"
  },
  "E47265": {
    "title": "Sample Song 31",
    "artist": "YOASOBI",
    "genre": "Pop",
    "date": "2019-11-11",
    "code": "E47265",
    "jukebox": "Box Tokyo"
  },
  "F34231": {
    "title": "Sample Song 32",
    "artist": "ONE OK ROCK",
    "genre": "Rock",
    "date": "2017-10-23",
    "code": "F34231",
    "jukebox": "Box Tokyo"
  },
  "G97259": {
    "title": "Sample Song 33",
    "artist": "Official髭男dism",
    "genre": "Anime",
    "date": "2015-04-16",
    "code": "G97259",
    "jukebox": "Box Tokyo"
  },
  "H82485": {
    "title": "Sample Song 34",
    "artist": "BUMP OF CHICKEN",
    "genre": "Jazz",
    "date": "2017-12-19",
    "code": "H82485",
    "jukebox": "Box Osaka"
  },
  "I88160": {
    "title": "Sample Song 35",
    "artist": "YOASOBI",
    "genre": "Electronic",
    "date": "2021-06-24",
    "code": "I88160",
    "jukebox": "Box Nagoya"
  },
  "J88328": {
    "title": "Sample Song 36",
    "artist": "LiSA",
    "genre": "J-Pop",
    "date": "2017-12-10",
    "code": "J88328",
    "jukebox": "Box Kyoto"
  },
  "K84625": {
    "title": "Sample Song 37",
    "artist": "宇多田ヒカル",
    "genre": "Pop",
    "date": "2015-01-05",
    "code": "K84625",
    "jukebox": "Box Osaka"
  },
  "L83974": {
    "title": "Sample Song 38",
    "artist": "宇多田ヒカル",
    "genre": "Anime",
    "date": "2019-07-18",
    "code": "L83974",
    "jukebox": "Box Nagoya"
  },
  "M21090": {
    "title": "Sample Song 39",
    "artist": "米津玄師",
    "genre": "Jazz",
    "date": "2020-10-08",
    "code": "M21090",
    "jukebox": "Box Osaka"
  },
  "N29235": {
    "title": "Sample Song 40",
    "artist": "YOASOBI",
    "genre": "Jazz",
    "date": "2018-11-24",
    "code": "N29235",
    "jukebox": "Box Fukuoka"
  },
  "O26089": {
    "title": "Sample Song 41",
    "artist": "Aimer",
    "genre": "Folk",
    "date": "2017-01-17",
    "code": "O26089",
    "jukebox": "Box Tokyo"
  },
  "P74924": {
    "title": "Sample Song 42",
    "artist": "BUMP OF CHICKEN",
    "genre": "Jazz",
    "date": "2017-05-13",
    "code": "P74924",
    "jukebox": "Box Tokyo"
  },
  "Q60761": {
    "title": "Sample Song 43",
    "artist": "Official髭男dism",
    "genre": "Folk",
    "date": "2019-08-05",
    "code": "Q60761",
    "jukebox": "Box Osaka"
  },
  "R78705": {
    "title": "Sample Song 44",
    "artist": "BUMP OF CHICKEN",
    "genre": "Jazz",
    "date": "2021-11-13",
    "code": "R78705",
    "jukebox": "Box Nagoya"
  },
  "S40847": {
    "title": "Sample Song 45",
    "artist": "LiSA",
    "genre": "Pop",
    "date": "2017-08-24",
    "code": "S40847",
    "jukebox": "Box Nagoya"
  },
  "T80232": {
    "title": "Sample Song 46",
    "artist": "Official髭男dism",
    "genre": "J-Pop",
    "date": "2018-06-18",
    "code": "T80232",
    "jukebox": "Box Nagoya"
  },
  "U25424": {
    "title": "Sample Song 47",
    "artist": "宇多田ヒカル",
    "genre": "Anime",
    "date": "2016-10-26",
    "code": "U25424",
    "jukebox": "Box Nagoya"
  },
  "V75181": {
    "title": "Sample Song 48",
    "artist": "Aimer",
    "genre": "J-Pop",
    "date": "2022-06-24",
    "code": "V75181",
    "jukebox": "Box Nagoya"
  },
  "W30174": {
    "title": "Sample Song 49",
    "artist": "米津玄師",
    "genre": "Electronic",
    "date": "2018-11-15",
    "code": "W30174",
    "jukebox": "Box Tokyo"
  },
  "X24158": {
    "title": "Sample Song 50",
    "artist": "YOASOBI",
    "genre": "Ballad",
    "date": "2019-04-23",
    "code": "X24158",
    "jukebox": "Box Osaka"
  },
  "Y36794": {
    "title": "Sample Song 51",
    "artist": "YOASOBI",
    "genre": "Jazz",
    "date": "2021-12-05",
    "code": "Y36794",
    "jukebox": "Box Nagoya"
  },
  "Z24617": {
    "title": "Sample Song 52",
    "artist": "BUMP OF CHICKEN",
    "genre": "Ballad",
    "date": "2022-01-12",
    "code": "Z24617",
    "jukebox": "Box Fukuoka"
  },
  "A68289": {
    "title": "Sample Song 53",
    "artist": "LiSA",
    "genre": "Pop",
    "date": "2019-03-08",
    "code": "A68289",
    "jukebox": "Box Kyoto"
  },
  "B54683": {
    "title": "Sample Song 54",
    "artist": "ONE OK ROCK",
    "genre": "Rock",
    "date": "2021-09-29",
    "code": "B54683",
    "jukebox": "Box Nagoya"
  },
  "C70321": {
    "title": "Sample Song 55",
    "artist": "宇多田ヒカル",
    "genre": "Anime",
    "date": "2016-01-06",
    "code": "C70321",
    "jukebox": "Box Nagoya"
  },
  "D41322": {
    "title": "Sample Song 56",
    "artist": "Aimer",
    "genre": "Anime",
    "date": "2015-10-27",
    "code": "D41322",
    "jukebox": "Box Tokyo"
  },
  "E91484": {
    "title": "Sample Song 57",
    "artist": "米津玄師",
    "genre": "J-Pop",
    "date": "2016-04-04",
    "code": "E91484",
    "jukebox": "Box Osaka"
  },
  "F40852": {
    "title": "Sample Song 58",
    "artist": "Aimer",
    "genre": "J-Pop",
    "date": "2018-11-27",
    "code": "F40852",
    "jukebox": "Box Osaka"
  },
  "G51630": {
    "title": "Sample Song 59",
    "artist": "LiSA",
    "genre": "Pop",
    "date": "2016-05-07",
    "code": "G51630",
    "jukebox": "Box Fukuoka"
  },
  "H65818": {
    "title": "Sample Song 60",
    "artist": "宇多田ヒカル",
    "genre": "Ballad",
    "date": "2018-03-17",
    "code": "H65818",
    "jukebox": "Box Tokyo"
  },
  "I26682": {
    "title": "Sample Song 61",
    "artist": "LiSA",
    "genre": "Jazz",
    "date": "2017-06-29",
    "code": "I26682",
    "jukebox": "Box Fukuoka"
  },
  "J94130": {
    "title": "Sample Song 62",
    "artist": "BUMP OF CHICKEN",
    "genre": "Rock",
    "date": "2018-01-15",
    "code": "J94130",
    "jukebox": "Box Nagoya"
  },
  "K58119": {
    "title": "Sample Song 63",
    "artist": "BUMP OF CHICKEN",
    "genre": "Anime",
    "date": "2018-01-24",
    "code": "K58119",
    "jukebox": "Box Nagoya"
  },
  "L13333": {
    "title": "Sample Song 64",
    "artist": "ONE OK ROCK",
    "genre": "Pop",
    "date": "2022-01-16",
    "code": "L13333",
    "jukebox": "Box Osaka"
  },
  "M12883": {
    "title": "Sample Song 65",
    "artist": "宇多田ヒカル",
    "genre": "J-Pop",
    "date": "2022-10-01",
    "code": "M12883",
    "jukebox": "Box Osaka"
  },
  "N30367": {
    "title": "Sample Song 66",
    "artist": "RADWIMPS",
    "genre": "Rock",
    "date": "2020-01-23",
    "code": "N30367",
    "jukebox": "Box Kyoto"
  },
  "O11919": {
    "title": "Sample Song 67",
    "artist": "Official髭男dism",
    "genre": "J-Pop",
    "date": "2022-12-18",
    "code": "O11919",
    "jukebox": "Box Kyoto"
  },
  "P79420": {
    "title": "Sample Song 68",
    "artist": "Aimer",
    "genre": "J-Pop",
    "date": "2020-01-14",
    "code": "P79420",
    "jukebox": "Box Osaka"
  },
  "Q41477": {
    "title": "Sample Song 69",
    "artist": "米津玄師",
    "genre": "Pop",
    "date": "2021-05-21",
    "code": "Q41477",
    "jukebox": "Box Tokyo"
  },
  "R23134": {
    "title": "Sample Song 70",
    "artist": "King Gnu",
    "genre": "Electronic",
    "date": "2017-09-08",
    "code": "R23134",
    "jukebox": "Box Fukuoka"
  },
  "S53456": {
    "title": "Sample Song 71",
    "artist": "YOASOBI",
    "genre": "Pop",
    "date": "2022-08-22",
    "code": "S53456",
    "jukebox": "Box Kyoto"
  },
  "T36533": {
    "title": "Sample Song 72",
    "artist": "Aimer",
    "genre": "Jazz",
    "date": "2019-03-01",
    "code": "T36533",
    "jukebox": "Box Kyoto"
  },
  "U60008": {
    "title": "Sample Song 73",
    "artist": "Official髭男dism",
    "genre": "Rock",
    "date": "2022-11-05",
    "code": "U60008",
    "jukebox": "Box Nagoya"
  },
  "V38285": {
    "title": "Sample Song 74",
    "artist": "BUMP OF CHICKEN",
    "genre": "Rock",
    "date": "2018-07-06",
    "code": "V38285",
    "jukebox": "Box Tokyo"
  },
  "W28817": {
    "title": "Sample Song 75",
    "artist": "BUMP OF CHICKEN",
    "genre": "Rock",
    "date": "2020-01-03",
    "code": "W28817",
    "jukebox": "Box Tokyo"
  },
  "X90686": {
    "title": "Sample Song 76",
    "artist": "Official髭男dism",
    "genre": "Anime",
    "date": "2020-08-20",
    "code": "X90686",
    "jukebox": "Box Nagoya"
  },
  "Y12656": {
    "title": "Sample Song 77",
    "artist": "LiSA",
    "genre": "Rock",
    "date": "2017-05-05",
    "code": "Y12656",
    "jukebox": "Box Kyoto"
  },
  "Z43268": {
    "title": "Sample Song 78",
    "artist": "BUMP OF CHICKEN",
    "genre": "J-Pop",
    "date": "2019-01-17",
    "code": "Z43268",
    "jukebox": "Box Kyoto"
  },
  "A26067": {
    "title": "Sample Song 79",
    "artist": "BUMP OF CHICKEN",
    "genre": "Pop",
    "date": "2015-07-06",
    "code": "A26067",
    "jukebox": "Box Nagoya"
  },
  "B98678": {
    "title": "Sample Song 80",
    "artist": "BUMP OF CHICKEN",
    "genre": "Folk",
    "date": "2017-06-02",
    "code": "B98678",
    "jukebox": "Box Osaka"
  },
  "C18230": {
    "title": "Sample Song 81",
    "artist": "米津玄師",
    "genre": "Electronic",
    "date": "2021-10-09",
    "code": "C18230",
    "jukebox": "Box Tokyo"
  },
  "D66122": {
    "title": "Sample Song 82",
    "artist": "ONE OK ROCK",
    "genre": "Jazz",
    "date": "2016-06-17",
    "code": "D66122",
    "jukebox": "Box Fukuoka"
  },
  "E29108": {
    "title": "Sample Song 83",
    "artist": "ONE OK ROCK",
    "genre": "Anime",
    "date": "2020-12-11",
    "code": "E29108",
    "jukebox": "Box Tokyo"
  },
  "F47393": {
    "title": "Sample Song 84",
    "artist": "米津玄師",
    "genre": "Ballad",
    "date": "2022-11-04",
    "code": "F47393",
    "jukebox": "Box Tokyo"
  },
  "G14627": {
    "title": "Sample Song 85",
    "artist": "Aimer",
    "genre": "Pop",
    "date": "2017-08-09",
    "code": "G14627",
    "jukebox": "Box Tokyo"
  },
  "H32406": {
    "title": "Sample Song 86",
    "artist": "ONE OK ROCK",
    "genre": "Ballad",
    "date": "2022-03-29",
    "code": "H32406",
    "jukebox": "Box Kyoto"
  },
  "I48624": {
    "title": "Sample Song 87",
    "artist": "BUMP OF CHICKEN",
    "genre": "Electronic",
    "date": "2019-02-18",
    "code": "I48624",
    "jukebox": "Box Osaka"
  },
  "J54554": {
    "title": "Sample Song 88",
    "artist": "YOASOBI",
    "genre": "Jazz",
    "date": "2020-07-31",
    "code": "J54554",
    "jukebox": "Box Kyoto"
  },
  "K48290": {
    "title": "Sample Song 89",
    "artist": "Aimer",
    "genre": "Electronic",
    "date": "2019-10-24",
    "code": "K48290",
    "jukebox": "Box Tokyo"
  },
  "L45064": {
    "title": "Sample Song 90",
    "artist": "BUMP OF CHICKEN",
    "genre": "Pop",
    "date": "2023-01-19",
    "code": "L45064",
    "jukebox": "Box Kyoto"
  },
  "M86633": {
    "title": "Sample Song 91",
    "artist": "米津玄師",
    "genre": "Folk",
    "date": "2018-05-06",
    "code": "M86633",
    "jukebox": "Box Fukuoka"
  },
  "N89138": {
    "title": "Sample Song 92",
    "artist": "RADWIMPS",
    "genre": "Pop",
    "date": "2019-10-22",
    "code": "N89138",
    "jukebox": "Box Tokyo"
  },
  "O45854": {
    "title": "Sample Song 93",
    "artist": "LiSA",
    "genre": "Pop",
    "date": "2016-08-18",
    "code": "O45854",
    "jukebox": "Box Osaka"
  },
  "P43651": {
    "title": "Sample Song 94",
    "artist": "米津玄師",
    "genre": "Ballad",
    "date": "2022-03-06",
    "code": "P43651",
    "jukebox": "Box Fukuoka"
  },
  "Q45492": {
    "title": "Sample Song 95",
    "artist": "RADWIMPS",
    "genre": "Folk",
    "date": "2016-10-09",
    "code": "Q45492",
    "jukebox": "Box Fukuoka"
  },
  "R60832": {
    "title": "Sample Song 96",
    "artist": "米津玄師",
    "genre": "Anime",
    "date": "2021-05-31",
    "code": "R60832",
    "jukebox": "Box Fukuoka"
  },
  "S86355": {
    "title": "Sample Song 97",
    "artist": "King Gnu",
    "genre": "Pop",
    "date": "2023-01-27",
    "code": "S86355",
    "jukebox": "Box Kyoto"
  },
  "T80098": {
    "title": "Sample Song 98",
    "artist": "米津玄師",
    "genre": "Ballad",
    "date": "2018-11-06",
    "code": "T80098",
    "jukebox": "Box Fukuoka"
  },
  "U40730": {
    "title": "Sample Song 99",
    "artist": "米津玄師",
    "genre": "Electronic",
    "date": "2019-12-26",
    "code": "U40730",
    "jukebox": "Box Tokyo"
  },
  "V54795": {
    "title": "Sample Song 100",
    "artist": "BUMP OF CHICKEN",
    "genre": "Anime",
    "date": "2021-09-13",
    "code": "V54795",
    "jukebox": "Box Osaka"
  }
};