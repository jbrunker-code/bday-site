const yearArray = [
    {year: "1960",
    topSong: "Cathy's Clown",
    artist: "The Everyly Brothers",
    musicVideo: "https://www.youtube.com/embed/PXvKAWiU_cQ",
    topFilm: "Psycho",
    trailer: "https://www.youtube.com/embed/Wz719b9QUqY",
    movieTicket: "$0.51"},

    {year: "1961",
    topSong: "Moody River",
    artist: "Pat Boone",
    musicVideo: "https://www.youtube.com/embed/COkOmvr9c3c",
    topFilm: "Wild in the Country",
    trailer: "https://www.youtube.com/embed/acIMqgSL-lk",
    movieTicket: "0.69"},

    {year: "1962",
    topSong: "I Can't Stop Loving You",
    musicVideo: "https://www.youtube.com/embed/w-YqaTDDCDM",
    artist: "Ray Charles",
    topFilm: "That Touch of Mink",
    trailer: "https://www.youtube.com/embed/SNxeoMGISGY",
    movieTicket: "$0.70"},

    {year: "1963",
    topSong: "Sukiyaki",
    artist: "Kyu Sakamoto",
    musicVideo: "https://www.youtube.com/embed/C35DrtPlUbc",
    topFilm: "Cleopatra",
    trailer: "https://www.youtube.com/embed/BkhKhhamX0I",
    movieTicket: "$0.86"},

    {year: "1964",
    topSong: "Chapel of Love",
    artist: "The Dixie Cups",
    musicVideo: "https://www.youtube.com/embed/rTq7w8P6_2I",
    topFilm: "The Unsinkable Molly Brown",
    trailer: "https://www.youtube.com/embed/Vk10MoMpMIA",
    movieTicket: "$0.93"},

    {year: "1965",
    topSong: "I Can't Help Myself (Sugar Pie Honey Bunch)",
    artist: "Four Tops",
    musicVideo: "https://www.youtube.com/embed/s3bksUSPB4c",
    topFilm: "Those Magnificent Men in their Flying Machines",
    trailer: "https://www.youtube.com/embed/ssZ-fzs8F5E",
    movieTicket: "$1.01"},

    {year: "1966",
    topSong: "Paint it Black",
    artist: "The Rolling Stones",
    musicVideo: "https://www.youtube.com/embed/O4irXQhgMqg",
    topFilm: "The Russians are Coming, the Russians are Coming",
    trailer: "https://www.youtube.com/embed/ycLPm3UJhY0",
    movieTicket: "$1.09"},

    {year: "1967",
    topSong: "Groovin'",
    artist: "The Young Rascals",
    musicVideo: "https://www.youtube.com/embed/falI0baGhBQ",
    topFilm: "You Only Live Twice",
    trailer: "https://www.youtube.com/embed/-gGiYrS2Y1k",
    movieTicket: "$1.22"},

    {year: "1968",
    topSong: "This Guy's in Love with You",
    artist: "Hugh Masekela",
    musicVideo: "https://www.youtube.com/embed/o8ByJ1C0iR4",
    topFilm: "Rosemary's Baby",
    trailer: "https://www.youtube.com/embed/BjpA6IH_Skc",
    movieTicket: "$1.31"},

    {year: "1969",
    topSong: "Get Back",
    artist: "The Beatles with Billy Preston",
    musicVideo: "https://www.youtube.com/embed/IKJqecxswCA",
    topFilm: "True Grit",
    trailer: "https://www.youtube.com/embed/ruTdCaAWTNA",
    movieTicket: "$1.42"},

    {year: "1970",
    topSong: "The Long and Winding Road / For You Blue",
    artist: "The Beatles",
    musicVideo: "https://www.youtube.com/embed/fR4HjTH_fTM",
    topFilm: "Two Mules for Sister Sara",
    trailer: "https://www.youtube.com/embed/6fYdd6EFVrY",
    movieTicket: "$1.65"},

    {year: "1971",
    topSong: "It's Too Late / I Feel the Earth Move",
    artist: "Carole King",
    musicVideo: "https://www.youtube.com/embed/VkKxmnrRVHo",
    topFilm: "Willard",
    trailer: "https://www.youtube.com/embed/b8Gn98fbeMs",
    movieTicket: "$1.65"},

    {year: "1972",
    topSong: "The Candy Man",
    artist: "Sammy Davis Jr.",
    musicVideo: "https://www.youtube.com/embed/AIPGyKGuWeA",
    topFilm: "Shaft's Big Score",
    trailer: "https://www.youtube.com/embed/m-5OXQY6oXo",
    movieTicket: "$1.70"},

    {year: "1973",
    topSong: "My Love",
    artist: "Paul McCartney & Wings",
    musicVideo: "https://www.youtube.com/embed/PA9XLa2ARfs",
    topFilm: "Battle for the Planet of the Apes",
    trailer: "https://www.youtube.com/embed/H6VDA3bzihM",
    movieTicket: "$1.77"},

    {year: "1974",
    topSong: "Billy Don't Be a Hero",
    artist: "Bo Donaldson and The Heywoods",
    musicVideo: "https://www.youtube.com/embed/KX-JeV37Uqw",
    topFilm: "Chinatown",
    trailer: "https://www.youtube.com/embed/2yJJWXhXbuI",
    movieTicket: "$1.87"},

    {year: "1975",
    topSong: "Love Will Keep Us Together",
    artist: "Captain & Tennille",
    musicVideo: "https://www.youtube.com/embed/_QNEf9oGw8o",
    topFilm: "Jaws",
    trailer: "https://www.youtube.com/embed/U1fu_sA7XhE",
    movieTicket: "$2.03"},

    {year: "1976",
    topSong: "Silly Love Songs",
    artist: "Wings",
    musicVideo: "https://www.youtube.com/embed/ap87QgZKTNw",
    topFilm: "Silent Movie",
    trailer: "https://www.youtube.com/embed/-DhJA73Ps5U",
    movieTicket: "$2.13"},

    {year: "1977",
    topSong: "Dreams",
    artist: "Fleetwood Mac",
    musicVideo: "https://www.youtube.com/embed/mrZRURcb1cM",
    topFilm: "The Deep",
    trailer: "https://www.youtube.com/embed/fhhOwT1G1rs",
    movieTicket: "$2.23"},

    {year: "1978",
    topSong: "Shadow Dancing",
    artist: "Andy Gibb",
    musicVideo: "https://www.youtube.com/embed/7j_yGYU_jUU",
    topFilm: "Jaws 2",
    trailer: "https://www.youtube.com/embed/Wpr-X20Rrwo",
    movieTicket: "$2.34"},

    {year: "1979",
    topSong: "Hot Stuff",
    artist: "Donna Summer",
    musicVideo: "https://www.youtube.com/embed/nYMeJSehCe4",
    topFilm: "Rocky II",
    trailer: "https://www.youtube.com/embed/6PSSxAGSiCY",
    movieTicket: "$2.47"},

    {year: "1980",
    topSong: "Funkytown",
    artist: "Lipps Inc.",
    musicVideo: "https://www.youtube.com/embed/s36eQwgPNSE",
    topFilm: "The Empire Strikes Back",
    trailer: "https://www.youtube.com/embed/JNwNXF9Y6kY",
    movieTicket: "$2.69"},

    {year: "1981",
    topSong: "Stars on 45",
    artist: "Stars on 45",
    musicVideo: "https://www.youtube.com/embed/7skQvj-aBV8",
    topFilm: "Superman II",
    trailer: "https://www.youtube.com/embed/jxD8RlGnP64",
    movieTicket: "$2.78"},

    {year: "1982",
    topSong: "Ebony and Ivory",
    artist: "Paul McCartney & Stevie Wonder",
    musicVideo: "https://www.youtube.com/embed/fXAlfh6QKQs",
    topFilm: "E.T. the Extra-Terrestrial",
    trailer: "https://www.youtube.com/embed/DSx8Jobx-Gs",
    movieTicket: "$2.94"},

    {year: "1983",
    topSong: "Flashdance... What a Feeling",
    artist: "Irene Cara",
    musicVideo: "https://www.youtube.com/embed/miax0Jpe5mA",
    topFilm: "Superman III",
    trailer: "https://www.youtube.com/embed/-7qo4Iy0ULk",
    movieTicket: "$3.15"},

    {year: "1984",
    topSong: "The Reflex",
    artist: "Duran Duran",
    musicVideo: "https://www.youtube.com/embed/J5ebkj9x5Ko",
    topFilm: "Ghostbusters",
    trailer: "https://www.youtube.com/embed/wQAljlSmjC8",
    movieTicket: "$3.36"},

    {year: "1985",
    topSong: "Heaven",
    artist: "Bryan Adams",
    musicVideo: "https://www.youtube.com/embed/s6TtwR2Dbjg",
    topFilm: "Cocoon",
    trailer: "https://www.youtube.com/embed/s9BSsIX2j7M",
    movieTicket: "$3.55"},

    {year: "1986",
    topSong: "On My Own",
    artist: "Patti LaBelle & Michael McDonald",
    musicVideo: "https://www.youtube.com/embed/KsH63qJlIMM",
    topFilm: "The Karate Kid, Part II",
    trailer: "https://www.youtube.com/embed/V-T0ajeo7xQ",
    movieTicket: "$3.71"},

    {year: "1987",
    topSong: "Head to Toe",
    artist: "Lisa Lisa & Cult Jam",
    musicVideo: "https://www.youtube.com/embed/51Iq8JmmfxY",
    topFilm: "The Witches of Eastwick",
    trailer: "https://www.youtube.com/embed/mLs1y_KSTKk",
    movieTicket: "$3.91"},

    {year: "1988",
    topSong: "Together Forever",
    artist: "Rick Astley",
    musicVideo: "https://www.youtube.com/embed/yPYZpwSpKmA",
    topFilm: "Red Heat",
    trailer: "https://www.youtube.com/embed/N1m5nHD7iMk",
    movieTicket: "$4.11"},

    {year: "1989",
    topSong: "I'll Be Loving You (Forever)",
    artist: "New Kids on the Block",
    musicVideo: "https://www.youtube.com/embed/ZT_7UjCVELg",
    topFilm: "Ghostbusters II",
    trailer: "https://www.youtube.com/embed/weIqC-oUGmA",
    movieTicket: "$3.99"},

    {year: "1990",
    topSong: "It Must Have Been Love",
    artist: "Roxette",
    musicVideo: "https://www.youtube.com/embed/k2C5TjS2sh4",
    topFilm: "Dick Tracy",
    trailer: "https://www.youtube.com/embed/-4rzqSsqaqA",
    movieTicket: "$4.22"},

    {year: "1991",
    topSong: "Rush Rush",
    artist: "Paula Abdul",
    musicVideo: "https://www.youtube.com/embed/LNPb931HqeM",
    topFilm: "Robin Hood: Prince of Thieves",
    trailer: "https://www.youtube.com/embed/fhz5aB-u77Q",
    movieTicket: "$4.21"},

    {year: "1992",
    topSong: "I'll Be There",
    artist: "Mariah Carey featuring Trey Lorenz",
    musicVideo: "https://www.youtube.com/embed/UIt3dx4an9c",
    topFilm: "Batman Returns",
    trailer: "https://www.youtube.com/embed/Too3qgNaYBE",
    movieTicket: "$4.15"},

    {year: "1993",
    topSong: "That's the Way Love Goes",
    artist: "Janet Jackson",
    musicVideo: "https://www.youtube.com/embed/2b_KfAGiglc",
    topFilm: "Jurassic Park",
    trailer: "https://www.youtube.com/embed/QWBKEmWWL38",
    movieTicket: "$4.14"},

    {year: "1994",
    topSong: "I Swear",
    artist: "All-4-One",
    musicVideo: "https://www.youtube.com/embed/25rL-ooWICU",
    topFilm: "Wolf",
    trailer: "https://www.youtube.com/embed/HXcm1cfVIRc",
    movieTicket: "$4.08"},

    {year: "1995",
    topSong: "Have You Ever Really Loved a Woman?",
    artist: "Bryan Adams",
    musicVideo: "https://www.youtube.com/embed/hq2KgzKETBw",
    topFilm: "Batman Forever",
    trailer: "https://www.youtube.com/embed/ROLvjRB4E_Q",
    movieTicket: "$4.35"},

    {year: "1996",
    topSong: "Tha Crossroads",
    artist: "Bone Thugs-n-Harmony",
    musicVideo: "https://www.youtube.com/embed/cJWYTetgsns",
    topFilm: "Eraser",
    trailer: "https://www.youtube.com/embed/31_OEhX30sY",
    movieTicket: "$4.42"},

    {year: "1997",
    topSong: "I'll Be Missing You",
    artist: "Puff Daddy & Faith Evans featuring 112",
    musicVideo: "https://www.youtube.com/embed/NKMtZm2YuBE",
    topFilm: "Batman & Robin",
    trailer: "https://www.youtube.com/embed/4RBXypX4qWI",
    movieTicket: "$4.59"},

    {year: "1998",
    topSong: "The Boy is Mine",
    artist: "Brandy & Monica",
    musicVideo: "https://www.youtube.com/embed/qSIOp_K5GMw",
    topFilm: "The X-Files",
    trailer: "https://www.youtube.com/embed/uz3IYBKDsm4",
    movieTicket: "$4.69"},

    {year: "1999",
    topSong: "If You Had My Love",
    artist: "Jennifer Lopez",
    musicVideo: "https://www.youtube.com/embed/lYfkl-HXfuU",
    topFilm: "Tarzan",
    trailer: "https://www.youtube.com/embed/MwU5ZqyhV5Q",
    movieTicket: "$5.06"},

    {year: "2000",
    topSong: "Try Again",
    artist: "Aaliyah",
    musicVideo: "https://www.youtube.com/embed/nEF_-IcnQC4",
    topFilm: "Shaft",
    trailer: "https://www.youtube.com/embed/qsMTksRxy1M",
    movieTicket: "$5.39"},

    {year: "2001",
    topSong: "Lady Marmalade",
    artist: "Christina Aguilera, Lil' Kim, Mya, & Pink",
    musicVideo: "https://www.youtube.com/embed/RQa7SvVCdZk",
    topFilm: "Lara Croft: Tomb Raider",
    trailer: "https://www.youtube.com/embed/cnNBqNb3taw",
    movieTicket: "$5.65"},

    {year: "2002",
    topSong: "Foolish",
    artist: "Ashanti",
    musicVideo: "https://www.youtube.com/embed/gUPrnu3BEU8",
    topFilm: "Minority Report",
    trailer: "https://www.youtube.com/embed/lG7DGMgfOb8",
    movieTicket: "$5.80"},

    {year: "2003",
    topSong: "21 Questions",
    artist: "50 Cent featuring Nate Dogg",
    musicVideo: "https://www.youtube.com/embed/cDMhlvbOFaM",
    topFilm: "Hulk",
    trailer: "https://www.youtube.com/embed/2ErnLuJKQA4",
    movieTicket: "$6.03"},

    {year: "2004",
    topSong: "Burn",
    artist: "Usher",
    musicVideo: "https://www.youtube.com/embed/t5XNWFw5HVw",
    topFilm: "Dodgeball: A True Underdog Story",
    trailer: "https://www.youtube.com/embed/W-XbDZUnUmw",
    movieTicket: "$6.21"},

    {year: "2005",
    topSong: "We Belong Together",
    artist: "Mariah Carey",
    musicVideo: "https://www.youtube.com/embed/0habxsuXW4g",
    topFilm: "Batman Begins",
    trailer: "https://www.youtube.com/embed/neY2xVmOfUM",
    movieTicket: "$6.41"
    },

    {year: "2006",
    topSong: "Hips Don't Lie",
    artist: "Shakira featuring Wyclef Jean",
    musicVideo: "https://www.youtube.com/embed/DUT5rEU6pqM",
    topFilm: "Click",
    trailer: "https://www.youtube.com/embed/zZNC5emNyEQ",
    movieTicket: "$6.55"},

    {year: "2007",
    topSong: "Umbrella",
    artist: "Rihanna featuring Jay-Z",
    musicVideo: "https://www.youtube.com/embed/CvBfHwUxHIk",
    topFilm: "Fantastic Four: Rise of the Silver Surfer",
    trailer: "https://www.youtube.com/embed/Wiu5eZ_7vSY",
    movieTicket: "$6.88"},

    {year: "2008",
    topSong: "Lollipop",
    artist: "Lil Wayne featuring Static Major",
    musicVideo: "https://www.youtube.com/embed/2IH8tNQAzSs",
    topFilm: "Get Smart",
    trailer: "https://www.youtube.com/embed/K9WNBO3szgQ",
    movieTicket: "$7.18"},

    {year: "2009",
    topSong: "Boom Boom Pow",
    artist: "The Black Eyed Peas",
    musicVideo: "https://www.youtube.com/embed/4m48GqaOz90",
    topFilm: "The Proposal",
    trailer: "https://www.youtube.com/embed/GhsnMiA6c40",
    movieTicket: "$7.50"},

    {year: "2010",
    topSong: "California Gurls",
    artist: "Katy Perry featuring Snoop Dogg",
    musicVideo: "https://www.youtube.com/embed/F57P9C4SAW4",
    topFilm: "Toy Story 3",
    trailer: "https://www.youtube.com/embed/JcpWXaA2qeg",
    movieTicket: "$7.89"},

    {year: "2011",
    topSong: "Rolling in the Deep",
    artist: "Adele",
    musicVideo: "https://www.youtube.com/embed/rYEDA3JcQqw",
    topFilm: "Green Lantern",
    trailer: "https://www.youtube.com/embed/7-GO9fo9DtM",
    movieTicket: "$7.93"},

    {year: "2012",
    topSong: "Call Me Maybe",
    artist: "Carly Rae Jepsen",
    musicVideo: "https://www.youtube.com/embed/fWNaR-rxAic",
    topFilm: "Madagascar 3: Europe's Most Wanted",
    trailer: "https://www.youtube.com/embed/laNiRXqh82Q",
    movieTicket: "$7.96"},

    {year: "2013",
    topSong: "Blurred Lines",
    artist: "Robin Thicke featuring T.I. & Pharrell",
    musicVideo: "https://www.youtube.com/embed/yyDUC1LUXSU",
    topFilm: "Monsters University",
    trailer: "https://www.youtube.com/embed/QxrQ6BaijAY",
    movieTicket: "$8.13"},

    {year: "2014",
    topSong: "Fancy",
    artist: "Iggy Azalea featuring Charli XCX",
    musicVideo: "https://www.youtube.com/embed/O-zpOMYRi0w",
    topFilm: "Think Like a Man Too",
    trailer: "https://www.youtube.com/embed/N8b6kVSZNLE",
    movieTicket: "$8.17"},

    {year: "2015",
    topSong: "See You Again",
    artist: "Wiz Khalifa featuring Charlie Puth",
    musicVideo: "https://www.youtube.com/embed/RgKAFK5djSk",
    topFilm: "Jurassic World",
    trailer: "https://www.youtube.com/embed/RFinNxS5KN4",
    movieTicket: "$8.12"},

    {year: "2016",
    topSong: "One Dance",
    artist: "Drake featuring Wizkid & Kyla",
    musicVideo: "https://www.youtube.com/embed/iAbnEUA0wpA",
    topFilm: "Finding Dory",
    trailer: "https://www.youtube.com/embed/JhvrQeY3doI",
    movieTicket: "$8.61"},

    {year: "2017",
    topSong: "Despacito",
    artist: "Luis Fonsi & Daddy Yankee featuring Justin Bieber",
    musicVideo: "https://www.youtube.com/embed/kJQP7kiw5Fk",
    topFilm: "Cars 3",
    trailer: "https://www.youtube.com/embed/2LeOH9AGJQM",
    movieTicket: "$8.97"},

    {year: "2018",
    topSong: "Nice for What",
    artist: "Drake",
    musicVideo: "https://www.youtube.com/embed/U9BwWKXjVaI",
    topFilm: "Incredibles 2",
    trailer: "https://www.youtube.com/embed/i5qOzqD9Rms",
    movieTicket: "$9.11"},

    {year: "2019",
    topSong: "Old Town Road",
    artist: "Lil Nas X featuring Billy Ray Cyrus",
    musicVideo: "https://www.youtube.com/embed/r7qovpFAGrQ",
    topFilm: "Toy Story 4",
    trailer: "https://www.youtube.com/embed/wmiIUN-7qhE",
    movieTicket: "$9.16"},

    {year: "2020",
    topSong: "Rockstar",
    artist: "DaBaby featuring Roddy Ricch",
    musicVideo: "https://www.youtube.com/embed/83xBPCw5hh4",
    topFilm: "Jurassic Park (re-release)",
    trailer: "https://www.youtube.com/embed/lc0UehYemQA",
    movieTicket: "$9.37"}
]

