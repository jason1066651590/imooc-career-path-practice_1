// 声明年月日和总天数的变量
var year,month,day,sumDay=0;

//年月日获取函数
function info() {
        year = parseInt(prompt("请输入您的出生年份")),
        month = parseInt(prompt("请输入您的出生月份")),
        day = parseInt(prompt("请输入您的出生日期"));
}

//计算总天数函数
function sDay() {
    //定义赋值一个平年的数组
    var commonYear=[31,28,31,30,31,30,31,31,30,31,30,31];

    //循环累加除生日当月之前月份的总天数
    for (var i = 0; i<month-1; i++) {
        sumDay+=commonYear[i];
    }

    //判断平年和闰年，返回平年和闰年对应的总天数
    if ((year % 4 == 0 && year % 400 != 0 || year % 400 == 0)&&month>2) {
        return sumDay+=day+1;
    } else{
        return sumDay+=day;
    }
}

//调用函数
info();
sDay();

//输出语句
document.write("您的生日在" + year + "年是第" + sumDay + "天");
