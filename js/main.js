//referenced from index.html. searchCrypto is a very simple api retrieval method from user input then relevant data is placed into the index table cells
function searchCrypto() {
    var ticker = $("#ticker").val();
    if (ticker !== "") {
        $.get("https://coinmarketcap-nexuist.rhcloud.com/api/" + ticker, function (data) {
            var cryptoName = data["name"];
            //alerts if not a valid cryptocurrency ticker
            if (cryptoName == undefined) {
                alert("Please put in a valid cryptocurrency ticker");
                return;
            }
            document.getElementById("cryptoName").innerHTML = cryptoName;
            //USD data
            var supply = data["supply"];
            document.getElementById("supply").innerHTML = "total supply " + supply;
            var priceUS = data["price"].usd;
            var marketUS = data["market_cap"].usd;
            var volumeUS = data["volume"].usd;
            document.getElementById("priceUSD").innerHTML = "$" + priceUS;
            document.getElementById("marketUSD").innerHTML = "$" + marketUS;
            document.getElementById("volumeUSD").innerHTML = "$" + volumeUS;
            //EUR data
            var priceEU = data["price"].eur;
            var marketEU = data["market_cap"].eur;
            var volumeEU = data["volume"].eur;
            document.getElementById("priceEUR").innerHTML = "\u20AC" + priceEU;
            document.getElementById("marketEUR").innerHTML = "\u20AC" + marketEU;
            document.getElementById("volumeEUR").innerHTML = "\u20AC" + volumeEU;
            //CNY data
            var priceCN = data["price"].cny;
            var marketCN = data["market_cap"].cny;
            var volumeCN = data["volume"].cny;
            document.getElementById("priceCNY").innerHTML = "\u00A5" + priceCN;
            document.getElementById("marketCNY").innerHTML = "\u00A5" + marketCN;
            document.getElementById("volumeCNY").innerHTML = "\u00A5" + volumeCN;
            //AUD data
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
