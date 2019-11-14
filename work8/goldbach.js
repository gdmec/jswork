// 输入任意一个大于2的偶数并返回结果;
function goldbach() {
    let odd = parseInt(document.getElementById('odd').value)
    if (!isNaN(odd)) {
        isTrue(odd)
    }
}

// 判断一个数是否是质数 素数只能被1和自身整除
function factorial(a) {
    var sum = 0;
    for (let i = 1; i <= a; i++) {
        if (a % i == 0) {
            sum++;
        }
    }
    if (sum == 2) {
        return true;
    } else {
        return false;
    }
}
// 判断用户输入的偶数是否可分为两个质数之和：
function isTrue(a) {
    let showDiv = document.getElementById('goldbach')
    let str=''
    for (let i = 2; i < a / 2; i++) {
        var j = a - i;
        if (factorial(i) && factorial(j)) {
            str +=a + "可以拆分为两个质数" + i + "与" + j + "的和<br>" 
        }
    }
    showDiv.innerHTML = str
}