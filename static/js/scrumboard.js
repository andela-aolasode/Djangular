(function() {
	'use strict';
	angular.module('scrumboard.demo', ['ngRoute'])
		.controller('ScrumboardController', ['$scope', '$http', '$location', ScrumboardController]);

	function ScrumboardController($scope, $http, $location) {
		$scope.add = function(list, title) {
			var card = {
				liist: list.id,
				title: title
			};

			$http.post('scrumboard/cards/', card).then(function(response) {
						list.cards.push(response.data);
					}
				).catch(function(error) {
					alert(error.message);
				})
		};

		$scope.logout = function () {
      $http.get('/auth_api/logout/')
        .then(function() {
          $location.url('/login');
        })
			};

		$scope.data = [];
		$http.get('scrumboard/lists/').then(function(response){
				$scope.data = response.data;
			},
			function(error) {
				alert('You are not logged in!');
				console.log(error);
			});
	}
}());
