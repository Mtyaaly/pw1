function login() {
    event.preventDefault();

    let uname =  document.getElementById("username").value;
    let pwd = document.getElementById("password").value;

    if (uname == "mutia2023" && pwd == "integrity") {
        location.replace("sukses.html");
        alert("Login Berhasil");
    } else {
        alert("Login Gagal");
    }
}