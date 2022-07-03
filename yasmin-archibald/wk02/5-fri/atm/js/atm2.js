// Your function should either do something like change the DOM and return nothing, or it should query something and return a value, like pull information from the DOM, or use a global variable. ~ doesn't apply 100% of the time~

$("document").ready(function () {
  let total = 0;
  // $("#savings-deposit").on("click", function () {
  //   let savingsInputAmount = $("#savings-amount").val();
  //   const numSavingsInputStr = checkInputStr(savingsInputAmount);
  //   if (numSavingsInputStr) {
  //     const deStrSavingsNum = deString(savingsInputAmount);
  //     whichAccount(accounts.savings);
  //     // const newTotal = addToTotal(deStrSavingsNum);
  //   }
  // });

  $("#checking-deposit").on("click", function () {
    let inputAmount = $("#checking-amount").val();
    const numInputStr = checkInputStr(inputAmount); //is it a number or not?
    if (numInputStr) {
      const deStrNumInput = deString(inputAmount); //ok now let's unstring it
      const newTotal = addToTotal(deStrNumInput);
      updateDisplay(newTotal);
      inputReset();
      if (zeroBalance !== 0) {
        $("#checking-balance").removeClass("zero");
      }
    }
  });

  $("#checking-withdraw").on("click", function () {
    let inputAmount = $("#checking-amount").val();
    const numInputStr = checkInputStr(inputAmount);
    if (numInputStr) {
      const deStrNumInput = deString(inputAmount);
      const hadEnoughFunds = enoughFundsOrNo(deStrNumInput);
      if (hadEnoughFunds) {
        const newTotal = subFrmTotal(deStrNumInput);
        updateDisplay(newTotal);
        inputReset();
        if (zeroBalance()) {
          $("#checking-balance").addClass("zero");
        }
      }
    }
  });

  const addToTotal = function (deStrNumInput) {
    total += deStrNumInput;
    return total;
  };

  const subFrmTotal = function (deStrNumInput) {
    total -= deStrNumInput;

    return total;
  };

  const updateDisplay = function (total) {
    $("#checking-balance").text("$" + total);
  };

  const inputReset = function () {
    $("#checking-amount").val("");
  };

  const checkInputStr = function (input) {
    if (isNaN(input)) {
      alert(
        "Check input for typos. You have included letters or symbols. Please only enter numbers"
      );
      return false;
    } else {
      return true;
    }
  };

  const deString = function (inputAmount) {
    const numInput = parseInt(inputAmount);
    return numInput;
  };

  const enoughFundsOrNo = function (numInput) {
    if (numInput <= total) {
      return true;
    } else if (numInput > total) {
      alert("Insufficient Funds");
      return false;
    }
  };

  const zeroBalance = function () {
    if (total === 0) {
      return true;
    } else {
      return false;
    }
  };
});
