$(document).ready(function(){
  const checks = [3, 2, 1];
  $("#roboger").submit(function(event){
    event.preventDefault();
    const userNumber = $("#userInput1").val();

    function checkNumbers(userInput){
      for(let i = 0; i < checks.length; i++){
        if(userInput.includes(checks[i])){
          console.log(true);
          break
        } else {
          console.log(false);
        }
      }
    }

    checkNumbers(userNumber);
  })

})