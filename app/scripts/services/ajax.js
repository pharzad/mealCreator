'use strict';
angular.module('activeappApp').service('ajax', function ($http)
{
	this.getIngredients = function ()
	{
		//url to json file
		var url = 'ingredients.json';
		return $http.get(url, {
			cache: false
		}).then(function (result)
		{
			return result.data;
		});
	};
});