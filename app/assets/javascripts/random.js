$("#random-box").click(function(){
  console.log();
  if($("#kanji").is(":visible") && $("#hira").is(":visible") && $("#mean").is(":visible")){
    $("#kanji").hide();
    $("#hira").hide();
    $("#mean").hide();
    var elementShow = $(".btn.btn-secondary.active").children().attr("name");
    $("#"+elementShow).show();
  }
  Change();
});

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
  var temp = jQuery.parseJSON(localStorage.getItem('temp'));
  var x = Math.floor((Math.random() * temp.length) + 0);
  if(temp[x][0] == ''){
    $("#kanji").text(temp[x][1]);
  }else{
    $("#kanji").text(temp[x][0]);
  }
  $("#hira").text(temp[x][1]);
  $("#mean").text(temp[x][2]);
  temp.splice(x, 1);
  if(temp.length == 0){
    var round = jQuery.parseJSON(localStorage.getItem('round'));
    round += 1;
    localStorage.setItem('round', round);
    temp = jQuery.parseJSON(localStorage.getItem('data'));
  }
  localStorage.setItem('temp', JSON.stringify(temp));
};