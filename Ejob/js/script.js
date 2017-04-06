// 封装getElementById()方法
function byId(id) {
    return typeof(id) === "string" ? document.getElementById(id) : id;
}

//全局变量
var pics = byId("section").getElementsByTagName('div'),
    option = byId("option").getElementsByTagName('a'),
    len = pics.length,
    index = 0,
    timer = null;

function slideImg() {
    var section = byId("section");
    //滑过清除定时器
    section.onmouseover = function() {
            if (timer) clearInterval(timer);
            //鼠标放在页面上时，变小手状
            this.style.cursor = "pointer";
        }
    //离开继续定时器
    section.onmouseout = function() {
        timer = setInterval(function() {
            index++;
            if (index >= len) {
                index = 0;
            }
            //调用changeImg，切换图片
            changeImg();
            //调用changeOption，图片切换的时候，改变选项卡字体、背景色和直角样式
            changeOption();
        }, 1000)
    }

    //自动在section上触发鼠标离开的事件
    section.onmouseout();

    //遍历所有点击，且绑定点击事件，点击选项切换图片
    for (var j = 0; j < len; j++) {
        //给所有a添加一个id的属性，值为j,作为当前a的索引
        option[j].id = j;
        //滑过选项卡清除计时器
        option[j].onmouseover = function() {
            if (timer) clearInterval(timer);
        }
        option[j].onmouseout = function() {
            //离开继续定时器
            timer = setInterval(function() {
                index++;
                if (index >= len) {
                    index = 0;
                }
                //离开选项卡时，切换图片
                changeImg();
                //离开选项卡时，改变选项卡样式
                changeOption();
            }, 1000)
        }
        option[j].onclick = function() {
            // 改变index为当前a的id值
            index = this.id;
            //点击选项卡，背景色发生变化
            for (var k = 0; k < len; k++) {
                option[k].style.backgroundColor = "#fff"
            }
            option[index].style.backgroundColor = "#fc0"
            //点击选项卡时调用changeImg，实现切换图片
            changeImg();
            //点击选项卡时调用changeOption，图片切换的时候，改变选项卡字体、背景色和直角样式
            changeOption();
        }
    }
}


//切换图片时，改变选项卡样式
function changeOption() {
    //当鼠标点击选项卡时，背景颜色恢复成白色背景，四个角恢复成直角，字体恢复普通粗度
    for (var k = 0; k < len; k++) {
        option[k].style.backgroundColor = "#fff";
        option[k].style.fontWeight = "normal";
        option[k].style.borderRadius = "10px";
    }
    //当鼠标点击选项卡时，背景颜色改变，四个角显示成圆角，字体加粗
    option[index].style.backgroundColor = "#fc0";
    option[index].style.fontWeight = "bold";
    option[index].style.borderRadius = "10px";
}

//切换图片
function changeImg() {
    // 遍历section下的div和选项卡的a，将div背景图隐藏
    for (var i = 0; i < len; i++) {
        pics[i].style.display = "none";
    }
    //根据index索引找到当前div，将其显示出来
    pics[index].style.display = "block";
}
slideImg();
