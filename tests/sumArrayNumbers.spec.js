
describe("Iteration 5", () => {
    describe("Function - sumArrayNumbers", () => {

        it("should be defined", () => {
            expect(sumArrayNumbers).toBeDefined();
        });

        it("should take one argument", () => {
            expect(sumArrayNumbers.length).toBe(1);
        });

        it("should return the sum of all numbers in the array", () => {
            expect(sumArrayNumbers([2])).toEqual(2);
            expect(sumArrayNumbers([1, 2])).toEqual(3);
            expect(sumArrayNumbers([3, 4])).toEqual(7);
            expect(sumArrayNumbers([100, 47])).toEqual(147);
            expect(sumArrayNumbers([20, 30, 0, 200])).toEqual(250);
        });

        it("should return undefined if the argument passed is not an array", () => {
            expect(sumArrayNumbers(2)).toEqual(undefined);
            expect(sumArrayNumbers("five")).toEqual(undefined);
            expect(sumArrayNumbers(true)).toEqual(undefined);
        });

        it("should return 0 if the argument passed is an empty array", () => {
            expect(sumArrayNumbers([])).toEqual(0);
        });

    })
})

