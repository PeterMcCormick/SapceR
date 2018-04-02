import {RestServiceProvider} from "../../providers/rest-service/rest-service";
import {HttpClient} from "@angular/common/http";

describe("Rest service test", () =>{
  let sut = new RestServiceProvider("test");
  spyOn(sut,"get");
  it('should ', () => {
    sut.get()
    expect(sut).toHaveBeenCalled();
  });
});
