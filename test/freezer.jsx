import "test-case.jsx";
import "../lib/freezer.jsx";

class _Test extends TestCase {
  function testFreeze(): void {
    var obj = {
      "abc" : 123,
      "def" : 456
    };
    Freezer.freeze(obj);
    obj["abc"] = 789;
    this.expect(obj["abc"]).toBe(123);
  }
  function testDeepFreeze(): void {
    var obj = {
      "abc" : 123,
      "def" : {
        "ghi" : 456
      },
    };
    Freezer.deepFreeze(obj);
    obj["def"]["ghi"] = 789;
    this.expect(obj["def"]["ghi"]).toBe(456);
  }
  function testIsFrozen(): void {
    var obj = {
      "abc" : 123,
      "def" : {
        "ghi" : 456
      },
    };
    Freezer.freeze(obj);
    var isFrozen = Freezer.isFrozen(obj);
    this.expect(isFrozen).toBe(true);
  }
}
