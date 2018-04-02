import {RestServiceProvider} from "./rest-service";

describe("Rest service test", () =>{
  let sut = new RestServiceProvider("test");
  spyOn(sut,"get");
  it('should ', () => {
    sut.get();
    expect(sut).toHaveBeenCalled();
  });
});
describe("test", ()=>{
  it('should ', function () {
    expect(true).toBeTruthy();
  });
});
