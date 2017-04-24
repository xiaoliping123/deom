//获取tpp_dfm_ul_01对象
var lis_01 = document.getElementsByClassName("banner1")[0].getElementsByTagName("li");
//获取li的集合
var lis_02 = document.getElementsByClassName("banner2_li");
//定义一个索引来控制li
var _index = 0;
//清除调用
var QingChu;
var flag;
//初始化
//先将其全部隐藏
for (var i = 0; i < lis_01.length; i++) {
	lis_01[i].style.opacity = "0";
	lis_02[i].style.background = "rgba(0,0,0,.5)";
}
//让第一张显示
//设置它的透明度（显示）
lis_01[0].style.opacity = "1";
//设置背景颜色
lis_02[0].style.background = "red";
show();
//每隔2秒调用一次
QingChu = setInterval(show, 2000);

//上一个
function mUp() {
	//清除调用
	clearInterval(QingChu);
	//每次减一次
	if (flag) { //如果是在定时器运行的时候
		--_index; //让索引回到本事
		flag = false; //修改标示
	}
	--_index;
	//处理特殊情况
	if (_index == -2) {
		_index = 2;
	}
	//判断当_index小于lis_01的长度就给_index赋值为3
	if (_index < 0) {
		_index = 3;
	}
	//先将其全部隐藏
	for (var i = 0; i < lis_01.length; i++) {
		lis_01[i].style.opacity = "0";
		lis_02[i].style.background = "rgba(0,0,0,.5)";
	}
	//设置它的透明度（显示）
	lis_01[_index].style.opacity = "1";
	//设置背景颜色
	lis_02[_index].style.background = "red";
	//每隔2秒调用一次
	QingChu = setInterval(show, 2000);
}
//下一个
function mDown() {
	//清除调用
	clearInterval(QingChu);
	//每次减一次
	if (flag) { //如果是在定时器运行的时候
		--_index; //让索引回到本事
		flag = false; //修改标示
	}
	//每次减一次
	++_index;
	//判断当_index大于lis_01的长度就给_index赋值为0
	if (_index > 3) {
		_index = 0;
	}
	//先将其全部隐藏
	for (var i = 0; i < lis_01.length; i++) {
		lis_01[i].style.opacity = "0";
		lis_02[i].style.background = "rgba(0,0,0,.5)";
	}
	//设置它的透明度（显示）
	lis_01[_index].style.opacity = "1";
	//设置背景颜色
	lis_02[_index].style.background = "red";
	console.log(_index);
	//每隔2秒调用一次
	QingChu = setInterval(show, 2000);
}

//li的点击事件
function anNiu(index) {
	//清除调用
	clearInterval(QingChu);
	//先将其全部隐藏
	for (var i = 0; i < lis_01.length; i++) {
		lis_01[i].style.opacity = "0";
		lis_02[i].style.background = "rgba(0,0,0,.5)";
	}
	//设置它的透明度（显示）
	lis_01[index].style.opacity = "1";
	//设置背景颜色
	lis_02[index].style.background = "red";
	_index = index;
	//每隔2秒调用一次
	QingChu = setInterval(show, 2000);
}
//图片滚动效果
function show() {
	flag = true;
	//先将其全部隐藏
	for (var i = 0; i < lis_01.length; i++) {
		lis_01[i].style.opacity = "0";
		lis_02[i].style.background = "rgba(0,0,0,.5)";
	}
	//设置它的透明度（显示）
	lis_01[_index].style.opacity = "1";
	//设置背景颜色
	lis_02[_index].style.background = "red";
	_index++;
	if (_index > lis_01.length - 1) {
		_index = 0;
	}
}
//获取元素
var minbox = document.getElementsByClassName("min_box")[0];
//定义一个决定移动位置的数组
var arr = ["-1px", "-222px", "-443px"];
//定义控时器索引
var num = 0;
//接收定时器返回的值
var mid;

function move(index) {
	//修改全屏的num
	num = index;
	//停止定时器
	clearInterval(mid);
	minbox.style.top = arr[index];
}

function out() {
	//鼠标开启 启动定时器
	mid = setInterval(mmove, 2000);
}
mid = setInterval(mmove, 2000);

function mmove() {
	num++;
	if (num > 2) {
		num = 0;
	}
}
/*
 * product.js
 */
var left_p = document.getElementsByClassName("left_p");
var left2 = document.getElementsByClassName("left2");
//初始化、让其先全部隐藏
for (var i = 0; i < left_p.length; i++) {
	//未点击之前的高度
	left2[i].style.height = "0px";
	//未点击之前的图片
	left_p[i].style.backgroundImage = "url(/img/libg16.gif)";
	//未点击之前的字体颜色
	left_p[i].style.color = "grey";
}

function show_(index) {
	//让其内容隐藏
	for (var i = 0; i < left_p.length; i++) {
		//未点击之前的高度
		left2[i].style.height = "0px";
		//未点击之前的图片
		left_p[i].style.backgroundImage = "url(/img/10.4.png)";
		//未点击之前的字体颜色
		left_p[i].style.color = "grey";
	}
	//让其隐藏内容显示
	//点击之后的高度
	left2[index].style.height = "220px";
	//点击之后的图片
	left_p[index].style.backgroundImage = "url(img/libg16.gif)";
	//点击之后的字体颜色
	left_p[index].style.color = "white";
}