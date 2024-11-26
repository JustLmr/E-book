const  signup_btn = document.getElementById("signup-btn");
const  article_middle_h1 = document.getElementById("article-middle-h1");
const  article_middle_p = document.getElementById("article-middle-p");
const  submint_btn = document.getElementById("submint-btn");

let dene = false; 

window.jQuery(function() {
    var $ = window.jQuery;
    var styleClb = function() {
      $('.fb3d-modal').removeClass('light').addClass('dark');
    }, booksOptions = {
      book1: {
        pdf: 'books/pdf/hayatadair1.pdf',
        template: {
          html: 'templates/default-book-view.html',
          styles: [
            'css/short-white-book-view.css'
          ],
          links: [{
            rel: 'stylesheet',
            href: 'css/font-awesome.min.css'
          }],
          script: 'js/default-book-view.js',
          
        },
        styleClb: styleClb
      },
      book2: {
        pdf: 'books/pdf/hayatadair2.pdf',
        propertiesCallback: function(props) {
          props.page.depth /= 4;
          props.cover.padding = 0.002;
          return props;
        },
        template: {
          html: 'templates/default-book-view.html',
          styles: [
            'css/black-book-view.css'
          ],
          links: [{
            rel: 'stylesheet',
            href: 'css/font-awesome.min.css'
          }],
          script: 'js/default-book-view.js',
          
        },
        styleClb: function() {
          $('.fb3d-modal').removeClass('dark').addClass('light');
        }
      },
      book3: {
        pdf: 'books/pdf/hayatadair3.pdf',
        propertiesCallback: function(props) {
          props.page.depth /= 3;
          return props;
        },
        template: {
          html: 'templates/default-book-view.html',
          styles: [
            'css/black-book-view.css'
          ],
          links: [{
            rel: 'stylesheet',
            href: 'css/font-awesome.min.css'
          }],
          script: 'js/default-book-view.js',
          
        },
        styleClb: styleClb
      },
      book4: {
        pdf: 'books/pdf/malware.pdf',
        propertiesCallback: function(props) {
          props.page.depth /= 3;
          return props;
        },
        template: {
          html: 'templates/default-book-view.html',
          styles: [
            'css/black-book-view.css'
          ],
          links: [{
            rel: 'stylesheet',
            href: 'css/font-awesome.min.css'
          }],
          script: 'js/default-book-view.js',
          
        },
        styleClb: styleClb
      }
    };

    var instance = {
      scene: undefined,
      options: undefined,
      node: $('.fb3d-modal .mount-container')
    };

    var modal = $('.fb3d-modal');
    modal.on('fb3d.modal.hide', function() {
      instance.scene.dispose();
    });
    modal.on('fb3d.modal.show', function() {
      instance.scene = instance.node.FlipBook(instance.options);
      instance.options.styleClb();
    });
    $('.books').find('.thumbnail').click(function(e) {
      var target = $(e.target);
      while(target[0] && !target.attr('data-book-id')) {
        target = $(target[0].parentNode);
      }
      if(target[0]) {
        instance.options = booksOptions[target.attr('data-book-id')];
        $('.fb3d-modal').fb3dModal('show');
      }
    });
});


function change(){
  if(dene == false){
    article_middle_h1.textContent = "Hesap Oluştur";
    article_middle_p.textContent = "Veya email hesabınla hesap oluşturabilirsin";
    submint_btn.textContent = "Kayıt Ol";
    dene = true;
  }
  else if(dene == true){
    article_middle_h1.textContent = "Giriş Yap";
    article_middle_p.textContent = "Veya email hesabınla giriş yapabilirsin";
    submint_btn.textContent = "Giriş Yap";
    dene = false;
  }
}

