(function(){
	// this makes things inside of function
	// so make sure put 'use strict' when you have iffy function
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', function($scope){		
		$scope.name = "";
		$scope.totalWords = 0;
		$scope.countWords = function(){		
			$scope.totalWords = countWords($scope.name);
			throwMsg($scope.totalWords);			
		};

		function countWords( str ){
			if(str.length > 0){
				var arr = str.split(',');					
				return arr.length;
			}
			return 0;			
		}

		function throwMsg( count ){
			console.log(count);
			if(count == 0){
				$scope.message = "Please enter data first";
				
			}
			else if(count <= 3){				
				$scope.message = "Enjoy!";				
			}
			else if(count > 3){
				$scope.message = "Too much!"

			}
		}

	});
})();