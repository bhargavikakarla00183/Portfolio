
// function addNumbers(a,b){
// a = Number(a);
// b = Number(b);
// document.getElementById("result").innerHTML= a + b;
// }

function bindCompamies() {

    let companies = ["MedSquire pvt Ltd", "Fulltanker pvt ltd", "Tech M pvt lts", "ValueLabs pvt ltd", "Wipro LLC"]
    var loopElement = "";
    for (i = 0; i < companies.length; i++) {
        loopElement = loopElement + `<li>${companies[i]}</li >`;
 
    }
    htmlTemplate = `<ol> ${loopElement}</ol>`
    document.getElementById("divArray").innerHTML = htmlTemplate;

}