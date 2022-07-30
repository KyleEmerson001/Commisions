$("input:radio[name=tops], input:radio[name=bottoms]").click(function() { // This handler runs when any of the radio buttons are clicked.
    var topsValue = $("input:radio[name=tops]:checked").val(); // Find which tops radio button is checked.
    var bottomsValue = $("input:radio[name=bottoms]:checked").val(); // Find which bottoms radio button is checked.

    var image_name = ""; // Initialize the image name to blank. We will be appending as we go.

    switch (topsValue) {
        case 'Rack':
            image_name += "Rack"; // Rack was selected, so use that value for the first part of the image.
            break;
        case 'NoRack':
            image_name += "Without-Rack"; // No Rack was selected, so use that value for the first part of the image.
            break;
        default:
            image_name += "Rack"; // Make sure there is a default value, or a broken image could occur!
            break;
    }

    switch (bottomsValue) {
        case 'Black':
            image_name += "-BK.jpg"; // Black was selected, so use that value for the last part of the image.
            break;
        case 'Gray':
            image_name += "-GY.jpg"; // Gray was selected, so use that value for the last part of the image.
            break;
        default:
            image_name += "-BK.jpg"; // Make sure there is a default value, or a broken image could occur!
            break;
    }

    $('#front').attr('src', image_name); // Put the image value in the formula image field src.
});
