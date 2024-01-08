function showAlert(title, text) {
  const content = document.createElement("div");
  content.className = "content";

  const alertTitle = document.createElement("h2");
  alertTitle.textContent = title;

  const hr = document.createElement("hr");
  hr.className = "hr";

  const alertText = document.createElement("p");
  alertText.textContent = text;

  const btn = document.createElement("button");
  btn.className = "btn";
  btn.textContent = "OK";

  content.append(alertTitle, hr, alertText, btn);

  const customAlert = document.createElement("div");
  customAlert.className = "modal";
  customAlert.appendChild(content);

  document.body.appendChild(customAlert);

  btn.addEventListener("click", hideAlert);

  function hideAlert() {
    customAlert.style.display = "none";
  }
}

showAlert("Homework 16", "Custom alert");
