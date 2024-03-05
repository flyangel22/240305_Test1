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
