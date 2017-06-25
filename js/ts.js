var mySliderDay;
var mySliderNight;
var current;

window.addEventListener("load", init, false);

function raiseD() {
    var current = mySliderDay.slider('getValue');
    setDay(current + step);
}

function lowerD() {
    var current = mySliderDay.slider('getValue');
    setDay(current - step);
}

function raiseN() {
    var current = mySliderNight.slider('getValue');
    setNight(current + step);
}

function lowerN() {
    var current = mySliderNight.slider('getValue');
    setNight(current - step);
}

function setDay(temp) {
    mySliderDay.slider('setValue', temp);
    put("dayTemperature", "day_temperature", temp);
    $("#dayT").text(temp.toFixed(1));
}

function setNight(temp) {
    mySliderNight.slider('setValue', temp);
    put("nightTemperature", "night_temperature", temp);
    $("#nightT").text(temp.toFixed(1));
}

function getDay() {
    setDay(parseFloat(get("dayTemperature", "day_temperature")));
}

function getNight() {
    setNight(parseFloat(get("nightTemperature", "night_temperature")));
}

function init() {
    //slider
    mySliderDay = $("#slidDay").slider({
        reversed: true,
        step: step,
    });

    mySliderNight = $("#slidNight").slider({
        reversed: true,
        step: step,
    });



    mySliderDay.on("slideStop", function (x) {
        setDay(x.value);
    });

    mySliderNight.on("slideStop", function (x) {
        setNight(x.value);
    });


    timeUpdate();
    getDay();
    getNight();


    

}