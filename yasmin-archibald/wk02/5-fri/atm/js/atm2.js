// Your function should either do something like change the DOM and return nothing, or it should query something and return a value, like pull information from the DOM, or use a global variable. ~ doesn't apply 100% of the time~
$("document").ready(function () {
  let total = 0;
  $("#checking-deposit").on("click", function (total) {
    let inputAmount = $("#checking-amount").val();
    const numInputStr = checkInputStr(inputAmount); //is it a number or not?
    const numInput = deString(numInputStr); //ok now let's unstring it
    const newTotal = addToTotal(numInput);
    updateDisplay(newTotal);
    inputReset();
  });

  const addToTotal = function (numInput) {
    total += numInput;
    return total;
  };

  const subFrmTotal = function (numInput) {
    total -= numInput;
    return total;
  };

  const updateDisplay = function (newTotal) {
    $("#checking-balance").text("$" + newTotal);
  };

  const inputReset = function () {
    $("#checking-amount").val("");
  };

  const checkInputStr = function (inputAmount) {
    if (isNaN($("#checking-amount").text())) {
      return inputAmount;
    } else {
      alert(
        "Check input for typos. You have included letters or symbols. Please only enter numbers"
      );
    }
  };

  const deString = function (inputAmount) {
    const numInput = parseInt($("#checking-amount").val());
    return numInput;
  };

  const enoughFundsOrNo = function (numInput) {
    if (inputAmount > total) {
      return inputAmount;
    } else if (inputAmount < total) {
      alert("Insufficient Funds");
    }
  };
});
