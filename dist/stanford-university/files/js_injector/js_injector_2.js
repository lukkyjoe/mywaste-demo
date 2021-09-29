(function ($) {
  Drupal.behaviors.searchHideHeader = {
    attach: function(context, settings) {
      $( "#edit-search-block-form--2" )
        .focusout(function() {
        $( "#block-menu-block-19" ).fadeIn("slow");
      })
      .focusin(function() {
        $( "#block-menu-block-19" ).fadeOut();
      });
    }
  }
}(jQuery));