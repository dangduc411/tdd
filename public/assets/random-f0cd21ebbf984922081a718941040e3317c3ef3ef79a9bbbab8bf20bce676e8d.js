function Change(){var t=jQuery.parseJSON(localStorage.getItem("temp")),e=Math.floor(Math.random()*t.length+0);if(""==t[e][0]?$("#kanji").text(t[e][1]):$("#kanji").text(t[e][0]),$("#hira").text(t[e][1]),$("#mean").text(t[e][2]),t.splice(e,1),0==t.length){var a=jQuery.parseJSON(localStorage.getItem("round"));a+=1,localStorage.setItem("round",a),$("#round").text(a),t=jQuery.parseJSON(localStorage.getItem("data"))}localStorage.setItem("temp",JSON.stringify(t))}$("#random-box").click(function(){Change()}),$("#info-button").click(function(){$("#kanji").show(),$("#hira").show(),$("#mean").show()}),$(".btn.btn-secondary").click(function(){setTimeout(function(){$("#kanji").hide(),$("#hira").hide(),$("#mean").hide();var t=$(".btn.btn-secondary.active").children().attr("name");$("#"+t).show()},300)});