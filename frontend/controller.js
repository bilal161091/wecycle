//Help from Sigma from Jian//
//Used worksheet 8 for help//
//as you can see below I have declared a module
var myApp = angular.module('myApp',[]);
myApp.controller('itemsController', function ($scope, $http){
var url='https://torid-torch-3562.firebaseio.com/item.json';
$http.get(url).success(function(data){
    console.log(data);
    $scope.item = data;
    actualData = [0];
    for ( i in data) {
        actualData.push(data[i]);
    }
    console.log(actualData);
    $scope.item = actualData;
    
});
$scope.submit = function(){
        $http.post(url, $scope.stuff).success(function(data, status, headers, config) {
            location.reload();
        }).error(function(data, status, headers, config) {});
    }

$scope.remove = function() { 
  var index = $scope.item.indexOf()
  $scope.item.splice(index, 1);     
}
}); 




