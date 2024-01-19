
describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {

        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("should return a number representing the area of a rectangle", () => {
            expect(calculateArea(6, 2)).toEqual(12);
            expect(calculateArea(20, 4)).toEqual(80);
            expect(calculateArea(540, 4)).toEqual(2160);
            expect(calculateArea(20.5, 2)).toEqual(41);
            expect(calculateArea(20, 2.5)).toEqual(50);
            expect(calculateArea(30, 0)).toEqual(0);
            expect(calculateArea(0, 30)).toEqual(0);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });

        it("should return undefined if any of the two arguments is not a number", () => {
            expect(calculateArea("3", 4)).toEqual(undefined);
            expect(calculateArea(3, "4")).toEqual(undefined);
            expect(calculateArea("5", "10")).toEqual(undefined);
            expect(calculateArea(true, false)).toEqual(undefined);
        });

    })
})

