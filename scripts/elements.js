function generateElements(){
    document.getElementById("footer").innerHTML = `
            <div class="footerContainer">
                <hr>
                <div>
                    <button onclick="window.location.href='robots'">Robots</button>
                </div>
                <div>
                    <button onclick="window.location.href='sponsors'">Sponsors</button>
                </div>
                <div>
                    <button onclick="window.location.href='outreach'">Outreach</button>
                </div>
                <div>
                    <button onclick="window.location.href='portfolios'">Portfolios</button>
                </div>
                <div>
                    <button onclick="window.location.href='gallery'">Gallery</button>
                </div>
                <div>
                    <button onclick="window.location.href='donate'">Donate</button>
                </div>
                <div style="float: right;">
                    <button onclick="window.location.href='mailto:ftcnullpointerexception@gmail.com'">Email our team!</button>
                </div>
            </div>
    `
    document.getElementById("headder").innerHTML = `
        <div class="headderContainer">
            <div class="headderColumn" style="width: fit-content; display: flex;">
                <button onclick="window.location.href='/'" style="font-size: 350%; width: fit-content; background-color: #202020; color: #a84444;">{NullPointerException}</button>
            </div>
        </div>`

    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)){
        var mobile = true;
    }
}
