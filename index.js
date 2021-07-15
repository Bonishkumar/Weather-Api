function check()
{
    var city = document.getElementById("weather").value;
    console.log(city);
    if(city==""){
        alert("Enter a city,country or place!!!");
    }
    else{
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
                document.getElementById("result1").innerHTML="NULL";
                document.getElementById("result2").innerHTML="NULL";
                document.getElementById("result3").innerHTML="NULL";
                document.getElementById("result4").innerHTML="NULL";
             }
             else{
                if(finaldata.name==undefined){
                    document.getElementById("resultdisplay").innerHTML=city;
                }
                else{
                    document.getElementById("resultdisplay").innerHTML=finaldata.name;
                }
                
                document.getElementById("result1").innerHTML=finaldata.main.temp_max+"<span>&#8451;</span>";
                document.getElementById("result2").innerHTML=+finaldata.main.feels_like+"<span>&#8451;</span>";
                document.getElementById("result3").innerHTML=+finaldata.main.humidity+"%";
                document.getElementById("result4").innerHTML=+finaldata.main.pressure;
            }
             }

            
    }
   

    ajaxrequest.open("Get",api,true);
    ajaxrequest.send();
}

}
    

    
