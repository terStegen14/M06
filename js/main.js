function crearAlerta() {
    var alertHTML = '<div class="alert alert-warning fade show" role="alert"> \
                      F11 to full experience \
                    </div>';
    document.getElementById('alert-container').innerHTML = alertHTML;
    
    setTimeout(function() {
      $('.alert').alert('close');
    }, 3000);
  }

  // Llamar a la función cuando se cargue la página
  window.onload = function() {
    crearAlerta();
  };

  document.addEventListener("DOMContentLoaded", function() {
    function mostrarNuevaImagen() {
        var casaLight = document.querySelector(".casa-light");
        var scrollPos = window.scrollY;
        var puntoCambio = 250;

        if (scrollPos > puntoCambio) {
          casaLight.style.opacity = "1";
        } else {
          casaLight.style.opacity = "0";
        }
    }

    // Evento que se activa cuando se hace scroll
    window.addEventListener("scroll", mostrarNuevaImagen);
});


$(window).scroll(function(){
    let winScroll = $(this).scrollTop();
    
    // $('.sky').css({
    //     'transform' : 'translate(0, '+ winScroll /8 + '%)'
    // })
    $('.mountain-back').css({
        'transform' : 'translate(0, '+ winScroll /12 +'%)'
    })
    // $('.name').css({
    //     'transform' : 'translate(0, '+ winScroll /45 +'%)'
    // })
    $('.mountain').css({
        'transform' : 'translate(0, '+ winScroll /15 +'%)'
    })
    $('.arbol-b').css({
        'transform' : 'translate(0, '+ winScroll /28 +'%)'
    })
    $('.arbol-m').css({
        'transform' : 'translate(0, '+ winScroll /32 +'%)'
    })
    $('.arbol-f').css({
        'transform' : 'translate(0, '+ winScroll /40 +'%)'
    })
    // $('.casa').css({
    //     'transform' : 'translate(0, '+ winScroll /76 +'%)'
    // })
    // $('.arbol-ff').css({
    //     'transform' : 'translate(0, '+ winScroll /96 +'%)'
    // })
});

document.addEventListener('DOMContentLoaded', function() {
  const toggleCheckbox = document.getElementById('toggle');
  const experienceDiv = document.querySelector('.experience');
  const skillsDiv = document.querySelector('.skills');
  
  // Function to update the visibility of the divs
  function updateVisibility() {
      if (toggleCheckbox.checked) {
          experienceDiv.style.display = 'none';
          skillsDiv.style.display = 'block';
      } else {
          experienceDiv.style.display = 'block';
          skillsDiv.style.display = 'none';
      }
  }

  // Initial state
  updateVisibility();

  // Event listener for checkbox change
  toggleCheckbox.addEventListener('change', updateVisibility);
});



