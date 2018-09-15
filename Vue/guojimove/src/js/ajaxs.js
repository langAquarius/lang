function ajax(sUrl, successFn, fFn) {
    //1.创建Ajax对象
    var oAjax = null;
    if (window.XMLHttpRequest) {
        oAjax = new XMLHttpRequest();
    } else {
        oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //2.连接服务器
    oAjax.open('GET', sUrl, true);

    //3.发送请求
    oAjax.send();

    //4.接收返回
    oAjax.onreadystatechange = function() {
        if (oAjax.readyState == 4) { // 解析完成
            if (oAjax.status == 200) { //成功
                successFn(oAjax.responseText);
            } else {
                fFn(oAjax.status);
            }
        }
    }

}

export { ajax }