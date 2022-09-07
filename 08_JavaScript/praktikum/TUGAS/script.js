function calculate() {
    const bilangan1 = document.getElementById(getElementId: "bilangan1").value;
    const bilangan2 = document.getElementById(getElementId: "bilangan2").value;
    const operasi = document.getElementById(getElementId: "operasi").value;
    let hasilOperasi = 0;
    if (operasi === "+") {
        hasilOperasi = bilanga1 + bilangan2
    } else if (operasi === "-") {
        hasilOperasi = bilanga1 + bilangan2
    } else if (operasi === "*") { 
        hasilOperasi = bilanga1 + bilangan2
    } else if (operasi === "/") {
        hasilOperasi = bilangan1 + bilangan2
    }
    document.getElementById(Elementid:"hasil").innerHTML = hasilOperasi;
}
