//Numbers
const myvariable="42.0673aaa8"
const mynumber=42
const myfloat=42.034
console.log(mynumber)
console.log(myfloat)
console.log(myvariable)
console.log(myvariable===mynumber)
console.log(myfloat===mynumber)
console.log(myvariable+3)
console.log(Number(myvariable)+3)
console.log(Number(myvariable)===mynumber)


//Number Methods

//IsInteger
console.log(Number.isInteger(30)) /////Passing the value
console.log(Number.isInteger(myvariable))

//ParseFloat
console.log(Number.parseFloat(myvariable))
console.log(parseFloat(mynumber))

//ParseINt
console.log(Number.parseInt(myvariable))
console.log(parseInt(myfloat))
//ToFixed
console.log(Number.parseFloat(myvariable).toFixed(2))