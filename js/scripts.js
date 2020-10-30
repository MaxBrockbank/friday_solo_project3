$(document).ready(function(){

  $("#roboger").submit(function(event){
    const userInput = $("#userInput1").val();
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
      console.log(output);
      output = output.map( number => {
        for(let i = 0; i < checks.length; i++){
          if(number.includes(checks[i])){
            number = replacements[i];
            console.log(number);
          }
        };
      });
      console.log(output);
    }


    function filterNumbers(userInput){
      let numberRange = getNumberRange(userInput);
      checkNumbers(numberRange);
    }
      event.preventDefault()
      filterNumbers(userInput);
  })

})