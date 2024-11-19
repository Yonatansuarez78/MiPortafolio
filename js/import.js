function confirmAndSubmit() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Check if the form fields are empty
  if (name === "" || email === "" || message === "") {
    swal("Error", "Complete todos los campos", "error");
  } else {
    // Show the confirmation dialog
    swal({
      title: "Seguro de enviar",
      text: "Puedes modificar tu respuesta. ¿Estás seguro de enviar el formulario?",
      icon: "warning",
      buttons: ["Cancelar", "Enviar"],
      dangerMode: true,
    }).then((willSubmit) => {
      if (willSubmit) {
        document.getElementById("contact-form").submit();
      } else {
        swal("Modifica o cambia tu respuesta!");
      }
    });
  }
}