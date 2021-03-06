//// [subtypingWithNumericIndexer.ts]
// Derived type indexer must be subtype of base type indexer

interface Base { foo: string; }
interface Derived extends Base { bar: string; }
interface Derived2 extends Derived { baz: string; }

class A {
    [x: number]: Base;
}

class B extends A {
    [x: number]: Derived; // ok
}

class B2 extends A {
    [x: number]: Derived2; // ok
}

module Generics {
    class A<T extends Base> {
        [x: number]: T;
    }

    class B extends A<Base> {
        [x: number]: Derived; // ok
    }

    class B2 extends A<Base> {
        [x: number]: Derived2; // ok
    }

    class B3<T extends Base> extends A<T> {
        [x: number]: Derived; // error, BUG?
    }

    class B4<T extends Base> extends A<T> {
        [x: number]: Derived2; // error, BUG?
    }
}

//// [subtypingWithNumericIndexer.js]
// Derived type indexer must be subtype of base type indexer
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
var A = (function () {
    function A() {
    }
    return A;
}());
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        return _super.apply(this, arguments) || this;
    }
    return B;
}(A));
var B2 = (function (_super) {
    __extends(B2, _super);
    function B2() {
        return _super.apply(this, arguments) || this;
    }
    return B2;
}(A));
var Generics;
(function (Generics) {
    var A = (function () {
        function A() {
        }
        return A;
    }());
    var B = (function (_super) {
        __extends(B, _super);
        function B() {
            return _super.apply(this, arguments) || this;
        }
        return B;
    }(A));
    var B2 = (function (_super) {
        __extends(B2, _super);
        function B2() {
            return _super.apply(this, arguments) || this;
        }
        return B2;
    }(A));
    var B3 = (function (_super) {
        __extends(B3, _super);
        function B3() {
            return _super.apply(this, arguments) || this;
        }
        return B3;
    }(A));
    var B4 = (function (_super) {
        __extends(B4, _super);
        function B4() {
            return _super.apply(this, arguments) || this;
        }
        return B4;
    }(A));
})(Generics || (Generics = {}));
