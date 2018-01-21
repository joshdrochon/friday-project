
$(document).ready(function(){

  $("#form-questionaire").submit(function(event){
      event.preventDefault();

      var questions = ["#q1", "#q2", "#q3", "#q4", "#q5", "#q6", "#q7"];

      var left = [];
      var right = [];
      var both = [];

      for(i = 0; i <= questions.length; i++){
        grabResponse();
      }

      var grabResponse = function(){

        //var radios = getElementsByClassName('choice');

        for(i = 0; i <= responses.length i++){

          var responses = ["#a1", "#a2", "#a3"];

          if($("input").val() === left){
            left.push(input);
          }else if($("input").val() === right){
            right.push(input);
          }else{
            both.push(input);
          }

        }//end for loop

      }//end function


  });
});


    // if(left.length ==== 7){
    //   $("#java-track").show();
    // }else if(right.length === 7){
    //   $("#css-track").show();
    // }else if(both.lenth === 7){
    //   $("#ruby-track").show();
    // }else if(left.lenth >= 4 && left.length < 7){
    //   $("#php-track, #java-track").show();
    // }else if(right.length >= 4 && right.length < 7){
    //   $("#css-track, #ruby-track").show();
    // }else if(both.lenth >= 4 && both.lenth < 7){
    //   $("#ruby-track, #c#-track").show();
    // }else{
    //   $("#c#-track").show();
    // }
