//// [/src/2/second-output.d.ts]
/// <reference path="../second/tripleRef.d.ts" />
declare const second_part1Const: secondsecond_part1;
declare namespace N {
}
declare namespace N {
}
declare class C {
    doSomething(): void;
}
//# sourceMappingURL=second-output.d.ts.map

//// [/src/2/second-output.d.ts.map]
{"version":3,"file":"second-output.d.ts","sourceRoot":"","sources":["../second/second_part1.ts","../second/second_part2.ts"],"names":[],"mappings":";AACA,QAAA,MAAM,iBAAiB,oBAA2B,CAAC;AACnD,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;ACZD,cAAM,CAAC;IACH,WAAW;CAGd"}

//// [/src/2/second-output.d.ts.map.baseline.txt]
===================================================================
JsFile: second-output.d.ts
mapUrl: second-output.d.ts.map
sourceRoot: 
sources: ../second/second_part1.ts,../second/second_part2.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/2/second-output.d.ts
sourceFile:../second/second_part1.ts
-------------------------------------------------------------------
>>>/// <reference path="../second/tripleRef.d.ts" />
>>>declare const second_part1Const: secondsecond_part1;
1 >
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^^^^^^^^^^^^^^^^^
5 >                               ^^^^^^^^^^^^^^^^^^^^
6 >                                                   ^
1 >///<reference path="./tripleRef.d.ts"/>
  >
