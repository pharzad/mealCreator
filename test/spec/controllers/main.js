'use strict';

describe('Controller: MainCtrl', function ()
{

	// load the controller's module
	beforeEach(module('activeappApp'));

	var MainCtrl, scope, $location;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope, _$location_)
	{
		scope = $rootScope.$new();
		$location = _$location_;
		MainCtrl = $controller('MainCtrl', {
			$scope: scope
		});
	}));

	it('should attach a list of meal to the scope', function ()
	{
		expect(scope.meal).not.toBeNull();
	});
        
	it('should attach a list of ingredients to the scope', function ()
	{
		expect(scope.a).not.toBeNull();
	});
        
	it('should attach the default meal to the scope', function ()
	{
		expect(scope.meal).not.toBeNull();
	});
        
	it('should navigate to search page', function ()
	{
		$location.path('/search');
		expect($location.path()).toBe('/search');
	});
        
	it('should save meal', function ()
	{
		scope.changeMeal();
		expect(scope.result).toBe(true);
	});
});