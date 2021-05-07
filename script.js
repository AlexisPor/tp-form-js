let prenomNom, cin, mail, nameError;

function validation() {
    prenomNom = document.getElementById("name").value;
    cin = document.getElementById("cin").value;
    mail = document.getElementById("mail").value;
    nameError = document.getElementById("nameError").value;
        if(prenomNom==""){
           nameError.innerHTML = "*Merci de rentrer un Nom et un Prénom.";
        }
        if(cin==""){
            cinError.innerHTML = "*Merci de rentrer la CIN."
        }
        if(mail==""){
            mailError.innerHTML = "*Merci de rentrer un email."
        }
}

function validMaj(nom) {
    const words = nom.split('');
    const word1 = words[0].charAt(0).toUpperCase()+words[0].substring(1).toLowerCase();
    const word2 = words[1].charAt(0).toUpperCase()+words[1].substring(1).toLowerCase();
    prenomNom = `${word1} ${word2}`;
}

function main() {
    validation();
    validMaj();
}

function regExpCin(cin) {
    regExp = new RegExp("^[0-9]{8}$");
    if (!regExp.test(cin)){
        document.getElementById("cinError").innerHTML = "Veuillez seulement 8 chiffres et pas de lettres";
    }
}

function regExpMail(mail) {
    regExp = new RegExp("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.(?:\\.[a-zA-Z0-9-]+)*$/");
    if (!regExp.test(mail)){
        document.getElementById("mailError").innerHTML = "Veuillez ne pas oublier le @ et le .";
    }
}

function verifCheckBox() {
    const arraylength = document.querySelectorAll("option:checked[classe=listeModule]").length;
    if (arraylength > 3){
        document.getElementById("selectError").innerHTML = "3 choix maximum pour les modules";

    }
}

