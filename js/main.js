var ticker = "";
function searchCrypto() {
    ticker = $("#ticker").val();
    if (ticker !== "") {
        $.get("https://coinmarketcap-nexuist.rhcloud.com/api/" + ticker, function (data) {
            var priceData = data["price"].usd;
            var market_cap = data["market_cap"].usd;
            var volume = data["volume"].usd;
            document.getElementById("price").innerHTML = "$" + priceData;
            document.getElementById("marketCap").innerHTML = "$" + market_cap;
            document.getElementById("volumeTraded").innerHTML = "$" + volume;
        });
    }
    else {
        alert("Please put in a ticker value");
    }
}
/* WHY DOES THIS NOT WORK???????
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
