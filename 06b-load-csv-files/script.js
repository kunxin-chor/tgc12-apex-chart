const chartOptions = {
    'chart': {
        'type':'line',
        'height':'100%'
    },
    'series':[],
    'noData':{
        'text':"Please wait, loading data"
    }
}

const chart = new ApexCharts(document.querySelector('#chart'), chartOptions);
chart.render();

// wait for all the DOM elements
// to be created then load in the CSV file
window.addEventListener('DOMContentLoaded', async function(){
    let data = await load('crude-birth-rate.csv');
    data = transformData(data);

    chart.updateSeries([
        {
            'name':'Crude Birth Rates',
            'data': data
        }
    ])
})