$( "#search-bethnal-tube" ).on( "click", function() {
  // api request to be sent on button click
  $("main").html('')
  $.getJSON("https://api.tfl.gov.uk/Line/central/Arrivals/940GZZLUBLG?direction=inbound&app_id=&app_key=", function (data){
  // leave this blank for now but inside this function we will write the code to manipulate the API requests

      var sorted = data.sort(function(a,b){
        return a.timeToStation - b.timeToStation
      });

      sorted.forEach(function(data){
        console.log(data)
        $("<p>" + data.destinationName + " " + (moment().add(data.timeToStation, 'seconds').fromNow()) + "</p>").appendTo("main")
      });
  });

});
