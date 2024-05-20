document.addEventListener('DOMContentLoaded', function () {
    var cardWraps = document.querySelectorAll('.card-wrap');
  
    cardWraps.forEach(function (cardWrap) {
      var card = cardWrap.querySelector('.card');
      var cardBg = card.querySelector('.card-bg');
      var cardInfo = card.querySelector('.card-info');
      var dataImage = cardWrap.getAttribute('data-image');
      var width = cardWrap.offsetWidth;
      var height = cardWrap.offsetHeight;
  
      cardBg.style.backgroundImage = `url(${dataImage})`;
  
      cardWrap.addEventListener('mousemove', function (e) {
        var mouseX = e.pageX - cardWrap.offsetLeft - width / 2;
        var mouseY = e.pageY - cardWrap.offsetTop - height / 2;
        var mousePX = mouseX / width;
        var mousePY = mouseY / height;
  
        var rX = mousePX * 30;
        var rY = mousePY * -30;
        card.style.transform = `rotateY(${rX}deg) rotateX(${rY}deg)`;
  
        var tX = mousePX * -40;
        var tY = mousePY * -40;
        cardBg.style.transform = `translateX(${tX}px) translateY(${tY}px)`;
      });
  
      cardWrap.addEventListener('mouseenter', function () {
        clearTimeout(cardWrap.mouseLeaveDelay);
      });
  
      cardWrap.addEventListener('mouseleave', function () {
        cardWrap.mouseLeaveDelay = setTimeout(function () {
          card.style.transform = '';
          cardBg.style.transform = '';
        }, 1000);
      });
    });
  });