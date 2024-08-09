function generateGallery(){
    let string = ""
    fetch("galleryimgs.txt")
        .then((res) => res.text())
        .then((text) => {
            console.log(text);
            let imgs = text.split("\n");
            console.log(imgs)
            for (let i = 0; i < imgs.length; i++){
                string += "<img src=\"" + imgs[i] + "\"> "
            }
            console.log(string)
        })
        .catch((e) => console.error(e));
    document.getElementById("images").innerHTML = `<img src="img/PPLeagueTourny.jpg"> <img src="img/15031.jpg"> <img src="img/BBZ15031.jpg"> <img src="img/sponsorepaxtonwarehouse.jpg"> <img src="img/CSNightBeforeLT1.jpg"> <img src="img/CSLM1.jpg"> <img src="img/boltwithgears.png"> <img src="img/CSNightBeforeLT2.jpg"> <img src="img/boltnogears.png"> <img src="img/CSLeagueTourny.jpg"> <img src="img/CSLM3.jpg"> <img src="img/BBZRobotics.png"> <img src="img/pbl.jpg"> `   
}