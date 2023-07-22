document.getElementById("calculateButton").addEventListener("click", function () {
    const rating = parseInt(document.getElementById("rating").value);
    if (isNaN(rating) || rating < 0 || rating > 100) {
      document.getElementById("result").textContent = "Invalid rating. Please enter a number between 0 and 100.";
    } else {
      const disabilityPercentage = calculateDisabilityPercentage(rating);
      document.getElementById("result").textContent = `Disability Percentage: ${disabilityPercentage}%`;
    }
  });
  
  function calculateDisabilityPercentage(rating) {
    // You can implement your own calculation logic here.
    // For simplicity, let's assume a linear calculation.
    return rating * 2;
  }
  