2 >
3 >        const 
4 >              second_part1Const
5 >                                = new secondsecond_part1()
6 >                                                   ;
1 >Emitted(2, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(2, 9) Source(2, 1) + SourceIndex(0)
3 >Emitted(2, 15) Source(2, 7) + SourceIndex(0)
4 >Emitted(2, 32) Source(2, 24) + SourceIndex(0)
5 >Emitted(2, 52) Source(2, 51) + SourceIndex(0)
6 >Emitted(2, 53) Source(2, 52) + SourceIndex(0)
---
>>>declare namespace N {
1 >
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^
1 >
  >
2 >namespace 
3 >                  N
4 >                    
1 >Emitted(3, 1) Source(3, 1) + SourceIndex(0)
2 >Emitted(3, 19) Source(3, 11) + SourceIndex(0)
3 >Emitted(3, 20) Source(3, 12) + SourceIndex(0)
4 >Emitted(3, 21) Source(3, 13) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^->
1 >{
  >    // Comment text
  >}
1 >Emitted(4, 2) Source(5, 2) + SourceIndex(0)
---
>>>declare namespace N {
1->
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^
1->
  >
  >
2 >namespace 
3 >                  N
4 >                    
1->Emitted(5, 1) Source(7, 1) + SourceIndex(0)
2 >Emitted(5, 19) Source(7, 11) + SourceIndex(0)
3 >Emitted(5, 20) Source(7, 12) + SourceIndex(0)
4 >Emitted(5, 21) Source(7, 13) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^->
1 >{
  >    function f() {
  >        console.log('testing');
  >    }
  >
  >    f();
  >}
1 >Emitted(6, 2) Source(13, 2) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/2/second-output.d.ts
sourceFile:../second/second_part2.ts
-------------------------------------------------------------------
>>>declare class C {
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^^->
1->
2 >class 
3 >              C
1->Emitted(7, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(7, 15) Source(1, 7) + SourceIndex(1)
3 >Emitted(7, 16) Source(1, 8) + SourceIndex(1)
---
>>>    doSomething(): void;
1->^^^^
2 >    ^^^^^^^^^^^
1-> {
  >    
2 >    doSomething
1->Emitted(8, 5) Source(2, 5) + SourceIndex(1)
2 >Emitted(8, 16) Source(2, 16) + SourceIndex(1)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >() {
  >        console.log("something got done");
  >    }
  >}
1 >Emitted(9, 2) Source(5, 2) + SourceIndex(1)
---
>>>//# sourceMappingURL=second-output.d.ts.map

//// [/src/2/second-output.js]
var second_part1Const = new secondsecond_part1();
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
var C = (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());
//# sourceMappingURL=second-output.js.map

//// [/src/2/second-output.js.map]
{"version":3,"file":"second-output.js","sourceRoot":"","sources":["../second/second_part1.ts","../second/second_part2.ts"],"names":[],"mappings":"AACA,IAAM,iBAAiB,GAAG,IAAI,kBAAkB,EAAE,CAAC;AAKnD,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;ACZD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC"}

//// [/src/2/second-output.js.map.baseline.txt]
===================================================================
JsFile: second-output.js
mapUrl: second-output.js.map
sourceRoot: 
sources: ../second/second_part1.ts,../second/second_part2.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/2/second-output.js
sourceFile:../second/second_part1.ts
-------------------------------------------------------------------
>>>var second_part1Const = new secondsecond_part1();
1 >
2 >^^^^
3 >    ^^^^^^^^^^^^^^^^^
4 >                     ^^^
5 >                        ^^^^
6 >                            ^^^^^^^^^^^^^^^^^^
7 >                                              ^^
8 >                                                ^
1 >///<reference path="./tripleRef.d.ts"/>
  >
2 >const 
3 >    second_part1Const
4 >                      = 
5 >                        new 
6 >                            secondsecond_part1
7 >                                              ()
8 >                                                ;
1 >Emitted(1, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(1, 5) Source(2, 7) + SourceIndex(0)
3 >Emitted(1, 22) Source(2, 24) + SourceIndex(0)
4 >Emitted(1, 25) Source(2, 27) + SourceIndex(0)
5 >Emitted(1, 29) Source(2, 31) + SourceIndex(0)
6 >Emitted(1, 47) Source(2, 49) + SourceIndex(0)
7 >Emitted(1, 49) Source(2, 51) + SourceIndex(0)
8 >Emitted(1, 50) Source(2, 52) + SourceIndex(0)
---
>>>var N;
1 >
2 >^^^^
3 >    ^
4 >     ^
5 >      ^^^^^^^^^^->
1 >
  >namespace N {
  >    // Comment text
  >}
  >
  >
2 >namespace 
3 >    N
4 >      {
  >         function f() {
  >             console.log('testing');
  >         }
  >     
  >         f();
  >     }
1 >Emitted(2, 1) Source(7, 1) + SourceIndex(0)
2 >Emitted(2, 5) Source(7, 11) + SourceIndex(0)
3 >Emitted(2, 6) Source(7, 12) + SourceIndex(0)
4 >Emitted(2, 7) Source(13, 2) + SourceIndex(0)
---
>>>(function (N) {
1->
2 >^^^^^^^^^^^
3 >           ^
4 >            ^^^^^^^->
1->
2 >namespace 
3 >           N
1->Emitted(3, 1) Source(7, 1) + SourceIndex(0)
2 >Emitted(3, 12) Source(7, 11) + SourceIndex(0)
3 >Emitted(3, 13) Source(7, 12) + SourceIndex(0)
---
>>>    function f() {
1->^^^^
2 >    ^^^^^^^^^
3 >             ^
4 >              ^^^^^^^^^^^^^^^^^^->
1-> {
  >    
2 >    function 
3 >             f
1->Emitted(4, 5) Source(8, 5) + SourceIndex(0)
2 >Emitted(4, 14) Source(8, 14) + SourceIndex(0)
3 >Emitted(4, 15) Source(8, 15) + SourceIndex(0)
---
>>>        console.log('testing');
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^
7 >                             ^
8 >                              ^
1->() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    'testing'
7 >                             )
8 >                              ;
1->Emitted(5, 9) Source(9, 9) + SourceIndex(0)
2 >Emitted(5, 16) Source(9, 16) + SourceIndex(0)
3 >Emitted(5, 17) Source(9, 17) + SourceIndex(0)
4 >Emitted(5, 20) Source(9, 20) + SourceIndex(0)
5 >Emitted(5, 21) Source(9, 21) + SourceIndex(0)
6 >Emitted(5, 30) Source(9, 30) + SourceIndex(0)
7 >Emitted(5, 31) Source(9, 31) + SourceIndex(0)
8 >Emitted(5, 32) Source(9, 32) + SourceIndex(0)
---
>>>    }
1 >^^^^
2 >    ^
3 >     ^^^^->
1 >
  >    
2 >    }
1 >Emitted(6, 5) Source(10, 5) + SourceIndex(0)
2 >Emitted(6, 6) Source(10, 6) + SourceIndex(0)
---
>>>    f();
1->^^^^
2 >    ^
3 >     ^^
4 >       ^
5 >        ^^^^^^^^^^^->
1->
  >
  >    
2 >    f
3 >     ()
4 >       ;
1->Emitted(7, 5) Source(12, 5) + SourceIndex(0)
2 >Emitted(7, 6) Source(12, 6) + SourceIndex(0)
3 >Emitted(7, 8) Source(12, 8) + SourceIndex(0)
4 >Emitted(7, 9) Source(12, 9) + SourceIndex(0)
---
>>>})(N || (N = {}));
1->
2 >^
3 > ^^
4 >   ^
5 >    ^^^^^
6 >         ^
7 >          ^^^^^^^^
8 >                  ^^^^^->
1->
  >
2 >}
3 > 
4 >   N
5 >    
6 >         N
7 >           {
  >              function f() {
  >                  console.log('testing');
  >              }
  >          
  >              f();
  >          }
1->Emitted(8, 1) Source(13, 1) + SourceIndex(0)
2 >Emitted(8, 2) Source(13, 2) + SourceIndex(0)
3 >Emitted(8, 4) Source(7, 11) + SourceIndex(0)
4 >Emitted(8, 5) Source(7, 12) + SourceIndex(0)
5 >Emitted(8, 10) Source(7, 11) + SourceIndex(0)
6 >Emitted(8, 11) Source(7, 12) + SourceIndex(0)
7 >Emitted(8, 19) Source(13, 2) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/2/second-output.js
sourceFile:../second/second_part2.ts
-------------------------------------------------------------------
>>>var C = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^->
1->
1->Emitted(9, 1) Source(1, 1) + SourceIndex(1)
---
>>>    function C() {
1->^^^^
2 >    ^^->
1->
1->Emitted(10, 5) Source(1, 1) + SourceIndex(1)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->class C {
  >    doSomething() {
  >        console.log("something got done");
  >    }
  >
2 >    }
1->Emitted(11, 5) Source(5, 1) + SourceIndex(1)
2 >Emitted(11, 6) Source(5, 2) + SourceIndex(1)
---
>>>    C.prototype.doSomething = function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^
3 >                           ^^^
4 >                              ^^^^^^^^^^^^^->
1->
2 >    doSomething
3 >                           
1->Emitted(12, 5) Source(2, 5) + SourceIndex(1)
2 >Emitted(12, 28) Source(2, 16) + SourceIndex(1)
3 >Emitted(12, 31) Source(2, 5) + SourceIndex(1)
---
>>>        console.log("something got done");
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^^^^^^^^^^^^
7 >                                        ^
8 >                                         ^
1->doSomething() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    "something got done"
7 >                                        )
8 >                                         ;
1->Emitted(13, 9) Source(3, 9) + SourceIndex(1)
2 >Emitted(13, 16) Source(3, 16) + SourceIndex(1)
3 >Emitted(13, 17) Source(3, 17) + SourceIndex(1)
4 >Emitted(13, 20) Source(3, 20) + SourceIndex(1)
5 >Emitted(13, 21) Source(3, 21) + SourceIndex(1)
6 >Emitted(13, 41) Source(3, 41) + SourceIndex(1)
7 >Emitted(13, 42) Source(3, 42) + SourceIndex(1)
8 >Emitted(13, 43) Source(3, 43) + SourceIndex(1)
---
>>>    };
1 >^^^^
2 >    ^
3 >     ^^^^^^^^^->
1 >
  >    
2 >    }
1 >Emitted(14, 5) Source(4, 5) + SourceIndex(1)
2 >Emitted(14, 6) Source(4, 6) + SourceIndex(1)
---
>>>    return C;
1->^^^^
2 >    ^^^^^^^^
1->
  >
2 >    }
1->Emitted(15, 5) Source(5, 1) + SourceIndex(1)
2 >Emitted(15, 13) Source(5, 2) + SourceIndex(1)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class C {
  >     doSomething() {
  >         console.log("something got done");
  >     }
  > }
1 >Emitted(16, 1) Source(5, 1) + SourceIndex(1)
2 >Emitted(16, 2) Source(5, 2) + SourceIndex(1)
3 >Emitted(16, 2) Source(1, 1) + SourceIndex(1)
4 >Emitted(16, 6) Source(5, 2) + SourceIndex(1)
---
>>>//# sourceMappingURL=second-output.js.map

//// [/src/first/bin/first-output.d.ts]
/// <reference path="../tripleRef.d.ts" />
interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare const first_part2Const: firstfirst_part2;
declare function f(): string;
//# sourceMappingURL=first-output.d.ts.map

//// [/src/first/bin/first-output.d.ts.map]
{"version":3,"file":"first-output.d.ts","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":";AAAA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;ACPD,QAAA,MAAM,gBAAgB,kBAAyB,CAAC;ACDhD,iBAAS,CAAC,WAET"}

//// [/src/first/bin/first-output.d.ts.map.baseline.txt]
===================================================================
JsFile: first-output.d.ts
mapUrl: first-output.d.ts.map
sourceRoot: 
sources: ../first_PART1.ts,../first_part2.ts,../first_part3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.d.ts
sourceFile:../first_PART1.ts
-------------------------------------------------------------------
>>>/// <reference path="../tripleRef.d.ts" />
>>>interface TheFirst {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^
1 >
2 >interface 
3 >          TheFirst
1 >Emitted(2, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(2, 11) Source(1, 11) + SourceIndex(0)
3 >Emitted(2, 19) Source(1, 19) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(3, 5) Source(2, 5) + SourceIndex(0)
2 >Emitted(3, 9) Source(2, 9) + SourceIndex(0)
3 >Emitted(3, 11) Source(2, 11) + SourceIndex(0)
4 >Emitted(3, 14) Source(2, 14) + SourceIndex(0)
5 >Emitted(3, 15) Source(2, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(4, 2) Source(3, 2) + SourceIndex(0)
---
>>>declare const s = "Hello, world";
1->
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^
5 >               ^^^^^^^^^^^^^^^^^
6 >                                ^
1->
  >
  >
2 >
3 >        const 
4 >              s
5 >                = "Hello, world"
6 >                                ;
1->Emitted(5, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(5, 9) Source(5, 1) + SourceIndex(0)
3 >Emitted(5, 15) Source(5, 7) + SourceIndex(0)
4 >Emitted(5, 16) Source(5, 8) + SourceIndex(0)
5 >Emitted(5, 33) Source(5, 25) + SourceIndex(0)
6 >Emitted(5, 34) Source(5, 26) + SourceIndex(0)
---
>>>interface NoJsForHereEither {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^^^^^^^^^^
1 >
  >
  >
2 >interface 
3 >          NoJsForHereEither
1 >Emitted(6, 1) Source(7, 1) + SourceIndex(0)
2 >Emitted(6, 11) Source(7, 11) + SourceIndex(0)
3 >Emitted(6, 28) Source(7, 28) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(7, 5) Source(8, 5) + SourceIndex(0)
2 >Emitted(7, 9) Source(8, 9) + SourceIndex(0)
3 >Emitted(7, 11) Source(8, 11) + SourceIndex(0)
4 >Emitted(7, 14) Source(8, 14) + SourceIndex(0)
5 >Emitted(7, 15) Source(8, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(8, 2) Source(9, 2) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.d.ts
sourceFile:../first_part2.ts
-------------------------------------------------------------------
>>>declare const first_part2Const: firstfirst_part2;
1->
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^^^^^^^^^^^^^^^^
5 >                              ^^^^^^^^^^^^^^^^^^
6 >                                                ^
1->///<reference path="./tripleRef.d.ts"/>
  >
2 >
3 >        const 
4 >              first_part2Const
5 >                               = new firstfirst_part2()
6 >                                                ;
1->Emitted(9, 1) Source(2, 1) + SourceIndex(1)
2 >Emitted(9, 9) Source(2, 1) + SourceIndex(1)
3 >Emitted(9, 15) Source(2, 7) + SourceIndex(1)
4 >Emitted(9, 31) Source(2, 23) + SourceIndex(1)
5 >Emitted(9, 49) Source(2, 48) + SourceIndex(1)
6 >Emitted(9, 50) Source(2, 49) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.d.ts
sourceFile:../first_part3.ts
-------------------------------------------------------------------
>>>declare function f(): string;
1 >
2 >^^^^^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^^^^^^^^
5 >                             ^^^^^^^^^^^^->
1 >
2 >function 
3 >                 f
4 >                  () {
  >                      return "JS does hoists";
  >                  }
1 >Emitted(10, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(10, 18) Source(1, 10) + SourceIndex(2)
3 >Emitted(10, 19) Source(1, 11) + SourceIndex(2)
4 >Emitted(10, 30) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.d.ts.map

//// [/src/first/bin/first-output.js]
var s = "Hello, world";
console.log(s);
var first_part2Const = new firstfirst_part2();
console.log(f());
function f() {
    return "JS does hoists";
}
//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.js.map]
{"version":3,"file":"first-output.js","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":"AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACTf,IAAM,gBAAgB,GAAG,IAAI,gBAAgB,EAAE,CAAC;AAChD,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACFjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC"}

//// [/src/first/bin/first-output.js.map.baseline.txt]
===================================================================
JsFile: first-output.js
mapUrl: first-output.js.map
sourceRoot: 
sources: ../first_PART1.ts,../first_part2.ts,../first_part3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_PART1.ts
-------------------------------------------------------------------
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 >interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(1, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(1, 5) Source(5, 7) + SourceIndex(0)
3 >Emitted(1, 6) Source(5, 8) + SourceIndex(0)
4 >Emitted(1, 9) Source(5, 11) + SourceIndex(0)
5 >Emitted(1, 23) Source(5, 25) + SourceIndex(0)
6 >Emitted(1, 24) Source(5, 26) + SourceIndex(0)
---
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(2, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(2, 8) Source(11, 8) + SourceIndex(0)
3 >Emitted(2, 9) Source(11, 9) + SourceIndex(0)
4 >Emitted(2, 12) Source(11, 12) + SourceIndex(0)
5 >Emitted(2, 13) Source(11, 13) + SourceIndex(0)
6 >Emitted(2, 14) Source(11, 14) + SourceIndex(0)
7 >Emitted(2, 15) Source(11, 15) + SourceIndex(0)
8 >Emitted(2, 16) Source(11, 16) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part2.ts
-------------------------------------------------------------------
>>>var first_part2Const = new firstfirst_part2();
1->
2 >^^^^
3 >    ^^^^^^^^^^^^^^^^
4 >                    ^^^
5 >                       ^^^^
6 >                           ^^^^^^^^^^^^^^^^
7 >                                           ^^
8 >                                             ^
1->///<reference path="./tripleRef.d.ts"/>
  >
2 >const 
3 >    first_part2Const
4 >                     = 
5 >                       new 
6 >                           firstfirst_part2
7 >                                           ()
8 >                                             ;
1->Emitted(3, 1) Source(2, 1) + SourceIndex(1)
2 >Emitted(3, 5) Source(2, 7) + SourceIndex(1)
3 >Emitted(3, 21) Source(2, 23) + SourceIndex(1)
4 >Emitted(3, 24) Source(2, 26) + SourceIndex(1)
5 >Emitted(3, 28) Source(2, 30) + SourceIndex(1)
6 >Emitted(3, 44) Source(2, 46) + SourceIndex(1)
7 >Emitted(3, 46) Source(2, 48) + SourceIndex(1)
8 >Emitted(3, 47) Source(2, 49) + SourceIndex(1)
---
>>>console.log(f());
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
1 >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1 >Emitted(4, 1) Source(3, 1) + SourceIndex(1)
2 >Emitted(4, 8) Source(3, 8) + SourceIndex(1)
3 >Emitted(4, 9) Source(3, 9) + SourceIndex(1)
4 >Emitted(4, 12) Source(3, 12) + SourceIndex(1)
5 >Emitted(4, 13) Source(3, 13) + SourceIndex(1)
6 >Emitted(4, 14) Source(3, 14) + SourceIndex(1)
7 >Emitted(4, 16) Source(3, 16) + SourceIndex(1)
8 >Emitted(4, 17) Source(3, 17) + SourceIndex(1)
9 >Emitted(4, 18) Source(3, 18) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1 >
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >         f
1 >Emitted(5, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(5, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(5, 11) Source(1, 11) + SourceIndex(2)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(6, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(6, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(6, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(6, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(7, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(7, 2) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.js.map

//// [/src/first/first_part2.ts]
///<reference path="./tripleRef.d.ts"/>
const first_part2Const = new firstfirst_part2();
console.log(f());


//// [/src/first/tripleRef.d.ts]
declare class firstfirst_part2 { }

//// [/src/second/second_part1.ts]
///<reference path="./tripleRef.d.ts"/>
const second_part1Const = new secondsecond_part1();
namespace N {
    // Comment text
}

namespace N {
    function f() {
        console.log('testing');
    }

    f();
}


//// [/src/second/tripleRef.d.ts]
declare class secondsecond_part1 { }

//// [/src/third/thirdjs/output/third-output.d.ts]
/// <reference path="../../tripleRef.d.ts" />
/// <reference path="../../../first/tripleRef.d.ts" />
/// <reference path="../../../second/tripleRef.d.ts" />
interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare const first_part2Const: firstfirst_part2;
declare function f(): string;
//# sourceMappingURL=first-output.d.ts.map
declare const second_part1Const: secondsecond_part1;
declare namespace N {
}
declare namespace N {
}
declare class C {
    doSomething(): void;
}
//# sourceMappingURL=second-output.d.ts.map
declare const third_part1Const: thirdthird_part1;
declare var c: C;
//# sourceMappingURL=third-output.d.ts.map

//// [/src/third/thirdjs/output/third-output.d.ts.map]
{"version":3,"file":"third-output.d.ts","sourceRoot":"","sources":["../../third_part1.ts","../../../first/first_PART1.ts","../../../first/first_part2.ts","../../../first/first_part3.ts","../../../second/second_part1.ts","../../../second/second_part2.ts"],"names":[],"mappings":";;;ACAA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;ACPD,QAAA,MAAM,gBAAgB,kBAAyB,CAAC;ACDhD,iBAAS,CAAC,WAET;;ACDD,QAAA,MAAM,iBAAiB,oBAA2B,CAAC;AACnD,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;ACZD,cAAM,CAAC;IACH,WAAW;CAGd;;ALHD,QAAA,MAAM,gBAAgB,kBAAyB,CAAC;AAChD,QAAA,IAAI,CAAC,GAAU,CAAC"}

//// [/src/third/thirdjs/output/third-output.d.ts.map.baseline.txt]
===================================================================
JsFile: third-output.d.ts
mapUrl: third-output.d.ts.map
sourceRoot: 
sources: ../../third_part1.ts,../../../first/first_PART1.ts,../../../first/first_part2.ts,../../../first/first_part3.ts,../../../second/second_part1.ts,../../../second/second_part2.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../first/first_PART1.ts
-------------------------------------------------------------------
>>>/// <reference path="../../tripleRef.d.ts" />
>>>/// <reference path="../../../first/tripleRef.d.ts" />
>>>/// <reference path="../../../second/tripleRef.d.ts" />
>>>interface TheFirst {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^
1 >
2 >interface 
3 >          TheFirst
1 >Emitted(4, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(4, 11) Source(1, 11) + SourceIndex(1)
3 >Emitted(4, 19) Source(1, 19) + SourceIndex(1)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(5, 5) Source(2, 5) + SourceIndex(1)
2 >Emitted(5, 9) Source(2, 9) + SourceIndex(1)
3 >Emitted(5, 11) Source(2, 11) + SourceIndex(1)
4 >Emitted(5, 14) Source(2, 14) + SourceIndex(1)
5 >Emitted(5, 15) Source(2, 15) + SourceIndex(1)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(6, 2) Source(3, 2) + SourceIndex(1)
---
>>>declare const s = "Hello, world";
1->
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^
5 >               ^^^^^^^^^^^^^^^^^
6 >                                ^
1->
  >
  >
2 >
3 >        const 
4 >              s
5 >                = "Hello, world"
6 >                                ;
1->Emitted(7, 1) Source(5, 1) + SourceIndex(1)
2 >Emitted(7, 9) Source(5, 1) + SourceIndex(1)
3 >Emitted(7, 15) Source(5, 7) + SourceIndex(1)
4 >Emitted(7, 16) Source(5, 8) + SourceIndex(1)
5 >Emitted(7, 33) Source(5, 25) + SourceIndex(1)
6 >Emitted(7, 34) Source(5, 26) + SourceIndex(1)
---
>>>interface NoJsForHereEither {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^^^^^^^^^^
1 >
  >
  >
2 >interface 
3 >          NoJsForHereEither
1 >Emitted(8, 1) Source(7, 1) + SourceIndex(1)
2 >Emitted(8, 11) Source(7, 11) + SourceIndex(1)
3 >Emitted(8, 28) Source(7, 28) + SourceIndex(1)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(9, 5) Source(8, 5) + SourceIndex(1)
2 >Emitted(9, 9) Source(8, 9) + SourceIndex(1)
3 >Emitted(9, 11) Source(8, 11) + SourceIndex(1)
4 >Emitted(9, 14) Source(8, 14) + SourceIndex(1)
5 >Emitted(9, 15) Source(8, 15) + SourceIndex(1)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(10, 2) Source(9, 2) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../first/first_part2.ts
-------------------------------------------------------------------
>>>declare const first_part2Const: firstfirst_part2;
1->
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^^^^^^^^^^^^^^^^
5 >                              ^^^^^^^^^^^^^^^^^^
6 >                                                ^
1->///<reference path="./tripleRef.d.ts"/>
  >
2 >
3 >        const 
4 >              first_part2Const
5 >                               = new firstfirst_part2()
6 >                                                ;
1->Emitted(11, 1) Source(2, 1) + SourceIndex(2)
2 >Emitted(11, 9) Source(2, 1) + SourceIndex(2)
3 >Emitted(11, 15) Source(2, 7) + SourceIndex(2)
4 >Emitted(11, 31) Source(2, 23) + SourceIndex(2)
5 >Emitted(11, 49) Source(2, 48) + SourceIndex(2)
6 >Emitted(11, 50) Source(2, 49) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../first/first_part3.ts
-------------------------------------------------------------------
>>>declare function f(): string;
1 >
2 >^^^^^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^^^^^^^^
5 >                             ^^^^^^^^^^^^^^->
1 >
2 >function 
3 >                 f
4 >                  () {
  >                      return "JS does hoists";
  >                  }
1 >Emitted(12, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(12, 18) Source(1, 10) + SourceIndex(3)
3 >Emitted(12, 19) Source(1, 11) + SourceIndex(3)
4 >Emitted(12, 30) Source(3, 2) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../second/second_part1.ts
-------------------------------------------------------------------
>>>//# sourceMappingURL=first-output.d.ts.map
>>>declare const second_part1Const: secondsecond_part1;
1->
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^^^^^^^^^^^^^^^^^
5 >                               ^^^^^^^^^^^^^^^^^^^^
6 >                                                   ^
1->///<reference path="./tripleRef.d.ts"/>
  >
2 >
3 >        const 
4 >              second_part1Const
5 >                                = new secondsecond_part1()
6 >                                                   ;
1->Emitted(14, 1) Source(2, 1) + SourceIndex(4)
2 >Emitted(14, 9) Source(2, 1) + SourceIndex(4)
3 >Emitted(14, 15) Source(2, 7) + SourceIndex(4)
4 >Emitted(14, 32) Source(2, 24) + SourceIndex(4)
5 >Emitted(14, 52) Source(2, 51) + SourceIndex(4)
6 >Emitted(14, 53) Source(2, 52) + SourceIndex(4)
---
>>>declare namespace N {
1 >
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^
1 >
  >
2 >namespace 
3 >                  N
4 >                    
1 >Emitted(15, 1) Source(3, 1) + SourceIndex(4)
2 >Emitted(15, 19) Source(3, 11) + SourceIndex(4)
3 >Emitted(15, 20) Source(3, 12) + SourceIndex(4)
4 >Emitted(15, 21) Source(3, 13) + SourceIndex(4)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^->
1 >{
  >    // Comment text
  >}
1 >Emitted(16, 2) Source(5, 2) + SourceIndex(4)
---
>>>declare namespace N {
1->
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^
1->
  >
  >
2 >namespace 
3 >                  N
4 >                    
1->Emitted(17, 1) Source(7, 1) + SourceIndex(4)
2 >Emitted(17, 19) Source(7, 11) + SourceIndex(4)
3 >Emitted(17, 20) Source(7, 12) + SourceIndex(4)
4 >Emitted(17, 21) Source(7, 13) + SourceIndex(4)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^->
1 >{
  >    function f() {
  >        console.log('testing');
  >    }
  >
  >    f();
  >}
1 >Emitted(18, 2) Source(13, 2) + SourceIndex(4)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>declare class C {
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^^->
1->
2 >class 
3 >              C
1->Emitted(19, 1) Source(1, 1) + SourceIndex(5)
2 >Emitted(19, 15) Source(1, 7) + SourceIndex(5)
3 >Emitted(19, 16) Source(1, 8) + SourceIndex(5)
---
>>>    doSomething(): void;
1->^^^^
2 >    ^^^^^^^^^^^
1-> {
  >    
2 >    doSomething
1->Emitted(20, 5) Source(2, 5) + SourceIndex(5)
2 >Emitted(20, 16) Source(2, 16) + SourceIndex(5)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >() {
  >        console.log("something got done");
  >    }
  >}
1 >Emitted(21, 2) Source(5, 2) + SourceIndex(5)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../third_part1.ts
-------------------------------------------------------------------
>>>//# sourceMappingURL=second-output.d.ts.map
>>>declare const third_part1Const: thirdthird_part1;
1->
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^^^^^^^^^^^^^^^^
5 >                              ^^^^^^^^^^^^^^^^^^
6 >                                                ^
1->///<reference path="./tripleRef.d.ts"/>
  >
2 >
3 >        const 
4 >              third_part1Const
5 >                               = new thirdthird_part1()
6 >                                                ;
1->Emitted(23, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(23, 9) Source(2, 1) + SourceIndex(0)
3 >Emitted(23, 15) Source(2, 7) + SourceIndex(0)
4 >Emitted(23, 31) Source(2, 23) + SourceIndex(0)
5 >Emitted(23, 49) Source(2, 48) + SourceIndex(0)
6 >Emitted(23, 50) Source(2, 49) + SourceIndex(0)
---
>>>declare var c: C;
1 >
2 >^^^^^^^^
3 >        ^^^^
4 >            ^
5 >             ^^^
6 >                ^
7 >                 ^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >
3 >        var 
4 >            c
5 >              = new C()
6 >                ;
1 >Emitted(24, 1) Source(3, 1) + SourceIndex(0)
2 >Emitted(24, 9) Source(3, 1) + SourceIndex(0)
3 >Emitted(24, 13) Source(3, 5) + SourceIndex(0)
4 >Emitted(24, 14) Source(3, 6) + SourceIndex(0)
5 >Emitted(24, 17) Source(3, 16) + SourceIndex(0)
6 >Emitted(24, 18) Source(3, 17) + SourceIndex(0)
---
>>>//# sourceMappingURL=third-output.d.ts.map

//// [/src/third/thirdjs/output/third-output.js]
var s = "Hello, world";
console.log(s);
var first_part2Const = new firstfirst_part2();
console.log(f());
function f() {
    return "JS does hoists";
}
//# sourceMappingURL=first-output.js.map
var second_part1Const = new secondsecond_part1();
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
var C = (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());
//# sourceMappingURL=second-output.js.map
var third_part1Const = new thirdthird_part1();
var c = new C();
c.doSomething();
//# sourceMappingURL=third-output.js.map

//// [/src/third/thirdjs/output/third-output.js.map]
{"version":3,"file":"third-output.js","sourceRoot":"","sources":["../../third_part1.ts","../../../first/first_PART1.ts","../../../first/first_part2.ts","../../../first/first_part3.ts","../../../second/second_part1.ts","../../../second/second_part2.ts"],"names":[],"mappings":"ACIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACTf,IAAM,gBAAgB,GAAG,IAAI,gBAAgB,EAAE,CAAC;AAChD,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACFjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;;ACDD,IAAM,iBAAiB,GAAG,IAAI,kBAAkB,EAAE,CAAC;AAKnD,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;ACZD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC;;ALHD,IAAM,gBAAgB,GAAG,IAAI,gBAAgB,EAAE,CAAC;AAChD,IAAI,CAAC,GAAG,IAAI,CAAC,EAAE,CAAC;AAChB,CAAC,CAAC,WAAW,EAAE,CAAC"}

//// [/src/third/thirdjs/output/third-output.js.map.baseline.txt]
===================================================================
JsFile: third-output.js
mapUrl: third-output.js.map
sourceRoot: 
sources: ../../third_part1.ts,../../../first/first_PART1.ts,../../../first/first_part2.ts,../../../first/first_part3.ts,../../../second/second_part1.ts,../../../second/second_part2.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_PART1.ts
-------------------------------------------------------------------
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 >interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(1, 1) Source(5, 1) + SourceIndex(1)
2 >Emitted(1, 5) Source(5, 7) + SourceIndex(1)
3 >Emitted(1, 6) Source(5, 8) + SourceIndex(1)
4 >Emitted(1, 9) Source(5, 11) + SourceIndex(1)
5 >Emitted(1, 23) Source(5, 25) + SourceIndex(1)
6 >Emitted(1, 24) Source(5, 26) + SourceIndex(1)
---
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(2, 1) Source(11, 1) + SourceIndex(1)
2 >Emitted(2, 8) Source(11, 8) + SourceIndex(1)
3 >Emitted(2, 9) Source(11, 9) + SourceIndex(1)
4 >Emitted(2, 12) Source(11, 12) + SourceIndex(1)
5 >Emitted(2, 13) Source(11, 13) + SourceIndex(1)
6 >Emitted(2, 14) Source(11, 14) + SourceIndex(1)
7 >Emitted(2, 15) Source(11, 15) + SourceIndex(1)
8 >Emitted(2, 16) Source(11, 16) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_part2.ts
-------------------------------------------------------------------
>>>var first_part2Const = new firstfirst_part2();
1->
2 >^^^^
3 >    ^^^^^^^^^^^^^^^^
4 >                    ^^^
5 >                       ^^^^
6 >                           ^^^^^^^^^^^^^^^^
7 >                                           ^^
8 >                                             ^
1->///<reference path="./tripleRef.d.ts"/>
  >
2 >const 
3 >    first_part2Const
4 >                     = 
5 >                       new 
6 >                           firstfirst_part2
7 >                                           ()
8 >                                             ;
1->Emitted(3, 1) Source(2, 1) + SourceIndex(2)
2 >Emitted(3, 5) Source(2, 7) + SourceIndex(2)
3 >Emitted(3, 21) Source(2, 23) + SourceIndex(2)
4 >Emitted(3, 24) Source(2, 26) + SourceIndex(2)
5 >Emitted(3, 28) Source(2, 30) + SourceIndex(2)
6 >Emitted(3, 44) Source(2, 46) + SourceIndex(2)
7 >Emitted(3, 46) Source(2, 48) + SourceIndex(2)
8 >Emitted(3, 47) Source(2, 49) + SourceIndex(2)
---
>>>console.log(f());
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
1 >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1 >Emitted(4, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(4, 8) Source(3, 8) + SourceIndex(2)
3 >Emitted(4, 9) Source(3, 9) + SourceIndex(2)
4 >Emitted(4, 12) Source(3, 12) + SourceIndex(2)
5 >Emitted(4, 13) Source(3, 13) + SourceIndex(2)
6 >Emitted(4, 14) Source(3, 14) + SourceIndex(2)
7 >Emitted(4, 16) Source(3, 16) + SourceIndex(2)
8 >Emitted(4, 17) Source(3, 17) + SourceIndex(2)
9 >Emitted(4, 18) Source(3, 18) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1 >
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >         f
1 >Emitted(5, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(5, 10) Source(1, 10) + SourceIndex(3)
3 >Emitted(5, 11) Source(1, 11) + SourceIndex(3)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(6, 5) Source(2, 5) + SourceIndex(3)
2 >Emitted(6, 12) Source(2, 12) + SourceIndex(3)
3 >Emitted(6, 28) Source(2, 28) + SourceIndex(3)
4 >Emitted(6, 29) Source(2, 29) + SourceIndex(3)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(7, 1) Source(3, 1) + SourceIndex(3)
2 >Emitted(7, 2) Source(3, 2) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part1.ts
-------------------------------------------------------------------
>>>//# sourceMappingURL=first-output.js.map
>>>var second_part1Const = new secondsecond_part1();
1->
2 >^^^^
3 >    ^^^^^^^^^^^^^^^^^
4 >                     ^^^
5 >                        ^^^^
6 >                            ^^^^^^^^^^^^^^^^^^
7 >                                              ^^
8 >                                                ^
1->///<reference path="./tripleRef.d.ts"/>
  >
2 >const 
3 >    second_part1Const
4 >                      = 
5 >                        new 
6 >                            secondsecond_part1
7 >                                              ()
8 >                                                ;
1->Emitted(9, 1) Source(2, 1) + SourceIndex(4)
2 >Emitted(9, 5) Source(2, 7) + SourceIndex(4)
3 >Emitted(9, 22) Source(2, 24) + SourceIndex(4)
4 >Emitted(9, 25) Source(2, 27) + SourceIndex(4)
5 >Emitted(9, 29) Source(2, 31) + SourceIndex(4)
6 >Emitted(9, 47) Source(2, 49) + SourceIndex(4)
7 >Emitted(9, 49) Source(2, 51) + SourceIndex(4)
8 >Emitted(9, 50) Source(2, 52) + SourceIndex(4)
---
>>>var N;
1 >
2 >^^^^
3 >    ^
4 >     ^
5 >      ^^^^^^^^^^->
1 >
  >namespace N {
  >    // Comment text
  >}
  >
  >
2 >namespace 
3 >    N
4 >      {
  >         function f() {
  >             console.log('testing');
  >         }
  >     
  >         f();
  >     }
1 >Emitted(10, 1) Source(7, 1) + SourceIndex(4)
2 >Emitted(10, 5) Source(7, 11) + SourceIndex(4)
3 >Emitted(10, 6) Source(7, 12) + SourceIndex(4)
4 >Emitted(10, 7) Source(13, 2) + SourceIndex(4)
---
>>>(function (N) {
1->
2 >^^^^^^^^^^^
3 >           ^
4 >            ^^^^^^^->
1->
2 >namespace 
3 >           N
1->Emitted(11, 1) Source(7, 1) + SourceIndex(4)
2 >Emitted(11, 12) Source(7, 11) + SourceIndex(4)
3 >Emitted(11, 13) Source(7, 12) + SourceIndex(4)
---
>>>    function f() {
1->^^^^
2 >    ^^^^^^^^^
3 >             ^
4 >              ^^^^^^^^^^^^^^^^^^->
1-> {
  >    
2 >    function 
3 >             f
1->Emitted(12, 5) Source(8, 5) + SourceIndex(4)
2 >Emitted(12, 14) Source(8, 14) + SourceIndex(4)
3 >Emitted(12, 15) Source(8, 15) + SourceIndex(4)
---
>>>        console.log('testing');
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^
7 >                             ^
8 >                              ^
1->() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    'testing'
7 >                             )
8 >                              ;
1->Emitted(13, 9) Source(9, 9) + SourceIndex(4)
2 >Emitted(13, 16) Source(9, 16) + SourceIndex(4)
3 >Emitted(13, 17) Source(9, 17) + SourceIndex(4)
4 >Emitted(13, 20) Source(9, 20) + SourceIndex(4)
5 >Emitted(13, 21) Source(9, 21) + SourceIndex(4)
6 >Emitted(13, 30) Source(9, 30) + SourceIndex(4)
7 >Emitted(13, 31) Source(9, 31) + SourceIndex(4)
8 >Emitted(13, 32) Source(9, 32) + SourceIndex(4)
---
>>>    }
1 >^^^^
2 >    ^
3 >     ^^^^->
1 >
  >    
2 >    }
1 >Emitted(14, 5) Source(10, 5) + SourceIndex(4)
2 >Emitted(14, 6) Source(10, 6) + SourceIndex(4)
---
>>>    f();
1->^^^^
2 >    ^
3 >     ^^
4 >       ^
5 >        ^^^^^^^^^^^->
1->
  >
  >    
2 >    f
3 >     ()
4 >       ;
1->Emitted(15, 5) Source(12, 5) + SourceIndex(4)
2 >Emitted(15, 6) Source(12, 6) + SourceIndex(4)
3 >Emitted(15, 8) Source(12, 8) + SourceIndex(4)
4 >Emitted(15, 9) Source(12, 9) + SourceIndex(4)
---
>>>})(N || (N = {}));
1->
2 >^
3 > ^^
4 >   ^
5 >    ^^^^^
6 >         ^
7 >          ^^^^^^^^
8 >                  ^^^^^->
1->
  >
2 >}
3 > 
4 >   N
5 >    
6 >         N
7 >           {
  >              function f() {
  >                  console.log('testing');
  >              }
  >          
  >              f();
  >          }
1->Emitted(16, 1) Source(13, 1) + SourceIndex(4)
2 >Emitted(16, 2) Source(13, 2) + SourceIndex(4)
3 >Emitted(16, 4) Source(7, 11) + SourceIndex(4)
4 >Emitted(16, 5) Source(7, 12) + SourceIndex(4)
5 >Emitted(16, 10) Source(7, 11) + SourceIndex(4)
6 >Emitted(16, 11) Source(7, 12) + SourceIndex(4)
7 >Emitted(16, 19) Source(13, 2) + SourceIndex(4)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>var C = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^->
1->
1->Emitted(17, 1) Source(1, 1) + SourceIndex(5)
---
>>>    function C() {
1->^^^^
2 >    ^^->
1->
1->Emitted(18, 5) Source(1, 1) + SourceIndex(5)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->class C {
  >    doSomething() {
  >        console.log("something got done");
  >    }
  >
2 >    }
1->Emitted(19, 5) Source(5, 1) + SourceIndex(5)
2 >Emitted(19, 6) Source(5, 2) + SourceIndex(5)
---
>>>    C.prototype.doSomething = function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^
3 >                           ^^^
4 >                              ^^^^^^^^^^^^^->
1->
2 >    doSomething
3 >                           
1->Emitted(20, 5) Source(2, 5) + SourceIndex(5)
2 >Emitted(20, 28) Source(2, 16) + SourceIndex(5)
3 >Emitted(20, 31) Source(2, 5) + SourceIndex(5)
---
>>>        console.log("something got done");
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^^^^^^^^^^^^
7 >                                        ^
8 >                                         ^
1->doSomething() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    "something got done"
7 >                                        )
8 >                                         ;
1->Emitted(21, 9) Source(3, 9) + SourceIndex(5)
2 >Emitted(21, 16) Source(3, 16) + SourceIndex(5)
3 >Emitted(21, 17) Source(3, 17) + SourceIndex(5)
4 >Emitted(21, 20) Source(3, 20) + SourceIndex(5)
5 >Emitted(21, 21) Source(3, 21) + SourceIndex(5)
6 >Emitted(21, 41) Source(3, 41) + SourceIndex(5)
7 >Emitted(21, 42) Source(3, 42) + SourceIndex(5)
8 >Emitted(21, 43) Source(3, 43) + SourceIndex(5)
---
>>>    };
1 >^^^^
2 >    ^
3 >     ^^^^^^^^^->
1 >
  >    
2 >    }
1 >Emitted(22, 5) Source(4, 5) + SourceIndex(5)
2 >Emitted(22, 6) Source(4, 6) + SourceIndex(5)
---
>>>    return C;
1->^^^^
2 >    ^^^^^^^^
1->
  >
2 >    }
1->Emitted(23, 5) Source(5, 1) + SourceIndex(5)
2 >Emitted(23, 13) Source(5, 2) + SourceIndex(5)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class C {
  >     doSomething() {
  >         console.log("something got done");
  >     }
  > }
1 >Emitted(24, 1) Source(5, 1) + SourceIndex(5)
2 >Emitted(24, 2) Source(5, 2) + SourceIndex(5)
3 >Emitted(24, 2) Source(1, 1) + SourceIndex(5)
4 >Emitted(24, 6) Source(5, 2) + SourceIndex(5)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../third_part1.ts
-------------------------------------------------------------------
>>>//# sourceMappingURL=second-output.js.map
>>>var third_part1Const = new thirdthird_part1();
1->
2 >^^^^
3 >    ^^^^^^^^^^^^^^^^
4 >                    ^^^
5 >                       ^^^^
6 >                           ^^^^^^^^^^^^^^^^
7 >                                           ^^
8 >                                             ^
1->///<reference path="./tripleRef.d.ts"/>
  >
2 >const 
3 >    third_part1Const
4 >                     = 
5 >                       new 
6 >                           thirdthird_part1
7 >                                           ()
8 >                                             ;
1->Emitted(26, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(26, 5) Source(2, 7) + SourceIndex(0)
3 >Emitted(26, 21) Source(2, 23) + SourceIndex(0)
4 >Emitted(26, 24) Source(2, 26) + SourceIndex(0)
5 >Emitted(26, 28) Source(2, 30) + SourceIndex(0)
6 >Emitted(26, 44) Source(2, 46) + SourceIndex(0)
7 >Emitted(26, 46) Source(2, 48) + SourceIndex(0)
8 >Emitted(26, 47) Source(2, 49) + SourceIndex(0)
---
>>>var c = new C();
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^->
1 >
  >
2 >var 
3 >    c
4 >      = 
5 >        new 
6 >            C
7 >             ()
8 >               ;
1 >Emitted(27, 1) Source(3, 1) + SourceIndex(0)
2 >Emitted(27, 5) Source(3, 5) + SourceIndex(0)
3 >Emitted(27, 6) Source(3, 6) + SourceIndex(0)
4 >Emitted(27, 9) Source(3, 9) + SourceIndex(0)
5 >Emitted(27, 13) Source(3, 13) + SourceIndex(0)
6 >Emitted(27, 14) Source(3, 14) + SourceIndex(0)
7 >Emitted(27, 16) Source(3, 16) + SourceIndex(0)
8 >Emitted(27, 17) Source(3, 17) + SourceIndex(0)
---
>>>c.doSomething();
1->
2 >^
3 > ^
4 >  ^^^^^^^^^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >c
3 > .
4 >  doSomething
5 >             ()
6 >               ;
1->Emitted(28, 1) Source(4, 1) + SourceIndex(0)
2 >Emitted(28, 2) Source(4, 2) + SourceIndex(0)
3 >Emitted(28, 3) Source(4, 3) + SourceIndex(0)
4 >Emitted(28, 14) Source(4, 14) + SourceIndex(0)
5 >Emitted(28, 16) Source(4, 16) + SourceIndex(0)
6 >Emitted(28, 17) Source(4, 17) + SourceIndex(0)
---
>>>//# sourceMappingURL=third-output.js.map

//// [/src/third/third_part1.ts]
///<reference path="./tripleRef.d.ts"/>
const third_part1Const = new thirdthird_part1();
var c = new C();
c.doSomething();


//// [/src/third/tripleRef.d.ts]
declare class thirdthird_part1 { }

