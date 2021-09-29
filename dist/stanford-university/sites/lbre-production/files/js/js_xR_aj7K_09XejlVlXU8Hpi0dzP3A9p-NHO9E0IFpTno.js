(function($) {

Drupal.behaviors.nojs = {
  attach: function(context, settings) {
    $('body',context).removeClass('no-js').addClass('js');
  }
};

})(jQuery);
;
(function ($) {
  $().ready(function() {
    var alertMsg = $('div.alert-success.alert-block.alert').text();
    var alertMatch = alertMsg.match(/Stanford Banner/g);
    if (alertMatch != null) {
      var newMsg = $('div.alert-success.alert-block.alert').html().replace('Stanford Banner', 'The block');
      $('div.alert-success.alert-block.alert').html(newMsg);
    }
    var alertMatch = alertMsg.match(/Stanford Contact/g);
    if (alertMatch != null) {
      var newMsg = $('div.alert-success.alert-block.alert').html().replace('Stanford Contact', 'The block');
      $('div.alert-success.alert-block.alert').html(newMsg);
    }
    var alertMatch = alertMsg.match(/Stanford Large Block/g);
    if (alertMatch != null) {
      var newMsg = $('div.alert-success.alert-block.alert').html().replace('Stanford Large Block', 'The block');
      $('div.alert-success.alert-block.alert').html(newMsg);
    }
    var alertMatch = alertMsg.match(/Stanford Postcard/g);
    if (alertMatch != null) {
      var newMsg = $('div.alert-success.alert-block.alert').html().replace('Stanford Postcard', 'The block');
      $('div.alert-success.alert-block.alert').html(newMsg);
    }
    var alertMatch = alertMsg.match(/Stanford Social Media Connect/g);
    if (alertMatch != null) {
      var newMsg = $('div.alert-success.alert-block.alert').html().replace('Stanford Social Media Connect', 'The block');
      $('div.alert-success.alert-block.alert').html(newMsg);
    }
  }); 
})(jQuery);;
(function($) {

  $(document).ready(function($) {
    // Bootstrap Carousel
    var carousels = $('.carousel');
    $.each(carousels, function(i, v) {
      var myId = 'myCarousel-' + i;
      var elem = $(v);
      elem.attr('id', myId);
      elem.find('.carousel-controls > button').attr('data-target', "#" + myId);
      stanford_carousel_add_dots(elem, myId, i);
    });

    $('.carousel .view-content').addClass('carousel-inner');
    $('.carousel .item:nth-child(1)').addClass('active');
    $('.carousel .item').attr('tabindex', '-1');
    $('.carousel .item:nth-child(1)').attr('tabindex', '0');

  });



  /**
   * Adds nav dots to the carousel
   * @param  {[type]} elem jquery selector object
   * @param  {[type]} id css id name eg: myCar-0
   * @param  {[type]} key the index id key
   */
  function stanford_carousel_add_dots($elem, $id, $key) {

    // put the ol.carousel-indicators inside the div.carousel-dots
    $elem.find('div.view-footer div.carousel-dots').append('<ol class="carousel-indicators"></ol>');
    var dots = [];

    // If we ended up with an empty array, that means there are no h2 elements.
    // Therefore, it's a carousel without captions.
    $elem.find('.views-row').each(function(i, v) {
      // Call it "Slide 1", "Slide 2" ,etc.
      var header = "Slide " + (i + 1);

      if ($(v).find("h2").length > 0) {
        header = $(v).find("h2").text();
      }

      dots.push(header);
      }
    );

    // Build the <li> elements inside of ol.carousel-indicators. There should be one <li> element for each slide, that looks like this:
    // <li data=target="myCarousel" data-slide-to="0"><a href="#">Slide Title</a></li>
    $.each(dots, function(key, value)
    {
      plusone = key + 1;
      $elem.find('.view-stanford-carousel .views-row-' + plusone + ' img').attr('id', 'stanford-carousel-slide' + plusone);
      $elem.find('.carousel-indicators').append('<li data-target="#' + $id + '" data-slide-to="' + key + '"><a role="button" href="#stanford-carousel-slide' + plusone +'">' + value + '</a></li>');
    }
    );
    // Add the "active" class to the first <li> element
    $elem.find('.carousel-indicators li').first().addClass("active");

    // Run the carousel
    if ($elem.find(".carousel-autoplay")[0]){
      $elem.carousel({
        interval: 6000, // use false to disable auto cycling, or use a number 4000
        ariaFocus: true
      });
    } else {
      $elem.carousel({
        interval: false, // use false to disable auto cycling, or use a number 4000
        ariaFocus: true
      });
    }

  } // end stanford_carousel_add_dots

})(jQuery);
;
Drupal.behaviors.stanford_event_nodes = {
  attach: function(context, settings) {
  (function ($) {
    $('.node-stanford-event .field-name-field-s-event-map-link a', context).prepend('<i class="icon-map-marker"></i> ');
    $('.node-stanford-event .field-name-field-s-event-map-link a', context).addClass('btn btn-sm');
  })(jQuery);
  }
};
;
Drupal.behaviors.stanford_events_calendar_aria = {
  attach: function(context, settings) {

    (function ($) {

      // Add accessibility controls for the small calendar widget.
      var block = $(".events-calendar-aria", context);
      if ($(context).hasClass("events-calendar-aria")) {
        block = context;
        block.find(".date-heading a").focus();
      }

      if (block.length) {
        var prev = block.find(".date-prev a");
        var next = block.find(".date-next a");
        block.attr("role", "navigation");
        block.attr("aria-label", Drupal.t("Events calendar"));
        prev.attr("aria-label", Drupal.t("Previous month"));
        next.attr("aria-label", Drupal.t("Next month"));
        $.each(block.find(".mini-day-on a"), function(i, v) {
          var mylabel = Drupal.t("See all events on ") + $(v).parents(".events-calendar-aria").find(".date-heading a").text() + " " + $(v).text();
          $(v).attr("aria-label", mylabel);
        });
        // Prevent space bar from jumping down page!
        prev.keydown(function (e) {
          var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
          if (key == 32) {
            e.preventDefault();
            $(this).trigger("click");
          }
        });
        // Next as well.
        next.keydown(function (e) {
          var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
          if (key == 32) {
            e.preventDefault();
            $(this).trigger("click");
          }
        });

      }

    })(jQuery);
  }
};
;
(function ($) {
  $().ready(function() {
    $('#block-menu-menu-admin-shortcuts-site-action .content ul.nav li.first a:first').removeAttr('href');
//    $('#block-menu-menu-admin-shortcuts-site-action .content ul.nav li.first a:first').contents().unwrap();
  });
})(jQuery);
;
