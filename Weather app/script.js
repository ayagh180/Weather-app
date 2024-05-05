/* API */
const ApiKey = "179873acb45ee6d971ae450200424db9"; 
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${ApiKey }`);

    if(response.status == 404)/**/
    {
        document.querySelector(".error").style.display="block"; /*f css on a diplay none donc error makibanx ms si == 404 il va monter l'erreur + 
        partie de weather makatbanxi*/
        document.querySelector(".weather").style.display="none";
    }
    else
    {
        var data = await response.json();  /*this data will have all the info of the weather*/

        /*console.log(data);*/
    
        /*update info*/
        document.querySelector(".city").innerHTML = data.name; /* select the class*/
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    
        /*update the image according to the weather condition*/
        if(data.weather[0].main === "Clouds")
        {
            weathericon.src = "images/clouds.png"; /*update the source*/
        }
        else if (data.weather[0].main === "Clear")
        {
            weathericon.src ="images/clear.png";
        }
        else if (data.weather[0].main === "Rain")
        {
            weathericon.src ="images/rain.png";
        }
        else if (data.weather[0].main === "Drizzle")
        {
            weathericon.src ="images/drizzle.png";
        }
        else if (data.weather[0].main === "Mist")
        {
            weathericon.src ="images/mist.png";
        }
    
        document.querySelector(".weather").style.display ="block";  /* css ona weather {none}*=> au debut on va voir que search bar+ si on refrefir le site 
        + si !=404 on va voir le block de weather et error magahixi yban*/
        document.querySelector(".error").style.display="none";
    }

}

searchBtn.addEventListener("click", ()=> {  /* when we click on btn a^pliquer the function*/
    checkWeather(searchBox.value);
})

