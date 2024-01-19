function sumArrayNumbers(numbersArr) {

    if(!Array.isArray(numbersArr)) {
        return undefined;
    }

    const total = numbersArr.reduce((acc, curr) => {
        return acc + curr;
    }, 0);

    return total;
}