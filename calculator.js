$(document).ready(function(){

$('#accordion').hide().toggle(700);


  // ACCORDION
  $('#accordion ul ul li:odd').addClass('odd');
  $('#accordion ul ul li:even').addClass('even');
  $('#accordion > ul > li > a').click(function() {
  var checkElement = $(this).next();
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $(this).closest('li').removeClass('active');
    checkElement.slideUp('normal');
  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('#accordion ul ul:visible').slideUp('normal');
    checkElement.slideDown('normal');
  }


});



// CALCULATE
var total = 0,
    defaultValue = 0.0;
    // input = '#accordion input[type="text"]';

function getTotal() {
    $("#accordion").submit(function(event) {

      // AMOUNT 1
      var amount1 = parseFloat($('#amount1').val());

      // IF NOTHING IS THERE, SET VALUE TO 0
      if ($("#amount1").val().length == 0) {
        amount1 = defaultValue;
        // console.log($(input).val());
        // console.log(amount);
        // console.log("working");

      // IF SOMETHING OTHER THAN NUMBER, ERROR
      } else if ((amount1 != parseFloat(amount1)) && (amount1 != defaultValue)) {
        // $("#total").text("Looks like you did something wrong! Make sure all the fields have a number!");
        amount1 = defaultValue;
      // OTHERWISE, ADD AMOUNT TO VALUE
      } else {
          total += amount1;
      }

      // AMOUNT 2
      var amount2 = parseFloat($('#amount2').val());
      if ($("#amount2").val().length == 0) {
        amount2 = defaultValue;
      } else if ((amount2 != parseFloat(amount2)) && (amount2 != defaultValue)) {
        // $("#total").text("Looks like you did something wrong! Make sure all the fields have a number!");
        amount2 = defaultValue;
      } else {
          total += amount2;
      }

      // AMOUNT 3
      var amount3 = parseFloat($('#amount3').val());
      if ($("#amount3").val().length == 0) {
        amount3 = defaultValue;
      } else if ((amount3 != parseFloat(amount3)) && (amount3 != defaultValue)) {
        // $("#total").text("Looks like you did something wrong! Make sure all the fields have a number!");
        amount3 = defaultValue;
      } else {
          total += amount3;
      }

      // AMOUNT 4
      var amount4 = parseFloat($('#amount4').val());
      if ($("#amount4").val().length == 0) {
        amount4 = defaultValue;
      } else if ((amount4 != parseFloat(amount4)) && (amount4 != defaultValue)) {
        // $("#total").text("Looks like you did something wrong! Make sure all the fields have a number!");
        amount4 = defaultValue;
      } else {
          total += amount4;
      }

      // AMOUNT 5
      var amount5 = parseFloat($('#amount5').val());
      if ($("#amount5").val().length == 0) {
        amount5 = defaultValue;
      } else if ((amount5 != parseFloat(amount5)) && (amount5 != defaultValue)) {
        // $("#total").text("Looks like you did something wrong! Make sure all the fields have a number!");
        amount5 = defaultValue;
      } else {
          total += amount5;
      }

    event.preventDefault();
    $("#total").text("The Damage: $"+(total));
})
  };

  getTotal();


    $("#reset").click(function(event) {
      total = 0;
      // $("#amount1").val().hide();
      $("#total").text("The Damage: $"+(total));
    event.preventDefault();
    });

 

});