/**************************************************************************
 * 
 * ****************************************************************************/

const dateFact = document.querySelector(".date-fact");
const dateButton = document.querySelector(".date-button");
const actorName = document.querySelector(".actor-name")
const actorImg = document.querySelector(".actor-img")
const actorButton = document.querySelector(".actor-button")
const actorBio = document.querySelector(".actor-bio")
const numButton = document.querySelector(".num-button")
const numFact = document.querySelector(".num-fact")
const surprise = document.querySelector(".surprise")
const chuckButton = document.querySelector(".chuck-button")
const chuckFact = document.querySelector(".chuck-fact")
const chuckImg = document.querySelector(".chuck-img")
// let secretApiKey = config.secretApiKey
let secretApiKey = ""
const submitButton = document.querySelector(".submit")
// input field for key
const inputKey = document.querySelector(".key-form input");
// all of key section
const keySection = document.querySelector(".key-form")
const hiddenElements = document.querySelector(".hidden")
const incorrectMessage = document.querySelector(".incorrect-key")

//drop menu to choose a year
const selectedYear = document.querySelector("#year")
// import {yearArray} from "year-data-Array.js"
const randomYearButton = document.querySelector(".random-year-button")

const song = document.querySelector(".song");
const film = document.querySelector(".film");
const musicFrame = document.querySelector(".music-frame")
const trailerFrame = document.querySelector(".trailer-frame")
const songText = document.querySelector(".song-text")
const filmText = document.querySelector(".film-text")

