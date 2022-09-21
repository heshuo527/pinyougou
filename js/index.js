str = (n) => {
    let c = ''
    let cc = ''
    for (var i = 0; i < n; i++) {
        c += String(i + 1) 
    }
    for (var i = n - 1; i > 0; i--) {
        cc += String(i)
    }
    let s = c + cc
    console.log(typeof(s), s);
}
str(10)

str2 = (n) => {

    if (n > 26) {
        alert('仅限于26以内')
        return
    }
    //先把26个大写字母全都列出来
    let letterAll = 'ABCDEFGHIJKLMNOPQRSTUVWSYZ'
    //得到前半部分字符串
    let newLetter = letterAll.slice(0, n)
    //得到后半部分
    var newLetter2 = letterAll.slice(0, n - 1)

    /* //将后半部分反转
    内置api实现
    let newValue = newLetter2.split("").reverse().join("");
    console.log(newLetter + newValue); */
    
    //for循环实现
    var newValue = ''
	for(var i = newLetter2.length - 1; i >= 0; i--){
		newValue += newLetter2[i]
	}
    console.log(newLetter + newValue);
}
str2(26)


newArray = (array) => {
    console.log('函数执行了');
    let value = array.slice(0)
    for (let i = 0; i < array.length; i++) {
        let n = value[i]
        console.log('循环执行了', n);
        if (n === 9 && i > 0) {
            console.log('第一个if执行了');
            //把0左边的数字加一
            if (value[i - 1] !== 9) {
                value[i - 1] += 1
                console.log('第二个if执行了');
            }
        }
        if (n === 9 && i < value.length - 1) {
            console.log('第三个if执行了');
            //把0右边的数字加一
            if (value[i + 1] !== 9) {
                value[i + 1] += 1
                console.log('第四个if执行了');
            } 
        }
    }
    console.log('最终的结果', value);
}
newArray([0, 0, 0, 9, 0, 9, 0])
