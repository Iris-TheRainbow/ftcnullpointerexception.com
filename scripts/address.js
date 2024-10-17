function getAddress(){
    document.getElementById("address").innerHTML = window.location.href;
    document.getElementById("address2").innerHTML = window.location.href;
    document.getElementById("extention").innerHTML = window.location.pathname;
}