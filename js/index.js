function customAlert(title, text) {
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

  function hideAlert() {
    customAlert.style.display = "none";
    btn.removeEventListener("click", hideAlert);
    window.removeEventListener("click", clickOutside);
  }

  function clickOutside(event) {
    if (event.target === customAlert) {
      hideAlert();
    }
  }

  btn.addEventListener("click", hideAlert);
  window.addEventListener("click", clickOutside);
}

function showAlert() {
  const title = document.getElementById("title").value.trim();
  const text = document.getElementById("text").value.trim();

  if (!title) {
    customAlert("Error", "Please fill title field.");
    return;
  }
  if (!text) {
    customAlert("Error", "Please fill text field.");
    return;
  }
  customAlert(title, text);
}
