native class Freezer {
  static function freeze.<T>(obj:T) : T;
  static function deepFreeze.<T>(obj:T) : T;
  static function isFrozen.<T>(obj:T) : boolean;
} = """
  {
    freeze: Object.freeze,
    deepFreeze: function deepFreeze(o) {
      var prop, propKey;
      Object.freeze(o);
      for (propKey in o) {
        prop = o[propKey];
        if (!o.hasOwnProperty(propKey) || !(typeof prop === "object") || Object.isFrozen(prop)) {
          continue;
        }
        deepFreeze(prop);
      }
      return o;
    },
    isFrozen: Object.isFrozen
  };
""";
