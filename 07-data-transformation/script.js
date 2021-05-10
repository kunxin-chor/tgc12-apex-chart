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

window.addEventListener('DOMContentLoaded', async function(){

        let rawData =  await load("https://raw.githubusercontent.com/kunxin-chor/sales-data/main/data/sales.json");
        let transformed = transformData(rawData);
        chart.updateSeries([
            {
                'name':'sales',
                'data': transformed
            }
        ])

});