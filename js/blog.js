// 导航栏固定定位
const nav = document.querySelector(".nav");
// nav-bar的所有a元素
const navBarA = document.querySelectorAll(".nav-bar a");
// 获取main元素下的所有子元素
const mainAll = document.querySelectorAll(".main div");
// 检测滚动条，发现元素进入视窗，执行动画
window.addEventListener("scroll", () => {
    for (let i = 0; i < mainAll.length; i++) {
        const isInView = isInViewPortOfOne(mainAll[i]);
        if (isInView) {
            mainAll[i].classList.add("fadeInUp");
        }
    }
});
// 获取当前的日期星期
function getTimes(times) {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var d = date.getDay();
    var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var time = year.toString() + "年" + month.toString() + "月" + day.toString() + "日 " + weekday[d];
    document.querySelector(times).innerHTML = time;
}
// 判断content-main元素是否在浏览器顶端
window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // console.log(scrollTop);
    if (scrollTop == 0) { //此时滚动条处于页面的顶部
        nav.style.backgroundColor = "";
        for (let i = 0; i < navBarA.length; i++) {
            navBarA[i].style.color = "#fff";
        }
        nav.style.color = "#fff";
    } else {
        nav.style.backgroundColor = "#fff";
        for (let i = 0; i < navBarA.length; i++) {
            navBarA[i].style.color = "rgb(51, 51, 51)";
        }
        nav.style.color = "rgb(51, 51, 51)";
    }
});
// 判断元素是否在可视区内
function isInViewPortOfOne(el) {
    // viewPortHeight 兼容所有浏览器写法
    const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const pos = el.getBoundingClientRect();
    return pos.top <= viewPortHeight;
}