var mySlider2;
var current;

function raiseD() {
    var current = mySlider2.slider('getValue');
    setDay(current + step);
}

function lowerD() {
    var current = mySlider2.slider('getValue');
    setDay(current - step);
}

function raiseN() {
    var current = mySlider2.slider('getValue');
    setNight(current + step);
}

function lowerN() {
    var current = mySlider2.slider('getValue');
    setNight(current - step);
}

function setDay(temp) {
    mySlider2.slider('setValue', temp);
    put("dayTemperature", "day_temperature", temp);
    $("#dayT").text(temp.toFixed(1));
}

function setNight(temp) {
    mySlider2.slider('setValue', temp);
    put("nightTemperature", "night_temperature", temp);
    $("#nightT").text(temp.toFixed(1));
}

function getDay() {
    setDay(parseFloat(get("dayTemperature", "day_temperature", temp)));
}

function getNight() {
    setNight(parseFloat(get("nightTemperature", "night_temperature", temp)));
}

function init() {

    timeUpdate();
    getDay();
    getNight();


    //slider
    mySlider2 = $("#slid").slider({
        reversed: false,
        step: step,
    });



    mySlider2.on("change", function (x) {
        setTarget(x.value.newValue);
    });

}