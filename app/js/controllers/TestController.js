app.controller('TestController', function($scope,$http) {
    $scope.myData = [{name: "Moroni", age: 50},
                     {name: "Tiancum", age: 43},
                     {name: "Jacob", age: 27},
                     {name: "Nephi", age: 29},
                     {name: "Enos", age: 34}];
    $scope.gridOptions = { data: 'myData' };

    $scope.items = [{}];
    
    $scope.add = function(){
       $scope.items.push({});
    }
    $scope.remove = function(){
       $scope.items.pop({});
    }
    $http.get("http://www.w3schools.com/angular/customers.php")
    .then(function (response) {$scope.names = response.data.records;});
});

app.directive('getAllInputValues',function(){

 return {
   restrict:'A',
   link:function(scope,element,attrs){
       
    element.on('click',function(){
      var allInputElements = angular.element(element).parent().find('input');
       
       angular.forEach(allInputElements , function(value){
         console.log(value.value);
       
       });
    });   
      
   }  
    
 }

})