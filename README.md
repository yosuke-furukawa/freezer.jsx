Freezer.jsx
=====================

Object.freeze, Object.isFrozen for JSX

How to use
---------------------

```sh
$ npm install freezer.jsx
```

```javascript
import "freezer.jsx/freezer.jsx";

class _Main {
  static function main(args : string[]): void {
    var obj = {
      "abc" : 123,
      "def" : {
        "ghi" : 456
      },
    };
    Freezer.freeze(obj);
    obj["abc"] = 789;
    // "abc" is not modified
    log obj;
    Freezer.deepFreeze(obj);
    obj["def"]["ghi"] = 789;
    // "def"."ghi" is not modified
    log obj;
    var isFrozen = Freezer.isFrozen(obj);
    // isFrozen is true
    log isFrozen;
  }
}

```

API
---------------------------

### Freezer#freeze

could not put, delete, and change keys and values.

### Freezer#deepFreeze

could not put, delete, and change keys and values in nested object.

### Freezer#isFrozen

return boolean, already freeze or not.

