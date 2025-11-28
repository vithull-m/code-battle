document.getElementById("entryForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let lang = document.getElementById("language").value;
  let exp = document.getElementById("experience").value.trim();

  let valid = true;

  document.getElementById("nameErr").innerText = "";
  document.getElementById("langErr").innerText = "";
  document.getElementById("expErr").innerText = "";
  document.getElementById("successMsg").innerText = "";

  if (name === "") {
    document.getElementById("nameErr").innerText = "Name is required";
    valid = false;
  }

  if (lang === "") {
    document.getElementById("langErr").innerText = "Select a language";
    valid = false;
  }

  if (exp === "" || exp < 0) {
    document.getElementById("expErr").innerText = "Enter valid experience";
    valid = false;
  }

  if (valid) {
    document.getElementById("successMsg").innerText = "Form submitted successfully!";
  }
});