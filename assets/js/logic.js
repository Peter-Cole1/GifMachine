//A heads up: I didn't have time to make the website mobile-responsive, get the gifs to pause correctly, or generate
//a new topic via an input bar



$("#carouselControls1").hide();
$("#carouselControls2").hide();
$("#carouselControls3").hide();
$("#button1").on("click", function() {
    var topic = $(this).attr("data-topic");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      topic + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=12";
    $(this).hide();
    $("#carouselControls1").show();

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        var results = response.data;

        for (var i = 0; i < 4; i++) {
          var topicDiv = $("<div>");
          $(topicDiv).css('margin', "1em");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var topicImage = $("<img>");
          topicImage.attr("src", results[i].images.fixed_height.url, "data-state");

          topicDiv.prepend(p);
          topicDiv.prepend(topicImage);

          $("#displayGifs1a").prepend(topicDiv);


        }

        for (var i = 4; i < 8; i++) {
            var topicDiv = $("<div>");
            $(topicDiv).css('margin', "1em");
  
            var rating = results[i].rating;
  
            var p = $("<p>").text("Rating: " + rating);
  
            var topicImage = $("<img>");
            topicImage.attr("src", results[i].images.fixed_height.url);
  
            topicDiv.prepend(p);
            topicDiv.prepend(topicImage);
  
            $("#displayGifs1b").prepend(topicDiv);
        }

        for (var i = 8; i < 12; i++) {
        var topicDiv = $("<div>");
        $(topicDiv).css('margin', "1em");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var topicImage = $("<img>");
        topicImage.attr("src", results[i].images.fixed_height.url);

        topicDiv.prepend(p);
        topicDiv.prepend(topicImage);

        $("#displayGifs1c").prepend(topicDiv);
        }

        
      console.log(response);



    });
  });

  $("#button2").on("click", function() {
    var topic = $(this).attr("data-topic");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      topic + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=12";
    $(this).hide();  
    $("#carouselControls2").show();

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        var results = response.data;

        for (var i = 0; i < 4; i++) {
          var topicDiv = $("<div>");
          $(topicDiv).css('margin', "1em");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var topicImage = $("<img>");
          topicImage.attr("src", results[i].images.fixed_height.url);

          topicDiv.prepend(p);
          topicDiv.prepend(topicImage);

          $("#displayGifs2a").prepend(topicDiv);
        }

        for (var i = 4; i < 8; i++) {
            var topicDiv = $("<div>");
            $(topicDiv).css('margin', "1em");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var topicImage = $("<img>");
            topicImage.attr("src", results[i].images.fixed_height.url);

            topicDiv.prepend(p);
            topicDiv.prepend(topicImage);

            $("#displayGifs2b").prepend(topicDiv);
            }

        for (var i = 8; i < 12; i++) {
        var topicDiv = $("<div>");
        $(topicDiv).css('margin', "1em");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var topicImage = $("<img>");
        topicImage.attr("src", results[i].images.fixed_height.url);

        topicDiv.prepend(p);
        topicDiv.prepend(topicImage);

        $("#displayGifs2c").prepend(topicDiv);
        }


      console.log(response);



    });
  });

  $("#button3").on("click", function() {
    var topic = $(this).attr("data-topic");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      topic + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=12";
    $(this).hide();  
    $("#carouselControls3").show();

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        var results = response.data;

        for (var i = 0; i < 4; i++) {
          var topicDiv = $("<div>");
          $(topicDiv).css('margin', "1em");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var topicImage = $("<img>");
          topicImage.attr("src", results[i].images.fixed_height.url);

          topicDiv.prepend(p);
          topicDiv.prepend(topicImage);

          $("#displayGifs3a").prepend(topicDiv);
        
        }

        for (var i = 4; i < 8; i++) {
        var topicDiv = $("<div>");
        $(topicDiv).css('margin', "1em");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var topicImage = $("<img>");
        topicImage.attr("src", results[i].images.fixed_height.url);

        topicDiv.prepend(p);
        topicDiv.prepend(topicImage);

        $("#displayGifs3b").prepend(topicDiv);
        
        }

        for (var i = 8; i < 12; i++) {
        var topicDiv = $("<div>");
        $(topicDiv).css('margin', "1em");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var topicImage = $("<img>");
        topicImage.attr("src", results[i].images.fixed_height.url);

        topicDiv.prepend(p);
        topicDiv.prepend(topicImage);

        $("#displayGifs3c").prepend(topicDiv);
        
        }


      console.log(response);



    });
  });