function Place(city, landmark, president) {
debugger;
  this.city = city;
  this.landmark = landmark;
  this.president = president;
};

Place.prototype.fullName = function() {
  return this.city + ", " + this.landmark + ", " + this.president;
};

$(document).ready(function() {

  $("form#new-place").submit(function(event) {
    event.preventDefault();

  $("#add-destination").click(function() {
  });

  var inputCity = $("input#new-city").val();
  var inputLandmark = $("input#new-landmark").val();
  var inputPresident = $("input#new-president").val();
  var newPlace = new Place(inputCity, inputLandmark, inputPresident);

  $("ul#destination").append("<li><span class='Place'>" + newPlace.fullName() + "</span></li>");

  $("input#new-city").val("");
  $("input#new-landmark").val("");
  $("input.president").val("");

  $(".destination").last().click(function() {
    $("#show-destination").show();
    $("#show-destination h2").text(newPlace.fullName());
    $(".city").text(newDestination.city);
    $(".landmark").text(newDestination.landmark);
    $(".president").text(newDestination.president);
    $("ul#destination").text("");
    newPlace.destination.forEach(function(Place) {
      $("ul#destination").append("<li>" + Place.fullPlace() + "</li>");


    });
  });


 });
});
