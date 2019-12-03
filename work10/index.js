function monkey() {
    let total = document.getElementById("monkeytotal").value
    let kick = document.getElementById("monkeykick").value
    total = parseInt(total) && Number(total)
    kick = parseInt(kick) && Number(kick)
    if (isNaN(total) || isNaN(kick)) {
        alert('请输入数字')
        return
    }
    let monkey = []
    let kicked=[]
    for (let i = 1; i <= total; i++) {
        monkey.push(i)
    }
    let i = 0
    let logs = []
    while (monkey.length > 1) {
        i++;
        logs.push([monkey.concat(), i % kick || kick, 0])
        head = monkey.shift()
        if (i % kick != 0) {
            monkey.push(head);
            logs.push([monkey.concat(), i % kick || kick, monkey.length-1])
        } else {
            logs.push([monkey.concat(), i % kick || kick, -1])
        }
    }
    logs.push(monkey.concat(), -1, -1)
    logValues = logs.values()
    showDiv = document.getElementById("result")
    //setTimeout("showLog()", 50)
    document.getElementById('monkeyking').innerHTML=monkey[0]
}

function showLog() {
    let {
        done,
        value: [monkey, kick, turn]
    } = logValues.next()
    str = `<span style="font-size:40px;">${kick}</span><br>`
    for (const key in monkey) {
        let colorstr = key==turn ? 'color:red;' : ''
        str += `<span style="font-size:40px;
                ${colorstr}">${monkey[key]}</span>`

    }
    //把html代码设置到显示的div中
    showDiv.innerHTML = str
    //如果定位指针不是-1（-1是最后一条记录），就调用延时方法调用slideShow函数显示下一条记录，
    //以形成动画效果。
    if (kick != -1)
        setTimeout("showLog(logValues,showDiv)", 500)
}

function stat() {
    let str = document.getElementById("str").value
    let obj = {}
    obj = str.split('').sort().reduce((result, val) => {
        result[val] = result[val] ? result[val] + 1 : 1
        return result
    }, obj)
    document.getElementById('result').innerText = JSON.stringify(obj)
}

window.open('', 'newWin', 'left=200', false);

location.ref = 