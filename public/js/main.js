//console.log('i am working')
const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`

const cityName=document.getElementById("city")
const submitbtn=document.getElementById("submitBtn")
const output=document.getElementById("cityname")
const temp=document.getElementById('temp')
const temp_status=document.getElementById('temp_status')
const datahide=document.querySelector('.middle_layer')

const getinfo=async(event)=>{
    event.preventDefault();
    //alert("i am click ")
    const city=cityName.value
   // console.log(city)
    
if(city === ""){
output.innerText=`pls write the name before search`
datahide.classList.add('data_hide')
}
else{
    try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const reponse =await fetch(url);
    const data=await reponse.json()
    const arrdata=[data]
    
    temp.innerText=arrdata[0].main.temp+" ℃";
    output.innerText=`${arrdata[0].name} ,${arrdata[0].sys.country}`
    const tempmood = arrdata[0].weather[0].main;
    console.log(arrdata)
    console.log(tempmood)

    if(tempmood ==="Clear"){
        temp_status.innerHTML="<i class = 'fas fa-sun' style='color: #eccc68;'><i/> ";
    }
    else if(tempmood ==="Clouds"){
        temp_status.innerHTML="<i class = 'fas fa-cloud' style='color: #f1f2f6;'><i/> ";
    }
    else if(tempmood === "Rain"){
        temp_status.innerHTML="<i class = 'fas fa-cloud-rain' style='color: #a4b0be;'><i/> ";
    }
    else{
        temp_status.innerHTML="<i class = 'fas fa-sun' style='color: #eccc68;'><i/> ";
    }
    datahide.classList.remove('data_hide')



    
    
    }
    catch{
        output.innerText=`pls enter city name`
        datahide.classList.add('data_hide')
    }

}

  
    
}
submitbtn.addEventListener('click',getinfo)
