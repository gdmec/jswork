function calculate() {
    let num = document.getElementById('num').value
    num = parseInt(num) && Number(num)
    if (!isNaN(num)) {
        let pi = 0
        for (let i = 0; i <= num; ++i) {
            let fac = 1
            for (let j = 1; j <= i; ++j) {
                fac *= j
            }
            let oddfac = 1
            for (let j = 1; j <= i; ++j) {
                oddfac *= 2 * j + 1
            }
            pi += fac / oddfac
        }
        document.getElementById('pai').value = pi * 2
    }
}

calculate()