let revenue = [1200, 5000, 3000, 4000, 2500, 3300];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

let loss = [1000, 2000, 2000, 1000, 4000, 3500];

const options = {
  chart: {
    type: "bar",
    height: "100%"
  },
  series: [
    {
      name: "revenue",
      data: revenue
    },
    {
      name: "losses",
      data: loss
    }
  ],
  xaxis: {
    categories: months
  },
  'colors':['#d96716', '#f0be1a']
};

const chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