const trailer = document.querySelector("#trailer");
const musicVideo = document.querySelector("#music-video");

const changeInfo = document.querySelector(".change-info");

const title = document.querySelector("title")

const bdayName = document.querySelector("#bday-name")
const bdayMonth = document.querySelector("#bday-month")
const bdayDate = document.querySelector("#bday-date")
const greeting = document.querySelector(".greeting")
const bdayAge = document.querySelector("#bday-age")
const resetButton = document.querySelector(".reset")
const dateImg = document.querySelector(".date-img")
const numImg = document.querySelector(".num-img")
const numOneSection = document.querySelector(".num-one-section")
const noOneSection = document.querySelector(".no-one")


let month = "6";
let day = "17";
let age = "61";

/* Key input */
submitButton.addEventListener("click", function(){
    if (inputKey.value === "") {
        incorrectMessage.innerText = "Without the key, you shall not pass!"
    } else if (inputKey.value.length !== 50) {
        clearInput();
        incorrectMessage.innerText = "Are you just guessing? Are you sure it's your birthday? Please enter the correct birthday key."
    } else {
        secretApiKey = inputKey.value;
        keySection.classList.add("hide")
        hiddenElements.classList.remove("hidden")
    }  
})

function clearInput() {
    inputKey.value = "";
  }

