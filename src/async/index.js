const doSomethingAsync = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve ('este mensaje sera el ultimo a pesar de ser el primero, gracias a la asincronismo'), 3000)
        : reject (new Error('test error'))
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('before');
doSomething();
console.log('After');


const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something)
    }catch (error){
        console.error(error)
    }
}

console.log('before 1');
anotherFunction();
console.log('after 1 ');