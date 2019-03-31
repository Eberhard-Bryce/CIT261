function getWeather() {
        
        var input = document.getElementById("city").value;
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + input + "&APPID=d7bddd43bfa6f4bf2544c7397e4c94fc&units=imperial";
         var request = new XMLHttpRequest();
      request.onreadystatechange = function(){
          
          if (request.readyState == 4) {
              var data = JSON.parse(request.responseText);
              document.getElementById("city").innerHTML = data.name;
              document.getElementById("temp").innerHTML = data.main.temp;
              document.getElementById("weather").innerHTML = data.weather[0].description;
              document.getElementById("humidity").innerHTML = data.main.humidity;
              document.getElementById("wind").innerHTML = data.wind.speed;
              document.getElementById("main").innerHTML = data.weather[0].main;
          }
      }
      request.open("GET", url, true);
        request.send();
       
        
    
            var element1 = document.getElementById("hide1");
            if (element1.style.display === "none") {
            element1.style.display = "block";
            }
            var element2 = document.getElementById("hide2");
            if (element2.style.display === "none") {
            element2.style.display = "block";
            }
            var element3 = document.getElementById("hide3");
            if (element3.style.display === "none") {
            element3.style.display = "block";
            }
            var element4 = document.getElementById("hide4");
            if (element4.style.display === "none") {
            element4.style.display = "block";
            }
            var element5 = document.getElementById("hide5");
            if (element5.style.display === "none") {
            element5.style.display = "block";
            }
    }
    
    function changeImage() {
        var image = document.getElementById('picture');
        var audio = document.getElementById('sound');
        var weather = document.getElementById("main").textContent;
        if (weather == "Rain") {
            image.src = 'rain.png';
            audio.src ='Hrain.wav';
        } else if (weather == "Clear") {
            image.src = 'sun.png';
            audio.src ='Sunny.wav';
        } else if (weather == "Snow") {
            image.src = 'snow.png';
            audio.src ='snowy.wav';
        } else if (weather == "Thunderstorm") {
            image.src = 'storm.png';
            audio.src ='ThunderStorm.wav';
        } else if (weather == "Clouds") {
            image.src = 'cloud.png';
            audio.src ='Sunny.wav';
        } else if (weather == "Drizzle") {
            image.src = 'rain.png';
            audio.src ='drizzle.wav';
        } else {
            image.src = 'fail.png'
        } 
    }