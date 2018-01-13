
$(document).ready(function(){

  $(".form-group").submit(function(event){
      event.preventDefault();

      var choice1 = $("#questOne").val();
      var choice2 = $("#questTwo").val();
      var choice3 = $("#questThree").val();
      var choice4 = $("#questFour").val();
      var choice5 = $("#questFive").val();
      var choice6 = $("#questSix").val();
      var choice7 = $("#questSeven").val();

    if(choice1 == "#a1" || choice2 == "#b1" || choice3 == "#c1"){
      $("#java-track").show();
    }else if(choice2 == "#a2" || choice == "#b2" || choice == "#c2"){
      $("#css-track").show();
    }else if(choice3 == "#a3" || choice == "#b3" || choice == "#c3"){
      $("#ruby-track").show();
    }else if(choice4 == "#a1" || choice == "#b2" || choice == "#c3"){
      $("#php-track").show();
      $("#c#-track").show();
    }else if(choice5 == "#d1" || choice == "#e2" || choice == "#f3"){
      $("#c#-track").show();
    }else{
      $("#c#-track").show();
    }

  });
});

/*

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

*/
