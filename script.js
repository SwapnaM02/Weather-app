let data;


const inputBox=document.getElementById("inputBox");

const countryName=document.getElementById("countryName");

const StateName=document.getElementById("StateName");

const cityName=document.getElementById("cityName");

const humidity=document.getElementById("humidity");

const windSpeed=document.getElementById("windSpeed");

const temperature=document.getElementById("temperature");

const logoImage=document.getElementById("logoImage");

const weatherStatus=document.getElementById("weatherStatus");



const getData = async (event) => {
    event.preventDefault();

    if(!inputBox.value){
        alert("please enter the city name");
        return;
    }

    const city = inputBox.value;

    const fetchData = await fetch(`https://api.weatherapi.com/v1/current.json?key=66cb45aca9ae4d60aeb60255230504&q=${city}`);


    const orgData= await fetchData.json();
    data = orgData;
    console.log(data);

    // displaying the data in HTML

    countryName.innerText = data.location.country;
    StateName.innerText = data.location.region;
    cityName.innerText=data.location.name;
    humidity.innerText=data.current.humidity;
    windSpeed.innerText=data.current.wind_kph;
    weatherStatus.innerText=data.current.condition.text;
    logoImage.src=data.current.condition.icon;
    temperature.innerText=data.current.temp_c;
    

  



    
}

