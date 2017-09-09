function showdiv(){
    if(showdiv_display = document.getElementById('nav1').style.display=='none'){//如果show是隐藏的

        document.getElementById('nav1').style.display='block';//show的display属性设置为block（显示）

    }else{//如果show是显示的

        document.getElementById('nav1').style.display='none';//show的display属性设置为none（隐藏）
    }
}
<!-- 滚动广告 -->
function changemovie() {
    var qq=document.getElementById("zixun");

    qq.style.top=document.documentElement.scrollTop+document.body.scrollTop+200+"px";
}
window.onscroll=changemovie;

//切换图片
var arr = ["img/banner1.jpg","img/banner2.jpg","img/banner3.jpg","img/banner4.jpg"];
arr[0]="img/banner1.jpg";
arr[1]="img/banner2.jpg";
arr[2]="img/banner3.jpg";
arr[3]="img/banner4.jpg";
var count=0;

function autoPlayer() {
    if(arr.length == count)
        count=0;
    document.getElementById("banner1").src=arr[count];
    count++;
}
var Timer= setInterval(autoPlayer,2000);

function cleatTimer() {
    clearInterval(Timer);
}

//鼠标悬停
function showbanner(num) {
    cleatTimer();
    var index= parseInt(num);
    document.getElementById("banner1").src=arr[index-1];
    count = index;
}
function btnMouseOut() {
    Timer=setInterval(autoPlayer,2000);
}




function isset() {
    //用户名
    if(document.getElementById("username").value==""||document.getElementById("username").value==NaN)
    {
        alert("用户名不能为空");
        return false;
    }
    //email
    var email= /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    if(!document.getElementById("Email").value.match(email))
    {
        alert("Email格式错误");
        document.getElementById("Email").onfocus();
        return false;
    }

    //QQ
    var QQ= /^[1-9]\d{4,8}$/;
    if(!document.getElementById("QQ").value.match(QQ))
    {
        alert("qq格式错误");

        return false;
    }

    //phone
    var phone= /^((\(\d{2,3}\))|(\d{3}\-))?13\d{9}$/;
    if(!document.getElementById("phone").value.match(phone))
    {
        alert("手机号码格式错误");

        return false;
    }

    //内容
    if(document.getElementById("content").value.length>500)
    {
        alert("超过文本最大长度");

        return false;
    }
    return true;

}

