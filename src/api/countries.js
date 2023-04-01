// add countries to left side menu
// link and flag will be automatically matched and correct API used

let countries = {
    us: "United States",
    pl: "Poland", 
    ua: "Ukraine", 
    de: "Germany", 
    it: "Italy", 
    au: "Australia", 
    at: "Austria",
    cn: "China",
    ru: "Russia",
    cz: "Czechia",
    ro: "Romania"
}

const sort = (obj) => Object.keys(obj).sort().reduce((acc, c) => { acc[c] = obj[c]; return acc }, {});
countries = sort(countries);

export { countries }