function validar() {
    // Expresión regular para la contraseña
    let regex_password = /^(?=[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    // Obtener los valores de los campos de la contraseña
    let new_password = document.getElementById("new-password").value;
    let confirm_password = document.getElementById("confirm-password").value;
    let indicio = document.getElementById("indicio").value;

    // Validar que la contraseña siga la expresión regular
    if (!regex_password.test(new_password)) {
        alert("La contraseña debe empezar por una letra mayúscula, tener un mínimo de 6 caracteres y contener, al menos, un dígito");
        document.getElementById("new-password").focus();
        document.getElementById("new-password").select();
        return false;
    }

    // Si la confirmación de la contraseña no es igual a la nueva contraseña devuelve false
    if (confirm_password !== new_password) {
        alert("Las contraseñas escritas no coinciden. Vuelve a intentarlo");
        document.getElementById("new-password").focus();
        document.getElementById("new-password").select();
        return false;
    }

    // Validar que el indicio de contraseña nunca pueda contener la contraseña
    if (indicio.includes(new_password)) {
        alert("El indicio de contraseña no puede contener la contraseña");
        document.getElementById("indicio").focus();
        document.getElementById("indicio").select();
        return false;
    }

    // Si pasa todas las validaciones devuelve true
    return true;
}