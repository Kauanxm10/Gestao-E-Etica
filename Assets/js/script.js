function enviarFormulario() 
{
    alert("Formulário enviado com sucesso!");
}

window.addEventListener("scroll", function () {
    var navcor = document.getElementById("navcor");

    if (window.scrollY > 50) {
      navcor.classList.add("scrolled");
    } else {
      navcor.classList.remove("scrolled");
    }
  });

  AOS.init();
  $(document).on('ready', function () {
    AOS.init({
      duration: 650,
      once: true
    });
  });