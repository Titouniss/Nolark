window.addEventListener("load", function(){
    window.document.querySelector("#btn_envoyer").addEventListener("click", function() {
        if (window.document.querySelector("#i_nom").value === "" &&
            window.document.querySelector("#i_prenom").value === "") {
          alert("Le nom ou le prenom doivent etre remplis") ;
        }
        else if  (window.document.querySelector("#i_email").value === "") {
            alert ("l'email doit etre rempli");
        }
        else {
            var question = "Souhaitez-vous reellement utiliser l'adresse suivante : "
                         + window.document.querySelector("#i_email").value;
            if (confirm(question)){
                window.document.querySelector("#form_contact").submit();
            }
        }          
    } , false );
} , false );