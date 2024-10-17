function getAddress(){
    document.getElementById("address").innerHTML = "<a href=\"" + window.location.href + "\">" + window.location.href + "</a>";
    document.getElementById("address2").innerHTML = "<a href=\"" + window.location.href + "\">" + window.location.href + "</a>";
    document.getElementById("extention").innerHTML = window.location.pathname;
}