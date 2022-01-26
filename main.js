function consultaCep() {
  var cep = document.getElementById('cep').value;
  var url = 'https://viacep.com.br/ws/' + cep + '/json/';
  $.ajax({
    url: url,
    type: 'GET',
    success: function (response) {
      $('#logradouro').html(response.logradouro);
      $('#bairro').html(response.bairro);
      $('#localidade').html(response.localidade);
      $('#uf').html(response.uf);
      // document.getElementById('bairro').innerHTML = response.bairro;
    },
    error: function (jqXHR, textStatus, errorThrown) {
      var textStatus = 'Erro ao buscar este CEP';
      window.alert(textStatus, errorThrown);
    },
  });
}

// Animação para o elemento entrar pela direita
(function () {
  var $target = $('.anime'),
    animationClass = 'anime-start',
    offset = ($(window).height() * 3) / 4;

  function animeScroll() {
    var documentTop = $(document).scrollTop();

    $target.each(function () {
      var itemTop = $(this).offset().top;
      if (documentTop > itemTop - offset) {
        $(this).addClass(animationClass);
      } else {
        $(this).removeClass(animationClass);
      }
    });
  }

  animeScroll();

  $(document).scroll(function () {
    animeScroll();
  });
})();
