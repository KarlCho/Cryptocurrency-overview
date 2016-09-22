//referenced from index.html. searchCrypto is a very simple api retrieval method from user input then relevant data is placed into the index table cells
function searchCrypto() {
    var ticker = $("#ticker").val();
    if (ticker !== "") {
        $.get("https://coinmarketcap-nexuist.rhcloud.com/api/" + ticker, function (data) {
            var cryptoName = data["name"];
            if (cryptoName == undefined){
                alert("Please put in a valid cryptocurrency ticker");
                return;
            }
            document.getElementById("cryptoName").innerHTML = cryptoName;
            var supply = data["supply"];
            document.getElementById("supply").innerHTML = "total supply " + supply;
            var priceUS = data["price"].usd;
            var marketUS = data["market_cap"].usd;
            var volumeUS = data["volume"].usd;
            document.getElementById("priceUSD").innerHTML = "$" + priceUS;
            document.getElementById("marketUSD").innerHTML = "$" + marketUS;
            document.getElementById("volumeUSD").innerHTML = "$" + volumeUS;
            var priceEU = data["price"].eur;
            var marketEU = data["market_cap"].eur;
            var volumeEU = data["volume"].eur;
            document.getElementById("priceEUR").innerHTML = "\u20AC" + priceEU;
            document.getElementById("marketEUR").innerHTML = "\u20AC" + marketEU;
            document.getElementById("volumeEUR").innerHTML = "\u20AC" + volumeEU;
            var priceCN = data["price"].cny;
            var marketCN = data["market_cap"].cny;
            var volumeCN = data["volume"].cny;
            document.getElementById("priceCNY").innerHTML = "\u00A5" + priceCN;
            document.getElementById("marketCNY").innerHTML = "\u00A5" + marketCN;
            document.getElementById("volumeCNY").innerHTML = "\u00A5" + volumeCN;
            var priceAU = data["price"].aud;
            var marketAU = data["market_cap"].aud;
            var volumeAU = data["volume"].aud;
            document.getElementById("priceAUD").innerHTML = "$" + priceAU;
            document.getElementById("marketAUD").innerHTML = "$" + marketAU;
            document.getElementById("volumeAUD").innerHTML = "$" + volumeAU;
        });
    }
    else {
        alert("Please put in a cryptocurrency ticker such as btc");
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
