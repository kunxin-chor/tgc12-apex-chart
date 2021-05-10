async function load(url) {
    // read in the raw CSV file
    let response = await axios.get(url);

    // convert to json
    let json = await csv().fromString(response.data);

   return json;
}

function transformData(rawData){
    // accumulator array that will store the final
    // results
    let series = [];
    for (let datnum of rawData) {
        // recreate the data point in the format
        // that apex chart expects
        series.push({
            'x': parseInt(datnum.year),
            'y': parseFloat(datnum.value)
        })
    }
    return series;
}