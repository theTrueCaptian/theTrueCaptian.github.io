/**
 * Created by mh4047 on 4/28/15.
 */
var app = angular.module('maeda_app',[]);
app.directive('keypressEvents',

    function ($document, $rootScope) {
        return {
            restrict: 'A',
            link: function () {
                console.log('linked');
                $document.bind('keypress', function (e) {
                    $rootScope.$broadcast('keypress', e, String.fromCharCode(e.which));
                });
            }
        }
    });

app.controller('page_controller', function($rootScope, $scope, $location, $window){

    $scope.show_progress = false;
    $scope.navClass = function (page, isShowProgressBar) {
        $scope.partial_link = page;

        if(isShowProgressBar) {
            $scope.show_progress = true;


            setTimeout(function () {
                $scope.$apply(function () {
                    $scope.show_progress = false;
                    console.log('done')
                })
            }, 1000);
            console.log("loading")
        }
    };

    $scope.go = function ( path ) {
      $window.location.href = path;
    };

    $scope.key = "";
    $scope.obj = {privacyon: false};

    $rootScope.$on('keypress', function (evt, obj, key) {
        $scope.key = $scope.key +key;
        if(_.contains($scope.key, "hide")){
            $scope.key = "";
            $scope.obj.privacyon = true;
            console.log($scope.key)
            $scope.$apply()
        }else if(_.contains($scope.key, "show")){
            $scope.key = "";
            $scope.obj.privacyon = false;
            console.log($scope.key)
            $scope.$apply()
        }

    })

})