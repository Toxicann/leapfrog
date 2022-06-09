const scatterPlot = document.getElementById("scatter-plot");

var points = [
  { x: 10, y: 20 },
  { x: 40, y: 40 },
  { x: 60, y: 20 },
  { x: 50, y: 20 },
  { x: 90, y: 50 },
];

class Plot {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  create() {
    const plot = document.createElement("div");
    plot.setAttribute("class", "plot");
    plot.style.left = `${this.x + 10}px`;
    plot.style.top = `${this.y}px`;
    scatterPlot.appendChild(plot);
  }
}

points.forEach((index) => {
  let s = new Plot(index.x, index.y);
  s.create();
});
