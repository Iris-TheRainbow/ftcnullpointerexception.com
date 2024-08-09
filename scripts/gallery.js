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
    document.getElementById("images").innerHTML = string    
}