var app = angular.module('myApp', ['ngGrid']);
app.controller('MyCtrl', function($scope) {
    $scope.myData = [
		{name:'John', id:25, gender:'boy', project:''},
		{name:'Jessie', id:30, gender:'girl', project:''},
		{name:'Johanna', id:28, gender:'girl', project:''},
		{name:'Joy', id:15, gender:'girl', project:''},
		{name:'Mary', id:11, gender:'girl', project:''},
		{name:'Peter', id:65, gender:'boy', project:''},
		{name:'Sebastian', id:50, gender:'boy', project:''},
		{name:'Erika', id:27, gender:'girl', project:''},
		{name:'Patrick', id:40, gender:'boy', project:''},
		{name:'Samantha', id:60, gender:'girl', project:''}
		];
    $scope.gridOptions = { data: 'myData' };
	
	a1 = $('#query').autocomplete({
	width: 448,
	delimiter: /(,|;)\s*/,
	lookup: 'TCP, MARS, SHARP'.split(',')
	}); 
	
	$scope.selected = {};
	$scope.employees = [
		{empName:'John', empEmail:"ssss@gmail.com", empSalary :5000, active:'Yes'},
		{empName:'Jessie', empEmail:"fffff@gmail.com", empSalary :4000, active:'No'},
		{empName:'Johanna', empEmail:"cccc@gmail.com", empSalary :6000, active:'Yes'}
		];
		
	$scope.getTemplate = function (employee) {
	 if (employee.empID === $scope.selected.empID){
	  return 'edit';
	 }
	 else return 'display';
	};
	
	$scope.editEmployee = function (employee) {
	$scope.selected = angular.copy(employee);
	};
	
	$scope.reset = function () {
	$scope.selected = {};
	};
	$scope.data = 'abcd';
	});
	
	

app.directive('shadow', function() {
  return {
    scope: {
      target: '=shadow'            
    },
    link: function(scope, el, att) {
      scope[att.shadow] = angular.copy(scope.target);

      scope.commit = function() {
        scope.target = scope[att.shadow];
      };
    }
  };
});