

$(document).ready(() =>{

  // Otvaranje i zatvaranje menija
  document.querySelector('.zatvori').addEventListener('click', () => {
    const meni = document.querySelector('.meni');

    if (meni.style.display !== 'none') {
      meni.style.display = 'none';
    } else {
      meni.style.display = 'block';

    }
  })

  // Smooth scroll
  // Dodajem click event na svaku stavku menija
  $(".stavka a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    // Proveravam da li postoji hash #
    if (this.hash !== "") {
      // Sprecavam uobicajeno ponasanje
      event.preventDefault();

      // Cuvam taj #
      const hash = this.hash;

      // Koristim metodu iz jquery animate() da animiram scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Nakon scroll-a navodim novi hash
        window.location.hash = hash;
      });
    } 
  });
});