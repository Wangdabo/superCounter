angular.module('myApp').controller('actcard_controller', function($scope, $interval){
    var card = {};
    $scope.card = card;
    //所有信息对象
    var subFrom = {};
    $scope.subFrom = subFrom;
    //页签控制
    var pageflag = 0;
    $scope.pageflag = pageflag;
    //下一步
    card.next = function (pageflag) {
        if(pageflag == 0){
            for(var i in $scope.bar){
                $scope.bar[i].class = "todo";
            }
            $scope.bar[pageflag].class = "finished";
        }else{
            $scope.bar[pageflag].class = "finished";
        }
        pageflag++;
        $scope.pageflag = pageflag;
    }
    //上一步
    card.back = function () {
        $scope.pageflag--;
    }

    //测试循环体组件
    var bar = [];
    $scope.bar = bar;
    //单体对象
    var obar1 = {};
    obar1.class = "finished";
    obar1.num = "1";
    obar1.text = "选择卡片";
    obar1.last = false;
    bar.push(obar1);

    var obar2 = {};
    obar2.class = "finished";
    obar2.num = "2";
    obar2.text = "身份审核";
    obar2.last = false;
    bar.push(obar2);

    var obar3 = {};
    obar3.class = "finished";
    obar3.num = "3";
    obar3.text = "信息录入";
    obar3.last = false;
    bar.push(obar3);

    var obar4 = {};
    obar4.class = "finished";
    obar4.num = "4";
    obar4.text = "产品签约";
    obar4.last = false;
    bar.push(obar4);

    var obar5 = {};
    obar5.class = "finished";
    obar5.num = "5";
    obar5.text = "信息确认";
    obar5.last = false;
    bar.push(obar5);

    var obar6 = {};
    obar6.class = "finished";
    obar6.num = "6";
    obar6.text = "设置密码";
    obar6.last = false;
    bar.push(obar6);

    var obar7 = {};
    obar7.class = "finished";
    obar7.num = "7";
    obar7.text = "完成";
    obar7.last = true;
    bar.push(obar7);
})