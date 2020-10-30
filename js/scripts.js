$(document).ready(function(){

  const checks = [3, 2, 1];
  const replacements = ["Won't you be my neighbor?", "Boop!", "Beep!"];
  let range = [];

  $("#roboger").submit(function(event){
    event.preventDefault();
    const userInput = $("#userInput1").val();

    function checkNumbers(userInput){
      let output = userInput.toString();
      for(let i = 0; i < checks.length; i++){
        if(userInput.includes(checks[i])){
          output = output.replace(userInput, replacements[i]);
          console.log(output);
        } else {
          // console.log(checks[i]);
          // console.log(replacements[i]);
          console.log(false)
        }
      }
    }

    function getNumberRange(userInput){
      range = [];
      let userNumber = parseInt(userInput);
      do {
        range.push(userNumber);
        userNumber --;
      } while( userNumber > 0 )
      console.log(range);
    }


    // checkNumbers(userInput);
    getNumberRange(userInput);
  })

})