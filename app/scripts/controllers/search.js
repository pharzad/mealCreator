'use strict';
angular.module('activeappApp').controller('search', function ($scope, ajax, meal, $location)
{
	var recepie = meal.returnMeal();
	if (!recepie)
	{
		recepie = {
			name: 'newMeal',
			ingrediets: []
		};
	}
	//Fetching the ingredients
	ajax.getIngredients().then(function (data)
	{
		$scope.ingredients = data;
	});

	//onselect event to add addIngredient to object         
	$scope.addIngredients = function (ingredient)
	{
		ingredient.volume = 1;
		recepie.ingrediets.push(ingredient);
		meal.saveMeal(recepie);
		$location.path('/');
	};



});