let accountBalance = 10000;
const balanceDisplay = document.getElementById("balance");
const message = document.getElementById("message");

function updateBalance() {
  balanceDisplay.textContent = `Current Balance: ₹${accountBalance}`;
}

function showMessage(text, color = "#fff") {
  message.style.color = color;
  message.textContent = text;
}

function deposit() {
  let amount = Number(document.getElementById("amount").value);
  if (amount <= 0) {
    showMessage("❌ Invalid Deposit Amount!", "red");
    return;
  }
  accountBalance += amount;
  updateBalance();
  showMessage(
    `✅ Deposited ₹${amount}. New Balance: ₹${accountBalance}`,
    "lightgreen",
  );
}

function withdraw() {
  let amount = Number(document.getElementById("amount").value);
  if (amount <= 0) {
    showMessage("❌ Invalid Withdrawal Amount!", "red");
    return;
  }
  if (amount > accountBalance) {
    showMessage("❌ Insufficient Balance!", "orange");
    return;
  }
  accountBalance -= amount;
  updateBalance();
  showMessage(
    `💸 Withdrawn ₹${amount}. New Balance: ₹${accountBalance}`,
    "#fca311",
  );
}

function calculateInterest() {
  let rate = Number(document.getElementById("rate").value) || 5;
  let years = Number(document.getElementById("years").value) || 1;

  let interest = (accountBalance * rate * years) / 100;
  let total = accountBalance + interest;

  showMessage(
    `💰 Interest: ₹${interest.toFixed(
      2,
    )} | Total after ${years} year(s): ₹${total.toFixed(2)}`,
    "lightblue",
  );
}

function exitBank() {
  // ✅ Don't reset the balance here
  document.getElementById("amount").value = "";
  document.getElementById("rate").value = "";
  document.getElementById("years").value = "";
  showMessage("🏦 Thank you for using QuickBank!", "#fca311");
}
