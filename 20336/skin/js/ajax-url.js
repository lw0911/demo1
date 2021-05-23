            var ajaxUrlMemberRegister = "/cn%2Fajax%2Fmember%2Fregister.html";
            var ajaxUrlMemberAtivationAgin = "/cn%2Fajax%2Fmember%2Fativation-agin.html";
            var ajaxUrlMemberForgetPassword = "/cn%2Fajax%2Fmember%2Fforget-password.html";
            var ajaxUrlMemberResetPassword = "/cn%2Fajax%2Fmember%2Freset-password.html";
            var ajaxUrlMemberLogin = "/cn%2Fajax%2Fmember%2Flogin.html";
            var ajaxMemberIsLogin = "/cn%2Fajax%2Fmember%2Fislogin.html";
            var ajaxUrlMemberModifypwd = "/cn%2Fajax%2Fmember%2Fmodifypwd.html";
            var ajaxUrlMemberInformation = "/cn%2Fajax%2Fmember%2Finformation.html";
            var ajaxUrlMemberAddress = "/cn%2Fajax%2Fmember%2Faddress.html";
            var ajaxUrlMemberEditAddress = "/cn%2Fajax%2Fmember%2Fedit-address.html";
            var ajaxUrlMemberSetAsDefaultAddress = "/cn%2Fajax%2Fmember%2Fdefault-address.html";
            var ajaxUrlMemberDeleteAddress = "/cn%2Fajax%2Fmember%2Fdelete-address.html";
            var ajaxUrlMemberAddCollection = "/cn%2Fajax%2Fmember%2Fadd-collection.html";
            var ajaxUrlMemberDeleteCollection = "/cn%2Fajax%2Fmember%2Fdelete-collection.html";
            var ajaxUrlMemberAddCart = "/cn%2Fajax%2Fmember%2Fadd-cart.html";
            var ajaxUrlMemberDelSingleCart = "/cn%2Fajax%2Fmember%2Fdel-single-cart.html";
            var ajaxUrlMemberDelDoubleleCart = "/cn%2Fajax%2Fmember%2Fdel-double-cart.html";
            var ajaxUrlMemberEditCart = "/cn%2Fajax%2Fmember%2Fedit-cart.html";
            var ajaxUrlMemberEditSingleCart = "/cn%2Fajax%2Fmember%2Fedit-single-cart.html";
            var ajaxUrlGetCartNumber = "/cn%2Fajax%2Fmember%2Fcart-number.html";
            var ajaxUrlMemberOrderConfirmation = "/cn%2Fajax%2Fmember%2Fcreate-order-confirmation.html";
            var ajaxUrlMemberImmeOrder = "/cn%2Fajax%2Fmember%2Fimme-order.html";
            var ajaxUrlOrderCancel = "/cn%2Fajax%2Forder%2Fcancel.html";
            var ajaxUrlOrderChangeCashDelivery = "/cn%2Fajax%2Forder%2Fchange-cash-delivery.html";
            var ajaxUrlOrderChangePayOnline = "/cn%2Fajax%2Forder%2Fchange-pay-online.html";
            var ajaxUrlOrderReceipt = "/cn%2Fajax%2Forder%2Freceipt.html";
            var ajaxUrlOrderEvaluate = "/cn%2Fajax%2Forder%2Fevaluate.html";
            var ajaxUrlOrderProductEvaluate = "/cn%2Fajax%2Forder%2Fproduct-evaluate.html";
            var ajaxUrlOrderDelete = "/cn%2Fajax%2Forder%2Fdelete.html";
            var ajaxUrlArticleComment = "/cn%2Fajax%2Fcomment%2Farticle.html";
            var ajaxUrlComponentFile = "/cn%2Fajax%2Fcomponents%2Ffile.html";
            var ajaxUrlProductsFile = "/cn%2Fajax%2Fproducts%2Ffile.html";
            var ajaxUrlFileSystemDownload = "/cn%2Fajax%2Ffile%2Ffile.html";
            var searchKeyword = "/cn%2Fsearch%2F";
            var memberSiteUrl = "/cn%2Fmember%2Fsite.html";
            var memberLoginUrl = "/cn%2Fmember%2Flogin.html";
            var memberCartUrl = "/cn%2Fmember%2Fcart.html";
            var memberOrderUrl = "/cn%2Fmember%2Forder.html";
            var memberOrderConfirmationUrl = "/cn%2Fmember%2Forder%2Fconfirmation.html";
            var ajaxPushVCode = "/cn%2Fajax%2Fuser%2Fget-vcode.html";
            var ajaxPushVCodeIsRegister = "/cn%2Fajax%2Fuser%2Fget-vcode-register.html";
    
