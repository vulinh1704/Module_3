async function onMyBirthDay(isKayoSick) {
    if (!isKayoSick) return 2;
    throw new Error('I am sad');
}

async function doSomething() {
    try {
        let result = await onMyBirthDay(false);
        console.log(`I have ${result} cakes`);
    } catch (error){
        console.log(error.message);
    } finally {
        console.log('Party');
    }
}
doSomething()