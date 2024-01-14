function customAlert(title, text) {
  let customAlert, alertTitle, alertText, btn;

  if (document.getElementById("customAlert")) {
    updateAlert(title, text);
  } else {
    createAlert(title, text);
  }

  function createAlert(title, text) {
    const content = document.createElement("div");
    content.className = "content";

    alertTitle = document.createElement("h2");
    alertTitle.id = "alertTitle";
    alertTitle.textContent = title;

    const hr = document.createElement("hr");
    hr.className = "hr";

    alertText = document.createElement("p");
    alertText.id = "alertText";
    alertText.textContent = text;

    btn = document.createElement("button");
    btn.id = "btn";
    btn.className = "btn";
    btn.textContent = "OK";

    content.append(alertTitle, hr, alertText, btn);

    customAlert = document.createElement("div");
    customAlert.id = "customAlert";
    customAlert.className = "modal";
    customAlert.appendChild(content);

    document.body.appendChild(customAlert);
  }

  function updateAlert(title, text) {
    document.getElementById("alertTitle").textContent = title;
    document.getElementById("alertText").textContent = text;
    customAlert = document.getElementById("customAlert");
    customAlert.style.display = "";
  }

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

  btn = btn ? btn : document.getElementById("btn");
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
