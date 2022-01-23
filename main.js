function consultaCep() {
  var cep = document.getElementById('cep').value;
  var url = 'https://viacep.com.br/ws/' + cep + '/json/';
  $.ajax({
    url: url,
    type: 'GET',
    success: function (response) {
      console.log(response);
      $('#logradouro').html(response.logradouro);
      document.getElementById('bairro').innerHTML = response.bairro;
      document.getElementById('localidade').innerHTML = response.localidade;
      document.getElementById('uf').innerHTML = response.uf;
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
