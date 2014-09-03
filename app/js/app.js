

var numberOfQuestions = 4,
	defaultValue =3.5;


var sliderOptions = {
	precision: 2,
	value: defaultValue,
	step: 0.1,
	min: 0,
	max: 4.0
};


var updateTotal = function() {
	var answer1 = parseFloat($("h1#answer-1-value").text());
	var answer2 = parseFloat($("h1#answer-2-value").text());
	var answer3 = parseFloat($("h1#answer-3-value").text());
	var answer4 = parseFloat($("h1#answer-4-value").text());

	var total = (answer1*.2 + answer2*.4 + answer3*.2 + answer4*.2);
	$("span#answers-total").text(total.toFixed(1));
	$("#hidden-answer-total").val(total.toFixed(1));

};

var updateAnswerValue = function(evt, ui) {
	var questionNumber = evt.data.q;
	var sliderValue = ui.value;
	$('#answer-'+questionNumber+'-value').text(sliderValue);
	$('#hidden-answer-'+questionNumber+'-value').val(sliderValue);

    updateTotal();
}




$(function() {
    for (window.question = numberOfQuestions ; window.question > 0; window.question--) {

    	var slider = $('#answer-'+window.question).slider(sliderOptions);

    	$('#answer-'+window.question).on('slide',{q: window.question},updateAnswerValue);
    };
});