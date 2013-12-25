Function.prototype.myBind = function (obj) {
  var f = this;
  return function () {
    f.apply(obj);
  };
}