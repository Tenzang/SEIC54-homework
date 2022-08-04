//putting it outside doc ready so you can test it in the console
const checkForZero = function () {
  $(".zero").removeClass("zero");
  const checkingBalance = +$("#checking-balance").text().slice(1);
  if (checkingBalance <= 0) {
    $("#checking-balance").addClass("zero");
  }
};

$(document).ready(function () {
  checkForZero();

  $("#checking-deposit").on("click", function () {
    // get the current balance
    const currentBalance = +$("#checking-balance").text().slice(1);
    // get the deposit
    const depositAmount = +$("#checking-amount").val();
    // add two
    const newBalance = currentBalance + depositAmount;
    // update the balance on screen
    $("#checking-balance").text("$" + newBalance);
  });

  $("#checking-withdraw").on("click", function () {
    //get the current balance
    const currentBalance = +$("#checking-balance").text().slice(1);
    //get the withdraw amount
    const withdrawAmount = +$("#checking-amount").val();
    const otherBalance = +$("#savings-balance").text().slice(1);
    const totalBalance = otherBalance + currentBalance;
    //subtract the two
    const newBalance = currentBalance - withdrawAmount;
    if (newBalance >= 0) {
      $("#checking-balance").text("$" + newBalance);
    } else if (withdrawAmount <= totalBalance) {
      $("#checking-balance").text($0);
      $("#savings-balance").text($ + (otherBalance + newBalance));
    }
  });

  $("#savings-deposit").on("click", function () {
    // get the current balance
    const currentBalance = +$("#savings-balance").text().slice(1);
    // get the deposit
    const depositAmount = +$("#savings-amount").val();
    // add two
    const newBalance = currentBalance + depositAmount;
    // update the balance on screen
    $("#savings-balance").text("$" + newBalance);
  });
  $("#savings-withdraw").on("click", function () {
    //get the current balance
    const currentBalance = +$("#savings-balance").text().slice(1);
    //get the withdraw amount
    const withdrawAmount = +$("#savings-amount").val();
    //subtract the two
    const otherBalance = $("#checking-balance").text().slice(1);

    const newBalance = currentBalance - withdrawAmount;
    const totalBalance = otherBalance + currentBalance;
    if (newBalance >= 0) {
      $("#savings-balance").text("$" + newBalance);
    }
  });
});
