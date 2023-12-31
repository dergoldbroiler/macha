import {toggle} from './toggle.js';
const services =  {

 

  initializeSlickSlider: function() {
    if( jQuery('.slider') ) {
      jQuery('.slider').slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow:4,
        arrows: true,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              arrows: false,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 1,
              dots: false,
              autoplay: true,
            }
          }
        ]
      });
    }
  },


  hasLocalStorage: function(storageKey) {
    return localStorage.getItem(storageKey) ? true : false;
  },

  

  setLocalStorageTimeStamps: function() {
    if(!services.hasLocalStorage('custom-content-timestamp')){
     localStorage.setItem('custom-content-timestamp', Date.now());
    }
    //300 Tage
    if(Date.now() - localStorage.getItem('custom-content-timestamp') > 25920000000) {
      localStorage.setItem('custom-content-timestamp', Date.now());
      localStorage.removeItem('wc-products');
      localStorage.removeItem('custom-content');
    }
    
  },

  renderSingleContentAsGrid: function(single, headline) {
    let list = '<b>'+headline+'</b><ul class="grid">';
    let listcontent = '';
    if(headline === 'Produkte') {
      listcontent = single.map(result => { 
        return '<li class=""><img src="/wp-content/themes/bbt_rare/images/dummy.png" class="preview-img" data-image='+result.images[0].src+'><a target="_blank" href="'+result.permalink+'">'+result.name+'</a></li>';
      });
    } else {
      listcontent = single.map(result => { 
        return '<li><a href="'+result.permalink+'">'+result.title.rendered +'</a></li>';
      });
    }
    return list += listcontent.join('') + '</ul>';
  },

 

  listenForKeydown: function() {
    
     toggle.handleToggle({contenttype:'search', event:'keyup', element: document.querySelector('.searchfield'), btn: document.querySelector('.btn-close'), target: document.querySelector('#resultcontainer')});
      
  },

  handleCloseBtnClick: function() {

     const closebtn = document.querySelector('.btn-close');

     if(!closebtn){ return; }

     closebtn.addEventListener('click', e => {
      
      toggle.closeSearch() 
    
    });
   },


  handleMenuLeftMargin: function() {
    const menubar = document.querySelector('.menuopener');
    const mainmenu = document.querySelector('#mainmenu');
    mainmenu.setAttribute('style', `margin-left: 54px`);
  },

  handleSlickSliderArrows: function() {
    const arrow_left = document.querySelector('#arrows li.left');
    const arrow_right = document.querySelector('#arrows li.right');
    if(!arrow_left || !arrow_right) { return; }
    arrow_left.addEventListener('click', function(e) { 
      jQuery('.slider').slick('slickPrev');
    });
    arrow_right.addEventListener('click', function(e) {
      jQuery('.slider').slick('slickNext');
    });
  },

}


document.addEventListener('DOMContentLoaded', function(e) {

  toggle.handleToggle({contenttype:'menu', event:'click', key:'', element:document.querySelector('.menuopener'), target:document.querySelector('#mainmenu'), height: (document.querySelector('#mainmenu').querySelectorAll('li').length * 70)+50});

  toggle.handleToggle({contenttype:'menu', event:'click', key:'', element:document.querySelector('#share-opener'), target:document.querySelector('#sharelist'), height: (document.querySelector('#mainmenu').querySelectorAll('li').length * 70)+50});
 

 
  services.initializeSlickSlider();
  services.setLocalStorageTimeStamps();
  services.listenForKeydown();
  services.handleCloseBtnClick();
  //toggle.handleEscapeKey();
  services.handleSlickSliderArrows();
  
 // document.querySelector('.circle').setAttribute('style','height:'+document.querySelector('#circlecontainer').clientWidth*.85+'px;width:'+document.querySelector('#circlecontainer').clientWidth*.85+'px;margin-left:'+document.querySelector('#circlecontainer').clientWidth*.6+'px');
});



