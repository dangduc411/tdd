function Change(){console.log("5"),(a=jQuery.parseJSON(localStorage.getItem("round")))!=$("#round").text()&&$("#round").text(a);var e=jQuery.parseJSON(localStorage.getItem("temp")),t=Math.floor(Math.random()*e.length+0);if(""==e[t][0]?$("#kanji").text(e[t][1]):$("#kanji").text(e[t][0]),$("#hira").text(e[t][1]),$("#mean").text(e[t][2]),e.splice(t,1),UpdatePercent(),0==e.length){var a=jQuery.parseJSON(localStorage.getItem("round"));a+=1,localStorage.setItem("round",a),e=jQuery.parseJSON(localStorage.getItem("data"))}localStorage.setItem("temp",JSON.stringify(e))}function UpdatePercent(){console.log("6");var e=jQuery.parseJSON(localStorage.getItem("data")).length,t=100-100*jQuery.parseJSON(localStorage.getItem("temp")).length/e;$(".progress-bar").width(t+"%")}$(document).ready(function(){console.log("1");var e=$("#data").text();localStorage.setItem("data",e),localStorage.setItem("temp",e),localStorage.setItem("round",1),Change(),$(".btn.btn-secondary.active").trigger("click")}),$("#random-box").click(function(){if(console.log("2"),$("#kanji").is(":visible")&&$("#hira").is(":visible")&&$("#mean").is(":visible")){$("#kanji").hide(),$("#hira").hide(),$("#mean").hide();var e=$(".btn.btn-secondary.active").children().attr("name");$("#"+e).show()}Change()}),$("#info-button").click(function(){console.log("3"),$("#kanji").show(),$("#hira").show(),$("#mean").show()}),$(".btn.btn-secondary").click(function(){console.log("4"),setTimeout(function(){$("#kanji").hide(),$("#hira").hide(),$("#mean").hide();var e=$(".btn.btn-secondary.active").children().attr("name");$("#"+e).show()},300)});