/* Date facts */

async function getDateFact(){
    const res = await fetch(`https://numbersapi.p.rapidapi.com/${month}/${day}/date?json=true`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": secretApiKey,
            "x-rapidapi-host": "numbersapi.p.rapidapi.com"
        }
    });
    const dateFactObject = await res.json()
    const dateFactText = dateFactObject.text
    displayDateFact(dateFactText)
};

function displayDateFact (dateFactText){
    dateFact.classList.remove("hide")
    dateFact.innerText = dateFactText
};

dateButton.addEventListener("click", function(){
    getDateFact();
})

/* Actor facts */

async function getActorNumber(){
    const actorRes = await fetch(`https://imdb8.p.rapidapi.com/actors/list-born-today?month=${month}&day=${day}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": secretApiKey,
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    })
    const actorList = await actorRes.json();
    selectRandomActor(actorList)
}

let usedActors = [];

function selectRandomActor(actorList){
    const randomIndex = Math.floor(Math.random() * actorList.length);
    if (usedActors.includes(randomIndex)){
        selectRandomActor(actorList)
    } else {
        usedActors.push(randomIndex);
        if (usedActors.length === actorList.length){
            usedActors = [];
        }
        const randomActor = actorList[randomIndex];
        const actorNum = randomActor.slice(6, -1);
        getActorInfo(actorNum)
        console.log(usedActors);
    }
}

async function getActorInfo (actorNum){
    const actorInfoRes = await fetch(`https://imdb8.p.rapidapi.com/actors/get-bio?nconst=${actorNum}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": secretApiKey,
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    })
    const actorInfo = await actorInfoRes.json();
    console.log(actorInfo);
    displayActorInfo(actorInfo);
}

