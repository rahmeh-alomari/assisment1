jQuery(document).ready(function () {
  jQuery("#loading").fadeOut(500);
  jQuery("#material-tabs").each(function () {
    var $active,
      $content,
      $links = $(this).find("a");

    $active = jQuery($links[0]);
    $active.addClass("active");

    $content = $($active[0].hash);

    $links.not($active).each(function () {
      jQuery(this.hash).hide();
    });

    jQuery(this).on("click", "a", function (e) {
      $active.removeClass("active");
      $content.hide();

      $active = jQuery(this);
      $content = jQuery(this.hash);

      $active.addClass("active");
      $content.show();

      e.preventDefault();
    });
  });
  jQuery("#September").click(function () {
    jQuery(".search").hide();
  });
  jQuery("#September").click(function () {
    jQuery(".search2").addClass("myClass");
  });
});

jQuery(document).ready(function () {});

jQuery(document).ready(function () {
  jQuery("#weekly-plans").click(function () {
    jQuery(".search2").removeClass("myClass");
  });
  jQuery("#weekly-plans").click(function () {
    jQuery(".search").show();
  });
});
