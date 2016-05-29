var app = angular.module('iconApp', ['ngAria', 'ngAnimate', 'ngMaterial']);
app.config(function($mdIconProvider) {
  // Configure URLs for icons specified by [set:]id.
  $mdIconProvider
       // .defaultFontSet( 'fa' )                   // This sets our default fontset className.
       // .defaultIconSet('images/icons/face.svg')       // Register a default set of SVG icons
       // .iconSet('social', 'my/app/social.svg')   // Register a named icon set of SVGs
        .icon('medal', 'images/icons/medal.svg')    // Register a specific icon (by name)
       // .icon('work:chair', 'my/app/chair.svg')
       ;  // Register icon in a specific set
});
