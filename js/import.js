function myFunction() {
    // Get the value of the name input field
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;



    // Check if the name field is empty
    if (name === "" || email === "" || message === "") {
        swal("Error", "Complete todos los campos", "error");
        return;
    }

    // Show the confirmation dialog
    swal({
        title: "Seguro de enviar",
        text: "Puedes Modificar tu respuesta! Estas a tiempo",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("Tu respuesta ha sido enviada correctamente!", {
                    icon: "success"
                });

                // Limpiar los campos
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                
            } else {
                swal("Modifica o cambia tu respuesta!");
            }
        });
}
