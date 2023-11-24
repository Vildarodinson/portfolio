function submitForm() {
  const submitButton = document.getElementById("submitBtn");
  submitButton.disabled = true;

  const statusMessage = document.getElementById("statusMessage");
  statusMessage.innerHTML = "Submitting...";

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const comments = document.getElementById("comments").value;

  const formData = {
    firstName,
    lastName,
    email,
    subject,
    comments,
  };

  fetch("http://localhost:3000/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      statusMessage.innerHTML = "submitted successfully!";
      console.log(data);
    })
    .catch((error) => {
      statusMessage.innerHTML = "Error submitting the form. Please try again.";
      console.error("Error:", error);
    });
}
