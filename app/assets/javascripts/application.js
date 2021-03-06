// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require chosen-jquery


// Angular app dependencies
//= require bower_components/angular/angular.js
//= require angular-rails-templates
//= require_tree ../templates

//= require bower_components/angular-resource/angular-resource.js
//= require bower_components/angular-cookies/angular-cookies.js
//= require bower_components/angular-sanitize/angular-sanitize.js
//= require bower_components/angular-route/angular-route.js
//= require bower_components/angular-ui-sortable/sortable.js

//= require_tree .

$(document).ready(function() {
  $(".custom-tooltip").tooltip({
    placement: "top"
  });
});


angular
  .module('landing',[])
  .controller('landingCtrl', ['$scope', '$window', function($scope, $window){
    $scope.goToQuestionary = function(){
      $window.location.href = 'questionary/';
    };
  }]);
