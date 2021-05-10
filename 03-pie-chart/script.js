 // favourite flavors of ice cream
 const flavors = ['Strawberry', 'Vanilla', 'Chocolate', 'Durian', 'Mango'];
 const number = [20, 10, 30, 15, 5];

 // chart options
 const options = {
     'chart': {
         'type': 'pie',
         'height': '100%'
     },
     'series': number,
     'labels': flavors,
     'colors': ['#9cd9c1', '#916787', '#85a680', '#2f84b5', '#9464b0', '#e8d5ae']
 }

 const chart = new ApexCharts(document.querySelector('#chart'), options);
 chart.render();
