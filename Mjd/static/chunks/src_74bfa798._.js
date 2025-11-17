(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/hooks/use-debounce.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useDebounce": (()=>useDebounce)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useDebounce(value, delay) {
    _s();
    const [debouncedValue, setDebouncedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDebounce.useEffect": ()=>{
            const handler = setTimeout({
                "useDebounce.useEffect.handler": ()=>{
                    setDebouncedValue(value);
                }
            }["useDebounce.useEffect.handler"], delay);
            return ({
                "useDebounce.useEffect": ()=>{
                    clearTimeout(handler);
                }
            })["useDebounce.useEffect"];
        }
    }["useDebounce.useEffect"], [
        value,
        delay
    ]);
    return debouncedValue;
}
_s(useDebounce, "KDuPAtDOgxm8PU6legVJOb3oOmA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/popular-data.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "POPULAR_LEAGUES": (()=>POPULAR_LEAGUES),
    "POPULAR_TEAMS": (()=>POPULAR_TEAMS)
});
const POPULAR_TEAMS = [
    // Europe (Top 5 Leagues + Portugal, Netherlands)
    {
        id: 33,
        name: "Manchester United",
        logo: "https://media.api-sports.io/football/teams/33.png",
        type: 'Club'
    },
    {
        id: 40,
        name: "Liverpool",
        logo: "https://media.api-sports.io/football/teams/40.png",
        type: 'Club'
    },
    {
        id: 42,
        name: "Arsenal",
        logo: "https://media.api-sports.io/football/teams/42.png",
        type: 'Club'
    },
    {
        id: 47,
        name: "Tottenham",
        logo: "https://media.api-sports.io/football/teams/47.png",
        type: 'Club'
    },
    {
        id: 49,
        name: "Chelsea",
        logo: "https://media.api-sports.io/football/teams/49.png",
        type: 'Club'
    },
    {
        id: 50,
        name: "Manchester City",
        logo: "https://media.api-sports.io/football/teams/50.png",
        type: 'Club'
    },
    {
        id: 529,
        name: "Barcelona",
        logo: "https://media.api-sports.io/football/teams/529.png",
        type: 'Club'
    },
    {
        id: 541,
        name: "Real Madrid",
        logo: "https://media.api-sports.io/football/teams/541.png",
        type: 'Club'
    },
    {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media.api-sports.io/football/teams/530.png",
        type: 'Club'
    },
    {
        id: 489,
        name: "AC Milan",
        logo: "https://media.api-sports.io/football/teams/489.png",
        type: 'Club'
    },
    {
        id: 496,
        name: "Juventus",
        logo: "https://media.api-sports.io/football/teams/496.png",
        type: 'Club'
    },
    {
        id: 497,
        name: "Inter",
        logo: "https://media.api-sports.io/football/teams/497.png",
        type: 'Club'
    },
    {
        id: 492,
        name: "Napoli",
        logo: "https://media.api-sports.io/football/teams/492.png",
        type: 'Club'
    },
    {
        id: 505,
        name: "AS Roma",
        logo: "https://media.api-sports.io/football/teams/505.png",
        type: 'Club'
    },
    {
        id: 157,
        name: "Bayern Munich",
        logo: "https://media.api-sports.io/football/teams/157.png",
        type: 'Club'
    },
    {
        id: 165,
        name: "Borussia Dortmund",
        logo: "https://media.api-sports.io/football/teams/165.png",
        type: 'Club'
    },
    {
        id: 168,
        name: "Bayer Leverkusen",
        logo: "https://media.api-sports.io/football/teams/168.png",
        type: 'Club'
    },
    {
        id: 173,
        name: "RB Leipzig",
        logo: "https://media.api-sports.io/football/teams/173.png",
        type: 'Club'
    },
    {
        id: 85,
        name: "Paris Saint Germain",
        logo: "https://media.api-sports.io/football/teams/85.png",
        type: 'Club'
    },
    {
        id: 91,
        name: "Monaco",
        logo: "https://media.api-sports.io/football/teams/91.png",
        type: 'Club'
    },
    {
        id: 94,
        name: "Marseille",
        logo: "https://media.api-sports.io/football/teams/94.png",
        type: 'Club'
    },
    {
        id: 211,
        name: "Benfica",
        logo: "https://media.api-sports.io/football/teams/211.png",
        type: 'Club'
    },
    {
        id: 212,
        name: "FC Porto",
        logo: "https://media.api-sports.io/football/teams/212.png",
        type: 'Club'
    },
    {
        id: 228,
        name: "Sporting CP",
        logo: "https://media.api-sports.io/football/teams/228.png",
        type: 'Club'
    },
    {
        id: 194,
        name: "Ajax",
        logo: "https://media.api-sports.io/football/teams/194.png",
        type: 'Club'
    },
    {
        id: 197,
        name: "PSV Eindhoven",
        logo: "https://media.api-sports.io/football/teams/197.png",
        type: 'Club'
    },
    {
        id: 408,
        name: "Feyenoord",
        logo: "https://media.api-sports.io/football/teams/408.png",
        type: 'Club'
    },
    // Asia (Key Leagues)
    {
        id: 603,
        name: "Al Hilal",
        logo: "https://media.api-sports.io/football/teams/603.png",
        type: 'Club'
    },
    {
        id: 605,
        name: "Al Nassr",
        logo: "https://media.api-sports.io/football/teams/605.png",
        type: 'Club'
    },
    {
        id: 611,
        name: "Al Ittihad",
        logo: "https://media.api-sports.io/football/teams/611.png",
        type: 'Club'
    },
    {
        id: 601,
        name: "Al Ahli",
        logo: "https://media.api-sports.io/football/teams/601.png",
        type: 'Club'
    },
    {
        id: 2282,
        name: "Al Sadd",
        logo: "https://media.api-sports.io/football/teams/2282.png",
        type: 'Club'
    },
    {
        id: 2281,
        name: "Al Duhail",
        logo: "https://media.api-sports.io/football/teams/2281.png",
        type: 'Club'
    },
    {
        id: 2289,
        name: "Al Ain",
        logo: "https://media.api-sports.io/football/teams/2289.png",
        type: 'Club'
    },
    {
        id: 2291,
        name: "Shabab Al Ahli",
        logo: "https://media.api-sports.io/football/teams/2291.png",
        type: 'Club'
    },
    {
        id: 1123,
        name: "Al Zawraa",
        logo: "https://media.api-sports.io/football/teams/1123.png",
        type: 'Club'
    },
    {
        id: 1124,
        name: "Al Quwa Al Jawiya",
        logo: "https://media.api-sports.io/football/teams/1124.png",
        type: 'Club'
    },
    {
        id: 1125,
        name: "Al Shorta",
        logo: "https://media.api-sports.io/football/teams/1125.png",
        type: 'Club'
    },
    {
        id: 4238,
        name: "Al Karkh",
        logo: "https://media.api-sports.io/football/teams/4238.png",
        type: 'Club'
    },
    {
        id: 4239,
        name: "Naft Maysan",
        logo: "https://media.api-sports.io/football/teams/4239.png",
        type: 'Club'
    },
    {
        id: 4241,
        name: "Al Talaba",
        logo: "https://media.api-sports.io/football/teams/4241.png",
        type: 'Club'
    },
    // Africa (Key Leagues)
    {
        id: 1159,
        name: "Al Ahly SC",
        logo: "https://media.api-sports.io/football/teams/1159.png",
        type: 'Club'
    },
    {
        id: 622,
        name: "Zamalek SC",
        logo: "https://media.api-sports.io/football/teams/622.png",
        type: 'Club'
    },
    {
        id: 639,
        name: "Raja Casablanca",
        logo: "https://media.api-sports.io/football/teams/639.png",
        type: 'Club'
    },
    {
        id: 641,
        name: "Wydad Casablanca",
        logo: "https://media.api-sports.io/football/teams/641.png",
        type: 'Club'
    },
    {
        id: 634,
        name: "Esperance de Tunis",
        logo: "https://media.api-sports.io/football/teams/634.png",
        type: 'Club'
    },
    {
        id: 633,
        name: "Etoile du Sahel",
        logo: "https://media.api-sports.io/football/teams/633.png",
        type: 'Club'
    },
    {
        id: 1060,
        name: "Mamelodi Sundowns",
        logo: "https://media.api-sports.io/football/teams/1060.png",
        type: 'Club'
    },
    {
        id: 1063,
        name: "Orlando Pirates",
        logo: "https://media.api-sports.io/football/teams/1063.png",
        type: 'Club'
    },
    {
        id: 1062,
        name: "Kaizer Chiefs",
        logo: "https://media.api-sports.io/football/teams/1062.png",
        type: 'Club'
    },
    {
        id: 910,
        name: "TP Mazembe",
        logo: "https://media.api-sports.io/football/teams/910.png",
        type: 'Club'
    },
    // Americas (Key Leagues)
    {
        id: 126,
        name: "Flamengo",
        logo: "https://media.api-sports.io/football/teams/126.png",
        type: 'Club'
    },
    {
        id: 121,
        name: "Palmeiras",
        logo: "https://media.api-sports.io/football/teams/121.png",
        type: 'Club'
    },
    {
        id: 451,
        name: "Boca Juniors",
        logo: "https://media.api-sports.io/football/teams/451.png",
        type: 'Club'
    },
    {
        id: 436,
        name: "River Plate",
        logo: "https://media.api-sports.io/football/teams/436.png",
        type: 'Club'
    },
    {
        id: 1613,
        name: "Inter Miami",
        logo: "https://media.api-sports.io/football/teams/1613.png",
        type: 'Club'
    },
    {
        id: 1599,
        name: "LA Galaxy",
        logo: "https://media.api-sports.io/football/teams/1599.png",
        type: 'Club'
    },
    {
        id: 2223,
        name: "Club America",
        logo: "https://media.api-sports.io/football/teams/2223.png",
        type: 'Club'
    },
    {
        id: 2286,
        name: "Guadalajara",
        logo: "https://media.api-sports.io/football/teams/2286.png",
        type: 'Club'
    },
    // National Teams
    {
        id: 2,
        name: "France",
        logo: "https://media.api-sports.io/football/teams/2.png",
        type: 'National'
    },
    {
        id: 6,
        name: "Brazil",
        logo: "https://media.api-sports.io/football/teams/6.png",
        type: 'National'
    },
    {
        id: 8,
        name: "Germany",
        logo: "https://media.api-sports.io/football/teams/8.png",
        type: 'National'
    },
    {
        id: 9,
        name: "England",
        logo: "https://media.api-sports.io/football/teams/9.png",
        type: 'National'
    },
    {
        id: 10,
        name: "Portugal",
        logo: "https://media.api-sports.io/football/teams/10.png",
        type: 'National'
    },
    {
        id: 12,
        name: "Spain",
        logo: "https://media.api-sports.io/football/teams/12.png",
        type: 'National'
    },
    {
        id: 13,
        name: "Italy",
        logo: "https://media.api-sports.io/football/teams/13.png",
        type: 'National'
    },
    {
        id: 28,
        name: "Argentina",
        logo: "https://media.api-sports.io/football/teams/28.png",
        type: 'National'
    },
    {
        id: 27,
        name: "Netherlands",
        logo: "https://media.api-sports.io/football/teams/27.png",
        type: 'National'
    },
    {
        id: 21,
        name: "Belgium",
        logo: "https://media.api-sports.io/football/teams/21.png",
        type: 'National'
    },
    {
        id: 15,
        name: "Morocco",
        logo: "https://media.api-sports.io/football/teams/15.png",
        type: 'National'
    },
    {
        id: 19,
        name: "Egypt",
        logo: "https://media.api-sports.io/football/teams/19.png",
        type: 'National'
    },
    {
        id: 20,
        name: "Algeria",
        logo: "https://media.api-sports.io/football/teams/20.png",
        type: 'National'
    },
    {
        id: 29,
        name: "Tunisia",
        logo: "https://media.api-sports.io/football/teams/29.png",
        type: 'National'
    },
    {
        id: 769,
        name: "Iraq",
        logo: "https://media.api-sports.io/football/teams/769.png",
        type: 'National'
    },
    {
        id: 768,
        name: "Saudi Arabia",
        logo: "https://media.api-sports.io/football/teams/768.png",
        type: 'National'
    },
    {
        id: 775,
        name: "Qatar",
        logo: "https://media.api-sports.io/football/teams/775.png",
        type: 'National'
    },
    {
        id: 25,
        name: "Japan",
        logo: "https://media.api-sports.io/football/teams/25.png",
        type: 'National'
    },
    {
        id: 24,
        name: "South Korea",
        logo: "https://media.api-sports.io/football/teams/24.png",
        type: 'National'
    },
    // More European teams
    {
        id: 504,
        name: "Lazio",
        logo: "https://media.api-sports.io/football/teams/504.png",
        type: 'Club'
    },
    {
        id: 169,
        name: "Eintracht Frankfurt",
        logo: "https://media.api-sports.io/football/teams/169.png",
        type: 'Club'
    },
    {
        id: 79,
        name: "Lille",
        logo: "https://media.api-sports.io/football/teams/79.png",
        type: 'Club'
    },
    {
        id: 548,
        name: "Sevilla",
        logo: "https://media.api-sports.io/football/teams/548.png",
        type: 'Club'
    },
    {
        id: 536,
        name: "Real Sociedad",
        logo: "https://media.api-sports.io/football/teams/536.png",
        type: 'Club'
    },
    {
        id: 38,
        name: "Leicester",
        logo: "https://media.api-sports.io/football/teams/38.png",
        type: 'Club'
    },
    {
        id: 34,
        name: "Newcastle",
        logo: "https://media.api-sports.io/football/teams/34.png",
        type: 'Club'
    },
    {
        id: 66,
        name: "Aston Villa",
        logo: "https://media.api-sports.io/football/teams/66.png",
        type: 'Club'
    },
    {
        id: 221,
        name: "Celtic",
        logo: "https://media.api-sports.io/football/teams/221.png",
        type: 'Club'
    },
    {
        id: 247,
        name: "Rangers",
        logo: "https://media.api-sports.io/football/teams/247.png",
        type: 'Club'
    },
    {
        id: 585,
        name: "Galatasaray",
        logo: "https://media.api-sports.io/football/teams/585.png",
        type: 'Club'
    },
    {
        id: 645,
        name: "Fenerbahce",
        logo: "https://media.api-sports.io/football/teams/645.png",
        type: 'Club'
    },
    {
        id: 17,
        name: "Australia",
        logo: "https://media.api-sports.io/football/teams/17.png",
        type: 'National'
    },
    {
        id: 22,
        name: "Iran",
        logo: "https://media.api-sports.io/football/teams/22.png",
        type: 'National'
    },
    {
        id: 23,
        name: "Nigeria",
        logo: "https://media.api-sports.io/football/teams/23.png",
        type: 'National'
    },
    {
        id: 31,
        name: "Senegal",
        logo: "https://media.api-sports.io/football/teams/31.png",
        type: 'National'
    }
];
const POPULAR_LEAGUES = [
    {
        id: 2,
        name: "UEFA Champions League",
        logo: "https://media.api-sports.io/football/leagues/2.png"
    },
    {
        id: 3,
        name: "UEFA Europa League",
        logo: "https://media.api-sports.io/football/leagues/3.png"
    },
    {
        id: 848,
        name: "UEFA Conference League",
        logo: "https://media.api-sports.io/football/leagues/848.png"
    },
    {
        id: 1,
        name: "World Cup",
        logo: "https://media.api-sports.io/football/leagues/1.png"
    },
    {
        id: 4,
        name: "Euro Championship",
        logo: "https://media.api-sports.io/football/leagues/4.png"
    },
    {
        id: 9,
        name: "Copa America",
        logo: "https://media.api-sports.io/football/leagues/9.png"
    },
    {
        id: 6,
        name: "Africa Cup of Nations",
        logo: "https://media.api-sports.io/football/leagues/6.png"
    },
    {
        id: 884,
        name: "AFC Asian Cup",
        logo: "https://media.api-sports.io/football/leagues/884.png"
    },
    {
        id: 39,
        name: "Premier League",
        logo: "https://media.api-sports.io/football/leagues/39.png"
    },
    {
        id: 140,
        name: "La Liga",
        logo: "https://media.api-sports.io/football/leagues/140.png"
    },
    {
        id: 135,
        name: "Serie A",
        logo: "https://media.api-sports.io/football/leagues/135.png"
    },
    {
        id: 78,
        name: "Bundesliga",
        logo: "https://media.api-sports.io/football/leagues/78.png"
    },
    {
        id: 61,
        name: "Ligue 1",
        logo: "https://media.api-sports.io/football/leagues/61.png"
    },
    {
        id: 307,
        name: "Saudi Professional League",
        logo: "https://media.api-sports.io/football/leagues/307.png"
    },
    {
        id: 542,
        name: "Iraq Stars League",
        logo: "https://media.api-sports.io/football/leagues/542.png"
    },
    {
        id: 310,
        name: "Qatar Stars League",
        logo: "https://media.api-sports.io/football/leagues/310.png"
    },
    {
        id: 304,
        name: "UAE Pro League",
        logo: "https://media.api-sports.io/football/leagues/304.png"
    },
    {
        id: 203,
        name: "Egyptian Premier League",
        logo: "https://media.api-sports.io/football/leagues/203.png"
    },
    {
        id: 200,
        name: "Moroccan Botola Pro",
        logo: "https://media.api-sports.io/football/leagues/200.png"
    },
    {
        id: 202,
        name: "Tunisian Ligue 1",
        logo: "https://media.api-sports.io/football/leagues/202.png"
    },
    {
        id: 199,
        name: "Algerian Ligue 1",
        logo: "https://media.api-sports.io/football/leagues/199.png"
    },
    {
        id: 7,
        name: "CAF Champions League",
        logo: "https://media.api-sports.io/football/leagues/7.png"
    },
    {
        id: 14,
        name: "AFC Champions League",
        logo: "https://media.api-sports.io/football/leagues/14.png"
    },
    {
        id: 11,
        name: "Copa Libertadores",
        logo: "https://media.api-sports.io/football/leagues/11.png"
    },
    {
        id: 253,
        name: "Major League Soccer",
        logo: "https://media.api-sports.io/football/leagues/253.png"
    },
    {
        id: 71,
        name: "Brasileirão Série A",
        logo: "https://media.api-sports.io/football/leagues/71.png"
    },
    {
        id: 128,
        name: "Argentine Primera División",
        logo: "https://media.api-sports.io/football/leagues/128.png"
    },
    {
        id: 88,
        name: "Eredivisie",
        logo: "https://media.api-sports.io/football/leagues/88.png"
    },
    {
        id: 94,
        name: "Primeira Liga",
        logo: "https://media.api-sports.io/football/leagues/94.png"
    },
    {
        id: 197,
        name: "Turkish Süper Lig",
        logo: "https://media.api-sports.io/football/leagues/197.png"
    },
    {
        id: 40,
        name: "Championship",
        logo: "https://media.api-sports.io/football/leagues/40.png"
    },
    {
        id: 143,
        name: "Copa del Rey",
        logo: "https://media.api-sports.io/football/leagues/143.png"
    },
    {
        id: 45,
        name: "FA Cup",
        logo: "https://media.api-sports.io/football/leagues/45.png"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/hardcoded-translations.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "hardcodedTranslations": (()=>hardcodedTranslations)
});
const hardcodedTranslations = {
    continents: {
        "World": "العالم",
        "Europe": "أوروبا",
        "Asia": "آسيا",
        "Africa": "أفريقيا",
        "South America": "أمريكا الجنوبية",
        "North America": "أمريكا الشمالية",
        "Oceania": "أوقيانوسيا",
        "Other": "أخرى"
    },
    countries: {
    },
    leagues: {
        2: "دوري أبطال أوروبا",
        3: "الدوري الأوروبي",
        39: "الدوري الإنجليزي الممتاز",
        140: "الدوري الإسباني",
        135: "الدوري الإيطالي",
        78: "الدوري الألماني",
        61: "الدوري الفرنسي",
        307: "دوري روشن السعودي",
        542: "دوري نجوم العراق",
        253: "الدوري الأمريكي",
        1: "كأس العالم",
        4: "بطولة أمم أوروبا",
        9: "كوبا أمريكا",
        6: "كأس الأمم الأفريقية",
        884: "كأس آسيا",
        7: "دوري أبطال أفريقيا",
        14: "دوري أبطال آسيا",
        11: "كأس ليبرتادوريس",
        310: "دوري نجوم قطر",
        304: "دوري أدنوك للمحترفين",
        203: "الدوري المصري الممتاز",
        200: "البطولة الإحترافية",
        202: "الرابطة المحترفة الأولى",
        199: "الرابطة المحترفة الأولى الجزائرية",
        848: "دوري المؤتمر الأوروبي",
        40: "دوري البطولة الإنجليزية",
        143: "كأس ملك إسبانيا",
        45: "كأس الاتحاد الإنجليزي",
        71: "الدوري البرازيلي",
        128: "الدوري الأرجنتيني",
        88: "الدوري الهولندي",
        94: "الدوري البرتغالي",
        197: "الدوري التركي الممتاز"
    },
    teams: {
    },
    players: {
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/matchStatus.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "isMatchLive": (()=>isMatchLive)
});
const isMatchLive = (status)=>{
    return [
        '1H',
        'HT',
        '2H',
        'ET',
        'BT',
        'P',
        'LIVE'
    ].includes(status.short);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/local-favorites.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "GUEST_MODE_KEY": (()=>GUEST_MODE_KEY),
    "LOCAL_FAVORITES_KEY": (()=>LOCAL_FAVORITES_KEY),
    "clearLocalFavorites": (()=>clearLocalFavorites),
    "getLocalFavorites": (()=>getLocalFavorites),
    "setLocalFavorites": (()=>setLocalFavorites)
});
const LOCAL_FAVORITES_KEY = 'goalstack_local_favorites_v2'; // Incremented version
const GUEST_MODE_KEY = 'goalstack_guest_mode_active';
const getLocalFavorites = ()=>{
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    try {
        const localData = window.localStorage.getItem(LOCAL_FAVORITES_KEY);
        // If no data, return a default structure.
        if (!localData) {
            return {
                teams: {},
                leagues: {},
                players: {},
                crownedTeams: {},
                notificationsEnabled: {
                    news: true
                }
            };
        }
        const parsed = JSON.parse(localData);
        // Ensure the parsed data has the expected shape to avoid runtime errors.
        return {
            teams: parsed.teams || {},
            leagues: parsed.leagues || {},
            players: parsed.players || {},
            crownedTeams: parsed.crownedTeams || {},
            notificationsEnabled: parsed.notificationsEnabled || {
                news: true
            }
        };
    } catch (error) {
        console.error("Error reading local favorites:", error);
        return {
            teams: {},
            leagues: {},
            players: {},
            crownedTeams: {},
            notificationsEnabled: {
                news: true
            }
        };
    }
};
const setLocalFavorites = (favorites)=>{
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    try {
        // IMPORTANT: Only store the 'favorites' part, not the whole state object
        // which might include large data like 'customNames'.
        const dataToStore = {
            teams: favorites.teams,
            leagues: favorites.leagues,
            players: favorites.players,
            crownedTeams: favorites.crownedTeams,
            notificationsEnabled: favorites.notificationsEnabled
        };
        window.localStorage.setItem(LOCAL_FAVORITES_KEY, JSON.stringify(dataToStore));
        // Dispatch a custom event to notify other components of the change
        window.dispatchEvent(new CustomEvent('localFavoritesChanged'));
    } catch (error) {
        console.error("Error saving local favorites:", error);
        if (error instanceof DOMException && error.name === 'QuotaExceededError') {
            // This specific error is now expected to be handled by the logic preventing large writes.
            // If it still occurs, it's a critical bug.
            console.error("LocalStorage quota exceeded. Cannot save new favorites.");
        }
    }
};
const clearLocalFavorites = ()=>{
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    window.localStorage.removeItem(LOCAL_FAVORITES_KEY);
    window.dispatchEvent(new CustomEvent('localFavoritesChanged'));
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/firebase-client.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "handleNewUser": (()=>handleNewUser),
    "signOut": (()=>signOut),
    "updateUserDisplayName": (()=>updateUserDisplayName)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__signOut$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/esm2017/index-8e6e89cb.js [app-client] (ecmascript) <export D as signOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__al__as__updateProfile$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/esm2017/index-8e6e89cb.js [app-client] (ecmascript) <export al as updateProfile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/esm2017/index-8e6e89cb.js [app-client] (ecmascript) <export p as getAuth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/errors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$error$2d$emitter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/error-emitter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$local$2d$favorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/local-favorites.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const handleNewUser = async (user, firestore)=>{
    const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(firestore, 'users', user.uid);
    const favoritesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(firestore, 'users', user.uid, 'favorites', 'data');
    const localFavorites = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$local$2d$favorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalFavorites"])();
    const hasLocalFavorites = Object.keys(localFavorites.teams || {}).length > 0 || Object.keys(localFavorites.leagues || {}).length > 0;
    try {
        const userDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(userRef);
        if (userDoc.exists()) {
            // User already exists, merge local favorites if any
            if (hasLocalFavorites) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(favoritesRef, localFavorites, {
                    merge: true
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$local$2d$favorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearLocalFavorites"])();
            }
            // Also update their profile info in case it changed in Google
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(userRef, {
                displayName: user.displayName,
                photoURL: user.photoURL
            });
            return; // Exit if user exists
        }
        // --- This is a new user ---
        const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(firestore);
        // 1. Create User Profile
        const displayName = user.displayName || `مستخدم_${user.uid.substring(0, 5)}`;
        const photoURL = user.photoURL || '';
        const userProfileData = {
            displayName: displayName,
            email: user.email || 'N/A',
            photoURL: photoURL,
            isProUser: false,
            // If they had local favorites, they completed the first step of onboarding
            onboardingComplete: hasLocalFavorites
        };
        batch.set(userRef, userProfileData);
        // 2. Create Favorites Document
        const favoritesData = {
            userId: user.uid
        };
        if (hasLocalFavorites) {
            Object.assign(favoritesData, localFavorites);
        }
        batch.set(favoritesRef, favoritesData);
        // Commit all writes at once
        await batch.commit();
        // Clear local data after successful migration
        if (hasLocalFavorites) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$local$2d$favorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearLocalFavorites"])();
        }
    } catch (error) {
        const permissionError = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestorePermissionError"]({
            path: `users/${user.uid}`,
            operation: 'write',
            requestResourceData: {
                profile: {
                    displayName: user.displayName,
                    email: user.email
                },
                favorites: localFavorites
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$error$2d$emitter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorEmitter"].emit('permission-error', permissionError);
        console.error("Failed to create new user documents:", error);
    }
};
const signOut = ()=>{
    if ("object" !== 'undefined' && localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$local$2d$favorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_MODE_KEY"])) {
        localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$local$2d$favorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_MODE_KEY"]);
        window.location.reload();
        return Promise.resolve();
    }
    const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__["getAuth"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__signOut$3e$__["signOut"])(auth);
};
const updateUserDisplayName = async (user, newDisplayName, db)=>{
    if (!user) throw new Error("User not authenticated.");
    if (!db) {
        console.error("Firestore not available for updateUserDisplayName");
        throw new Error("Database service is not available.");
    }
    // Update Firebase Auth profile
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__al__as__updateProfile$3e$__["updateProfile"])(user, {
        displayName: newDisplayName
    });
    // Update Firestore user document
    const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(db, 'users', user.uid);
    const userProfileUpdateData = {
        displayName: newDisplayName
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(userRef, userProfileUpdateData).catch((serverError)=>{
        const permissionError = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestorePermissionError"]({
            path: userRef.path,
            operation: 'update',
            requestResourceData: userProfileUpdateData
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$error$2d$emitter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorEmitter"].emit('permission-error', permissionError);
    // We don't re-throw here, as the auth profile update already succeeded.
    // The global error handler will catch this for development.
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/constants.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "BUNDESLIGA_ID": (()=>BUNDESLIGA_ID),
    "CHAMPIONS_LEAGUE_ID": (()=>CHAMPIONS_LEAGUE_ID),
    "CURRENT_SEASON": (()=>CURRENT_SEASON),
    "LALIGA_ID": (()=>LALIGA_ID),
    "PREMIER_LEAGUE_ID": (()=>PREMIER_LEAGUE_ID),
    "PREVIOUS_SEASON": (()=>PREVIOUS_SEASON),
    "SERIE_A_ID": (()=>SERIE_A_ID)
});
const PREMIER_LEAGUE_ID = 39;
const LALIGA_ID = 140;
const SERIE_A_ID = 135;
const BUNDESLIGA_ID = 78;
const CHAMPIONS_LEAGUE_ID = 2;
const CURRENT_SEASON = new Date().getFullYear();
const PREVIOUS_SEASON = new Date().getFullYear() - 1;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/revenuecat-client.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "purchaseSubscription": (()=>purchaseSubscription)
});
"use client";
const purchaseSubscription = async (packageIdentifier)=>{
    console.log(`[MOCK] Initiating purchase for package: ${packageIdentifier}`);
    // Simulate network delay and a successful purchase.
    await new Promise((resolve)=>setTimeout(resolve, 1500));
    // In a real scenario, you would get a successful purchase result from RevenueCat.
    // Here, we just return `true` to indicate the mock purchase was "successful".
    console.log(`[MOCK] Successfully "purchased" package: ${packageIdentifier}`);
    // The 'isProUser' status will be updated in the component after this function returns true.
    // In a production app, this status update should be handled securely by a backend webhook
    // that verifies the purchase with RevenueCat and then updates the user's status in Firestore.
    return true;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_74bfa798._.js.map