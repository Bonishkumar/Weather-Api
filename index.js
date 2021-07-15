function check()
{

    if(document.getElementById("weather").value=="")
    {
        alert("Enter a city,country or place!!!");
  
    }
    else{

        var city=document.getElementById("weather").value;
        var api=" https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=bf6935d399ffacfa4735e2e52e5e4756&units=metric";
        var ajaxrequest= new XMLHttpRequest();
   
    
    
         ajaxrequest.onreadystatechange = function(){
         console.log(this.readyState);
        if(this.readyState==4){
            console.log(this.responseText);             
             finaldata=JSON.parse(this.responseText)
             console.log(finaldata);
         
             if(finaldata.cod==404){
                document.getElementById("resultdisplay").innerHTML="CITY NOT FOUND!!!!!"
                document.getElementById("result1").innerHTML="Temperature  :  ";
                document.getElementById("result2").innerHTML="Feels like :  ";
                document.getElementById("result3").innerHTML="Humidity :  ";
                document.getElementById("result4").innerHTML="Pressure:  ";
             }
             else{
                if(finaldata.name==undefined){
                    document.getElementById("resultdisplay").innerHTML=city;
                }
                else{
                    document.getElementById("resultdisplay").innerHTML=finaldata.name;
                }
                
                document.getElementById("result1").innerHTML="Temperature  :  "+finaldata.main.temp_max+"<sup>0</sup>"+"C";
                document.getElementById("result2").innerHTML="Feels like :  "+finaldata.main.feels_like+"<sup>0</sup>"+"C";
                document.getElementById("result3").innerHTML="Humidity :  "+finaldata.main.humidity+"%";
                document.getElementById("result4").innerHTML="Pressure:  "+finaldata.main.pressure;
            }
             }
            
    }
   

    ajaxrequest.open("Get",api,true);
    ajaxrequest.send();
    }
   

    
}
    
