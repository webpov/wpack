
export const TIERPACK_COLORS = [
    // ["#c8ffda", "#78fe8d"], //  (webpov)

    // ["#aef5cf", "#84c5f2"], //  Solana Season
    // ["#f6c1a1", "#fd8287"], //  AI Future
    // ["#fb70ff", "#c9f9ff"], //  Coinbase Ventures

    // ["#f6c1a1", "#cc671c"], //   a16z
    // ["#fb70ff", "#bb20f2"], //   paradigm
    // ["#c8ffda", "#78fe8d"], //  winkelvoss
    // ["#ffcfaf", "#d59872"], //  btc\neco
    // ["#fdc39b", "#ffa519"], //  (Layer 1)

    ["#e3ffec", "#bbfec6"], // webpov
    ["#d6fae7", "#c1e2f8"], // Solana Season
    ["#fae0d0", "#fec0c3"], // AI Future
    ["#fdb7ff", "#e4fcff"], // Coinbase Ventures
    ["#fae0d0", "#e5b38d"], // a16z
    ["#fdb7ff", "#dd8ff8"], // paradigm
    ["#e3ffec", "#bbfec6"], // winkelvoss
    ["#ffe7d7", "#eacbb8"], // btc/neco
    ["#fee1cd", "#ffd28c"],  // Layer 1


    ["#ffcfaf", "#d59872"], //  (all\ndefi)
    ["#fdc39b", "#ffa519"], //  (Layer 1)
    ["#d1e0ff", "#9fb8e9"], // a16z
    ["#b5feb5", "#58ff1a"], //  (Smart Contract)
    ["#f2a4ff", "#fc62ea"], //  (topdefi)
    ["#f4ffcc", "#f1ff08"], //  (dex)
    ["#84c5f2", "#1ba7ff"], //  (ai)
    ["#aef5cf", "#2ce3c3"], //  (liquidity)
    ["#f6c1a1", "#cc671c"], //  (Top DeFi)
    ["#fb70ff", "#bb20f2"], //  (gov tokens)
    ["#c8ffda", "#78fe8d"], //  (layer2)
    ["#ffcfaf", "#d59872"], //  (gamefi)
    ["#94ff9a", "#34ff2a"], //  (metaverse)
    ["#c9f9ff", "#77bbcf"], //  (privacy)
    ["#fd8287", "#ed1237"], //  (storage)
    ["#93f7ff", "#83d0ff"], //  (oracle)
]

export const TIERPACK_NAMES = [
    "WebPOV\nPack",
    

    "Solana\nSeason",
    "AI\nFuture",
    "Coinbase\nVentures",

    "a16z",
    "paradigm",
    "winkelvoss",
    "btc\neco",
    "layer 1",


    "all\ndefi",
    "base\nlayer1",
    "a16z\nholdings",
    "smart\ncontract",
    "topdefi",
    "dex",
    "ai",
    "liquidity",
    "memes",
    "gov\ntokens",
    "layer2",
    "gamefi",
    "meta\nverse",
    "privacy",
    "storage→",
    "oracle→",
]

const basePackUrl = process.env.NODE_ENV === "production"? "https://wtrade.vercel.app/?" : "http://localhost:3200/?"

