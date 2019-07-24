//gif creator, use giphy to populate web page with a given word for a specific theme.
//remember api parameters like q, limit, and rating
//create an array of strings , each related to a topic i like. save to a variable called 'topics'.
//take the topics and create buttons in the html
//use loop to append buttons for each string 
//when button is clicked, grab 10 gifs (non-animated) and place on page
//on click, the gif should animate. click again to stop
//display rating of gif under each respective gif
//add a form to add a value to the topics array. make function call that takes each topic and remakes the buttons on the page.
$("#carouselControls1").hide();
$("#carouselControls2").hide();
$("#carouselControls3").hide();
$("#button1").on("click", function() {
    var animal = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=12";
    $(this).hide();
    $("#carouselControls1").show();

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        var results = response.data;

        for (var i = 0; i < 4; i++) {
          var animalDiv = $("<div>");
          $(animalDiv).css('margin', "1em");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var animalImage = $("<img>");
          animalImage.attr("src", results[i].images.fixed_height.url);

          animalDiv.prepend(p);
          animalDiv.prepend(animalImage);

          $("#displayGifs1a").prepend(animalDiv);
        }

        for (var i = 4; i < 8; i++) {
            var animalDiv = $("<div>");
            $(animalDiv).css('margin', "1em");
  
            var rating = results[i].rating;
  
            var p = $("<p>").text("Rating: " + rating);
  
            var animalImage = $("<img>");
            animalImage.attr("src", results[i].images.fixed_height.url);
  
            animalDiv.prepend(p);
            animalDiv.prepend(animalImage);
  
            $("#displayGifs1b").prepend(animalDiv);
        }

        for (var i = 8; i < 12; i++) {
        var animalDiv = $("<div>");
        $(animalDiv).css('margin', "1em");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var animalImage = $("<img>");
        animalImage.attr("src", results[i].images.fixed_height.url);

        animalDiv.prepend(p);
        animalDiv.prepend(animalImage);

        $("#displayGifs1c").prepend(animalDiv);
        }

        
      console.log(response);



    });
  });

  $("#button2").on("click", function() {
    var animal = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=12";
    $(this).hide();  
    $("#carouselControls2").show();

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        var results = response.data;

        for (var i = 0; i < 4; i++) {
          var animalDiv = $("<div>");
          $(animalDiv).css('margin', "1em");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var animalImage = $("<img>");
          animalImage.attr("src", results[i].images.fixed_height.url);

          animalDiv.prepend(p);
          animalDiv.prepend(animalImage);

          $("#displayGifs2a").prepend(animalDiv);
        }

        for (var i = 4; i < 8; i++) {
            var animalDiv = $("<div>");
            $(animalDiv).css('margin', "1em");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var animalImage = $("<img>");
            animalImage.attr("src", results[i].images.fixed_height.url);

            animalDiv.prepend(p);
            animalDiv.prepend(animalImage);

            $("#displayGifs2b").prepend(animalDiv);
            }

        for (var i = 8; i < 12; i++) {
        var animalDiv = $("<div>");
        $(animalDiv).css('margin', "1em");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var animalImage = $("<img>");
        animalImage.attr("src", results[i].images.fixed_height.url);

        animalDiv.prepend(p);
        animalDiv.prepend(animalImage);

        $("#displayGifs2c").prepend(animalDiv);
        }


      console.log(response);



    });
  });

  $("#button3").on("click", function() {
    var animal = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=12";
    $(this).hide();  
    $("#carouselControls3").show();

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        var results = response.data;

        for (var i = 0; i < 4; i++) {
          var animalDiv = $("<div>");
          $(animalDiv).css('margin', "1em");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var animalImage = $("<img>");
          animalImage.attr("src", results[i].images.fixed_height.url);

          animalDiv.prepend(p);
          animalDiv.prepend(animalImage);

          $("#displayGifs3a").prepend(animalDiv);
        
        }

        for (var i = 4; i < 8; i++) {
        var animalDiv = $("<div>");
        $(animalDiv).css('margin', "1em");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var animalImage = $("<img>");
        animalImage.attr("src", results[i].images.fixed_height.url);

        animalDiv.prepend(p);
        animalDiv.prepend(animalImage);

        $("#displayGifs3b").prepend(animalDiv);
        
        }

        for (var i = 8; i < 12; i++) {
        var animalDiv = $("<div>");
        $(animalDiv).css('margin', "1em");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var animalImage = $("<img>");
        animalImage.attr("src", results[i].images.fixed_height.url);

        animalDiv.prepend(p);
        animalDiv.prepend(animalImage);

        $("#displayGifs3c").prepend(animalDiv);
        
        }


      console.log(response);



    });
  });