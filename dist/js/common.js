"use strict"

const TJ = {};


TJ.svgGlobal = function(){
  new Vue({
    	el: '#global-svg',
    	template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-checkbox" viewBox="0 0 32 32"><title>checkbox</title><path d="M25.333 4h-18.667c-1.48 0-2.667 1.2-2.667 2.667v18.667c0 1.467 1.187 2.667 2.667 2.667h18.667c1.48 0 2.667-1.2 2.667-2.667v-18.667c0-1.467-1.187-2.667-2.667-2.667zM13.333 22.667l-6.667-6.667 1.88-1.88 4.787 4.773 10.12-10.12 1.88 1.893-12 12z"></path></symbol><symbol id="icon-checkbox-outline" viewBox="0 0 32 32"><title>checkbox-outline</title><path d="M25.333 6.667v18.667h-18.667v-18.667h18.667zM25.333 4h-18.667c-1.467 0-2.667 1.2-2.667 2.667v18.667c0 1.467 1.2 2.667 2.667 2.667h18.667c1.467 0 2.667-1.2 2.667-2.667v-18.667c0-1.467-1.2-2.667-2.667-2.667z"></path></symbol><symbol id="icon-copy" viewBox="0 0 32 32"><title>copy</title><path d="M21.333 1.333h-16c-1.467 0-2.667 1.2-2.667 2.667v18.667h2.667v-18.667h16v-2.667zM20 6.667l8 8v13.333c0 1.467-1.2 2.667-2.667 2.667h-14.68c-1.467 0-2.653-1.2-2.653-2.667l0.013-18.667c0-1.467 1.187-2.667 2.653-2.667h9.333zM18.667 16h7.333l-7.333-7.333v7.333z"></path></symbol><symbol id="icon-warning" viewBox="0 0 32 32"><title>warning</title><path d="M1.333 28h29.333l-14.667-25.333-14.667 25.333zM17.333 24h-2.667v-2.667h2.667v2.667zM17.333 18.667h-2.667v-5.333h2.667v5.333z"></path></symbol></defs></svg>'
    })
};

TJ.formFocus = function(){
   const $formItemsInput = $('.form__item .form__input');

   $formItemsInput.each(function(){
     $(this).on('focus', function(){
       const $formItem = $(this).closest('.form__item');

       $formItem.addClass('focused');
     });

     $(this).on('blur', function(){
       const $formItem = $(this).closest('.form__item');

       $formItem.removeClass('focused');
     });

     $(this).on('change', function(){
       const $formItem = $(this).closest('.form__item');
       const value = $(this).val();

       if(value != 0){
          $formItem.addClass('filled');
       }else{
         $formItem.removeClass('filled');
       }
     });
   });
};

TJ.toggleActive = function(){
  const $elem = $('.toggleActiveElem');

  $elem.on('click', function(){
    $(this).toggleClass('active');
  });
};


(function onPageReady () {
  TJ.svgGlobal();
  TJ.formFocus();
  TJ.toggleActive();
}());
