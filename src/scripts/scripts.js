$(document).ready(function () {

  nunjucks.configure({
    autoescape: true,
    web: {
      async: true
    }
  });

  $.ajax({
    url: "./mockapi/getAllArticles.json",
    success: function(data, status) {
      for (item in data.articles) {


        nunjucks.render('./partials/article.html', data.articles[item], function (err, res) {
        /*  var sec = document.createElement ('section');
          sec.className = "js-section section";
          main.appendChild(sec);*/
          $('#main').append(res);

        });
      }
    }

  });

  document.getElementById('menu').addEventListener('click', function () {
      if (this.classList.contains('clicked')) {
        this.classList.remove('clicked');
        $('ul.nav__menu-ul').slideToggle('low')
      } else {
        this.classList.add('clicked');
        $('ul.nav__menu-ul').slideToggle('low')
      }
    });

});
