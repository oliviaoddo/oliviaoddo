(function($) {
    $(function() {
        $('.button-collapse').sideNav();
        $('.parallax').parallax();
        // MODAL
        $('.modal').modal();
        // DROPDOWNS
        $('.dropdown-button').dropdown({
            belowOrigin: true
        });
        // TABS
        $('ul.tabs').tabs();
        // SCROLLSPY
        $('.scrollspy').scrollSpy();
        //SIDENAV
        $('.modal').modal();
        //MODAL
        $('.tooltipped').tooltip({delay: 50});
    }); // end of document ready
})(jQuery); // end of jQuery name space
