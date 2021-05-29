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
    const res = await fetch("https://numbersapi.p.rapidapi.com/6/17/date?json=true", {
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
    const actorRes = await fetch("https://imdb8.p.rapidapi.com/actors/list-born-today?month=6&day=17", {
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
    const numRes = await fetch("https://numbersapi.p.rapidapi.com/61/trivia?json=true&notfound=floor", {
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
