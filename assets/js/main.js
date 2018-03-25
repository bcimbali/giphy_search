
////////////////////////////////////////////// VARIABLES //////////////////////////////////////////////
// Create an array of topics
let topics = ['penguin', 'buckethead', 'foxes', 'antarctica', 'detroitlions', 'herbiehancock', 'techno', 'clear'
,'michigan', 'shred', 'transit', 'winter', 'spring', 'summer', 'autumn' , 'crystals', 'bootsy', 'flint'];


////////////////////////////////////////////// FUNCTIONS //////////////////////////////////////////////

function createButtons() {
    // Deleting any topic buttons prior to adding new buttons
    // (this is necessary otherwise we will have repeat buttons)
    $('.js-buttons').empty();

    // Loop through the length of our topics:
    for (var i = 0; i < topics.length; i++) {
        // Then dynamicaly generating buttons for each topic in the array.
        // This code $("<button>") will create start&end button tags(<button></button>)
        var newButton = $("<button>");
        // Adding classes to each button:
        newButton.addClass("bold button but-mar pointer");
        // Adding a data-attribute with a value of the topic at index i:
        newButton.attr("data-name", topics[i]);
        // Providing the button's text with a value of the topic at index i:
        newButton.text(topics[i]);
        // Adding the button to the div in the HTML:
        $('.js-buttons').append(newButton);
    }
}

createButtons();

////////////////////////////////////////////////// EVENTS //////////////////////////////////////////////////

