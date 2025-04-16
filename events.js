
const prompt = require("prompt-sync")()
let year = Number(prompt("Enter the year : "))

switch (year) {
    case 2000:
        console.log("Birth year")
        break
    case 2011:
        console.log("PSC Pass");
        break
    case 2014:
        console.log("JSC Passed")
        break
    case 2017:
        console.log("SSC Pass");
        break
    case 2019:
        console.log("HSC Passed")
        break
    case 2025:
        console.log("BSc pass")
        break
    default:
        console.log("Khaisen mara thik moto mia")

}

