$(document).ready(function() {
  var data = $("#data").text();
  localStorage.setItem('data', data);
  localStorage.setItem('temp', data);
  localStorage.setItem('round', 1);
  Change();
  $('.btn.btn-secondary.active').trigger('click');
});

$("#random-box").click(function(){
  if($("#kanji").is(":visible") && $("#hira").is(":visible") && $("#mean").is(":visible")){
    $("#kanji").hide();
    $("#hira").hide();
    $("#mean").hide();
    var elementShow = $(".btn.btn-secondary.active").children().attr("name");
    $("#"+elementShow).show();
  }
  Change();
});

// Button info
$("#info-button").click(function(){
  $("#kanji").show();
  $("#hira").show();
  $("#mean").show();
});

// Hide all element and check which element will be show.
$(".btn.btn-secondary").click(function(){
  setTimeout(function(){
    $("#kanji").hide();
    $("#hira").hide();
    $("#mean").hide();
    var elementShow = $(".btn.btn-secondary.active").children().attr("name");
    $("#"+elementShow).show();
  }, 300);
});

function Change(ArrId){
  var round = jQuery.parseJSON(localStorage.getItem('round'));
  if(round != $("#round").text()){
    $("#round").text(round);
  }

  var kanji_only = $("#kanji_only").is(":checked");
  var temp = jQuery.parseJSON(localStorage.getItem('temp'));
  var x = Math.floor((Math.random() * temp.length) + 0);

  // If kanji is empty and kanji_only is true, skip this word
  while(kanji_only && temp[x][0] == ''){
    temp.splice(x, 1);
    x = Math.floor((Math.random() * temp.length) + 0);
    UpdatePercent(temp.length);
    if(temp.length == 0){
      var round = jQuery.parseJSON(localStorage.getItem('round'));
      round += 1;
      localStorage.setItem('round', round);
      temp = jQuery.parseJSON(localStorage.getItem('data'));
    }
    localStorage.setItem('temp', JSON.stringify(temp));
  }

  // Set data to html
  if(temp[x][0] == ''){
    $("#kanji").text(temp[x][1]);
  }else{
    $("#kanji").text(temp[x][0]);
  }
  $("#hira").text(temp[x][1]);
  $("#mean").text(temp[x][2]);

  // Remove displayed word and update percent
  temp.splice(x, 1);
  UpdatePercent(temp.length);
  
  // Reset if end of word array
  if(temp.length == 0){
    var round = jQuery.parseJSON(localStorage.getItem('round'));
    round += 1;
    localStorage.setItem('round', round);
    temp = jQuery.parseJSON(localStorage.getItem('data'));
  }
  localStorage.setItem('temp', JSON.stringify(temp));
}

function UpdatePercent(LengthOfTempArray){
  var total = jQuery.parseJSON(localStorage.getItem('data')).length;
  var percent = ((total-LengthOfTempArray)*100)/total;
  $(".progress-bar").width(percent + '%');
}
;