function displayActorInfo(actorInfo){
    actorName.innerText = actorInfo.name
    actorImg.src = actorInfo.image.url
    actorBio.innerText = actorInfo.miniBios[0].text
}

actorButton.addEventListener("click", function(){
    getActorNumber();
    actorBio.classList.remove("hide");
    actorName.classList.remove("hide")
})

/* 61 Facts */

async function getNumFact(){
    const numRes = await fetch(`https://numbersapi.p.rapidapi.com/${age}/trivia?json=true&notfound=floor`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": secretApiKey,
            "x-rapidapi-host": "numbersapi.p.rapidapi.com"
        }
    })
    console.log(numRes)
    const numFactsObj = await numRes.json()
    const numFactText = numFactsObj.text
    displayNumFact(numFactText)
};

function displayNumFact (numFactText){
    numFact.innerText = numFactText
};

numButton.addEventListener("click", function(){
    surprise.classList.remove("hide");
    numFact.classList.remove("hide");
    getNumFact();
})


/* Chuck Facts */

async function getChuckFact () {
    const chuckRes = await fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search?query=birthday", {
        "method": "GET",
        "headers": {
            "accept": "application/json",
            "x-rapidapi-key": secretApiKey,
            "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com"
        }
    })
    const chuckObject = await chuckRes.json();
    const chuckArray = chuckObject.result;
    selectRandomChuckFact(chuckArray);
}

