// note to future me.. the class of .zero is already in the css file. You just have to add the class with jQuery to whatever it is you want to make red and under what cirucumstances

$("document").ready(function () {
  $("#checking-deposit").on("click", depositing);
  $("#checking-withdraw").on("click", function () {
    const checkingBalanceText = $("#checking-balance").text(); //grabbing it
    const checkingBalanceNumStr = checkingBalanceText.substr(1); // splitting it so it's the num not the $
    const checkingBalanceNum = parseInt(checkingBalanceNumStr);
    const checkingInputNum = parseInt($("#checking-amount").val());

    if (checkingBalanceNum >= checkingInputNum) {
      const newBalance = checkingBalanceNum - checkingInputNum;
      $("#checking-balance").text("$" + newBalance); //the checking balance screen's aka checking-balance text is now showing what was in the input aka checking-amount
      $("#checking-amount").val(""); //rests the input val to an empty string
    } else if (checkingBalanceNum < checkingInputNum) {
      return alert(
        "You cannot withdraw more than the sum of your account funds"
      );
    }
  });
});


const isItANumber = function ($("#checking-amount")) {
  return isNaN($("#checking-amount").text);
  //is NOT a NUMBER
};

const depositing = function () {
  const checkingBalanceText = $("#checking-balance").text(); //grabbing it
  const checkingBalanceNumStr = checkingBalanceText.substr(1); // splitting it so it's the num not the $
  const checkingBalanceNum = parseInt(checkingBalanceNumStr);
  const checkingInputNum = parseInt($("#checking-amount").val());
  const newBalance = checkingInputNum + checkingBalanceNum;

  if (isItANumber()) $("#checking-balance").text("$" + newBalance); //the checking balance screen's aka checking-balance text is now showing what was in the input aka checking-amount
  $("#checking-amount").val(""); //rests the input val to an empty string
};