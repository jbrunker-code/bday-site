const dateFact = document.querySelector(".date-fact");
const dateButton = document.querySelector(".date-button");
// const actorContainer = document.querySelector(".actor-container")
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
const secretApiKey = config.secretApiKey
const numberApiHost = config.numberApiHost
const actorApiHost = config.actorApiHost
const chuckApiHost = config.chuckApiHost


/* Date facts */

async function getDateFact(){
    const res = await fetch("https://numbersapi.p.rapidapi.com/6/17/date?json=true", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": secretApiKey,
            "x-rapidapi-host": numberApiHost,
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
    const actorRes = await fetch("https://imdb8.p.rapidapi.com/actors/list-born-today?month=6&day=17", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": secretApiKey,
            "x-rapidapi-host": actorApiHost
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
            "x-rapidapi-host": actorApiHost
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
    const numRes = await fetch("https://numbersapi.p.rapidapi.com/61/trivia?json=true&notfound=floor", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": secretApiKey,
            "x-rapidapi-host": numberApiHost
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
            "x-rapidapi-host": chuckApiHost
        }
    })
    const chuckObject = await chuckRes.json();
    const chuckArray = chuckObject.result;
    selectRandomChuckFact(chuckArray);
}

let usedChuckArray = [];
function selectRandomChuckFact(chuckArray){
    let randomIndex = Math.floor(Math.random() * chuckArray.length);
    if (usedChuckArray.includes(randomIndex)){
        selectRandomChuckFact(chuckArray)
    } else {
        usedChuckArray.push(randomIndex);
        if (usedChuckArray.length === chuckArray.length){
            usedChuckArray = [];
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
            "x-rapidapi-host": actorApiHost
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
