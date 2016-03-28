$(function() {
    // Change this selector to find whatever your 'boxes' are
    var boxes = $(".doris");

    // Set up click handlers for each box
    boxes.click(function() {
       
        var el = $(this), // The box that was clicked
            max = $( this ).css( "z-index" );

        // Find the highest z-index
    
        // Set the box that was clicked to the highest z-index plus one
        el.css("z-index", max -15 );
    });
    
     var tboxes = $(".tdoris");

    // Set up click handlers for each box
    tboxes.click(function() {
     
        var el = $(this), // The box that was clicked
            max = $( this ).css( "z-index" );

        // Find the highest z-index
    
        // Set the box that was clicked to the highest z-index plus one
        el.css("z-index", max -15 );
    });
    
    var gboxes = $(".fifth_boris");

    // Set up click handlers for each box
    gboxes.click(function() {
        
        var el = $(this), // The box that was clicked
            max = $( this ).css( "z-index" );

        // Find the highest z-index
        // Set the box that was clicked to the highest z-index plus one
        el.css("z-index", max -15 );
    });
    
});