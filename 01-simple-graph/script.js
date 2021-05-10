let data = [10, 11, 13, 50, 70, 21];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

let meteorSightings = [20, 10, 11, 33, 24, 55];

// create the graph options
// the key/value pairs are defined by the ApexChart library
let options = {
    'chart': {
        'type': 'line',
        'height': '100%'
    },
    'series': [
        {
            'name':'ufo-sightings',
            // the data key below refers to the y axis
            'data': data  
        },
        {
            'name': 'meteor-sightings',
            'data': meteorSightings
        }
    ],
    'xaxis': {
        'categories': months
    }

}

// create a Chart object
let chart = new ApexCharts(document.querySelector('#chart'), options);

// draw the chart
chart.render();
