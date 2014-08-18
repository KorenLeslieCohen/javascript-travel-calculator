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

function getTotal() {
    $("#accordion").submit(function(event) {

      // AMOUNT 1
      var amount1 = parseFloat($('#amount1').val());
      if ($("#amount1").val().length == 0) {
        amount1 = defaultValue;
      } else if ((amount1 != parseFloat(amount1)) && (amount1 != defaultValue)) {
        amount1 = defaultValue;
      } else {
          total += amount1;
      }

      // AMOUNT 2
      var amount2 = parseFloat($('#amount2').val());
      if ($("#amount2").val().length == 0) {
        amount2 = defaultValue;
      } else if ((amount2 != parseFloat(amount2)) && (amount2 != defaultValue)) {
        amount2 = defaultValue;
      } else {
          total += amount2;
      }

      // AMOUNT 3
      var amount3 = parseFloat($('#amount3').val());
      if ($("#amount3").val().length == 0) {
        amount3 = defaultValue;
      } else if ((amount3 != parseFloat(amount3)) && (amount3 != defaultValue)) {
        amount3 = defaultValue;
      } else {
          total += amount3;
      }

      // AMOUNT 4
      var amount4 = parseFloat($('#amount4').val());
      if ($("#amount4").val().length == 0) {
        amount4 = defaultValue;
      } else if ((amount4 != parseFloat(amount4)) && (amount4 != defaultValue)) {
        amount4 = defaultValue;
      } else {
          total += amount4;
      }

      // AMOUNT 5
      var amount5 = parseFloat($('#amount5').val());
      if ($("#amount5").val().length == 0) {
        amount5 = defaultValue;
      } else if ((amount5 != parseFloat(amount5)) && (amount5 != defaultValue)) {
        amount5 = defaultValue;
      } else {
          total += amount5;
      }

      // HOTEL
      var hotel_amount = (parseFloat($('#hotel-price').val()) * parseFloat($('#hotel-nights').val()));
      if (($("#hotel-price").val().length == 0) || ($("#hotel-nights").val().length == 0)) {
        hotel_amount = defaultValue;
      } else if ((hotel_amount != parseFloat(hotel_amount)) && (hotel_amount != defaultValue)) {
        hotel_amount = defaultValue;
      } else {
        total += hotel_amount;
      }

      // HOTEL SERVICES
      var hotel_services = parseFloat($('#hotel-services').val());
      if ($("#hotel-services").val().length == 0) {
        hotel_services = defaultValue;
      } else if ((hotel_services != parseFloat(hotel_services)) && (hotel_services != defaultValue)) {
        hotel_services = defaultValue;
      } else {
          total += hotel_services;
      }

      // FOOD
      var food_amount = (parseFloat($('#food-daily').val()) * parseFloat($('#food-days').val()));
      if (($("#food-daily").val().length == 0) || ($("#food-days").val().length == 0)) {
        food_amount = defaultValue;
      } else if ((food_amount != parseFloat(food_amount)) && (food_amount != defaultValue)) {
        food_amount = defaultValue;
      } else {
        total += food_amount;
      }

      // NIGHTLIFE
      var night_amount = (parseFloat($('#nightlife-price').val()) * parseFloat($('#nightlife-days').val()));
      if (($("#nightlife-price").val().length == 0) || ($("#nightlife-days").val().length == 0)) {
        night_amount = defaultValue;
      } else if ((night_amount != parseFloat(night_amount)) && (night_amount != defaultValue)) {
        night_amount = defaultValue;
      } else {
        total += night_amount;
      }

      // ATTRACTIONS
      var attractions = parseFloat($('#attractions').val());
      if ($("#attractions").val().length == 0) {
        attractions = defaultValue;
      } else if ((attractions != parseFloat(attractions)) && (attractions != defaultValue)) {
        attractions = defaultValue;
      } else {
          total += attractions;
      }
      
      // SHOPPING
      var shopping = parseFloat($('#shopping').val());
      if ($("#shopping").val().length == 0) {
        shopping = defaultValue;
      } else if ((shopping != parseFloat(shopping)) && (shopping != defaultValue)) {
        shopping = defaultValue;
      } else {
          total += shopping;
      }

      // PASSPORTS
      var passports = parseFloat($('#passports').val());
      if ($("#passports").val().length == 0) {
        passports = defaultValue;
      } else if ((passports != parseFloat(passports)) && (passports != defaultValue)) {
        passports = defaultValue;
      } else {
          total += passports;
      }

      // INSURANCE
      var insurance = parseFloat($('#insurance').val());
      if ($("#insurance").val().length == 0) {
        insurance = defaultValue;
      } else if ((insurance != parseFloat(insurance)) && (insurance != defaultValue)) {
        insurance = defaultValue;
      } else {
          total += insurance;
      }

      // LUGGAGE
      var luggage = parseFloat($('#luggage').val());
      if ($("#luggage").val().length == 0) {
        luggage = defaultValue;
      } else if ((luggage != parseFloat(luggage)) && (luggage != defaultValue)) {
        luggage = defaultValue;
      } else {
          total += luggage;
      }

      // OTHER
      var other = parseFloat($('#other').val());
      if ($("#other").val().length == 0) {
        other = defaultValue;
      } else if ((other != parseFloat(other)) && (other != defaultValue)) {
        other = defaultValue;
      } else {
          total += other;
      }

      event.preventDefault();
      $("#total").text("The Damage: $"+(total.toFixed(2)));

    })
  };

  getTotal();

  $("#reset").click(function(event) {
    total = 0;
    $("#total").text("The Damage: $"+(total));
  event.preventDefault();
  });

});



