$(document).ready(function(){
  $("#gomb1").click(function(){
    $("#lista11").hide();
    $("#lista21").hide();
    $("#link").hide();
  });
  
  $("#gomb2").click(function(){
    $("#lista11").hide();
    $("#lista21").hide();
    $("#link").hide();
    $("#gomb2").hide();
  });
  
  $("#gomb3").click(function(){
    $("h1").hide();
    $("#lista11").hide();
    $("#lista21").hide();
    $("#link").hide();
  });
  
  $("#gomb4").click(function(){
    $("#lista11").hide();
    $("#lista21").hide();
    $("#link").hide();
    $("a").text("");
  });
  
  $("#gomb5").click(function(){
    $("#lista11").hide();
    $("#lista21").hide();
    $("table tr:odd").hide();
    $("#link").hide();
  });
});