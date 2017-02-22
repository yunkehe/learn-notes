var app = angular.module('accordionApp', []);

app.controller('accordionCtrl',['$scope', function($scope) {
    $scope.isShow = true;
    $scope.expand = function(){
    	console.log('show', this.isShow)
    	this.isShow = !this.isShow;
    }
}]);

app.directive('expander', function(){
	return {
		restrict: 'AE',
		replace: true,
		scope: {
			show: '&'
		},
		template: '<div><div ng-click="show">点击这里打开</div><div>这里是内容</div></div>',
		link: function(scope, element, attr){
			
		}
	}
});
