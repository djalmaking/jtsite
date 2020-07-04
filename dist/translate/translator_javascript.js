function googleTranslateElementInit() 
{
  new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages:
  'en,pt,fr,es,de,nl,zh-CN', layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
  multilanguagePage: true}, 'google_translate_element');
}	   
        var myLazyLoad = new LazyLoad({ elements_selector: ".lazy" });