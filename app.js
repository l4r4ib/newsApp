console.log('it works')

//variables here

const generalTab= document.querySelector('#general');
const sportsTab= document.querySelector('#sports');
const businessTab= document.querySelector('#business');
const technologyTab= document.querySelector('#technology');
const entertainmentTab= document.querySelector('#entertainment');
const searchbtn = document.querySelector('#searchBtn')
const newsSearch = document.querySelector('#newsSearch')
const newsDetails = document.querySelector('#newsDetails')
const newsData = document.querySelector('#newsData')

//newsarray 
let newsDataArr = [];
//api variables here
const APIkey = '1df2fef6d8ef48d59d62d20331a20373';
const headlineLink = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const generalLink= 'https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=';
const sportsLink= 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=';
const businessLink= 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=';
const technologyLink= 'https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=';
const entertainmentLink= 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=';
const searchLink= 'https://newsapi.org/v2/everything?q=';
//working with API here



window.onload = function() {
    
    headlines();
};


generalTab.addEventListener('click', ()=>{
    console.log('general tab works')
    generalNews();
})

sportsTab.addEventListener('click', ()=>{
    console.log('sportsTab tab works')
    sportsNews();
})

businessTab.addEventListener('click', ()=>{
    console.log('businessTab tab works')
    businessNews();
})

technologyTab.addEventListener('click', ()=>{
    console.log('technologyTab tab works')
    technologyNews();
})

entertainmentTab.addEventListener('click', ()=>{
    console.log('entertainmentTab tab works')
    entertainmentNews();
})

searchbtn.addEventListener('click', ()=>{
    console.log('searchbtn tab works')
    searchNews();
})

//defining function here

const generalNews = async () => {
    const response = await fetch(generalLink+APIkey);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson)
        newsDataArr = myJson.articles;
    } else { 
        console.log('error happened calling from api')
    }
    displayNews();
}

const sportsNews = async () => {
    const response = await fetch(sportsLink+APIkey);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else { 
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const entertainmentNews = async () => {
    const response = await fetch(entertainmentLink+APIkey);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else { 
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const technologyNews = async () => {
    const response = await fetch(technologyLink+APIkey);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else { 
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const businessNews = async () => {
    const response = await fetch(businessLink+APIkey);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else { 
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const headlines = async () => {
    const response = await fetch(headlineLink+APIkey);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else { 
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const searchNews = async () => {
    if(newsSearch.value == null)
        return;
    const response = await fetch(searchLink+encodeURIComponent(newsSearch.value)+"&apiKey="+APIkey);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else { 
        console.log(response.status, response.statusText);
    }
    displayNews();
}



function displayNews() {

    newsData.innerHTML = "";

    newsDataArr.forEach(news => {

        let date = news.publishedAt.split("T");
        
        let col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        let card = document.createElement('div');
        card.className = "p-2";

        let image = document.createElement('img');
        image.setAttribute("height","35%");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        let cardBody = document.createElement('div');
        cardBody.className ='cards'
        let newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        let dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        let desc = document.createElement('p');
        desc.className="text-muted";
        desc.innerHTML = news.description;

        let link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML=" More on this"; //Read more

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(desc);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsData.appendChild(col);
    });
}