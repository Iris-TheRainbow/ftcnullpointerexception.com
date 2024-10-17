const competing = ({ location, name }, slot) => `Null Pointer Exception is competing ${slot} in <b>${location.city}</b> for <b>${name}</b>`
const competingToday = event => competing(event, "<b>today</b>")
const competingLater = (event, days) => competing(event, `<b>in ${days} days</b>`)

async function getEvents() {
    await axios.post("https://api.ftcscout.org/graphql", {
        query: `{
            teamByNumber(number: 27971){
                events(season: 2024){
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
            const specificDate = new Date();

            const events = response.data.data.teamByNumber.events;
            const dates = events
                .map(it => it.event)
                .map(it => new Date(it.start.replace(/-/g, "/")))
                .filter(it => specificDate <= it)
                
            document.getElementById("time").innerHTML = "Null Pointer Exception have competed in all of their events this season";
            if (dates.length > 0){
                const target = dates.reduce((a, b) => a < b ? a : b)


                if (dates.length === 0)      { console.log("all events completed") }
                if (specificDate === target) { console.log("event today!") }
                if (specificDate < target)   { console.log("event is in the future") }
                const sorted = events
                    .map(it => ({
                        event: it.event,
                        date: new Date(it.event.start),
                        days: Math.round(((new Date(it.event.start.replace(/-/g, "/"))) - specificDate) / (1000 * 60 * 60 * 24))
                    }))
                    .filter(it => it.days > 0)
                    .sort((a, b) => a.days - b.days)
                    .map(it => {
                        const { date, event, days } = it
                        if (date < target) return competingLater(event, days)
                        if (date === target) return competingToday(event)
                        if (date > target) return competingLater(event, days)
                        else return competingLater(event, days)
                    })
                    .filter(it => it !== null)
                document.getElementById("time").innerHTML = sorted[0];
            }
        })
}

async function getOpr() {
    await axios.post("https://api.ftcscout.org/graphql", {
        query: `{
            teamByNumber(number: 27971){
                quickStats(season: 2023){
                    tot{
                        value
                    }
                }
            }
        }`
    })
        .then(response => {
            document.title = "Opr: " +Math.round(response.data.data.teamByNumber.quickStats.tot.value * 100)/100
        })
    }