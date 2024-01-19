

describe("Iteration 4", () => {
    describe("Function - printFullName", () => {

        it("should be defined", () => {
            expect(printFullName).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(printFullName.length).toBe(1);
        });

        it("should return a string with the first name and the last name separated by a space", () => {
            expect(printFullName({firstName: "Alice", lastName: "Smith"})).toEqual("Alice Smith");
            expect(printFullName({firstName: "Bob", lastName: "Green"})).toEqual("Bob Green");
            expect(printFullName({firstName: "Mary Anne", lastName: "Jones"})).toEqual("Mary Anne Jones");
        });

        it("should return undefined if the argument passed is not an object", () => {
            expect(printFullName()).toEqual(undefined);
            expect(printFullName("Alice")).toEqual(undefined);
            expect(printFullName(null)).toEqual(undefined);
            expect(printFullName(["a", "b"])).toEqual(undefined);
        });

        it("should return undefined if firstName or lastName properties are not provided", () => {
            expect(printFullName({})).toEqual(undefined);
            expect(printFullName({firstName: "Alice"})).toEqual(undefined);
            expect(printFullName({lastName: "Smith"})).toEqual(undefined);
        });
    })
})
