console.log("Hello World!")
/*
let name ="tom" //變數
console.log(name)

name ="john"
console.log(name)
*/

const name ="tom" //常數
console.log(name)
/*
錯誤
name ="john"
console.log(name)
*/

//函式
function sayhi(){
    console.log("hi")
}


function sayhi(name,name2){
    console.log("hi"+name+"and"+name2)
}
sayhi("Mary","Ann")


function sayhi(name,name2){
    console.log(`hI!${name} and ${name2}`)
}
sayhi("May","Anny")

let per1 ="tom"
let per2 ="jay"
sayhi(per1,per2)

//條件式

const number ="5"
if(number >4) {
    console.log('大於 4')
  } else {
    console.log('小於等於 4')
  }

//函式_回傳名
function translate(name){
    if(name ==="name") {
return     
 } else {
        console.log('小於等於 4')
      }
}

//輸入
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function question(query) {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            resolve(answer)
        })
    })
}

async function main() {
    const name = await question('What is your name? ')
    console.log(`Hello, ${name}!`)

    rl.close()
}

main()


