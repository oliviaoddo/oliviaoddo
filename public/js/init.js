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
    }); // end of document ready
})(jQuery); // end of jQuery name space
