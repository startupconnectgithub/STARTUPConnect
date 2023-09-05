document.addEventListener("DOMContentLoaded", function() {
    const afficherFormulaires = document.querySelectorAll(".afficher-formulaire");
    const formulaires = document.querySelectorAll(".formulaire");
  
    afficherFormulaires.forEach(button => {
      button.addEventListener("click", function() {
        const formulaireId = button.getAttribute("data-form");
        const formulaire = document.getElementById(formulaireId);
        
        formulaires.forEach(form => form.classList.remove("active"));
        formulaire.classList.add("active");
      });
    });
  });
