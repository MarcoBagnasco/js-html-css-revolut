$(document).ready(function() {
    /*********
     * DROPDOWN MENU
     *********/

    // REFERENCES
    var dropDown = $('.dropdown-list > li');
    var dropMenu = dropDown.children('.dropdown-menu');

    // Drop on Click
    dropDown.click(function(){
        var activeMenu = $(this).children('.dropdown-menu');

        //reset
        dropMenu.not(activeMenu).hide();

        activeMenu.toggle();
    })
    //End Doc Ready
});