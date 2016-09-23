//referenced from index.html. searchCrypto is a very simple api retrieval method from user input then relevant data is placed into the index table cells
function searchCrypto() {
    let ticker = $("#ticker").val();
    if (ticker !== "") {
        $.get("https://coinmarketcap-nexuist.rhcloud.com/api/" + ticker, function (data) {
            let cryptoName = data["name"];
            //alerts if not a valid cryptocurrency ticker
            if (cryptoName == undefined){
                alert("Please put in a valid cryptocurrency ticker");
                return;
            }
            document.getElementById("cryptoName").innerHTML = cryptoName;
            //USD data
            let supply = data["supply"];
            document.getElementById("supply").innerHTML = "total supply " + supply;
            let priceUS = data["price"].usd;
            let marketUS = data["market_cap"].usd;
            let volumeUS = data["volume"].usd;
            document.getElementById("priceUSD").innerHTML = "$" + priceUS;
            document.getElementById("marketUSD").innerHTML = "$" + marketUS;
            document.getElementById("volumeUSD").innerHTML = "$" + volumeUS;
            //EUR data
            let priceEU = data["price"].eur;
            let marketEU = data["market_cap"].eur;
            let volumeEU = data["volume"].eur;
            document.getElementById("priceEUR").innerHTML = "\u20AC" + priceEU;
            document.getElementById("marketEUR").innerHTML = "\u20AC" + marketEU;
            document.getElementById("volumeEUR").innerHTML = "\u20AC" + volumeEU;
            //CNY data
            let priceCN = data["price"].cny;
            let marketCN = data["market_cap"].cny;
            let volumeCN = data["volume"].cny;
            document.getElementById("priceCNY").innerHTML = "\u00A5" + priceCN;
            document.getElementById("marketCNY").innerHTML = "\u00A5" + marketCN;
            document.getElementById("volumeCNY").innerHTML = "\u00A5" + volumeCN;
            //AUD data
            let priceAU = data["price"].aud;
            let marketAU = data["market_cap"].aud;
            let volumeAU = data["volume"].aud;
            document.getElementById("priceAUD").innerHTML = "$" + priceAU;
            document.getElementById("marketAUD").innerHTML = "$" + marketAU;
            document.getElementById("volumeAUD").innerHTML = "$" + volumeAU;
        });
    }
//alerts if empty
    else {
        alert("Please put in a cryptocurrency ticker such as btc");
    }
}
