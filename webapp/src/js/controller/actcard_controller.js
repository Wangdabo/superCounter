angular.module('myApp').controller('actcard_controller', function($scope, $interval,actcard_service){
    var card = {};
    $scope.card = card;
    //所有信息对象
    var subFrom = {};
    $scope.subFrom = subFrom;
    //页签控制
    var pageflag = 0;
    $scope.pageflag = pageflag;
    //卡片信息
    var cardtype = [];
    $scope.cardtype = cardtype;
    //产品签约信息
    var productList = [];
    $scope.productList = productList;
    //身份证图片
    var idcardphoto = "";
    $scope.idcardphoto = idcardphoto;
    //下一步
    card.next = function (pageflag) {
        console.log(pageflag)
        if(pageflag == 0){
            for(var i in $scope.bar){
                $scope.bar[i].class = "todo";
            }
            $scope.bar[pageflag].class = "finished";
            //请求卡片数据
            var subFrom = {};
            subFrom.tellerNo = "900001005";
            subFrom.branchId = "90091";
            actcard_service.queryCard(subFrom).then(function (data) {
                $scope.cardtype = data.bsadata;
                console.log(data);
            })
        }else{
            $scope.bar[pageflag].class = "finished";
            if(pageflag == 2){

            }
            if(pageflag == 3){
                //查询产品信息
                var subFrom = {};
                subFrom.tellerNo = "900001005";
                subFrom.branchId = "90091";
                actcard_service.queryProduct(subFrom).then(function (data) {
                    $scope.productList = data.bsadata;
                    console.log(data)
                })
            }
            if(pageflag == 6) {
                console.log($scope.subFrom)
            }
        }
        pageflag++;
        $scope.pageflag = pageflag;
        console.log($scope.subFrom)
    }
    //上一步
    card.back = function () {
        if($scope.pageflag == 1){
            for(var i in $scope.bar){
                $scope.bar[i].class = "finished";
            }
        }
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

    /**--------------------------------模拟卡片类型-------------------------------*/
    // var cardtype = [{"cardName":"白金卡","pictureName":"platinum","product":[{"des":"上善卡慈善主题 普通借记卡 投资理财 存取款 代发工资  普通借记卡 投资理财 存取款 代"}]},
    //     {"cardName":"金卡","pictureName":"gold","product":[{"des":"上善卡慈善主题 普通借记卡 投资理财 存取款 代发工资  普通借记卡 投资理财 存取款 代"}]},
    //     {"cardName":"黑色卡","pictureName":"gold","product":[{"des":"上善卡慈善主题 普通借记卡 投资理财 存取款 代发工资   普通借记卡 投资理财 存取款 代"}]},
    //     {"cardName":"尊享卡","pictureName":"gold","product":[{"des":"上善卡慈善主题 普通借记卡 投资理财 存取款 代发工资  普通借记卡 投资理财 存取款 代"}]},
    //     {"cardName":"青春卡","pictureName":"gold","product":[{"des":"上善卡慈善主题 普通借记卡 投资理财 存取款 代发工资   普通借记卡 投资理财 存取款 代"}]},
    //     {"cardName":"量贩卡","pictureName":"gold","product":[{"des":"上善卡慈善主题 普通借记卡 投资理财 存取款 代发工资   普通借记卡 投资理财 存取款 代"}]}];
    // $scope.cardtype = cardtype;
    //卡片详情页签控制
    var carddetails = false;
    $scope.carddetails = carddetails;
    //选择卡片跳转
    card.details = function (card) {
        $scope.carddetails = true;
        $scope.subFrom.carditem = card;
    }
    //取消选择卡
    card.cancel = function () {
        $scope.carddetails = false;
        $scope.subFrom.carditem = {};
    }
    
    /**---------------------------------模拟身份信息读取------------------------------*/
    //身份读取页签控制
    var iddetails = false;
    $scope.iddetails = iddetails;
    //成功
    card.idcardsuccess = function () {
        $scope.iddetails = true;

        //身份核查方法,外设激活后调用
        //外设获取信息
        var subFrom = {};
        subFrom.vcherType = "101";
        subFrom.vcherNo = "522222199007112835";
        subFrom.name = "杨超";
        subFrom.phFlag = "1";
        subFrom.tellerNo = "900001005";
        subFrom.branchId = "900001";
        actcard_service.singleCheck(subFrom).then(function (data) {
            $scope.idcardphoto = data.bsadata.photo;
            var idcard = {};
            idcard.vcherType = "101";
            idcard.vcherNo = "522222199007112835";
            idcard.name = "杨超";
            idcard.visBrno = data.bsadata.visBrno;
            $scope.subFrom.idcard = idcard;
            console.log(data.bsadata)
        })
    }
    //失败
    card.idcarderror = function () {
        
    }
    /**---------------------------------模拟信息录入--------------------------------*/
    var personDetails = {};
    $scope.subFrom.personDetails = personDetails;


    /**----------------------------------模拟产品签约--------------------------------*/
    // var productList = [
    //     {"productName":"手机银行","option":[{"optionName":"开通","optionValue":"00"},{"optionName":"可指纹登录","optionValue":"01"},{"optionName":"支付限额","optionValue":"02"}]},
    //     {"productName":"网上银行","option":[{"optionName":"开通","optionValue":"00"},{"optionName":"需要动态口令","optionValue":"01"},{"optionName":"转账限额","optionValue":"02"}]},
    //     {"productName":"短信通","option":[{"optionName":"开通","optionValue":"00"},{"optionName":"需要动态口令","optionValue":"01"},{"optionName":"转账限额","optionValue":"02"}]},
    //     {"productName":"电话银行","option":[{"optionName":"开通","optionValue":"00"},{"optionName":"需要动态口令","optionValue":"01"},{"optionName":"转账限额","optionValue":"02"}]},
    //     {"productName":"电话银行","option":[{"optionName":"开通","optionValue":"00"},{"optionName":"需要动态口令","optionValue":"01"},{"optionName":"转账限额","optionValue":"02"}]},
    //                     ];
    // $scope.productList = productList;
    
    //确认签约
    card.sign = function (pageflag) {
        //组装数据展示
        var selectProduct = [];
        //挑选用户选择项
        for(var i in $scope.productList) {
            var item = $scope.productList[i];
            if(item.ischecked){
                var product = {};
                product.name = item.productName;
                product.option = [];
                for(var j in item.option){
                    if(item.option[j].ischecked){
                        product.option.push(item.option[j])
                    }
                }
                selectProduct.push(product);
                console.log(selectProduct)
            }
        }
        // $scope.subFrom.selectProduct = selectProduct;
        //测试样式
        var testselsr = [
            {"name":"网上银行"},
            {"name":"手机银行"},
            {"name":"电话银行"}
        ]
        $scope.subFrom.selectProduct = testselsr;
        card.next(pageflag);

    }
})