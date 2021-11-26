window.addEventListener("load", function () {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", function () {
      let city = document.getElementById("city").value;
      const key = "65b8147becf56727c2add0a9b61f2ce0";
     // let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
      let url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&cnt=7`;

      async function fn() {
        try {
          let res = await fetch(url);
          let data = await res.json();
          var more=document.getElementById("more");
          more.style.display="grid";
          let d=new Date();
          let hrs=d.getHours();
          let show = document.getElementById("show");
          show.innerHTML = Math.floor(data.list[0].main.temp) + "&deg;C";
          let current_img=document.getElementById("current_img");
            let show_details=document.getElementById("show_details");
          if(data.list[0].weather[0].main=="Clear")
          {
            
              if(hrs>=5 && hrs<18)
              {
                current_img.setAttribute("src","image/sun.png");
              }
              else
              {
                current_img.setAttribute("src","image/night.png");
              }
              
             
            
          }
          else if(data.list[0].weather[0].main=="Clouds")
          {
            current_img.setAttribute("src","image/cloudy.png");
          }
          else
          {
            current_img.setAttribute("src","image/rainy-day.png");
          }
          show_details.innerHTML=data.list[0].weather[0].description;
          console.log(data);

          //////////////////////////////////////////
          let temp_img=document.getElementsByClassName("temp_img");
          let temp=document.getElementsByClassName("temp");
          let temp_details=document.getElementsByClassName("temp_details");
          for(var i=0;i<7;i++)
          {
                    if(data.list[i].weather[0].main=="Clear")
                    {
                        temp_img[i].setAttribute("src","image/sun.png");
                    }              
                    else if(data.list[i].weather[0].main=="Clouds")
                    {
                        temp_img[i].setAttribute("src","image/cloudy.png");
                    }
                    else
                    {
                        temp_img[i].setAttribute("src","image/rainy-day.png");
                    }
                temp[i].innerHTML=Math.floor(data.list[i].main.temp) + "&deg;C";
                temp_details[i].innerHTML=data.list[i].weather[0].description;
          }
        } catch (e) {
          console.log(e);
        }
      }
      fn();

      ///////////////////////////////////////////////////
        let url2=`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
        var iframe=document.getElementById("iframe");
        iframe.setAttribute("src",url2);
    });

   
  });