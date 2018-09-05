function checkCard() {
    number = $("#cardNumber").val();
    crypt = $("#cryptogramme").val();
    month = $("#month").val();
    year = $("#year").val();
    nom = $("#nom").val();
    prenom = $("#prenom").val();
    if (!checkdate(month, year)) {
        displayModal("expired");
        return false;
    }
    luhn(number);

}

function checkdate(mois, annee) {
    yearNow = new Date().getFullYear(); // Année actuelle
    monthNow = new Date().getMonth() + 1; // Mois actuel
    if (year == yearNow) {
        if (month < monthNow) {
            return false;
        }
    }
    return true;
}

function luhn(num) {
    tot = 0;
    size = num.length;
    var num2 = "";
    for (i = 0; i < size; i++) {
        if (i % 2 == 0) {
            sommeString = (num[i] * 2);
            if (sommeString >= 10) {
                sommeString = ((num[i] * 2) - 9);
            }
        } else {
            sommeString = num[i];
        }
        tot += parseInt(sommeString);
    }
    if (tot % 10 == 0) {
        displayModal("ok");

    } else {
        displayModal("err");
    }
}

function displayModal(status) {
    if (status == "ok") {
        $("#showName").text(nom);
        $("#showSurname").text(prenom);
        $("#showCard").text(number);
        $("#showCrypt").text(crypt);
        $("#showExpire").text(month + "/" + year);
        $('#myModal').modal('toggle');
    } else if (status == "err") {
        $('#error').modal('toggle');
    } else if (status == "expired") {
        $('#expired').modal('toggle');
    }
}