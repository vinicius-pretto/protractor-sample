angular
  .module('app')
  .controller('WineCtrl', ($scope) => {

    $scope.wines = [];

    $scope.addWine = wine => {
      $scope.wines.push(wine);
    }
  });