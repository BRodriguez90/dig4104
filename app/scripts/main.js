var data = [30, 23, 16, 15, 8, 4];

var axisScale = d3.scale.linear()
  .domain([0, 100])
  .range([0, 400]);

var maxData = d3.max(data);

var width = 500,
  barHeight = 100;

var x = d3.scale.linear()
  .domain([0, maxData])
  .rangeRound([0, width]);

var color = d3.scale.linear() //Gradient for Bars
  .domain([0, maxData])
  .range(["#4da6ff", "#003366"]);
/*var stroke = d3.scale.linear()
    .domain([0, maxData])
    .range([]);*/

var chart = d3.select(".graph")
  .append("svg")
  .attr("width", width)
  .attr("height", barHeight * data.length)
  .style("margin-left", "auto")
  .style("margin-right", "auto")
  .style("transform", "rotate(-90deg)")
  .style("padding", "50px");
//.style("border","1px solid black");

var bar = chart.select("svg")
  .append('g')
if (bar.empty())
  bar = d3.select('svg')
  .append('g').classed('tools', true);

var rect = bar.selectAll('g')
  .data(data)
  .enter().append("rect")
  .attr("transform", function(d, i) {
    return "translate(0," + i * barHeight + ")";
  })
  .attr("width", x)
  .attr("height", barHeight - 10) //spacing between bars
  .style("stroke", "black")
  .style("stroke-width", "2.5")
  .style("opacity", "0.9")
  .style("fill", "white")
  .style("fill", function(d) {
    return color(d)
  })
  .style("stroke-dasharray", "1500")
  .style("stroke-dashoffset", "1600")
  .style("animation", "outline 5s linear")
  .style("animation-fill-mode", "forwards");
});