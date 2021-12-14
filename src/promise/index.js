const somethingsWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Hey!!');
        }else{
            reject('whoops');
        }
    });
};

somethingsWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const somethingsWillHappen2 = () => {
    return new Promise((resolve, reject) =>{
        if (true){
            setTimeout(()=>{
                resolve('True')
            }, 2000)
        }else{
            const error = new Error('whoops');
            reject(error);
        }
    });
}

somethingsWillHappen2()
.then(response => console.log(response))
.then(()=> console.log('hola'))
.catch(err => console.error(err));

Promise.all([somethingsWillHappen(), somethingsWillHappen2()])
.then(response => {
    console.log('Array of resoults', response);
})
.catch( err => {
    console.error(err);
})