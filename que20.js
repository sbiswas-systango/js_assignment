
// // using callbacks


function getValue1(callback) {
    setTimeout(() => {
        console.log('A')
    }, 1000)
    callback(getValue3)
}
function getValue2(callback) {
    setTimeout(() => {
        console.log('B')
        callback()
    }, 3000)
}
function getValue3() {
    setTimeout(() => {
        console.log('C')
    }, 2000)
}
function AllValues() {
    getValue1(getValue2);
}
AllValues()


// using promises

let promise1, promise2, promise3

function getValue1() {
    promise1 = new Promise(function (resolve, reject) {
        resolve()

        setTimeout(() => {
            console.log('A')
        }, 1000)
    });
    promise1.then(getValue2())

}
function getValue2() {
    promise2 = new Promise(function (resolve, reject) {
        resolve()
        setTimeout(() => {
            console.log('B')
            promise2.then(getValue3())

        }, 3000)
    });

}
function getValue3() {
    promise3 = new Promise(function (resolve, reject) {
        resolve()

        setTimeout(() => {
            console.log('C')
        }, 2000)
    });

}

function AllValues() {
    promise = new Promise(function (resolve, reject) {
        resolve()
    });
    promise.then(getValue1())
}

AllValues()


// using async await

async function getValue1() {
    promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('A')
        }, 1000)
    })
    await getValue2()
}
async function getValue2() {
    promise = new Promise(function (resolve, reject) {

        setTimeout(async () => {
            console.log('B')
            await getValue3()
        }, 3000)
    })
}
async function getValue3() {
    promise = new Promise(function (resolve, reject) {

        setTimeout(() => {
            console.log('C')
        }, 2000)
    })

}
async function AllValues() {
    await getValue1()
}
AllValues();