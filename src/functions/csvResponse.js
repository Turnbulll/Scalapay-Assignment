
//Convert response to csv format
function csvResponse(response) {
    console.log("product,type,minAmount,maxAmount")
    response.forEach((response) => {
        console.log(
            response.product + ',' 
            + response.type + ','
            + response.configuration.minimumAmount.amount + ','
            + response.configuration.maximumAmount.amount
        )
    })
}

module.exports = csvResponse;
