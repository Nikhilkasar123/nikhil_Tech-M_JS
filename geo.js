var a = document.getElementById("result");

function geoLocation()
{
    if(window.navigator.geolocation){
        window.navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        a.innerHTML = "This is not supported here";
    }
}

function showPosition(position) {
    a.innerHTML = `latitude: ${position.coords.latitude} <br>
    longitude: ${position.coords.longitude}`;
}