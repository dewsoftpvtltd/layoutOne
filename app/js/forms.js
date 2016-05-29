var app = angular.module('formApp',['ngMaterial','ngMessages']);

app.controller('formCtrl', formCtrl);

function formCtrl(){
  this.lastName = "Basit";
  this.biography = "I have lived a marvellous life!";
  this.toDos = [
  {title: "cook", description: "cooking", done: false},
  {title: "clean", description: "cleaning", done: false},
  {title: "rise and shine", description: "rising and shining", done: false},
  {title: "Excel", description: "Be the best", done: false}
   ];
}