(function ($) {
    $.extend({
        "ajaxUrl": function (options) {
            var _ajaxUrl = {"ajaxUrlMemberRegister":"%2Fajax%2Fmember%2Fregister.html","ajaxUrlMemberAtivationAgin":"%2Fajax%2Fmember%2Fativation-agin.html","ajaxUrlMemberForgetPassword":"%2Fajax%2Fmember%2Fforget-password.html","ajaxUrlMemberResetPassword":"%2Fajax%2Fmember%2Freset-password.html","ajaxUrlMemberLogin":"%2Fajax%2Fmember%2Flogin.html","ajaxMemberIsLogin":"%2Fajax%2Fmember%2Fislogin.html","ajaxUrlMemberModifypwd":"%2Fajax%2Fmember%2Fmodifypwd.html","ajaxUrlMemberInformation":"%2Fajax%2Fmember%2Finformation.html","ajaxUrlMemberAddress":"%2Fajax%2Fmember%2Faddress.html","ajaxUrlMemberEditAddress":"%2Fajax%2Fmember%2Fedit-address.html","ajaxUrlMemberSetAsDefaultAddress":"%2Fajax%2Fmember%2Fdefault-address.html","ajaxUrlMemberDeleteAddress":"%2Fajax%2Fmember%2Fdelete-address.html","ajaxUrlMemberAddCollection":"%2Fajax%2Fmember%2Fadd-collection.html","ajaxUrlMemberDeleteCollection":"%2Fajax%2Fmember%2Fdelete-collection.html","ajaxUrlMemberAddCart":"%2Fajax%2Fmember%2Fadd-cart.html","ajaxUrlMemberDelSingleCart":"%2Fajax%2Fmember%2Fdel-single-cart.html","ajaxUrlMemberDelDoubleleCart":"%2Fajax%2Fmember%2Fdel-double-cart.html","ajaxUrlMemberEditCart":"%2Fajax%2Fmember%2Fedit-cart.html","ajaxUrlMemberEditSingleCart":"%2Fajax%2Fmember%2Fedit-single-cart.html","ajaxUrlGetCartNumber":"%2Fajax%2Fmember%2Fcart-number.html","ajaxUrlMemberOrderConfirmation":"%2Fajax%2Fmember%2Fcreate-order-confirmation.html","ajaxUrlMemberImmeOrder":"%2Fajax%2Fmember%2Fimme-order.html","ajaxUrlOrderCancel":"%2Fajax%2Forder%2Fcancel.html","ajaxUrlOrderChangeCashDelivery":"%2Fajax%2Forder%2Fchange-cash-delivery.html","ajaxUrlOrderChangePayOnline":"%2Fajax%2Forder%2Fchange-pay-online.html","ajaxUrlOrderReceipt":"%2Fajax%2Forder%2Freceipt.html","ajaxUrlOrderEvaluate":"%2Fajax%2Forder%2Fevaluate.html","ajaxUrlOrderProductEvaluate":"%2Fajax%2Forder%2Fproduct-evaluate.html","ajaxUrlOrderDelete":"%2Fajax%2Forder%2Fdelete.html","ajaxUrlArticleComment":"%2Fajax%2Fcomment%2Farticle.html","ajaxUrlComponentFile":"%2Fajax%2Fcomponents%2Ffile.html","ajaxUrlProductsFile":"%2Fajax%2Fproducts%2Ffile.html","ajaxUrlFileSystemDownload":"%2Fajax%2Ffile%2Ffile.html","searchKeyword":"%2Fsearch%2F","memberSiteUrl":"%2Fmember%2Fsite.html","memberLoginUrl":"%2Fmember%2Flogin.html","memberCartUrl":"%2Fmember%2Fcart.html","memberOrderUrl":"%2Fmember%2Forder.html","memberOrderConfirmationUrl":"%2Fmember%2Forder%2Fconfirmation.html","ajaxPushVCode":"%2Fajax%2Fuser%2Fget-vcode.html","ajaxPushVCodeIsRegister":"%2Fajax%2Fuser%2Fget-vcode-register.html"};
            if(!!_ajaxUrl[options]){
                return "/cn"+_ajaxUrl[options];
            }else{
                return options;
            }
        }
    });
})(jQuery);
