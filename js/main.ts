
var ticker = "";

//referenced from index.html. searchCrypto is a very simple api retrieval method from user input then relevant data is placed into the index table cells
function searchCrypto() {
    ticker = $("#ticker").val();
    if (ticker !== ""){
        $.get("https://coinmarketcap-nexuist.rhcloud.com/api/" + ticker, function(data){
            var priceData = data["price"].usd;
            var market_cap = data["market_cap"].usd;
            var volume = data["volume"].usd;
            document.getElementById("price").innerHTML = "$" + priceData;
            document.getElementById("marketCap").innerHTML = "$" + market_cap;
            document.getElementById("volumeTraded").innerHTML = "$" + volume;

        });
    }
    else{
        alert("Please put in a cryptocurrency ticker such as btc")
    }
}

/* code below does not work despite replicating example code properly
Most likely due to a mix of JSON data in a different format from the one above
and/or mistaken retrievals from the JSON data.

        $.ajax({
            url: 'https://api.coinmarketcap.com/v1/ticker/bitcoin',
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
                var currencyName = currency.replace("","");
                currencyName = currencyName.toLowerCase().trim();
                var price = json[currencyName].price_usd
                document.getElementById("price_usd").innerHTML = price;

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Please submit a valid cryptocoin");
            }
        });
*/
