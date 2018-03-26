
////////////////////////////////////////////// VARIABLES //////////////////////////////////////////////
// Create an array of topics
let topics = ['penguin', 'buckethead', 'foxes', 'antarctica', 'detroit lions', 'herbie hancock', 'techno', 'clear'
,'michigan', 'shred', 'transit', 'winter', 'spring', 'summer', 'autumn' , 'crystals', 'bootsy', 'flint'];


////////////////////////////////////////////// FUNCTIONS //////////////////////////////////////////////

function createButtons() {
    // Deleting any topic buttons prior to adding new buttons
    // (this is necessary otherwise we will have repeat buttons)
    $('.js-buttons').empty();

    // Loop through the length of our topics:
    for (let i = 0; i < topics.length; i++) {
        // Then dynamicaly generating buttons for each topic in the array.
        // This code $("<button>") will create start&end button tags(<button></button>)
        let newButton = $("<button>");
        // Adding classes to each button:
        newButton.addClass("bold button but-mar js-button pointer");
        // Adding a data-attribute with a value of the topic at index i:
        newButton.attr("data-name", topics[i]);
        // Providing the button's text with a value of the topic at index i:
        newButton.text(topics[i]);
        // Adding the button to the div in the HTML:
        $('.js-buttons').append(newButton);
    }
}

function displayGifs() {
    console.log('You clicked a button!');
    $('.js-gifs-view').empty();
    let topic = $(this).attr("data-name");
    let queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + topic + '&limit=10&api_key=7nyQTw7YiI7ppj7UYC7izsawmgyVHhae';

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        let results = response.data;
        console.log(results);
        
         // Looping over every result item
        for (i = 0; i < results.length; i++) {
            // Creating a div with the class "item"
            let gifDiv = $("<div class='item'>");
            // Storing the result item's rating
            let rating = results[i].rating;

            // Creating a paragraph tag with the result item's rating
            let p = $("<p>").text("Rating: " + rating);

            // Creating an image tag
            let newGif = $("<img>");
            newGif.addClass('pointer js-gif')

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item
            newGif.attr("src", results[i].images.fixed_height_still.url);
            newGif.attr("data-still", results[i].images.fixed_height_still.url);
            newGif.attr("data-animate", results[i].images.fixed_height.url);
            newGif.attr("data-state", 'still');

            // Appending the paragraph and newGif we created to the "gifDiv" div we created
            gifDiv.append(p);
            gifDiv.append(newGif);

            // Prepending the gifDiv to the '.js-gifs-view' div in the HTML
            $('.js-gifs-view').prepend(gifDiv);
        }
        createButtons();
    });
}

createButtons();

////////////////////////////////////////////////// EVENTS //////////////////////////////////////////////////

  $(document).on("click", ".js-button", displayGifs);

  $(document).on("click", '.js-gif' , function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element:
    var state = $(this).attr("data-state");
    // Console log the state of the gif:
    console.log('This is the state: ' + state);
    console.log('Src attr is: ' + $(this).attr('src'));
    // If the clicked image's state is still...
    if (state === "still") {
      // ...update its src attribute to what its data-animate value is.
      $(this).attr("src", $(this).attr("data-animate"));
      // Then, set the image's data-state to animate
      $(this).attr("data-state", "animate");
      // Else set src to the data-still value
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });


  $("#add-topic").on("click", function(event) {
    event.preventDefault();

    // This line grabs the input from the textbox
    let topic = $("#topic-input").val().trim();

    // Adding the topic from the textbox to our array
    topics.push(topic);
    console.log(topics);

    // Calling createButtons which handles the processing of our topics array
    createButtons();
  });

    // $('.js-button').on("click", function(event) {
    //     event.preventDefault();

    // This line grabs the input from the textbox
    // let movie = $("#movie-input").val().trim();

    // Adding the movie from the textbox to our array
    // movies.push(movie);
    // console.log(movies);

    // Calling renderButtons which handles the processing of our movie array
    //     renderButtons();
    //   });