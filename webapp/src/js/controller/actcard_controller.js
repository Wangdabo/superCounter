angular.module('myApp').controller('actcard_controller', function($scope, $interval,actcard_service,$rootScope,common_service,$state){
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
    //查询所有个性化配置
    var res = $rootScope.res.actcard_service;//页面所需调用的服务
    //返回首页
    $scope.backhome  = function () {
        $state.go('dashboard')
    }
    //下一步
    card.next = function (pageflag) {
        console.log(pageflag)
        if(pageflag == 0){
            $scope.bar[pageflag].img = "./images/select.png";
            //请求卡片数据
            var subFrom = {};
            subFrom.tellerNo = "900001005";
            subFrom.branchId = "90091";
            common_service.post(res.queryCard.url,subFrom).then(function (data) {
                var a = {};
                a.code = "测试"
                data.bsadata[0].product.push(a);
                $scope.cardtype = data.bsadata;//后台返回样式
                console.log(data.bsadata)
            })
        }else{
            $scope.bar[pageflag].img = "./images/select.png";
            if(pageflag == 3){
                //查询产品信息
                var subFrom = {};
                subFrom.tellerNo = "900001005";
                subFrom.branchId = "90091";
                common_service.post(res.queryProduct.url,subFrom).then(function (data) {
                    $scope.productList = data.bsadata;
                    console.log(data.bsadata);
                })
            }
            if(pageflag == 6) {
            }
        }
        pageflag++;//利用next方法，让pageflag++,相同步骤的子页面，不使用next方法，利用ng-if条件来控制页面显示隐藏，就完成了pageflag与bar对应的控制
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
    obar1.img = './images/noselect.png'
    bar.push(obar1);

    var obar2 = {};
    obar2.class = "finished";
    obar2.num = "2";
    obar2.text = "身份审核";
    obar2.last = false;
    obar2.img = './images/noselect.png'
    bar.push(obar2);

    var obar3 = {};
    obar3.class = "finished";
    obar3.num = "3";
    obar3.text = "信息录入";
    obar3.last = false;
    obar3.img = './images/noselect.png'
    bar.push(obar3);

    var obar4 = {};
    obar4.class = "finished";
    obar4.num = "4";
    obar4.text = "产品签约";
    obar4.last = false;
    obar4.img = './images/noselect.png'
    bar.push(obar4);

    var obar5 = {};
    obar5.class = "finished";
    obar5.num = "5";
    obar5.text = "信息确认";
    obar5.last = false;
    obar5.img = './images/noselect.png'
    bar.push(obar5);

    var obar6 = {};
    obar6.class = "finished";
    obar6.num = "6";
    obar6.text = "设置密码";
    obar6.last = false;
    obar6.img = './images/noselect.png'
    bar.push(obar6);

    var obar7 = {};
    obar7.class = "finished";
    obar7.num = "7";
    obar7.text = "开户成功";
    obar7.last = true;
    obar7.img = './images/noselect.png'
    bar.push(obar7);

    /**--------------------------------模拟卡片类型-------------------------------*/
    // var test = [{"cardName":"白金卡","pictureName":"platinum","product":[{"des":"上善卡慈善主题 普通借记卡 普通借记卡 投"}]},
    //     {"cardName":"金卡","pictureName":"gold","product":[{"des":"上善卡慈善主题 普通借记卡 投资理财 存取款 代发工资  普通借"}]},
    //     {"cardName":"黑色卡","pictureName":"gold","product":[{"des":"上善卡慈善主题 普通借记卡 投资理财 存取款 代发工资   普通 "}]},
    //     {"cardName":"尊享卡","pictureName":"gold","product":[{"des":"上善卡慈善主题 普通借记卡 投资理财 存取款 代发工资  普通"}]},
    //     {"cardName":"青春卡","pictureName":"gold","product":[{"des":"上善卡慈善主题 普通借记卡 投资理财 存取款 代发工资   普通"}]},
    //     {"cardName":"量贩卡","pictureName":"gold","product":[{"des":"上善卡慈善主题 普通借记卡 投资理财 存取款 代发工资   普通"}]}];
    // $scope.test = test;
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
    var iddetails = false;//默认false
    $scope.iddetails = iddetails;
    var takephoto = false;
    $scope.takephoto = takephoto;
    var idc = {};
    $scope.idc = idc;
    //成功
    card.idcardsuccess = function () {
        //身份核查方法,外设激活后调用
        //外设获取信息
        var subFrom = {};
        subFrom.vcherType = "101";
        subFrom.vcherNo = idc.vcherNo;
        subFrom.name = idc.name;
        subFrom.phFlag = "1";
        subFrom.tellerNo = "900001005";
        subFrom.branchId = "900001";
        common_service.post(res.singleCheck.url,subFrom).then(function (data) {
            console.log(data)
            if(data.retCode == "TDCMCT08006"){
                alert(data.retMsg);
            }else{
                $scope.idcardphoto = data.bsadata.photo;
                var idcard = {};
                idcard.vcherType = "101";
                idcard.vcherNo = "522222199007112835";
                idcard.name = "杨超";
                idcard.visBrno = data.bsadata.visBrno;
                $scope.subFrom.idcard = idcard;
                $scope.iddetails = true;
                console.log(data.bsadata)
            }

        })

        common_service.post(res.queryBlackList.url,subFrom).then(function (data) {
            console.log(data)
            if(data.retCode == "TDCMCT08006"){
                alert(data.retMsg);
            }else{
                // $scope.idcardphoto = data.bsadata.photo;
                // var idcard = {};
                // idcard.vcherType = "101";
                // idcard.vcherNo = "522222199007112835";
                // idcard.name = "杨超";
                // idcard.visBrno = data.bsadata.visBrno;
                // $scope.subFrom.idcard = idcard;
                // $scope.iddetails = true;
                console.log(data.retMsg)
            }

        })
    }
    //联网核查成功后,进入拍照界面
    card.successnext = function () {
        $scope.takephoto = true;
    }
    /**---------------------------------模拟信息录入--------------------------------*/
    var personDetails = {};
    $scope.subFrom.personDetails = personDetails;
    $scope.title1 = "点击发送验证码";
    //点击发送验证码
    card.validateph = function () {
        // common_service.post(res.queryMessageCheck.url,subFrom).then(function (data) {
        //     console.log(data)
        //     if(data.retCode == "TDCMCT08006"){
        //         alert(data.retMsg);
        //     }else{
        //         console.log(data.retMsg)
        //     }
        //
        // })
        alert("发送成功");
        $scope.isnext = true;//让下一步显示
    }


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