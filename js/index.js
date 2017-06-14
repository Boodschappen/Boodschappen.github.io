var virtualOrigin = Date.parse("2012-01-01T00:00:04"),
    realOrigin = Date.parse("2012-01-01T00:00:00"),
    factor = 300;

function getVirtual(time) {
    return new Date( virtualOrigin + (time - realOrigin) * factor );
}

function pad2(num) {
    return ("0"+num).substr(-2);
}
function format(time) {
     return time.getDate()
        + "-" + (time.getMonth()+1)
        + "-" + time.getFullYear()
        + " " + pad2(time.getHours())
        + ":" + pad2(time.getMinutes())
}

function startTime() {
    var now = new Date();
    var display = getVirtual(now);
    output.innerText = format(display);
    setTimeout(startTime, 1000/factor - (now.getMilliseconds() % (1000/factor)));
}

var step=0.1;

function raise() {
	var current = mySlider.slider('getValue');
	mySlider.slider('setValue',current + step, false, true)
}

function lower() {
	var current = mySlider.slider('getValue');
	mySlider.slider('setValue',current - step, false, true)
}

var output = document.getElementById("clock");
startTime();


//slider
var mySlider = $("#slid").slider({
	reversed: true,
	step: step,
	id: "slidcolor"
});

$("#raiseT").text(mySlider.slider('getValue'));

mySlider.on("change",function(x){
	$("#raiseT").text(x.value.newValue);
});
