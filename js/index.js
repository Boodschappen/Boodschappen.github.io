var step = 0.1;

window.addEventListener("load", init, false);

function raise() {
    var current = mySlider.slider('getValue');
    mySlider.slider('setValue', current + step, false, true)
}

function lower() {
    var current = mySlider.slider('getValue');
    mySlider.slider('setValue', current - step, false, true)
}

function timeUpdate() {
    $("#day").text(get("day", "current_day"));
    $("#clock").text(get("time", "time"));
}

function currentTemp(){
        $("#currentTemp").text(get("currentTemperature","current_temperature")+"°C");
}

function init() {
    put("time","time","20:00");
    put("day","current_day",Days.Monday);
    timeUpdate();




    //slider
    var mySlider = $("#slid").slider({
        reversed: true,
        step: step,
        id: "slidcolor"
    });

    $("#raiseT").text(mySlider.slider('getValue').toFixed(1));

    mySlider.on("change", function (x) {
        $("#raiseT").text(x.value.newValue.toFixed(1));
    });

    //runtime
    window.setInterval(timeUpdate, 1000);
    //gettemp
    window.setInterval(currentTemp, 1000);

}