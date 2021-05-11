
const chartOptions = {
    'chart': {
        'type': 'line',
        'height': '100%'
    },
    'series': [],
    'noData': {
        'text':"Please wait, loading"
    }
}

const chart = new ApexCharts(document.querySelector('#chart'), chartOptions);
chart.render();

// global variable to hold the raw data
let rawData;

document.querySelector('#search-btn').addEventListener('click', function(){
    let country = document.querySelector('#country').value;
    let transformed = transformData(rawData, country);
    console.log(transformed);

    chart.updateSeries([
        {
            'name': 'sales',
            'data': transformed
        }
    ])
})

window.addEventListener('DOMContentLoaded', async function(){

        rawData =  await load("https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/bigger-sales.json");
        let transformed = transformData(rawData);
        chart.updateSeries([
            {
                'name':'sales',
                'data': transformed
            }
        ])

});