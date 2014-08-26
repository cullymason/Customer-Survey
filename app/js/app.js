var updateTotal = function() {

	var answer1 = parseFloat($("h1#answer-1-value").text());
	var answer2 = parseFloat($("h1#answer-2-value").text());
	var answer3 = parseFloat($("h1#answer-3-value").text());
	var answer4 = parseFloat($("h1#answer-4-value").text());

	var total = (answer1*.2 + answer2*.4 + answer3*.2 + answer4*.2);
	$("span#answers-total").text(total.toFixed(1));
};


var sliderOptions = {
	precision: 2,
	value: 3.5,
	step: 0.1,
	min: 0,
	max: 4.0,
	tooltip: "hide"
};

$("input#answer-1").slider(sliderOptions).on('slide', function(slideEvt) {
	var text = slideEvt.value.toFixed(1);
	$("h1#answer-1-value").text(text);
	updateTotal();
});

$("input#answer-2").slider(sliderOptions).on('slide', function(slideEvt) {
	var text = slideEvt.value.toFixed(1);
	$("h1#answer-2-value").text(text);
	updateTotal();
});

$("input#answer-3").slider(sliderOptions).on('slide', function(slideEvt) {
	var text = slideEvt.value.toFixed(1);
	$("h1#answer-3-value").text(text);
	updateTotal();
});

$("input#answer-4").slider(sliderOptions).on('slide', function(slideEvt) {
	var text = slideEvt.value.toFixed(1);
	$("h1#answer-4-value").text(text);
	updateTotal();
});