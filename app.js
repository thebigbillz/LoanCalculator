// Listen for submit
document.getElementById("loan-form").addEventListener("submit", function (e) {
  //Hide REsults
  document.getElementById("results").style.display = "none";
  //Show Loader
  document.getElementById("loader").style.display = "block";
  // Display Results
  setTimeout(calculateResults, 2000);
  e.preventDefault();
});

//Calculate Results
function calculateResults(e) {
  //Hide Loader
  document.getElementById("loader").style.display = "none";

  //UI Variables
  const amountToLoan = document.getElementById("amount");
  const intrest = document.getElementById("intrest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalIntrest = document.getElementById("total-intrest");

  // Intrest Calaculation Variables
  const principal = parseFloat(amountToLoan.value);
  const rate = parseFloat(intrest.value) / 100;
  const time = parseFloat(years.value);

  // Calculate Intrest
  const intrestValue = principal * rate * time;

  // Populate Results and Error Checking
  if (intrestValue) {
    document.getElementById("results").style.display = "block";
    totalPayment.value = (principal + intrestValue).toFixed(2);
    monthlyPayment.value = ((principal + intrestValue) / 12).toFixed(2);
    totalIntrest.value = intrestValue.toFixed(2);
  } else {
    showError("Check Your Numbers");
  }
}

function showError(error) {
  // Create a Div
  const errorDiv = document.createElement("div");
  // Add Class
  errorDiv.className = "alert alert-danger";
  // Add error Text
  errorDiv.innerText = error;
  // Get DOM Elements

  const heading = document.querySelector(".heading");

  //Insert Error above Heading
  heading.insertAdjacentElement("afterend", errorDiv);

  // Clear Error
  setTimeout(() => {
    errorDiv.remove();
  }, 2000);
}
