// order we will use to rearrange the data
const order = {
    seniorPoverty: 1,
    poorMaternalHealth: 2,
    adolescentMotherhood: 3,
    widowhood: 4,
    singlMotherhood: 5,
    forcedMarriage: 6,
    lackOfEducation: 7,
    maternalPoverty: 8,
    default: Number.MAX_VALUE
}
const container = d3.select(".container")

// get the baby.json
d3.json('js/data.json').then(function (countryData) {
    displayData(countryData);
});

// display data!
function displayData(data) {

    // add in new data using forEach
    data.forEach(
        (d) => {

            let risks = d.risks
          

            const country = d.Country

            const p = container.append("div")
                .attr("class", "box")

            const svg = p.append("div")
                .attr("class", "svg")

            
            //Object.keys(obj).forEach(function(key
            
            let attrs = Object.keys(risks).sort((a, b) =>
                (order[a] || order.default) - (order[b] || order.default) || a > b || - (a < b));
            
            attrs.forEach(
                (r) => {
                    if(risks[r]){
                        svg.append("embed")
                            // this is calling the svg that has the corressponding name w/ the attr
                            .attr("src", "img/" + r + ".svg")
                            .attr("class", "graphic")
                    }
                }
            )

            p.append("p")
                .text(country)

        }
    )

    // select the label and change it into the attrs that the current person has
    d3.select("#label p").html("(" + attrs.map(d => " " + d) + " )")
}
