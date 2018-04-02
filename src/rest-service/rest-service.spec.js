import { RestServiceProvider } from "rest-service";
describe("Rest service test", function () {
    var sut = new RestServiceProvider("test");
    spyOn(sut, "get");
    it('should ', function () {
        sut.get();
        expect(sut).toHaveBeenCalled();
    });
});
describe("test", function () {
    it('should ', function () {
        expect(true).toBeTruthy();
    });
});
//# sourceMappingURL=rest-service.spec.js.map
