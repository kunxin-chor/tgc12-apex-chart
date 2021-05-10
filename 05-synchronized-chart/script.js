const reach = [5000, 17000, 2400, 25000, 14000, 55000];
const campaigns = [3, 5, 1, 8, 4, 10];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const reachChartOptions = {
    'chart': {
        'type': 'line',
        'id': 'reachChart', // don't confuse with the HTML element ID. It's for ApexChart internal use
        'height': '100%',
        'group': 'reach-vs-campaign' // charts in the same group will be synchronized together
    },
    'series':[
        {
            'name': 'reach',
            'data': reach
        }
    ],
    'xaxis': {
        'categories': months
    },
    'yaxis': {
        'labels': {
            minWidth: 40
        }
    }
}

const reachChart = new ApexCharts(document.querySelector('#reach'), reachChartOptions);
reachChart.render();

// Create the campagin chart
const campaignChartOptions = {
    'chart': {
        'id': 'campaignChart',
        'type': 'line',
        'height': '100%',
        'group': 'reach-vs-campaign'
    },
    'series':[
        {
            'name':'campaigns',
            'data': campaigns          
        }
    ],
    'xaxis': {
        'categories': months
    },
    'yaxis': {
        'labels': {
            'minWidth': 40
        }
    }
}

const campaignChart = new ApexCharts(document.querySelector('#campaigns'), campaignChartOptions);
campaignChart.render();