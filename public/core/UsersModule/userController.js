MyStuffApp.controller('MyStuffAppUserController',['$scope','$http','$window',function($scope,$http,$window){
   $scope.formData={};
   $scope.Authenticate=function(){
   	 $http.post('/userapi/authenticate',$scope.formData)
   	  .success(function(data){
   	  	$scope.formData={};
   	  	$scope.result=data;
   	  	if(data.success)
   	  	 $window.location.href = '/views/index.html'
   	  	 else
          $window.location.href = '/views/login.html'
   	  })
   	  .error(function(data){
   	  	console.log(data);
   	  });
   }
}]);