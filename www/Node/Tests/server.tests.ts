///<reference path='..\Definitions\all.d.ts'/>
///<reference path='..\server.ts'/>

describe("some example tests", function () {
    describe("this one", function () {
        it("fails", function () {
            chai.expect(2).to.be.a("string");
        });
    });
    describe("this next one", function () {
        it("passes", function () {
            chai.expect(2).to.be.a("number");
        });
    });
});


