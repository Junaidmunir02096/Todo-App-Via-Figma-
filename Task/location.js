let checkin = document.querySelector('.checkbtn');
let mainone = document.querySelector('.leftside');
let append = document.querySelector('.scroll');
let h5val = document.querySelector('.h5');
let locDiv = document.querySelector('.loc');
let citydetails = document.querySelector('.details')
let lat = document.getElementById('lat')
let lon = document.getElementById('lon')
let latitude = 0;
let longitude = 0;
let count = 0;

let getdta = JSON.parse(localStorage.getItem('dataset'))
console.log(getdta);
if (getdta == null) {
    localStorage.setItem('dataset',JSON.stringify({location:[]}))
}

function setdatastructure(city,latitude,longitude){
    let obj = new Object({city:city,lat:latitude,lon:longitude})
    console.log(obj);
    
    let getdta = JSON.parse(localStorage.getItem('dataset'))
    console.log(getdta.location);
    if (getdta.location == null) {
        getdta.location[0]= obj
    }
    
      getdta.location.push(obj)
let result =  localStorage.setItem('dataset',JSON.stringify(getdta))
// console.log(final);


}
// setdatastructure('bwp',787.34343,434.43)

//API calls
// https://api-bdc.net/data/reverse-geocode-with-timezone?latitude=-34.93126&longitude=138.5967&localityLanguage=en&key=[YOUR API KEY]
let btnlocation = document.querySelector('.checkbtn');

btnlocation.addEventListener('click',()=>{
   locDiv.style.display = 'flex'
    getlocation()
})

async function getlocation(){
    let location = navigator.geolocation.getCurrentPosition(locationallowed,failedlocation)
}

 function locationallowed(position){
    latitude = position.coords.latitude
    longitude = position.coords.longitude;
    lat.innerHTML = latitude;
    lon.innerHTML = longitude
   
    
    let area = fetch(`https://api-bdc.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
    let res = area.then(response=>{return response.json()} )
    let res2= res.then((details)=>{ 
        citydetails.innerHTML = details.city
        setdatastructure(details.city,latitude,longitude)
        // let setStorage = localStorage.setItem('dataset',JSON.stringify())
    })
    


}

function failedlocation(){
    console.log('location not allowed');
    
}

function addlocation(city,lat,lon){
        let div = document.createElement('div');
        div.className = 'loca';
        let h5 = document.createElement('h5');
        h5.innerHTML =  '&#128205';
        h5.className = 'headfive'
        let span = document.createElement('span');
        span.className = 'details';
        span.innerHTML = city
        let innerdiv = document.createElement('div');
        innerdiv.className = 'coords';
        let innerspan = document.createElement('span');
        innerspan.id = 'lat';
        innerspan.innerHTML = lat;
        let secondinnerspan = document.createElement('span');
        secondinnerspan.id = 'lon';
        secondinnerspan.innerHTML = lon;
    
        append.appendChild(div);
        div.appendChild(h5);

       append.appendChild(div)
       div.appendChild(h5) 
       h5.appendChild(span)
       span.appendChild(innerdiv);
       innerdiv.appendChild(innerspan)
       innerdiv.appendChild(secondinnerspan)
    }


// checkin.addEventListener('click',()=>{
    
// })


window.onload = (()=>{
    let getdta = JSON.parse(localStorage.getItem('dataset'))
    console.log(getdta);
    getdta.location.forEach(div => {
        console.log(div);
        addlocation(div.city,div.lat,div.lon)
        
        
    });
    
})

let taskbtn = document.querySelector('.task')
taskbtn.addEventListener('click',()=>{
    console.log('sdsd');
    window.location.href = './task.html'
    
})

let popop = document.querySelector('.logout');

popop.addEventListener("click",()=>{
    console.log('hibro');
    window.location.href = "../main.html";
})


    // <div class="loc">
    // <h5 class="h5">&#128205; <span class="details"></span>
    // <div class="coords">
    //     <span id="lat">lat</span><span id="lon">lon</span>
    // </div></h5>
