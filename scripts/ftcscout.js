import {axios} from axios

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
                    }
                }
            }
        }`
    })
    .then(response => { 
        console.log(response)
    })
}