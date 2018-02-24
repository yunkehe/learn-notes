var app = angular.module('accordionApp', []);

app.controller('accordionCtrl',['$scope', function($scope) {
    $scope.enabeShow = false;
    $scope.expand = function(){
    	console.log('show', this.enabeShow)
    	this.enabeShow = !this.enabeShow;
    }

    $scope.expanders = [{
    	name: '点击1',
    	text: '点击1的内容'
    },{
    	name: '点击2',
    	text: '点击2的内容'
    },{
    	name: '点击3',
    	text: '点击3的内容'
    }];

}]);

app.directive('expander', function(){
	return {
		restrict: 'AE',
		replace: true,
		// scope: {
		// 	show: '&'
		// },
		template: '<div ng-repeat="obj in expanders"><div ng-click="expand(enabeShow)">{{obj.name}}</div>\
				<div ng-show="enabeShow">{{obj.text}}</div></div>',
		link: function($scope, element, attr){
			
		}
	}
});

app.controller('expandCtrl', ['$scope', function ($scope) {
	$scope.enabeShow = false;
	$scope.expand = function (argument) {
		this.enabeShow = !this.enabeShow;
	}
}]);

