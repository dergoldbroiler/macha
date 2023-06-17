
export const toggle = {

    init: (function () {

        return {

            onDemandContainer: document.querySelector('#on-demand'),
            mainmenu: document.querySelector('#mainmenu'),
            sharearea: document.querySelector('#sharearea'),
            sharelist: document.querySelector('#sharelist'),
            menuopener: document.querySelector('.menuopener'),
            resultcontainer: document.querySelector('#resultcontainer'),


        }
    })(),

    handleMenuAnimation: function (action='on') {
        
        var menu = document.querySelector('#mainmenu');
      var menuItems = document.querySelectorAll('#mainmenu li');
      var delay = 50; // Verzögerung zwischen den Menüpunkten in Millisekunden

      menu.style.opacity = 1;
      menu.style.transform = 'translateY(0)';
      if(action === 'off') {
        for (var i = 0; i < menuItems.length; i++) {
            (function (index) {
              setTimeout(function () {
                menuItems[index].style.opacity = 0;
                menuItems[index].style.transform = 'translateY(-10px)';
              }, delay * (index + 1));
            })(i);
          }
          return;
      }
      for (var i = 0; i < menuItems.length; i++) {
        (function (index) {
          setTimeout(function () {
            menuItems[index].style.opacity = 1;
            menuItems[index].style.transform = 'translateY(0)';
          }, delay * (index + 1));
        })(i);
      }
    },

    closeAll: function () {
        toggle.toggleBodyScroll('enable');

        document.querySelector('#mainmenu').classList.remove('active');
        document.querySelector('#sharelist').classList.remove('active');
        document.querySelector('.menuopener').classList.remove('active');
        document.querySelector('#resultcontainer').classList.remove('active');

        document.querySelector('#resultcontainer').innerHTML = '';
        document.querySelector('.searchfield').value = '';
        document.querySelector('.btn-close').classList.remove('active');

        this.toggleDemandContainerByAction('close');
    },

    closeSearch: function () {
        toggle.toggleBodyScroll('enable');
        document.querySelector('#resultcontainer').classList.remove('active');
        document.querySelector('#resultcontainer').innerHTML = '';
        document.querySelector('.searchfield').value = '';
        document.querySelector('.btn-close').classList.remove('active');
        this.toggleDemandContainerByAction('close');
    },

    toggleBodyScroll: function (action = "disable") {
        if (action === 'disable') {
            document.body.classList.add('search-active');
            document.getElementsByTagName('html')[0].classList.add('search-active');
        } else {
            document.body.classList.remove('search-active');
            document.getElementsByTagName('html')[0].classList.remove('search-active');
        }
    },
    
    toggleMenuType: function (config) {
      
        const menuopener = config.element;
        const menu = config.target;
        menuopener.classList.toggle('active');
        menu.classList.contains('active') ? menu.classList.remove('active') : setTimeout(() =>{menu.classList.add('active'),   toggle.handleMenuAnimation();}, 200);
    },


    toggleDemandContainerByAction: function (action, height = 0) {
        let onDemandContainer = document.getElementById('on-demand');

        if (action === 'open') {
            onDemandContainer.classList.add('on-demand--open');
            onDemandContainer.setAttribute('style', 'height: ' + height + 'px;overflow-y: hidden;');
            onDemandContainer.classList.remove('on-demand--closed');
        } else {
            onDemandContainer.classList.remove('on-demand--open');
            onDemandContainer.classList.add('on-demand--closed');
            onDemandContainer.removeAttribute('style');
            toggle.handleMenuAnimation('off');
        }
    },

    renderSingleContent: function (single, headline) {
        let list = '';
        let products = '';
        let posts = '';
        let pages = '';
        let $products = JSON.parse(localStorage.getItem('wc-products'));
        if (headline === 'Beiträge') {
            
            posts = single.map(result => {
                return '<li><a href="' + result.permalink + '">' + result.title.rendered + '</a></li>';
            });
        }

        if (headline === 'Seiten') {
            pages = single.map(result => {
                return '<li><a href="' + result.permalink + '">' + result.title.rendered + '</a></li>';
            });
        }

        if (headline === 'Produkte') {
            products = single.map(result => {
                return '<li class=""><a target="_blank"  href="' + result.permalink + '">' + result.name + '</a></li>';
            });
        } 

        let returnval = list;
        if(posts.length) {
            returnval += '<div class="w-100 ms-3"><b>' + headline + '</b><br><br></div><ul class="ms-3">' + posts.join('');
        }
        if(pages.length) {
            returnval += '<div class="w-100 ms-3"><b>' + headline + '</b><br><br></div><ul class="ms-3">' + pages.join('');
        }
        if(products.length) {
            returnval += '<div class="w-100 ms-3"><b>' + headline + '</b><br><br></div><ul class="ms-3">' + products.join('');
        } else {
            if (headline === 'Produkte') {
                returnval += '<div class="w-100 ms-3"><b>' + headline + '</b><br><br></div><div class="ms-4 w-75"><strong>Keine Ergebnisse..</strong><br>Sie finden nicht wonach Sie suchen? <a href="/kontakt?info=Ich%20habe%20f%C3%BCr%20den%20Suchbegriff%20'+encodeURI(document.querySelector('.searchfield').value)+'%20leider%20nichts%20gefunden.%20K%C3%B6nnen%20Sie%20mir%20trotzdem%20weiterhelfen%3F">Schreiben Sie uns eine Nachricht</a>, wir werden sehen was wir tun können und uns zeitnah bei Ihnen zurückmelden</div>';
            }
        }

    
        console.log(returnval)
        return returnval +'</ul>';
    },

    filterContentByWord: function (word) {

        let $products = JSON.parse(localStorage.getItem('wc-products'));
        let $custom = JSON.parse(localStorage.getItem('custom-content'));
        
        if(!$products) {
            return '<div class="w-100 ms-3">Die Produkte werden gerade geladen.Bitte versuche es in ein paar Sekunden erneut.</div>';
        }
        const filtered_products = $products.filter(product => {
            return product.name.toLowerCase().includes(word.toLowerCase());
        });

        const filtered_posts = $custom.filter(single => {
            return single.title.rendered.toLowerCase().includes(word.toLowerCase()) && single.type === 'post'
        });

        const filtered_pages = $custom.filter(single => {
            return single.title.rendered.toLowerCase().includes(word.toLowerCase()) && single.type === 'page'
        });
   //     console.log(filtered_products)
        let content = this.renderSingleContent(filtered_posts, 'Beiträge');
        content += this.renderSingleContent(filtered_pages, 'Seiten');
        content += this.renderSingleContent(filtered_products, 'Produkte');

        return content;
    },

    /* search for products */
    searchContent: function (config, mobile = false) {

        const closer = document.querySelector('.btn-close');
        const searchfield = config.element;
        const onDemandContainer = document.querySelector('#on-demand');
        const searchresultcontainer = document.querySelector('#resultcontainer');

        searchresultcontainer.classList.add('active');

        let result = toggle.filterContentByWord(searchfield.value);
        if(result === false) {
            searchresultcontainer.innerHTML = 'Lade Daten..'
           // window.setTimeout(()=>{config.element.keyup()}, 8000)
        } else {
            searchresultcontainer.innerHTML = result;
        }
     //   searchresultcontainer.innerHTML = toggle.filterContentByWord(searchfield.value);
        let results_height = 300;
        searchresultcontainer.querySelectorAll('ul').forEach(ul => {
            results_height += ul.clientHeight;
        })

        onDemandContainer.setAttribute('style', 'height: ' + results_height + 'px');
        onDemandContainer.classList.add('on-demand--open');
        closer.classList.add('active');

        if (searchfield.value.length <= 2) {
            searchresultcontainer.classList.remove('active');
            searchresultcontainer.setAttribute('style', `width: ${document.getElementById('top-header').clientWidth}px`);
            searchresultcontainer.innerHTML = '';
            onDemandContainer.classList.remove('on-demand--open');
            onDemandContainer.classList.add('on-demand--closed');
        } else {
            onDemandContainer.classList.add('on-demand--open');
            onDemandContainer.classList.remove('on-demand--closed');
            closer.classList.add('active');
        }
    },

    handleEscapeKey: function () {
        document.addEventListener('keyup', function (event) {
            if (event.key === 'Escape' && toggle.init.onDemandContainer.classList.contains('on-demand--open')) {
                toggle.closeAll();
            }
        })
    },

    //toggles the content on demand container
    toggle: function (config) {
        const onDemandContainer = document.getElementById('on-demand');

        return new Promise((resolve, reject) => {
            if (config.contenttype !== 'search') {
                //the same content is already open so close it           
                if (onDemandContainer.querySelector('.active') && onDemandContainer.querySelector('.active').getAttribute('id') === config.target.getAttribute('id')) {
                    this.toggleDemandContainerByAction('close');
                    toggle.toggleBodyScroll('enable');
                    resolve('closed');
                }
                //another content is already open so close it and open the new one
                else if (onDemandContainer.querySelector('.active') && onDemandContainer.querySelector('.active').getAttribute('id') !== config.target.getAttribute('id')) {

                    toggle.closeAll();
                    this.toggleDemandContainerByAction('close');
                    onDemandContainer.setAttribute('style', 'height: ' + config.height + 'px');
                    this.toggleDemandContainerByAction('open', config.height);
                    toggle.toggleBodyScroll('disable');
                    resolve('open');
                }
                else {
                    this.toggleDemandContainerByAction('open', config.height);
                    toggle.toggleBodyScroll('disable');
                    resolve('open');

                }
            } else {
                resolve('opem');
            }


        });
    },

    handleContent: function (config) {

        if (config.contenttype === 'menu') {
            toggle.toggleMenuType(config);
        }
        if (config.contenttype === 'search') {
            toggle.searchContent(config);
            toggle.toggleBodyScroll();
        }
    },


    handleToggle: function (config) {
   
        switch (config.event) {
            case 'click':
                config.element.addEventListener('click', e => {
                    toggle.toggle(config).then(data => {
                        
                        toggle.handleContent(config);
                    });
                });
                break; 
      
        }
    },

}
