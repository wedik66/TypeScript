//// [derivedClassWithoutExplicitConstructor.ts]
class Base {
    a = 1;
    constructor(x: number) { this.a = x; }
}

class Derived extends Base {
    x = 1
    y = 'hello';
}

var r = new Derived(); // error
var r2 = new Derived(1); 

class Base2<T> {
    a: T;
    constructor(x: T) { this.a = x; }
}

class D<T extends Date> extends Base2<T> {
    x = 2
    y: T = null;
}

var d = new D(); // error
var d2 = new D(new Date()); // ok

//// [derivedClassWithoutExplicitConstructor.js]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Base = (function () {
    function Base(x) {
        this.a = 1;
        this.a = x;
    }
    return Base;
}());
var Derived = (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        var _this = _super.apply(this, arguments) || this;
        _this.x = 1;
        _this.y = 'hello';
        return _this;
    }
    return Derived;
}(Base));
var r = new Derived(); // error
var r2 = new Derived(1);
var Base2 = (function () {
    function Base2(x) {
        this.a = x;
    }
    return Base2;
}());
var D = (function (_super) {
    __extends(D, _super);
    function D() {
        var _this = _super.apply(this, arguments) || this;
        _this.x = 2;
        _this.y = null;
        return _this;
    }
    return D;
}(Base2));
var d = new D(); // error
var d2 = new D(new Date()); // ok
