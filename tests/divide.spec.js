
describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the division of the two numbers", () => {
            expect(divide(6, 2)).toEqual(3);
            expect(divide(20, 4)).toEqual(5);
            expect(divide(540, 4)).toEqual(135);
            expect(divide(10, 40)).toEqual(0.25);
            expect(divide(14, 4)).toEqual(3.5);
        });

        it("should return the division of the decimal numbers", () => {
            expect(divide(6.5, 2)).toEqual(3.25);
            expect(divide(20, 2.5)).toEqual(8);
            expect(divide(20.5, 2.5)).toEqual(8.2);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });

        it("should return undefined if any of the two arguments is not a number", () => {
            expect(divide("3", 4)).toEqual(undefined);
            expect(divide(3, "4")).toEqual(undefined);
            expect(divide("5", "10")).toEqual(undefined);
            expect(divide(true, false)).toEqual(undefined);
        });
    })
})



