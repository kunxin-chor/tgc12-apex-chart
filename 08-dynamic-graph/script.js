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

// global variable
let data;

// event handlers
document.querySelector("#filter-btn").addEventListener('click', function(){

    let startYear = parseInt(document.querySelector('#start-year').value);
    let endYear = parseInt(document.querySelector('#end-year').value);
    // let filtered = [];
    // for (let datnum of data) {
    //     if (datnum.x >= startYear && datnum.x <= endYear) {
    //         filtered.push(datnum);
    //     }        
    // }

    let filtered = data.filter(function(d){
        return d.x >= startYear && d.x <= endYear;
    })
    
    chart.updateSeries([
        {
            'name': "Crude Birth Rate",
            'data': filtered
        }
    ])
})

// wait for all the DOM elements
// to be created then load in the CSV file
window.addEventListener('DOMContentLoaded', async function(){
    data = await load('crude-birth-rate.csv');
    data = transformData(data);

    chart.updateSeries([
        {
            'name':'Crude Birth Rates',
            'data': data
        }
    ])
})