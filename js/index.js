window.jQuery(function() {
    var $ = window.jQuery;
    var styleClb = function() {
      $('.fb3d-modal').removeClass('light').addClass('dark');
    }, booksOptions = {
      book1: {
        pdf: 'books/pdf/cyber.pdf',
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
        pdf: 'books/pdf/malware.pdf',
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
        pdf: 'books/pdf/docker.pdf',
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