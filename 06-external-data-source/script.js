const options = {
    'chart': {
        'type':'line',
        'height':'100%'
    },
    'series': [
        // empty
    ],
    'noData': {
        "text": "Please wait, loading data..."
    }
}

const chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();

// event listener and wait for DOMContentLoaded event
window.addEventListener('DOMContentLoaded', async function(){
    let series = await loadData();
    chart.updateSeries([
        {
            'name': 'Sales',
            'data': series
        }
    ])
})