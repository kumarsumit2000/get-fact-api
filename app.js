let url = "https://type.fit/api/quotes";
let factbtn = document.querySelector("#factbtn");
let fact = document.querySelector("#fact");

const nasaData = async () =>{
     let data_fetch = await fetch(url);
     let data = await data_fetch.json();
     console.log(data);
    let index = Math.floor(Math.random()*16);
    fact.innerHTML= data[index].text;   
}
factbtn.addEventListener("click", nasaData);


