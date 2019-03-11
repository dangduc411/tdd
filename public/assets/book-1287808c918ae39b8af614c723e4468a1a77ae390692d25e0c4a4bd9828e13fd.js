$(".select").click(function () {
  // waiting for all element animated complete and check
  setTimeout(function(){
    var selecting = $("button.active").length;
    var isShowing = $("#multi-random").is(":visible");
    // if button select is checked and button multi-random is not display
    if (selecting > 0 && isShowing != true) {
      // display button multi-random
      $("#multi-random").slideToggle("100");
    }
    // if button not have any button select was checked
    else if (selecting == 0) {
      // hide button multi-random
      $("#multi-random").slideToggle("100");
    }
    // if selecting 3 sheet, cannot select more
    if(selecting >= 3) {
      $("button.select:not(.active)").prop('disabled', true);
    }
    else if (selecting < 3) {
      $("button.select:not(.active)").prop('disabled', false); 
    }
  }, 300);
})

$("#multi-random").click(function (){
  var selected_quantity = $("button.active").length;
  var worksheet_title_array = '';
  for (var i = 0; i < selected_quantity; i++) {
    worksheet_title_array += $("button.active").eq(i).attr('id') + ',';
  }
  worksheet_title_array = worksheet_title_array.substring(0, worksheet_title_array.length - 1);

  var link_multi_random = $("#link_multi_random").attr('href');
  link_multi_random = link_multi_random+'?'+worksheet_title_array;
  $("#link_multi_random").attr('href', link_multi_random);
  window.location.href = link_multi_random;
});
