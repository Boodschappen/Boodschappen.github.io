/*function init() {
    window.addEventListener('click', function(e){
        
    });
}

window.onload = init();*/

var s;
window.onload = init();
function init(){
	s = 0;
}
function clickFunction(x) {
	if (!(s==x)) {
		$("#bach").addClass("fp-button-clicked");
		$("#prem").addClass("fp-button-clicked");
		$("#mast").addClass("fp-button-clicked");
		s = x;
    } else if (s==x) {
        $("#bach").removeClass("fp-button-clicked");
		$("#prem").removeClass("fp-button-clicked");
		$("#mast").removeClass("fp-button-clicked");
		s = 0;
    }
	if (x==1){
		$("#bach-dropdown").collapse("toggle");
		$("#prem-dropdown").collapse("hide");
		$("#mast-dropdown").collapse("hide");
	}
	if (x==2){
		$("#bach-dropdown").collapse("hide");
		$("#prem-dropdown").collapse("toggle");
		$("#mast-dropdown").collapse("hide");
	}
	if (x==3){
		$("#bach-dropdown").collapse("hide");
		$("#prem-dropdown").collapse("hide");
		$("#mast-dropdown").collapse("toggle");
	}
}