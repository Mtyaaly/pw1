function valid(){
    if (document.getElementById("nama").value == ""){
        alert("Nama tidak boleh kosong");
        document.getElementById("nama").focus ();
        return false;
    }
    if (document.getElementById("email").value == ""){
        alert("Eror");
        document.getElementById("email").focus ();
        return false;
    }
    if (document.getElementById("time").value == ""){
        alert("Eror");
        document.getElementById("time").focus ();
        return false;
    }
    if (document.getElementById("tujuan").value == ""){
        alert("Eror");
        document.getElementById("tujuan").focus ();
        return false;
    }
    if (document.getElementById("tiket").value == ""){
        alert("Eror");
        document.getElementById("tiket").focus ();
        return false;
    }
}