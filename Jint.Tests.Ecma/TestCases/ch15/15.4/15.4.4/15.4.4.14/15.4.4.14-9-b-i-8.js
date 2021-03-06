/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.14/15.4.4.14-9-b-i-8.js
 * @description Array.prototype.indexOf - element to be retrieved is inherited data property on an Array-like object
 */


function testcase() {

        try {
            Object.prototype[0] = true;
            Object.prototype[1] = false;
            Object.prototype[2] = "true";
            return 0 === Array.prototype.indexOf.call({ length: 3 }, true) &&
                1 === Array.prototype.indexOf.call({ length: 3 }, false) &&
                2 === Array.prototype.indexOf.call({ length: 3 }, "true");
        } finally {
            delete Object.prototype[0];
            delete Object.prototype[1];
            delete Object.prototype[2];
        }
    }
runTestCase(testcase);
