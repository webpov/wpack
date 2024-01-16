import TIERPACK_LINKS_JSON from "./TIERPACKS.json"

export const TIERPACK_COLORS = [
    ["#b5b5b5", "#999999", "#ffffff"], // webpov
    ["#A7FEDB", "#18FB9F", "#7824eC"], // Solana Season
    ["#FFCB9B", "#FfFbaC", "#a12F00"], // AI Future
    ["#d0f0FF", "#a0e2FF", "#333333"], // Coinbase Ventures
    ["#FDD9B0", "#FBBF7D", "#ffffff"], // a16z
    ["#D2FFD2", "#ffffff", "#000000"], // paradigm
    ["#eAFcFf", "#bAF9Ff", "#e0f0e0"], // winkelvoss
    ["#dddddd", "#999999", "#ff6600"], // btc/neco
    ["#ddeeff", "#f0f0f0", "#000000"],  // Layer 1

    ["#Ffeff0", "#F8d7e8", "#8D002B"],  // technology\npoet

]



export const TIERPACK_NAMES = [
    "WebPOV\nPack",
    

    "Solana\nSeason",
    "AI\nFuture",
    "Coinbase\nVentures",

    "Andreessen\nHorowitz",
    "Paradigm\nXYZ",
    "Winkelvoss\nBrothers",
    "Bitcoin\nEcosystem",
    "Layer 1\nChains",

    "Technology\nPoet",


]



// export const TIERPACK_IMAGES = [
//     "https://webpov.vercel.app/_next/image?url=%2Flogo.jpg&w=64&q=75",
    

//     "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
//     "https://s2.coinmarketcap.com/static/cloud/img/TrendingIcon.png?_=b7f5c59",
//     "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",

//     "https://s3.coinmarketcap.com/static-gravity/image/4df1b2f7b52a417495dd318011967f12.jpg",
//     "https://pbs.twimg.com/profile_images/1654170684422062080/zpDlueaT_400x400.jpg",
//     "https://s2.coinmarketcap.com/static/img/coins/64x64/3306.png",
//     "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
//     "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",

//     "https://pbs.twimg.com/profile_images/1707158401522839553/SBK9jMh8_400x400.jpg",


// ]



const baseImageLink = '@/../packs'
export const TIERPACK_IMAGES = [
    `${baseImageLink}/_webpov.png`,
    

    `${baseImageLink}/_sol.png`,
    `${baseImageLink}/__ai.png`,
    `${baseImageLink}/__coinbase.png`,

    `${baseImageLink}/__a16z.png`,
    `${baseImageLink}/_paradigm.png`,
    `${baseImageLink}/_winkelvoss.png`,
    `${baseImageLink}/_bitcoin.png`,
    `${baseImageLink}/__layer1.png`,

    `${baseImageLink}/__techpoet.png`,


]


export function getTierPackLinks(tierpacks:any[], basePackUrl:string):string[] {
    const TIERPACK_LINKS = tierpacks.map(pack => {
        let url = basePackUrl;
        Object.entries(pack).forEach(([key, value], index) => {
            const params = encodeURIComponent(JSON.stringify(value));
            url += `${index === 0 ? '' : '&'}${key}=${params}`;
        });
        return url;
    });
    return TIERPACK_LINKS;
}

export const basePackUrl = process.env.NODE_ENV === "production"? "https://wtrade.vercel.app/?" : "http://localhost:3200/?"

export const TIERPACK_LINKS = getTierPackLinks(TIERPACK_LINKS_JSON ,basePackUrl);
// export const TIERPACK_LINKS = [
//     `${basePackUrl}a0=%7B%22symbol%22%3A%22BTCUSDT%22%2C%22floor%22%3A%2237500%22%2C%22roof%22%3A%2246200%22%7D&a1=%7B%22symbol%22%3A%22ETHUSDT%22%2C%22floor%22%3A%222280%22%2C%22roof%22%3A%222747%22%7D&b0=%7B%22symbol%22%3A%22LINKUSDT%22%2C%22floor%22%3A%2211.9%22%2C%22roof%22%3A%2217.5%22%7D&b1=%7B%22symbol%22%3A%22AAVEUSDT%22%2C%22floor%22%3A%2290%22%2C%22roof%22%3A%22112%22%7D&c0=%7B%22symbol%22%3A%22RUNEUSDT%22%2C%22floor%22%3A%223.7%22%2C%22roof%22%3A%226.3%22%7D&c1=%7B%22symbol%22%3A%22INJUSDT%22%2C%22floor%22%3A%2223%22%2C%22roof%22%3A%2238%22%7D&d0=%7B%22symbol%22%3A%22SOLUSDT%22%2C%22floor%22%3A%2255%22%2C%22roof%22%3A%22125%22%7D&d1=%7B%22symbol%22%3A%22FILUSDT%22%2C%22floor%22%3A%223.7%22%2C%22roof%22%3A%226.4%22%7D&e1=%7B%22symbol%22%3A%22RNDRUSDT%22%2C%22floor%22%3A%222.6%22%2C%22roof%22%3A%224.5%22%7D&e2=%7B%22symbol%22%3A%22TIAUSDT%22%2C%22floor%22%3A%229.5%22%2C%22roof%22%3A%2218%22%7D`, // webpov
    

