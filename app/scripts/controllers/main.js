'use strict';
angular.module('activeappApp').controller('MainCtrl', function ($scope, meal, $location)
{
    $scope.oneAtATime = true;
    $scope.status = {
    isFirstOpen: true
  };
	//Loading meal and ingridients
	function loadMeal()
	{
		$scope.meal = meal.returnMeal();
		$scope.a = meal.getA();
	}
	loadMeal();
	//changing ingridient value
	//add ingridient
	$scope.addIngredient = function ()
	{
		$location.path('/search');
	};
	//changing name
	$scope.changeMeal = function ()
	{
		$scope.result = meal.saveMeal($scope.meal);
		if ($scope.result)
		{
			loadMeal();
		}
	};
	$scope.deleteMeal = function ()
	{
		meal.deleteMeal();
		loadMeal();
		$location.path('/#');
	};
});