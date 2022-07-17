$("document").ready(function () {
  let checkingAmount = 0;
  let savingsAmount = 0;
  $("#checking-balance").css("background-color", "red");
  $("#savings-balance").css("background-color", "red");

  //depositing money
  $("#checking-deposit").on("click", function () {
    const input = $("#checking-amount").val();
    if (validInput(input)) {
      depositMoney("checking", Number(input));
      $("#checking-amount").val("");
    }
  });

  $("#savings-deposit").on("click", function () {
    const input = $("#savings-amount").val();
    if (validInput(input)) {
      depositMoney("savings", Number(input));
      $("#savings-amount").val("");
    }
  });

  //withdrawing money
  $("#checking-withdraw").on("click", function () {
    const input = $("#checking-amount").val();
    if (validInput(input)) {
      if (Number(input) > checkingAmount + savingsAmount) {
        alert("Not enough money in accounts.");
      } else {
        withdrawMoney("checking", Number(input));
        $("#checking-amount").val("");
      }
    }
  });

  $("#savings-withdraw").on("click", function () {
    const input = $("#savings-amount").val();
    if (validInput(input)) {
      if (Number(input) > checkingAmount + savingsAmount) {
        alert("Not enough money in accounts.");
      } else {
        withdrawMoney("savings", Number(input));
        $("#savings-amount").val("");
      }
    }
  });

  /* -----------------------------------------------------------------------
    HELPER FUNCTIONS
  ----------------------------------------------------------------------- */
  //check if input is a number
  const validInput = function (input) {
    if (!isNaN(Number(input)) && input > 0) {
      return true;
    } else {
      alert("Please input a valid amount.");
      return false;
    }
  };

  const depositMoney = function (account, amount) {
    if (account === "checking") {
      checkingAmount += amount;
      updateBalance("checking", checkingAmount);
    } else {
      savingsAmount += amount;
      updateBalance("savings", savingsAmount);
    }
    checkBalance(account);
  };

  const withdrawMoney = function (account, amount) {
    if (account === "checking") {
      if (amount > checkingAmount) {
        savingsAmount -= amount - checkingAmount;
        checkingAmount = 0;
        updateBalance("savings", savingsAmount);
      } else {
        checkingAmount -= amount;
      }
      updateBalance("checking", checkingAmount);
    } else {
      if (amount > savingsAmount) {
        checkingAmount -= amount - savingsAmount;
        savingsAmount = 0;
        updateBalance("checking", checkingAmount);
      } else {
        savingsAmount -= amount;
      }
      updateBalance("savings", savingsAmount);
    }
  };

  const updateBalance = function (account, amount) {
    if (account === "checking") {
      $("#checking-balance").text(`$${amount}`);
    } else {
      $("#savings-balance").text(`$${amount}`);
    }
    checkBalance(account);
  };

  const checkBalance = function (account) {
    if (account === "checking") {
      if (checkingAmount === 0) {
        $("#checking-balance").css("background-color", "red");
      } else {
        $("#checking-balance").css("background-color", "gray");
      }
    } else {
      if (savingsAmount === 0) {
        $("#savings-balance").css("background-color", "red");
      } else {
        $("#savings-balance").css("background-color", "gray");
      }
    }
  };
});