export const TIERPACK_LINKS = [
    `${basePackUrl}a0=%7B%22symbol%22%3A%22BTCUSDT%22%2C%22floor%22%3A%2237500%22%2C%22roof%22%3A%2246200%22%7D&a1=%7B%22symbol%22%3A%22ETHUSDT%22%2C%22floor%22%3A%222280%22%2C%22roof%22%3A%222747%22%7D&b0=%7B%22symbol%22%3A%22LINKUSDT%22%2C%22floor%22%3A%2211.9%22%2C%22roof%22%3A%2217.5%22%7D&b1=%7B%22symbol%22%3A%22AAVEUSDT%22%2C%22floor%22%3A%2290%22%2C%22roof%22%3A%22112%22%7D&c0=%7B%22symbol%22%3A%22RUNEUSDT%22%2C%22floor%22%3A%223.7%22%2C%22roof%22%3A%226.3%22%7D&c1=%7B%22symbol%22%3A%22INJUSDT%22%2C%22floor%22%3A%2223%22%2C%22roof%22%3A%2238%22%7D&d0=%7B%22symbol%22%3A%22SOLUSDT%22%2C%22floor%22%3A%2255%22%2C%22roof%22%3A%22125%22%7D&d1=%7B%22symbol%22%3A%22FILUSDT%22%2C%22floor%22%3A%223.7%22%2C%22roof%22%3A%226.4%22%7D&e1=%7B%22symbol%22%3A%22RNDRUSDT%22%2C%22floor%22%3A%222.6%22%2C%22roof%22%3A%224.5%22%7D&e2=%7B%22symbol%22%3A%22TIAUSDT%22%2C%22floor%22%3A%229.5%22%2C%22roof%22%3A%2218%22%7D`, // webpov
    

    `${basePackUrl}a0=%7B%22symbol%22%3A%22SOLUSDT%22%7D&a1=%7B%22symbol%22%3A%22BONKUSDT%22%7D&b0=%7B%22symbol%22%3A%22JTOUSDT%22%7D&b1=%7B%22symbol%22%3A%22RAYUSDT%22%7D&c0=%7B%22symbol%22%3A%22WIFUSDT%22%7D`, // solana season
    `${basePackUrl}a0=%7B%22symbol%22%3A%22RNDRUSDT%22%7D&a1=%7B%22symbol%22%3A%22AGIXUSDT%22%7D&b0=%7B%22symbol%22%3A%22FETUSDT%22%7D&b1=%7B%22symbol%22%3A%22OCEANUSDT%22%7D&d0=%7B%22symbol%22%3A%22LINKUSDT%22%7D`, // ai future
    `${basePackUrl}a0=%7B%22symbol%22%3A%22MATICUSDT%22%7D&a1=%7B%22symbol%22%3A%22UNIUSDT%22%7D&b0=%7B%22symbol%22%3A%22NEARUSDT%22%7D&b1=%7B%22symbol%22%3A%22SEIUSDT%22%7D&b2=%7B%22symbol%22%3A%22GRTUSDT%22%7D&c0=%7B%22symbol%22%3A%22SUIUSDT%22%7D&c1=%7B%22symbol%22%3A%22MINAUSDT%22%7D&c2=%7B%22symbol%22%3A%22FLOWUSDT%22%7D&d0=%7B%22symbol%22%3A%22SNXUSDT%22%7D`, // coinbase ventures

    `${basePackUrl}a0=%7B%22symbol%22%3A%22XRPUSDT%22%7D&a1=%7B%22symbol%22%3A%22ICPUSDT%22%7D&b0=%7B%22symbol%22%3A%22UNIUSDT%22%7D&b1=%7B%22symbol%22%3A%22FILUSDT%22%7D&c0=%7B%22symbol%22%3A%22MKRUSDT%22%7D&c1=%7B%22symbol%22%3A%22SUIUSDT%22%7D&d0=%7B%22symbol%22%3A%22FLOWUSDT%22%7D&d1=%7B%22symbol%22%3A%22ROSEUSDT%22%7D&e0=%7B%22symbol%22%3A%22ARUSDT%22%7D&e1=%7B%22symbol%22%3A%22COMPUSDT%22%7D&e2=%7B%22symbol%22%3A%22WLDUSDT%22%7D`,
    `${basePackUrl}a0=%7B%22symbol%22%3A%22UNIUSDT%22%7D&a1=%7B%22symbol%22%3A%22ATOMUSDT%22%7D&b0=%7B%22symbol%22%3A%22LDOUSDT%22%7D&b1=%7B%22symbol%22%3A%22MKRUSDT%22%7D&c0=%7B%22symbol%22%3A%22SCUSDT%22%7D&c1=%7B%22symbol%22%3A%22COMPUSDT%22%7D&d0=%7B%22symbol%22%3A%22NMRUSDT%22%7D&d1=%7B%22symbol%22%3A%22GTCUSDT%22%7D`,
    `${basePackUrl}a0=%7B%22symbol%22%3A%22BTCUSDT%22%7D&a1=%7B%22symbol%22%3A%22ETHUSDT%22%7D&b0=%7B%22symbol%22%3A%22FILUSDT%22%7D&b1=%7B%22symbol%22%3A%22XTZUSDT%22%7D&c0=%7B%22symbol%22%3A%22ROSEUSDT%22%7D&c1=%7B%22symbol%22%3A%22ZECUSDT%22%7D`,
    `${basePackUrl}a0=%7B%22symbol%22%3A%22BCHUSDT%22%7D&a1=%7B%22symbol%22%3A%22STXUSDT%22%7D&b0=%7B%22symbol%22%3A%22BSVUSDT%22%7D&b1=%7B%22symbol%22%3A%22ORDIUSDT%22%7D&c0=%7B%22symbol%22%3A%22TUSDT%22%7D&c1=%7B%22symbol%22%3A%22QTUMUSDT%22%7D&d0=%7B%22symbol%22%3A%22BADGERUSDT%22%7D`,
    `${basePackUrl}a0=%7B%22symbol%22%3A%22ETHUSDT%22%7D&a1=%7B%22symbol%22%3A%22BNBUSDT%22%7D&b0=%7B%22symbol%22%3A%22SOLUSDT%22%7D&b1=%7B%22symbol%22%3A%22ADAUSDT%22%7D&c0=%7B%22symbol%22%3A%22AVAXUSDT%22%7D&c1=%7B%22symbol%22%3A%22TRXUSDT%22%7D&d0=%7B%22symbol%22%3A%22DOTUSDT%22%7D&d1=%7B%22symbol%22%3A%22ICPUSDT%22%7D&e0=%7B%22symbol%22%3A%22ATOMUSDT%22%7D&e1=%7B%22symbol%22%3A%22FTMUSDT%22%7D`,
    
    // `${basePackUrl}a0=%7B%22symbol%22%3A%22BTCUSDT%22%7D&a1=%7B%22symbol%22%3A%22ETHUSDT%22%7D&b0=%7B%22symbol%22%3A%22ADAUSDT%22%7D&b1=%7B%22symbol%22%3A%22UNIUSDT%22%7D&c0=%7B%22symbol%22%3A%22AXSUSDT%22%7D&c1=%7B%22symbol%22%3A%22AAVEUSDT%22%7D&d0=%7B%22symbol%22%3A%22SANDUSDT%22%7D&d1=%7B%22symbol%22%3A%22MKRUSDT%22%7D&e0=%7B%22symbol%22%3A%22FETUSDT%22%7D&e1=%7B%22symbol%22%3A%22RNDRUSDT%22%7D&e2=%7B%22symbol%22%3A%22TIAUSDT%22%7D`, // all\ndefi
    // `${basePackUrl}a0=%7B%22symbol%22%3A%22BTCUSDT%22%7D&a1=%7B%22symbol%22%3A%22ETHUSDT%22%7D&b0=%7B%22symbol%22%3A%22ADAUSDT%22%7D`, // Layer 1 (L1)
    // `${basePackUrl}a0=%7B%22symbol%22%3A%22BTCUSDT%22%7D&a1=%7B%22symbol%22%3A%22ETHUSDT%22%7D&b0=%7B%22symbol%22%3A%22XRPUSDT%22%7D&b1=%7B%22symbol%22%3A%22UNIUSDT%22%7D&c0=%7B%22symbol%22%3A%22ICPUSDT%22%7D&c1=%7B%22symbol%22%3A%22FILUSDT%22%7D&d0=%7B%22symbol%22%3A%22FLOWUSDT%22%7D&d1=%7B%22symbol%22%3A%22MKRUSDT%22%7D&e0=%7B%22symbol%22%3A%22ROSEUSDT%22%7D&e1=%7B%22symbol%22%3A%22SUIUSDT%22%7D&e2=%7B%22symbol%22%3A%22ARUSDT%22%7D`, // a16z
    // `${basePackUrl}a0=%7B%22symbol%22%3A%22XRPUSDT%22%7D&a1=%7B%22symbol%22%3A%22LTCUSDT%22%7D&b0=%7B%22symbol%22%3A%22DOTUSDT%22%7D`, // Smart Contract Platform
    // `${basePackUrl}a0=%7B%22symbol%22%3A%22LINKUSDT%22%7D&a1=%7B%22symbol%22%3A%22AAVEUSDT%22%7D&b0=%7B%22symbol%22%3A%22COMPUSDT%22%7D`, // DeFi
    // `${basePackUrl}a0=%7B%22symbol%22%3A%22UNIUSDT%22%7D&a1=%7B%22symbol%22%3A%22SOLUSDT%22%7D&b0=%7B%22symbol%22%3A%22RUNEUSDT%22%7D`, // Decentralized Exchange (DEX)
    // `${basePackUrl}a0=%7B%22symbol%22%3A%22RNDRUSDT%22%7D&a1=%7B%22symbol%22%3A%22TIAUSDT%22%7D&b0=%7B%22symbol%22%3A%22FETUSDT%22%7D`, // AI
    // `${basePackUrl}a0=%7B%22symbol%22%3A%22BNBUSDT%22%7D&a1=%7B%22symbol%22%3A%22CAKEUSDT%22%7D&b0=%7B%22symbol%22%3A%22UNIUSDT%22%7D`, // Liquidity
    // `${basePackUrl}a0=%7B%22symbol%22%3A%22DOGEUSDT%22%7D&a1=%7B%22symbol%22%3A%22SHIBUSDT%22%7D&b0=%7B%22symbol%22%3A%22AKITAUSDT%22%7D`, // Memes
    // `${basePackUrl}a0=%7B%22symbol%22%3A%22AAVEUSDT%22%7D&a1=%7B%22symbol%22%3A%22UNIUSDT%22%7D&b0=%7B%22symbol%22%3A%22MKRUSDT%22%7D`, // Governance
    // `${basePackUrl}a0=%7B%22symbol%22%3A%22MATICUSDT%22%7D&a1=%7B%22symbol%22%3A%22DOTUSDT%22%7D&b0=%7B%22symbol%22%3A%22XDAIUSDT%22%7D`, // Layer 2 (L2)
    // `${basePackUrl}a0=%7B%22symbol%22%3A%22MANAUSDT%22%7D&a1=%7B%22symbol%22%3A%22AXSUSDT%22%7D&b0=%7B%22symbol%22%3A%22SANDUSDT%22%7D`, // GameFi
    // `${basePackUrl}a0=%7B%22symbol%22%3A%22MANAUSDT%22%7D&a1=%7B%22symbol%22%3A%22AXSUSDT%22%7D&b0=%7B%22symbol%22%3A%22ENJUSDT%22%7D`, // Metaverse
    // `${basePackUrl}a0=%7B%22symbol%22%3A%22XMRUSDT%22%7D&a1=%7B%22symbol%22%3A%22ETCUSDT%22%7D&b0=%7B%22symbol%22%3A%22ZECUSDT%22%7D`, // Privacy Coins
    // `${basePackUrl}a0=%7B%22symbol%22%3A%22FILUSDT%22%7D&a1=%7B%22symbol%22%3A%22ARBUSDT%22%7D&b0=%7B%22symbol%22%3A%22STORJUSDT%22%7D`, // Storage
    // `${basePackUrl}a0=%7B%22symbol%22%3A%22LINKUSDT%22%7D&a1=%7B%22symbol%22%3A%22GRTUSDT%22%7D&b0=%7B%22symbol%22%3A%22BANDUSDT%22%7D`, // Oracle    
];
