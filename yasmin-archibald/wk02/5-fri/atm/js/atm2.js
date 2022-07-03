// Your function should either do something like change the DOM and return nothing, or it should query something and return a value, like pull information from the DOM, or use a global variable. ~ doesn't apply 100% of the time~

$("document").ready(function () {
  let total = 0;
  let checkingTotal = 0;
  let savingsTotal = 0;

  $("#savings-deposit").on("click", function () {
    let savingsInput = $("#savings-amount").val();
    const savingsInputStr = checkInputStr(savingsInput);
    if (savingsInputStr) {
      const deStringSavingsInput = deString(savingsInput);
      addToTotal(deStringSavingsInput);
      const savingsTotal = addToSavings(deStringSavingsInput);
      updateSavingsDisplay(savingsTotal);
      inputResetSaving();
      if (zeroBalanceSaving !== 0) {
        $("#savings-balance").removeClass("zero");
      }
    }
    console.log(total);
  });

  $("#savings-withdraw").on("click", function () {
    let savingsInput = $("#savings-amount").val();
    const savingsInputStr = checkInputStr(savingsInput);
    if (savingsInputStr) {
      const deStringSavingsInput = deString(savingsInput);
      const hadEnoughFunds = enoughFundsOrNoSaving(deStringSavingsInput);
      if (hadEnoughFunds) {
        subFrmTotal(deStringSavingsInput);
        const newTotal = subFrmSaving(deStringSavingsInput);
        updateSavingsDisplay(newTotal);
        inputResetSaving();
        if (zeroBalanceSaving()) {
          $("#savings-balance").addClass("zero");
        }
      }
    }
    console.log(total);
  });

  $("#checking-deposit").on("click", function () {
    let inputAmount = $("#checking-amount").val();
    const numInputStr = checkInputStr(inputAmount); //is it a number or not?
    if (numInputStr) {
      const deStrNumInput = deString(inputAmount); //ok now let's unstring it
      addToTotal(deStrNumInput);
      const checkingTotal = addToChecking(deStrNumInput);
      updateCheckingDisplay(checkingTotal);
      inputReset();
      if (zeroBalanceChecking !== 0) {
        $("#checking-balance").removeClass("zero");
      }
    }
  });

  $("#checking-withdraw").on("click", function () {
    let inputAmount = $("#checking-amount").val();
    const numInputStr = checkInputStr(inputAmount);
    if (numInputStr) {
      const deStrNumInput = deString(inputAmount);
      const hadEnoughFunds = enoughFundsOrNoChecking(deStrNumInput);
      if (hadEnoughFunds) {
        subFrmTotal(deStrNumInput);
        const newTotal = subFrmChecking(deStrNumInput);
        updateCheckingDisplay(newTotal);
        inputReset();
        if (zeroBalanceChecking()) {
          $("#checking-balance").addClass("zero");
        }
      }
    }
  });

  const subFrmSaving = function (deStringSavingsInput) {
    savingsTotal -= deStringSavingsInput;
    return savingsTotal;
    //
  };
  const addToSavings = function (deStringSavingsInput) {
    savingsTotal += deStringSavingsInput;
    return savingsTotal;
  };
  const addToChecking = function (deStrNumInput) {
    checkingTotal += deStrNumInput;
    return checkingTotal;
  };

  const subFrmChecking = function (deStrNumInput) {
    checkingTotal -= deStrNumInput;
    return checkingTotal;
  };

  const addToTotal = function (deStrNumInput) {
    total += deStrNumInput;
    return total;
  };

  const subFrmTotal = function (deStrNumInput) {
    total -= deStrNumInput;

    return total;
  };

  const updateCheckingDisplay = function (checkingTotal) {
    $("#checking-balance").text("$" + checkingTotal);
  };

  const updateSavingsDisplay = function (savingsTotal) {
    $("#savings-balance").text("$" + savingsTotal);
  };

  const inputReset = function () {
    $("#checking-amount").val("");
  };
  const inputResetSaving = function () {
    $("#savings-amount").val("");
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

  const enoughFundsOrNoChecking = function (numInput) {
    if (numInput <= checkingTotal) {
      return true;
    } else if (numInput > total) {
      alert("Insufficient Funds");

      return false;
    }
  };

  const zeroBalanceChecking = function () {
    if (checkingTotal === 0) {
      return true;
    } else {
      return false;
    }
  };

  const enoughFundsOrNoSaving = function (numInput) {
    if (numInput <= savingsTotal) {
      return true;
    } else if (numInput > savingsTotal) {
      alert("Insufficient Funds");

      return false;
    }
  };

  const zeroBalanceSaving = function () {
    if (savingsTotal === 0) {
      return true;
    } else {
      return false;
    }
  };

  const overDraftSavings = function () {
    if (numInput > savingsTotal && numInput <= total) {
      return true;
    } else {
      return false;
    }
  };
});
