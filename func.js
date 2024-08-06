function getEvents(){
    axios.post("https://api.ftcscout.org/graphql", {
        query: `{
            teamByNumber(number: 15031){
                events(season: 2023){
                    event{
                        name
                        location{
                            city
                        }
                        start
                    }
                }
            }
        }`
    })
    .then(response => { 
        const date = new Date("2023-12-03");
        console.log(date)
        let day = date.getDate();
        let month = date.getMonth() + 1;
        var next = 0
        let dates = []
        for (let i = 0; i < (response.data.data.teamByNumber.events).length; i++) {
            let event = response.data.data.teamByNumber.events[i].event
            let eventDate = new Date(event.start);
            if (date <= eventDate)[
                dates.push(eventDate)
            ]
        }
        if (dates.length != 0){
            let targetDate = dates.reduce(function (a, b) {
                return a < b ? a : b;
            });
            if (date === targetDate){
                console.log("event Today!");
            }
            if (date < targetDate){
                console.log("event is in the future");
            }
            for (let i = 0; i < (response.data.data.teamByNumber.events).length; i++) {
                let event = response.data.data.teamByNumber.events[i].event
                let eventDay = new Date(event.start);
                if (eventDay === targetDate){
                    document.getElementById("time").innerHTML = "BoltBusterZ is competing <b>today</b> at <b>" + event.location.city + "</b> for <b>"  + event.name + "</b>";
                }
                if (eventDay > targetDate){
                    let daysUntil = Math.round((eventDay - date) / (1000 * 3600 * 24));
                    document.getElementById("time").innerHTML = "BoltBusterZ is competing <b> in " + daysUntil + " days</b> at <b>" + event.location.city + "</b> for <b>"  + event.name + "</b>"
                    break
                }
            }

        }
        else{
            console.log("all events complete");
        }
    })
}