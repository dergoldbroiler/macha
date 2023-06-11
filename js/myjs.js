import {toggle} from './toggle.js';
const services =  {

  moveCircle: function(left) {
    const circle = document.querySelector('.circle');
    if(!circle) { return; }
    circle.setAttribute('style','margin-left: ' + left + 'px');
  },

  handleCirclePosition: function() {
    
    const page = document.querySelector('#page-wrap');
    const share = document.querySelector('#share');

    setTimeout(() => {document.querySelector('.circle').classList.remove('hidden')}, 300);
    document.querySelector('.circle').setAttribute('style', 'margin-left: ' + (page.clientWidth - share.clientWidth*1.5) + 'px');
    if(document.body.clientWidth < 1680) {
      document.querySelector('.circle').setAttribute('style', 'margin-left: ' + (page.clientWidth - share.clientWidth*1.5) + 'px');
    }
    if(document.body.clientWidth < 1500) {
      document.querySelector('.circle').setAttribute('style', 'margin-left: ' + (page.clientWidth - share.clientWidth*1.8) + 'px');
    }
    if(document.body.clientWidth < 1300) {
      document.querySelector('.circle').setAttribute('style', 'margin-left: ' + (page.clientWidth - share.clientWidth*1.9) + 'px');
    }
    if(document.body.clientWidth < 1150) {
      document.querySelector('.circle').setAttribute('style', 'margin-left: ' + (page.clientWidth - share.clientWidth*2) + 'px');
    }
    if(document.body.clientWidth < 1050) {
      document.querySelector('.circle').setAttribute('style', 'margin-left: ' + (page.clientWidth - share.clientWidth*2.2) + 'px');
    }
    if(document.body.clientWidth < 992) {
      if(document.querySelector('.sub-bg')) {
        //document.querySelector('.sub-bg').setAttribute('style', 'padding-top: ' + (document.getElementById('top-header').clientHeight) + 'px !important');
      }
      document.querySelector('.circle').setAttribute('style', 'margin-right: ' + (share.clientWidth*.1) + 'px');
    }
  },

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

  /* fetch products as fas as they are not stored in localstorage */
  fetchProducts: function() {

    if(services.hasLocalStorage('wc-products')) {
      return;
    }
      const shop_url = 'https://shop.reuss-gelenkwellen.de/wp-json/wc/v2/products/?per_page=100';

      fetch(shop_url, {headers: {'Authorization': 'Basic ' + btoa('ck_b5ed3fcc3b91aef1762867b2b24a5806afea703b' + ":" + 'cs_b6e5569d016a07c18bf503eeceb4522b43a89ed4')}}).
      then(response => response.json()).
      then(data => { 
        //store data globally on pageload
        searchable_content['products'] = data;
        localStorage.setItem('wc-products', JSON.stringify(data));
      });
    
  },

  fetchCustomAPI: function() {
    if(services.hasLocalStorage('custom-content')) {
      return;
    }
    const shop_url = '/wp-json/wp/v2/custom';

    fetch(shop_url).
    then(response => response.json()).
    then(data => { 
      //store data globally on pageload
      searchable_content['custom'] = data;
      localStorage.setItem('custom-content', JSON.stringify(data));
    });
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
  services.fetchProducts();
  services.fetchCustomAPI();
  services.setLocalStorageTimeStamps();
  services.listenForKeydown();
  services.handleCloseBtnClick();
  services.handleCirclePosition();
  toggle.handleEscapeKey();
  services.handleSlickSliderArrows();
  
 // document.querySelector('.circle').setAttribute('style','height:'+document.querySelector('#circlecontainer').clientWidth*.85+'px;width:'+document.querySelector('#circlecontainer').clientWidth*.85+'px;margin-left:'+document.querySelector('#circlecontainer').clientWidth*.6+'px');
});

window.addEventListener('resize', function(e) {
  // toggle.closeSearch();//toggle.closeAll()
   services.handleCirclePosition();
});

window.addEventListener('scroll', function(e) {
  if(window.scrollY > 300) {
    document.querySelector('.circle').classList.add('d-none-important');
    if(document.querySelector('.bg-blue-mobile') && document.body.clientWidth < 992){
      document.querySelector('.bg-blue-mobile').classList.add('d-none-important');
    }
    if(document.querySelector('.bg-blue-mobile-pages') && document.body.clientWidth < 992){
      document.querySelector('.bg-blue-mobile-pages').classList.add('d-none-important');
    }
  }else {
    document.querySelector('.circle').classList.remove('d-none-important');

    if(document.querySelector('.bg-blue-mobile') && document.body.clientWidth < 992){
      document.querySelector('.bg-blue-mobile').classList.remove('d-none-important');
    }
    if(document.querySelector('.bg-blue-mobile-pages') && document.body.clientWidth < 992 ){
     document.querySelector('.bg-blue-mobile-pages').classList.remove('d-none-important');
    }
  }
  
});

