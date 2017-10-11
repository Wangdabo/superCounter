angular.module('myApp').controller('dash_controller', function($scope, $interval,$state){
    //首页控制器
    //循环顶部第一屏内容循环
    $scope.card3repeat = [
        {src:'./images/ka.png','text':'我要开卡'},
        {src:'./images/qian.png','text':'我要签约'},
        {src:'./images/li.png','text':'我要理财'},
        {src:'./images/cx.png','text':'测试查询'},
        {src:'./images/func.png','text':'测试功能'},
        {src:'./images/dayin.png','text':'测试打印'},
        {src:'./images/ka.png','text':'测试大图标'},
        {src:'./images/li.png','text':'大图标'},
        {src:'./images/qian.png','text':'大图标'}

    ]

    //顶部内容点击事件
    $scope.cardtop = function (i) {
        $scope.fabricIsSelected = i;
        $scope.fabricIs2Selected = 1000;
        if(i==0){
            $state.go("actcard");
        }
    }

    //底部第一屏内容循环
    $scope.cardbuttonrepeat = [
        {src:'./images/cx.png','text':'账户查询'},
        {src:'./images/func.png','text':'功能'},
        {src:'./images/webapp.png','text':'改手机号'},
        {src:'./images/dayin.png','text':'打印流水'},
        {src:'./images/li.png','text':'测试理财'},
        {src:'./images/ka.png','text':'测试开卡'},
        {src:'./images/qian.png','text':'测试签约'},
        {src:'./images/dayin.png','text':'打印流水'},
        {src:'./images/cx.png','text':'小图标'},
        {src:'./images/dayin.png','text':'测试小图标'},
        {src:'./images/webapp.png','text':'最终测试'},
        {src:'./images/cx.png','text':'最终测试'},
        {src:'./images/li.png','text':'测试'}
    ]

    //底部内容点击事件
    $scope.cardbutton = function (i) {
        $scope.fabricIs2Selected = i;
        $scope.fabricIsSelected =1000;

    }

    var options = {year: "numeric", month: "short",
        day: "numeric" , weekday: "long" };
    //初始化时间
    $scope.theTime = new Date().toLocaleTimeString("kh-MR",options);

    $interval(function () {
        $scope.theTime = new Date().toLocaleTimeString("kh-MR",options);     //类似js中的setInterval()函数，每1秒重新调用当前时间
    }, 1000);
    console.log(123)
})