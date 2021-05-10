async function load(url) {
    // read in the raw CSV file
   let response = await axios.get(url);
   return response.data;
}

function transformData(rawData, country) {

    console.log(rawData);

    // mapping
    // original data to an object like below
    // { 
    //    "date": "23-Apr-2020",
    //    "amount": 6612    
    // }

    // FOR LOOP VERSION OF MAPPING
    // let mapped = [];
    // for (let datnum of rawData) {
    //      mapped.push({
    //          'date': new Date(datnum.completed_at),
    //          'amount': datnum.payment.amount
    //      })
    // }

    // if using functional mapping
    let mapped = rawData.map(function(datnum){
        return {
            'date': new Date(datnum.completed_at),
            'amount': datnum.payment.amount,
            'country': datnum.billing_address.country
        }
    })

    console.log(mapped);
 
    // FOR LOOP VERSION OF FILTERING
    // Filtering means to keep only a subset of the original data
    // that matches the critera
    // let filtered = [];
    // for (let datnum of mapped) {
    //     if (datnum.date.getFullYear() == 2020 ) {
    //         filtered.push(datnum)
    //     }
    // }

    let filtered = mapped.filter(function(datnum){
        return datnum.date.getFullYear() == 2020 &&
               datnum.country == country
    })

    console.log(filtered);

    // GROUP BY
    let groups = {};

    /*
    {
        '1':[ ..., ...],
        '2':[ ...,....]
    }
    */

    for (let datnum of filtered) {
        // retrieve the month that the transaction happens in
        let month = datnum.date.getMonth();

        // check if the groups object does not contain an array for the month variable
        if (!groups[month]) {
            groups[month] = []
        }

        groups[month].push(datnum);
    }

    console.log(groups);

    // REDUCING VIA FOR-LOOP
    // let monthlyTotal = [];

    // convert the object to an array
    // let groupArray = Object.values(groups);
    
    // // go through each month in the group array
    // for (let i = 0; i < groupArray.length; i++) {
        
    //     // sum up the total amount in current i
    //     // i.e reduce
    //     let total = 0;
    //     let monthlyTransactions = groupArray[i];
    //     for (let t of monthlyTransactions) {
    //         total += t.amount;
    //     }

    //     // push the result into monthlyTotal
    //     monthlyTotal.push({
    //         "x": i,
    //         "y": total
    //     })
    // }
    // console.log(monthlyTotal);

    let monthlyTotal = Object.values(groups).map(function(g, month){
        return {
            "x": month,
            "y": g.reduce(function(acc, datnum){
                return acc + datnum.amount
            }, 0)
        }
    })
    console.log(monthlyTotal)
    return monthlyTotal;
}