$(document).ready(function(){
  $("#roboger").submit(function(event){
    // Business
    let userInput = $("#userInput1").val();
    const originalInput = $("#userInput1").val();
    const checks = ["3", "2", "1"];
    const replacements = ["Won't you be my neighbor?", "Boop!", "Beep!"];
    let range = [];
    function getNumberRange(userInput){
      range = [];
      let userNumber = parseInt(userInput);
      do {
        range.push(userNumber);
        userNumber --;
      } while( userNumber > 0 )
      range.reverse();
      return range;
    }

    function checkNumbers(numberRange){
      let output = numberRange.map(String);
      for (let i = 0; i < output.length; i++){
        for(let j = 0; j < checks.length; j++){
          if(output[i].includes(checks[j])){
            output[i] = output[i].replace(output[i], replacements[j])
          }
        }
      }
      return output;
    }
      
    //UI
    const results = $("#results");
    function filterNumbers(userInput){
      $("input#userInput1").removeClass("error");
      results.children("#results-list").text("");
      if(userInput > 0){
        let numberRange = getNumberRange(userInput);
        let finalOutput = checkNumbers(numberRange);
        results.children("#results-number").text("You have " +finalOutput.length+  " results:")
        finalOutput.forEach( output => results.children("#results-list").append("<li>" + output + "</li>"));
        results.fadeIn();
        $("input#userInput1").blur()
      } else {
        $("#userInput1").addClass("error");
        results.children("#results-number").text("You have to enter a number for this to work");
        results.fadeIn();
        $("input#userInput1").blur()
      }
    }
      event.preventDefault()
      filterNumbers(originalInput);
      userInput = $("input#userInput1").val("");
  })

})