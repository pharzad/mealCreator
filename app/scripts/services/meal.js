'use strict';
angular.module('activeappApp').factory('meal', function ()
{
	return {
		saveMeal: function (newRecepie)
		{
                    if(typeof(Storage)!=='undefined')
                    {
			localStorage.setItem('meal', angular.toJson(newRecepie));
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                        
		},
		returnMeal: function ()
		{
			if (angular.fromJson(localStorage.getItem('meal')))
			{
				return angular.fromJson(localStorage.getItem('meal'));
			}
			else
			{
				return {
					name: 'newMeal',
					ingrediets: []
				};
			}
		},
		getA: function ()
		{
			var a = {
				calories: 0,
				carbs: 0,
				protein: 0,
				fat: 0
			};
			if (angular.fromJson(localStorage.getItem('meal')))
			{
				angular.forEach(angular.fromJson(localStorage.getItem('meal')).ingrediets, function (ingrediet)
				{
					var temp = ingrediet.calories * ingrediet.volume;
					a.calories = a.calories + Math.round(temp);
					temp = ingrediet.carbs * ingrediet.volume;
					a.carbs = a.carbs + Math.round(temp);
					temp = ingrediet.fat * ingrediet.volume;
					a.fat = a.fat + Math.round(temp);
					temp = ingrediet.protein * ingrediet.volume;
					a.protein = a.protein + Math.round(temp);

				});
			}
			return a;
		},
		deleteMeal: function ()
		{
			localStorage.removeItem('meal');
		}

	};

});