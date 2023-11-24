function submitForm() {
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

  console.log("Form Data:", formData);

  fetch("http://localhost:3000/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
