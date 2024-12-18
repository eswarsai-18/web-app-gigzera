const modalOverlay = document.getElementById("modalOverlay");
const cancelBtn = document.getElementById("cancelBtn");
const saveBtn = document.getElementById("saveBtn");
const form = document.getElementById("workHistoryForm");

// Display modal by default on page load
window.onload = () => {
  modalOverlay.style.display = "flex";
};

// Cancel Button Logic: Redirect to another page
cancelBtn.addEventListener("click", () => {
  window.location.href = "GigzeraJobHistoryPop-up.html"; // Redirect to specified page
});

// Save Changes Logic: Save form data to localStorage
saveBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default form submission

  // Retrieve form data
  const savedData = {
    company: document.getElementById("company").value,
    title: document.getElementById("title").value,
    city: document.getElementById("city").value,
    country: document.getElementById("country").value,
    workedFrom: document.getElementById("workedFrom").value,
    workedTill: document.getElementById("workedTill").value,
    currentlyWorking: document.getElementById("currentlyWorking").checked,
    description: document.getElementById("description").value,
  };

  // Save form data to localStorage
  localStorage.setItem("workHistory", JSON.stringify(savedData));

  console.log("Saved Data:", savedData); // Log saved data to console
  alert("Work history saved successfully!"); // Optional: Confirmation alert

  window.location.href = "GigzeraJobHistoryPop-up.html"; // Redirect to the target page
});

// Optional: Pre-fill form data if already saved
window.addEventListener("DOMContentLoaded", () => {
  const savedData = JSON.parse(localStorage.getItem("workHistory"));
  if (savedData) {
    document.getElementById("company").value = savedData.company || "";
    document.getElementById("title").value = savedData.title || "";
    document.getElementById("city").value = savedData.city || "";
    document.getElementById("country").value = savedData.country || "";
    document.getElementById("workedFrom").value = savedData.workedFrom || "";
    document.getElementById("workedTill").value = savedData.workedTill || "";
    document.getElementById("currentlyWorking").checked =
      savedData.currentlyWorking || false;
    document.getElementById("description").value = savedData.description || "";
  }
});
