$(document).ready(function(){

  $("form#questOne").submit(function(event){

    var choice1 = $("#questOne").val();
  });

  $("form#questTwo").submit(function(event){

    var choice2 = $("#questTwo").val();
  });

  $("form#questThree").submit(function(event){

    var choice3 = $("#questThree").val();
  });

  $("form#questFour").submit(function(event){

    var choice4 = $("#questFour").val();
  });

  $("form#questFive").submit(function(event){

    var choice5 = $("#questFive").val();
  });

  $("form#questSix").submit(function(event){

    var choice6 = $("#questSix").val();
  });

  $("form#questSeven").submit(function(event){

    var choice7 = $("#questSeven").val();
  });

    if(left.length ==== 7){
      $("#java-track").show();
    }else if(right.length === 7){
      $("#css-track").show();
    }else if(both.lenth === 7){
      $("#ruby-track").show();
    }else if(left.lenth >= 4 && left.length < 7){
      $("#php-track, #java-track").show();
    }else if(right.length >= 4 && right.length < 7){
      $("#css-track, #ruby-track").show();
    }else if(both.lenth >= 4 && both.lenth < 7){
      $("#ruby-track, #c#-track").show();
    }else{
      $("#c#-track").show();
    }
});
//if user selects id a1, b1 c1 display java Track
//if user selects a2 || b2 || c2 display css track
//if suer selects a3 b3 c3 display Ruby
//select a1 && b1 && c1 && d1 Java
// a2 && b2 && c2 && d2 CSS
//a3 b


if(choice == "#a1" || choice == "#b1" || choice == "#c1"){
  $("#java-track").show();
}else if(choice == "#a2" || choice == "#b2" || choice == "#c2"){
  $("#css-track").show();
}else if(choice == "#a3" || choice == "#b3" || choice == "#c3"){
  $("#ruby-track").show();
}else if(choice == "#a1" || choice == "#b2" || choice == "#c3"){
  $("#php-track").show();
  $("#c#-track").show();
}else if(choice == "#d1" || choice == "#e2" || choice == "#f3"){
  $("#c#-track").show();
}else{
  $("#c#-track").show();
}



//var left = new Array();
//var right = new Array();
//var both = new Array();

//leftResponses[] = leftResponses.push()
