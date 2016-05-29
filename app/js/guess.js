var app = angular.module('guessApp',['ngMaterial']);

app.controller('guessCtrl', guessCtrl);

function guessCtrl(){

 var self = this;
self.calcDev = function(){
self.deviation = self.number - self.guess;
self.dev = Math.abs(self.deviation);
self.tries = self.tries +1;
return self.deviation;
  }

  self.start = function(){

    self.tries = 0;
    self.number = Math.floor(Math.random()*1000+1);
    self.guess =null;
    self.deviation =null;
  }
  self.start();
}
