!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var u=i("6JpON"),l=document.querySelector("form"),r=document.querySelector('input[name="delay"]'),a=document.querySelector('input[name="step"]'),c=document.querySelector('input[name="amount"]');l.addEventListener("submit",(function(n){n.preventDefault();var o=r.valueAsNumber,t=a.valueAsNumber;function i(e,n){return new Promise((function(o,t){var i=Math.random()>.3;setTimeout((function(){i?o({position:e,delayValue:n}):t({position:e,delayValue:n})}),n)}))}for(var l=1;l<=c.value;l++)i(l,o).then((function(n){e(u).Notify.success("✅ Fulfilled promise ".concat(n.position," in ").concat(n.delayValue,"ms")),console.log("✅ Fulfilled promise ".concat(n.position," in ").concat(n.delayValue,"ms"))})).catch((function(n){e(u).Notify.failure("❌ Rejected promise ".concat(n.position," in ").concat(n.delayValue,"ms")),console.log("❌ Rejected promise ".concat(n.position," in ").concat(n.delayValue,"ms"))})),o+=t}))}();
//# sourceMappingURL=03-promises.8820f899.js.map
