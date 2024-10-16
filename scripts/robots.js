function generateRobots() {
    let string = '';
    let short = "";
    fetch('/robots.json')
      .then(res => res.json())
      .then(json => {
        for (let i = 0; i < json.robots.length; i++) {
          let robot = json.robots[i]
          if (robot.images.length == 1){
            short = 'class="short"'
          } else {
            short = ""
          }
          console.log(short)
          string += '<div class="ronot">';
            string += '<div ' + short + '>';
                string += '<h2>';
                    string += robot.name;
                string += '</h2>';
                string += '<p>';
                    string += robot.description;
                string += '</p>';
            string += '</div>';
          if (robot.images.length > 1) {
            string += '<div class="long">';
            for (let j = 0; j < robot.images.length; j++) {
              string +=
                '<img src="' +
                robot.images[j] +
                ' " style="width: calc(' +
                String((1 / robot.images.length) * 100 - 1) +
                '% - 10px);">';
            }
            string += '</div>';
          } else {
            string += '<div class="short">';
                string += '<img src="' + robot.images[0] + '">';
            string += '</div>';
          }
          string += '</div>';
        }
      console.log(string)
      document.getElementById("robots").innerHTML = string
      })
      .catch(e => console.error(e));
  }
  