let usedChuckArray = [2, 7, 10, 19, 23, 26, 33, 34, 35];
function selectRandomChuckFact(chuckArray){
    let randomIndex = Math.floor(Math.random() * chuckArray.length);
    if (usedChuckArray.includes(randomIndex)){
        selectRandomChuckFact(chuckArray)
    } else {
        usedChuckArray.push(randomIndex);
        if (usedChuckArray.length === chuckArray.length){
            usedChuckArray = [2, 7, 10, 19, 23, 26, 33, 34, 35];
        }
        const randomChuckFact = chuckArray[randomIndex];
        const chuckFactInfo = randomChuckFact.value
        displayChuckFact(chuckFactInfo);
    }
}

function displayChuckFact(chuckFactInfo){
    chuckFact.innerText = chuckFactInfo
}

chuckButton.addEventListener("click", function(){
    getChuckFact();
    getChuckImg();
    chuckFact.classList.remove("hide");
})

/* Chuck images*/

let usedChuckImages = [];

async function getChuckImg () {
    const chuckImgRes = await fetch("https://imdb8.p.rapidapi.com/actors/get-all-images?nconst=nm0001569", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": secretApiKey,
            "x-rapidapi-host": "imdb8.p.rapidapi.com"
        }
    })
    const chuckImages = await chuckImgRes.json();
    const chuckImgArray = chuckImages.resource.images;
    selectRandomChuckImg(chuckImgArray);
}

