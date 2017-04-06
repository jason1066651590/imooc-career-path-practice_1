var year = parseInt(prompt("请输入您的出生年份")),
    month = parseInt(prompt("请输入您的出生月份")),
    day = parseInt(prompt("请输入您的出生日期")),
    sumDay;

function sDay() {
    switch (month) {
        case 1:
            sumDay = day;
            break;
        case 2:
            sumDay = 31 + day;
            break;
        case 3:
            sumDay = 31 + 28 + day;
            break;
        case 4:
            sumDay = 31 * 2 + 28 + day;
            break;
        case 5:
            sumDay = 31 * 2 + 28 + 30 + day;
            break;
        case 6:
            sumDay = 31 * 3 + 28 + 30 + day;
            break;
        case 7:
            sumDay = 31 * 3 + 28 + 30 * 2 + day;
            break;
        case 8:
            sumDay = 31 * 4 + 28 + 30 * 2 + day;
            break;
        case 9:
            sumDay = 31 * 5 + 28 + 30 * 2 + day;
            break;
        case 10:
            sumDay = 31 * 5 + 28 + 30 * 3 + day;
            break;
        case 11:
            sumDay = 31 * 6 + 28 + 30 * 3 + day;
            break;
        case 12:
            sumDay = 31 * 6 + 28 + 30 * 4 + day;
            break;

    }
    if (year % 4 == 0 && year % 400 != 0 || year % 400 == 0) {
        return sumDay += 1;
    } else {
        return sumDay;
    }
}
sDay();
document.write("您的生日在" + year + "年是第" + sumDay + "天");
