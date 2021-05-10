let data = [10, 11, 13, 50, 70, 21];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

let meteorSightings = [20, 10, 11, 33, 24, 55];
let revenue = [1,2,3,4,5,6];

function createChart(type, data, name, xaxis, element) {
    const options = {
        'chart': {
            'type': type,
            'height': '100%'
        },
        'series': [
            {
                'data': data,
                'name': name
            }
        ],
        'xaxis': {
            'categories': xaxis
        }
    }    
    const chart = new ApexCharts(element, options);
    chart.render();
    return chart;
}

createChart('line', data, 'ufo-sightings', months, document.querySelector('#ufo-chart'));
createChart('bar', meteorSightings, 'meteor-sightings', months, document.querySelector('#meteors-chart'))
createChart('line', revenue, 'meteor-sightings-line-chart', months, document.querySelector('#meteors-line-chart'));