function selectRandomChuckImg(chuckImgArray){
    const randomIndex = Math.floor(Math.random() * chuckImgArray.length);
    if (usedChuckImages.includes(randomIndex)){
        selectRandomChuckImg(chuckImgArray)
    } else {
        usedChuckImages.push(randomIndex);
        if (usedChuckImages.length === chuckImgArray.length){
            usedChuckImages = [];
        }
        const randomChuckImgObj = chuckImgArray[randomIndex];
        const randomChuckImg = randomChuckImgObj.url
        displayChuckImg(randomChuckImg);
    }
}

function displayChuckImg(randomChuckImg){
    chuckImg.src = randomChuckImg
}

/* Num One Section */

function selectYear(yearArray){
    let year = selectedYear.value;
    for (let i = 0 ; i < yearArray.length; i++){
        if (yearArray[i].year === year){
            let currentYear = yearArray[i];
            displayYear(currentYear);
        }
    }
}

function displayYear(currentYear){
    song.classList.remove("hide");
    musicFrame.classList.remove("hide");
    trailerFrame.classList.remove("hide");
    film.classList.remove("hide");
    songText.innerText = `The #1 song on your birthday in ${currentYear.year} was ${currentYear.topSong} by ${currentYear.artist}.`;
    musicVideo.src = currentYear.musicVideo;
    filmText.innerText = `The #1 movie at the box office on your birthday in ${currentYear.year} was ${currentYear.topFilm}.  The average cost of a movie ticket that year was ${currentYear.movieTicket}.`
    trailer.src = currentYear.trailer;
}

