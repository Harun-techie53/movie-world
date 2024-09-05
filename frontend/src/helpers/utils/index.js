class Utils {
  stringTruncate = (str, n) => {
    return str.length > n ? str.substring(0, n - 1) + " ...." : str;
  };
  isDefined = (object, property = null) => {
    if (property === null) {
      return typeof object !== "undefined";
    }

    return (
      typeof object !== "undefined" &&
      object &&
      typeof object[property] !== "undefined"
    );
  };

  findInArray = (array = [], itemToFind, key = "") => {
    return array.findIndex((item) =>
      key.trim() ? item[key] === itemToFind : item === itemToFind
    );
  };
}
export const utils = new Utils();