//     `${basePackUrl}a0=%7B%22symbol%22%3A%22SOLUSDT%22%7D&a1=%7B%22symbol%22%3A%22BONKUSDT%22%7D&b0=%7B%22symbol%22%3A%22JTOUSDT%22%7D&b1=%7B%22symbol%22%3A%22RAYUSDT%22%7D&c0=%7B%22symbol%22%3A%22WIFUSDT%22%7D`, // solana season
//     `${basePackUrl}a0=%7B%22symbol%22%3A%22RNDRUSDT%22%7D&a1=%7B%22symbol%22%3A%22AGIXUSDT%22%7D&b0=%7B%22symbol%22%3A%22FETUSDT%22%7D&b1=%7B%22symbol%22%3A%22OCEANUSDT%22%7D&d0=%7B%22symbol%22%3A%22LINKUSDT%22%7D`, // ai future
//     `${basePackUrl}a0=%7B%22symbol%22%3A%22MATICUSDT%22%7D&a1=%7B%22symbol%22%3A%22UNIUSDT%22%7D&b0=%7B%22symbol%22%3A%22NEARUSDT%22%7D&b1=%7B%22symbol%22%3A%22SEIUSDT%22%7D&b2=%7B%22symbol%22%3A%22GRTUSDT%22%7D&c0=%7B%22symbol%22%3A%22SUIUSDT%22%7D&c1=%7B%22symbol%22%3A%22MINAUSDT%22%7D&c2=%7B%22symbol%22%3A%22FLOWUSDT%22%7D&d0=%7B%22symbol%22%3A%22SNXUSDT%22%7D`, // coinbase ventures

//     `${basePackUrl}a0=%7B%22symbol%22%3A%22XRPUSDT%22%7D&a1=%7B%22symbol%22%3A%22ICPUSDT%22%7D&b0=%7B%22symbol%22%3A%22UNIUSDT%22%7D&b1=%7B%22symbol%22%3A%22FILUSDT%22%7D&c0=%7B%22symbol%22%3A%22MKRUSDT%22%7D&c1=%7B%22symbol%22%3A%22SUIUSDT%22%7D&d0=%7B%22symbol%22%3A%22FLOWUSDT%22%7D&d1=%7B%22symbol%22%3A%22ROSEUSDT%22%7D&e0=%7B%22symbol%22%3A%22ARUSDT%22%7D&e1=%7B%22symbol%22%3A%22COMPUSDT%22%7D&e2=%7B%22symbol%22%3A%22WLDUSDT%22%7D`, // a16z
//     `${basePackUrl}a0=%7B%22symbol%22%3A%22UNIUSDT%22%7D&a1=%7B%22symbol%22%3A%22ATOMUSDT%22%7D&b0=%7B%22symbol%22%3A%22LDOUSDT%22%7D&b1=%7B%22symbol%22%3A%22MKRUSDT%22%7D&c0=%7B%22symbol%22%3A%22SCUSDT%22%7D&c1=%7B%22symbol%22%3A%22COMPUSDT%22%7D&d0=%7B%22symbol%22%3A%22NMRUSDT%22%7D&d1=%7B%22symbol%22%3A%22GTCUSDT%22%7D`, // paradigm
//     `${basePackUrl}a0=%7B%22symbol%22%3A%22BTCUSDT%22%7D&a1=%7B%22symbol%22%3A%22ETHUSDT%22%7D&b0=%7B%22symbol%22%3A%22FILUSDT%22%7D&b1=%7B%22symbol%22%3A%22XTZUSDT%22%7D&c0=%7B%22symbol%22%3A%22ROSEUSDT%22%7D&c1=%7B%22symbol%22%3A%22ZECUSDT%22%7D`, // winkelvoss
//     `${basePackUrl}a0=%7B%22symbol%22%3A%22BCHUSDT%22%7D&a1=%7B%22symbol%22%3A%22STXUSDT%22%7D&b0=%7B%22symbol%22%3A%22BSVUSDT%22%7D&b1=%7B%22symbol%22%3A%22ORDIUSDT%22%7D&c0=%7B%22symbol%22%3A%22TUSDT%22%7D&c1=%7B%22symbol%22%3A%22QTUMUSDT%22%7D&d0=%7B%22symbol%22%3A%22BADGERUSDT%22%7D`, // btc\neco
//     `${basePackUrl}a0=%7B%22symbol%22%3A%22ETHUSDT%22%7D&a1=%7B%22symbol%22%3A%22BNBUSDT%22%7D&b0=%7B%22symbol%22%3A%22SOLUSDT%22%7D&b1=%7B%22symbol%22%3A%22ADAUSDT%22%7D&c0=%7B%22symbol%22%3A%22AVAXUSDT%22%7D&c1=%7B%22symbol%22%3A%22TRXUSDT%22%7D&d0=%7B%22symbol%22%3A%22DOTUSDT%22%7D&d1=%7B%22symbol%22%3A%22ICPUSDT%22%7D&e0=%7B%22symbol%22%3A%22ATOMUSDT%22%7D&e1=%7B%22symbol%22%3A%22FTMUSDT%22%7D`, // layer 1

// ];
