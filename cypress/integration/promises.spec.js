it('sem testes, ainda', () => { })

const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12);
        }, 1000)
    })

}

const system = async () => {
    console.log('init');            //imprimir no console
    const some = await getSomething()
    console.log(`Something is ${some}`);
    console.log("end")
}
system();













