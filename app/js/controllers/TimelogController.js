app.controller('TimelogController', ['$scope', function($scope) { 
	// $scope.employees = [
		// {name:'John', id:25, project:'TCP', date:'2016-11-16T16:00:00.000Z', timein:'1970-01-01T13:03:00.000Z'},
		// {name:'Jessie', id:30, project:'MARS', date:'2016-11-16T16:00:00.000Z', timein:'1970-01-01T13:03:00.000Z'},
		// {name:'Johanna', id:28, project:'MARS', date:'2016-11-16T16:00:00.000Z', timein:'1970-01-01T13:03:00.000Z'},
		// {name:'Joy', id:15, project:'MARS', date:'2016-11-16T16:00:00.000Z', timein:'1970-01-01T13:03:00.000Z'},
		// {name:'Mary', id:11, project:'MARS', date:'2016-11-16T16:00:00.000Z', timein:'1970-01-01T13:03:00.000Z'},
		// {name:'Peter', id:65, project:'TCP', date:'2016-11-16T16:00:00.000Z', timein:'1970-01-01T13:03:00.000Z'},
		// {name:'Sebastian', id:50, project:'TCP', date:'2016-11-16T16:00:00.000Z', timein:'1970-01-01T13:03:00.000Z'},
		// {name:'Erika', id:27, project:'MARS', date:'2016-11-16T16:00:00.000Z', timein:'1970-01-01T13:03:00.000Z'},
		// {name:'Patrick', id:40, project:'TCP', date:'2016-11-16T16:00:00.000Z', timein:'1970-01-01T13:03:00.000Z'},
		// {name:'Samantha', id:60, project:'MARS', date:'2016-11-16T16:00:00.000Z', timein:'1970-01-01T13:03:00.000Z'}
	// ];
	
	$scope.title = 'Time Log'; 
	var testDate = new Date(2016, 6, 28, 14, 57); // dummy date
	$scope.timelog = [
		{id:25, name:'John', project:'TANGO-APP', date:testDate, timein:testDate},
		{id:30, name:'Jessie', project:'MARS', date:testDate, timein:testDate},
		{id:28, name:'Johanna', project:'SHARP', date:testDate, timein:testDate},
		{id:15, name:'Joy', project:'MARS', date:testDate, timein:testDate},
		{id:11, name:'Mary', project:'TANGO-CP', date:testDate, timein:testDate}
	];
	
    //$scope.items = [{}]; //input
	//$scope.gridItems = []; 
	$scope.selectedName = {}; //add model
	$scope.selectedNameCopy = {};
	//$scope.edit = {}; //edit model
	$scope.selected ={}; //tempData
	$scope.oriData = [];

	$scope.add = function () {
		if($scope.selectedName.name != null){
			//console.log($scope.selectedName); //works
			$scope.tempData = $scope.selectedName;
			$scope.timelog.push($scope.selectedName);
			$scope.selectedNameCopy = $scope.selectedName;
			$scope.selectedName = {};
		}
		else{
			alert("Name field is required");
		}
	}

	// Remove btn clicked
    $scope.remove = function(idx){
		var r = confirm("Remove this row?");
		if (r == true) {
			$scope.timelog.splice(idx, 1);
		}
    }
			
	$scope.getTemplate = function (data) {
	 if (data.name === $scope.selected.name){
	  return 'edit';
	 }
	 else return 'display';
	};
	
	$scope.doneEdit = function(employee){
	  var x = document.getElementsByClassName("editBtn");
	  for(i=0;i<x.length;i++){
		  x[i].disabled = false;
	  }
	  if($scope.selected.name != ""){
		$scope.selected = {};
		modal.style.display = "none";
	  }
	  else{
		  alert("Name field cannot be NULL");
	  }
	}
	
	// $scope.updateEmployee = function(employee){
		// //console.log(employee);	
		// var r = confirm("Do you want to save?");
		// if (r == true) {
		// $scope.selected = {};
		// }
	// }
	
	$scope.editEmployee = function (employee) {
	  var x = document.getElementsByClassName("editBtn");
	  for(i=0;i<x.length;i++){
		  x[i].disabled = true;
	  }
	 $scope.selected = employee;
		$scope.oriSelected = employee;
	};
	
	$scope.reset = function () {
		//var temp = $scope.selected;
		//$scope.selected = temp; 
		//console.log($scope.selectedNameCopy);
		// console.log($scope.oriSelected);
		// $scope.selected = $scope.oriSelected;
		// $scope.selected = {};
		modal.style.display = "none";
	};
	
	// $scope.editModal = function(e, idx, data){
		 // //console.log(e.y);
		 // //console.log(data);
		 // //console.log(idx);
		// for(var key in data){
		  // if (data.hasOwnProperty(key)) {
			// var val = data[key];
			// console.log(val);
			// //val.name = "KARIM";
		  // }
		// }
		// // $scope.editData(idx);
	// }
	
	// Save btn clicked
    // $scope.saveData = function(){
		// var obj = $scope.tempData
		// for(var key in obj){
		  // if (obj.hasOwnProperty(key)) {
			// var val = obj[key];
			// console.log(val.id);
		  // }
		// }
		// var r = confirm("Do you want to save?");
		// if (r == true) {
			// //$scope.timelog[idx] = $scope.editName;
			// modal.style.display = "none";
		// }
    // }
	
	// Get the modal
	var modal = document.getElementById('myModal');
	var modalDelete = document.getElementById('myModalDelete');
	
	// Edit btn clicked
	$scope.editData = function(employee){
		modal.style.display = "block";
	}
	
	// Delete btn clicked
	$scope.deleteData = function(idx){
		modalDelete.style.display = "block";
		$scope.timelog.splice(idx, 1);
		modalDelete.style.display = "none";
	}

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}
	
}]);
