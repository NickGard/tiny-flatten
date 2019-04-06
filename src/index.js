Object.defineProperty(exports, "__esModule", { value: true });
exports.flatten = function(array) {
  return array.reduce(function(flatArray, element) {
    return flatArray.concat(element);
  }, []);
};
