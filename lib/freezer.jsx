native class Freezer {
  static function freeze(obj:variant) : void;
  static function deepFreeze(obj:variant) : void;
  static function isFrozen(obj:variant) : boolean;
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
    },
    isFrozen: Object.isFrozen
  };
""";
