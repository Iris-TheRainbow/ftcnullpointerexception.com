function generateFooter(){
    document.getElementById("footer").innerHTML = `
        <div class="footerContainer">
            <hr>
            <div>
                <div style="margin-top: 15px;">
                    <div class="footerColumn">
                        <button onclick="window.location.href='/'">Home</button>
                    </div>
                    <div class="footerColumn">
                        <button onclick="window.location.href='robots.html'">Robots</button>
                    </div>
                    <div class="footerColumn">
                        <button onclick="window.location.href='sponsors.html'">Sponsors</button>
                    </div>
                    <div class="footerColumn">
                        <button onclick="window.location.href='outreach.html'">Outreach</button>
                    </div>
                    <div class="footerColumn">
                        <button onclick="window.location.href='portfolios.html'">Portfolios</button>
                    </div>
                    <div class="footerColumn" style="padding-left: 23%">
                        <button onclick="window.location.href='mailto:pblhsrobotics@gmail.com'">Email our team!</button>
                    </div>
                </div>
            </div>
        </div>
    `
}