selectedYear.addEventListener("change", function(){
    selectYear(yearArray);
})

let usedRandomYears = [];

function selectRandomYear (){
    let randomIdx = Math.floor(Math.random() * 61);
    if (usedRandomYears.includes(randomIdx)){
        selectRandomYear();
    } else {
        usedRandomYears.push(randomIdx);
        let randomYear = yearArray[randomIdx];
        selectedYear.value = randomYear.year
        displayYear(randomYear);
        if (usedRandomYears.length === 60){
            usedRandomYears = [];
        }
    }
}

randomYearButton.addEventListener("click", function(){
    selectRandomYear();
})

changeInfo.addEventListener("click", function (){
    month = bdayMonth.value;
    day = bdayDate.value;
    age = bdayAge.value;
    if (!age){
        age = "61"
    }
    if (!bdayName.value){
        greeting.innerText = "Happy Birthday!";
        title.innerText = "Happy Birthday!";
    } else {
        greeting.innerText = `Happy Birthday ${bdayName.value}!`;
        title.innerText = `Happy Birthday ${bdayName.value}!`;
    }
    bdayMonth.value = "6";
    bdayDate.value = "17";
    bdayAge.value = "61";
    bdayName.value = ""; 
    if (day !== "17" || month !== "6"){
        dateImg.src = "img/calendar.png";
        numOneSection.classList.add("hide");
        noOneSection.classList.remove("hide");
    }
    if (age !== "61"){
        numImg.src = "img/number.png";
    }
    numButton.innerText = `Facts about ${age}`;
    dateFact.classList.add("hide");
    actorName.classList.add("hide");
    actorBio.classList.add("hide");
    surprise.classList.add("hidden");
    numFact.classList.add("hide");
    chuckFact.classList.add("hide");
    chuckImg.src = "";
    actorImg.src = "";
})

resetButton.addEventListener("click", function (){
    month = "6";
    day = "17";
    age = "61";
    greeting.innerText = "Happy Birthday Dad!";
    title.innerText = "Happy Birthday Dad!";
    dateImg.src = "img/june.jpg";
    numImg.src = "img/61.jpg";
    numButton.innerText = "Facts about 61";
    numOneSection.classList.remove("hide");
    dateFact.classList.add("hide");
    actorName.classList.add("hide");
    actorBio.classList.add("hide");
    surprise.classList.remove("hidden");
    surprise.classList.add("hide");
    numFact.classList.add("hide");
    chuckFact.classList.add("hide");
    chuckImg.src = "";
    actorImg.src = "";
    noOneSection.classList.add("hide")
})
