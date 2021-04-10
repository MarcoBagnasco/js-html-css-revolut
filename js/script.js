$(document).ready(function() {
    /*********
     * DROPDOWN MENU
     *********/

    // REFERENCES
    var dropDown = $('.dropdown-list > li');
    var dropMenu = dropDown.children('.dropdown-menu');

    dropMenu.hide(); //For hide display flex features menu

    // Drop on Click
    dropDown.click(function(){
        var activeMenu = $(this).children('.dropdown-menu');
        
        //reset
        dropMenu.not(activeMenu).hide();
        
        activeMenu.toggle();
    })

    //Click everywhere for hide
    $(document).click(function(e) {
        console.log(e);
        if(!$(e.target).is(dropDown)){
            dropMenu.hide(); //For hide display flex features menu
        }
    })
    //End Doc Ready
});