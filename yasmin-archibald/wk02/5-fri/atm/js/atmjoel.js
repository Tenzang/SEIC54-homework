const render = function () {
  // Our handy render() function updates every single part of the dom with the latest values from our accounts object

  $("#checking-balance").text("$" + accounts.checkingBalance);
  $("#savings-balance").text("$" + accounts.savingsBalance);

  //todo: handle red zero stuff
};

$(document).ready(function () {
  $("#checking-deposit").on("click", function () {
    const amount = $("#checking-amount").val();
    accounts.checkingDeposit(amount);
    $("#checking-balance").text("$" + accounts.checkingBalance);
    render();
  });

  $("#checking-withdraw").on("click", function () {
    const amount = $("#checking-amount").val();
    accounts.checkingWithdraw(amount);
    $("#saving-balance").text("$" + accounts.savingsWithdraw);
    render();
  });

  $("#saving-deposit").on("click", function () {
    const amount = $("#savings-amount").val();
    accounts.savingsDeposit(amount);
    $("#savings-balance").text("$" + accounts.savingsBalance);
    render();
  });

  $("#saving-withdraw").on("click", function () {
    const amount = $("#savings-amount").val();
    accounts.savingsWithdraw(amount);
    $("#savings-amount").val();
    accounts.savingsWithdraw(amount);
    $("#savings-balance").text("$" + accounts.savingsWithdraw);
    render();
  });
});
