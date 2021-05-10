let data = [10, 11, 13, 50, 70, 21];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

let meteorSightings = [20, 10, 11, 33, 24, 55];

// ufo sightings chart
const ufoChartOptions = {
    'chart': {
        'type': 'line',
        'height': '100%'
    },
    'series':[
        {
            'name':'ufo-sightings',
            'data': data
        }
    ],
    'xaxis': {
        'categories': months
    }
}

const ufoChart = new ApexCharts(document.querySelector('#ufo-chart'), ufoChartOptions);
ufoChart.render();

// Chart 2 - meteor sightings
const meteorChartOptions = {
    'chart': {
        'type': 'bar',
        'height': '100%'
    }, 
    'series':[
        {
            'name':'meteor-sightings',
            'data': meteorSightings
        }
    ],
    'xaxis': {
        'categories': months
    }
}

const meteorChart = new ApexCharts(document.querySelector('#meteors-chart'), meteorChartOptions);
meteorChart.render();