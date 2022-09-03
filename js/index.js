// 欢迎页里层（内容）
const AnimationEvent = document.querySelector(".content_wrapper");
// logo
const logo = document.querySelector(".logo");
// 欢迎语
const helloBottom = document.querySelector(".hello_bottom");
// 欢迎页跳动箭头
const arrowBar = document.querySelector(".arrow_bar");
// 欢迎页外层
const content = document.querySelector(".content");
// 导航页
const navPage = document.querySelector(".nav-page");
// 过渡页
const shape = document.querySelector(".shape");
// 导航页卡片
const cardInner = document.querySelector(".card-inner");
// 检测欢迎页加载动画是否执行结束
AnimationEvent.addEventListener("webkitAnimationEnd", function () {
    logo.style.top = "-3.2rem";
    helloBottom.setAttribute("style", "opacity: 1; top: 3.2rem");
    arrowBar.setAttribute("style", "opacity: 1;");
});
// 监听logo是否单击
logo.addEventListener("click",()=>{
    location.href = "blog.html";
});
// 监听hello_bottom是否单击
helloBottom.addEventListener("click",()=>{
    location.href = "blog.html";
});
// 检测欢迎页过渡动画是否执行结束
content.addEventListener("webkitTransitionEnd",()=>{
    cardInner.setAttribute("style","transform: translateY(0px);");
})
// 检测欢迎页是否点击了跳动箭头
arrowBar.addEventListener("click", () => {
    content.setAttribute("style", "transform: translateY(-200vh);");
});
//监测欢迎页是否使用滚轮向下滚动
AnimationEvent.addEventListener("wheel", (e) => {
    let evt = e || window.event;  //考虑兼容性
    evt.preventDefault();
    if (evt.deltaY > 0) {  //在火狐中 向下滚动是3 谷歌是125
        content.setAttribute("style", "transform: translateY(-200vh);");
    }
    else {
        content.setAttribute("style", "transform: translateY(-200vh);");
    }
});