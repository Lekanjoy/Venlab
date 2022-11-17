const servicesBox = document.getElementById("services-dropdown");
const servicesDropdown = document.getElementById("services-arrow");

// Services Dropdown event
servicesDropdown.addEventListener("click", () => {
  servicesBox.classList.toggle("showDropdown");
  console.log("clicked");
});

const supportBox = document.getElementById("support-dropdown");
const supportDropdown = document.getElementById("support-arrow");

// Support Dropdown event
supportDropdown.addEventListener("click", () => {
  supportBox.classList.toggle("showDropdown");
  console.log("clicked");
});

window.addEventListener("click", (e) => {
  if (e.target.id !== "services-dropdown" && e.target.id !== "services-arrow") {
    servicesBox.classList.remove("showDropdown");
  }
});

window.addEventListener("click", (e) => {
  if (e.target.id !== "support-dropdown" && e.target.id !== "support-arrow") {
    supportBox.classList.remove("showDropdown");
  }
});
