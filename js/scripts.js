$(document).ready(function(){

  $("#roboger").submit(function(event){
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
      

    const results = $("#results");
    function filterNumbers(userInput){
      results.children("#results-list").text("");
      let numberRange = getNumberRange(userInput);
      let finalOutput = checkNumbers(numberRange);
      finalOutput.forEach( output => results.children("#results-list").append("<li>" + output + "</li>"));
    }
      event.preventDefault()
      filterNumbers(originalInput);
      userInput = $("input#userInput1").val("");
  })

})