angular.module('myApp').controller('dash_controller', function($scope, $interval){
    var options = {year: "numeric", month: "short",
        day: "numeric" , weekday: "long" };
    //初始化时间
    $scope.theTime = new Date().toLocaleTimeString("kh-MR",options);

    $interval(function () {
        $scope.theTime = new Date().toLocaleTimeString("kh-MR",options);     //类似js中的setInterval()函数，每1秒重新调用当前时间
    }, 1000);
    console.log(123)
})