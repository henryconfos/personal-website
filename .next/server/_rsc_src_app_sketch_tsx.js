"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_rsc_src_app_sketch_tsx";
exports.ids = ["_rsc_src_app_sketch_tsx"];
exports.modules = {

/***/ "(rsc)/./src/app/sketch.tsx":
/*!****************************!*\
  !*** ./src/app/sketch.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_p5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-p5 */ \"(rsc)/./node_modules/react-p5/build/index.js\");\n/* harmony import */ var react_p5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_p5__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst P5Sketch = ()=>{\n    const numDots = 50;\n    const dots = [];\n    const setup = (p5, canvasParentRef)=>{\n        p5.createCanvas(500, 500).parent(canvasParentRef);\n        for(let i = 0; i < numDots; i++){\n            dots.push({\n                x: p5.random(p5.width),\n                y: p5.random(p5.height),\n                diameter: 10\n            });\n        }\n    };\n    const draw = (p5)=>{\n        p5.background(255);\n        p5.noStroke();\n        dots.forEach((dot, index)=>{\n            const distance = p5.dist(p5.mouseX, p5.mouseY, dot.x, dot.y);\n            if (distance < 50) {\n                // Move the dot away from the mouse\n                dot.x += p5.random(-5, 5);\n                dot.y += p5.random(-5, 5);\n            }\n            // Keep the dots within the canvas\n            dot.x = p5.constrain(dot.x, 0, p5.width - dot.diameter);\n            dot.y = p5.constrain(dot.y, 0, p5.height - dot.diameter);\n            p5.fill(0, 0, 255);\n            p5.ellipse(dot.x, dot.y, dot.diameter, dot.diameter);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_p5__WEBPACK_IMPORTED_MODULE_2___default()), {\n        setup: setup,\n        draw: draw\n    }, void 0, false, {\n        fileName: \"/Users/henryconfos/Documents/GitHub/personal-website/src/app/sketch.tsx\",\n        lineNumber: 48,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (P5Sketch);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL3NrZXRjaC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEI7QUFDSTtBQVM5QixNQUFNRSxXQUFxQjtJQUN6QixNQUFNQyxVQUFVO0lBQ2hCLE1BQU1DLE9BQWMsRUFBRTtJQUV0QixNQUFNQyxRQUFRLENBQUNDLElBQWFDO1FBQzFCRCxHQUFHRSxZQUFZLENBQUMsS0FBSyxLQUFLQyxNQUFNLENBQUNGO1FBQ2pDLElBQUssSUFBSUcsSUFBSSxHQUFHQSxJQUFJUCxTQUFTTyxJQUFLO1lBQ2hDTixLQUFLTyxJQUFJLENBQUM7Z0JBQ1JDLEdBQUdOLEdBQUdPLE1BQU0sQ0FBQ1AsR0FBR1EsS0FBSztnQkFDckJDLEdBQUdULEdBQUdPLE1BQU0sQ0FBQ1AsR0FBR1UsTUFBTTtnQkFDdEJDLFVBQVU7WUFDWjtRQUNGO0lBQ0Y7SUFFQSxNQUFNQyxPQUFPLENBQUNaO1FBQ1pBLEdBQUdhLFVBQVUsQ0FBQztRQUNkYixHQUFHYyxRQUFRO1FBRVhoQixLQUFLaUIsT0FBTyxDQUFDLENBQUNDLEtBQUtDO1lBQ2pCLE1BQU1DLFdBQVdsQixHQUFHbUIsSUFBSSxDQUFDbkIsR0FBR29CLE1BQU0sRUFBRXBCLEdBQUdxQixNQUFNLEVBQUVMLElBQUlWLENBQUMsRUFBRVUsSUFBSVAsQ0FBQztZQUUzRCxJQUFJUyxXQUFXLElBQUk7Z0JBQ2pCLG1DQUFtQztnQkFDbkNGLElBQUlWLENBQUMsSUFBSU4sR0FBR08sTUFBTSxDQUFDLENBQUMsR0FBRztnQkFDdkJTLElBQUlQLENBQUMsSUFBSVQsR0FBR08sTUFBTSxDQUFDLENBQUMsR0FBRztZQUN6QjtZQUVBLGtDQUFrQztZQUNsQ1MsSUFBSVYsQ0FBQyxHQUFHTixHQUFHc0IsU0FBUyxDQUFDTixJQUFJVixDQUFDLEVBQUUsR0FBR04sR0FBR1EsS0FBSyxHQUFHUSxJQUFJTCxRQUFRO1lBQ3RESyxJQUFJUCxDQUFDLEdBQUdULEdBQUdzQixTQUFTLENBQUNOLElBQUlQLENBQUMsRUFBRSxHQUFHVCxHQUFHVSxNQUFNLEdBQUdNLElBQUlMLFFBQVE7WUFFdkRYLEdBQUd1QixJQUFJLENBQUMsR0FBRyxHQUFHO1lBQ2R2QixHQUFHd0IsT0FBTyxDQUFDUixJQUFJVixDQUFDLEVBQUVVLElBQUlQLENBQUMsRUFBRU8sSUFBSUwsUUFBUSxFQUFFSyxJQUFJTCxRQUFRO1FBQ3JEO0lBQ0Y7SUFFQSxxQkFBTyw4REFBQ2hCLGlEQUFNQTtRQUFDSSxPQUFPQTtRQUFPYSxNQUFNQTs7Ozs7O0FBQ3JDO0FBRUEsaUVBQWVoQixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3NyYy9hcHAvc2tldGNoLnRzeD85MTAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2tldGNoIGZyb20gJ3JlYWN0LXA1JztcbmltcG9ydCBwNVR5cGVzIGZyb20gJ3A1JzsgXG5cbmludGVyZmFjZSBEb3Qge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgZGlhbWV0ZXI6IG51bWJlcjtcbn1cblxuY29uc3QgUDVTa2V0Y2g6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBudW1Eb3RzID0gNTA7XG4gIGNvbnN0IGRvdHM6IERvdFtdID0gW107XG5cbiAgY29uc3Qgc2V0dXAgPSAocDU6IHA1VHlwZXMsIGNhbnZhc1BhcmVudFJlZjogRWxlbWVudCkgPT4ge1xuICAgIHA1LmNyZWF0ZUNhbnZhcyg1MDAsIDUwMCkucGFyZW50KGNhbnZhc1BhcmVudFJlZik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Eb3RzOyBpKyspIHtcbiAgICAgIGRvdHMucHVzaCh7XG4gICAgICAgIHg6IHA1LnJhbmRvbShwNS53aWR0aCksXG4gICAgICAgIHk6IHA1LnJhbmRvbShwNS5oZWlnaHQpLFxuICAgICAgICBkaWFtZXRlcjogMTAsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZHJhdyA9IChwNTogcDVUeXBlcykgPT4ge1xuICAgIHA1LmJhY2tncm91bmQoMjU1KTtcbiAgICBwNS5ub1N0cm9rZSgpO1xuXG4gICAgZG90cy5mb3JFYWNoKChkb3QsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBkaXN0YW5jZSA9IHA1LmRpc3QocDUubW91c2VYLCBwNS5tb3VzZVksIGRvdC54LCBkb3QueSk7XG5cbiAgICAgIGlmIChkaXN0YW5jZSA8IDUwKSB7XG4gICAgICAgIC8vIE1vdmUgdGhlIGRvdCBhd2F5IGZyb20gdGhlIG1vdXNlXG4gICAgICAgIGRvdC54ICs9IHA1LnJhbmRvbSgtNSwgNSk7XG4gICAgICAgIGRvdC55ICs9IHA1LnJhbmRvbSgtNSwgNSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEtlZXAgdGhlIGRvdHMgd2l0aGluIHRoZSBjYW52YXNcbiAgICAgIGRvdC54ID0gcDUuY29uc3RyYWluKGRvdC54LCAwLCBwNS53aWR0aCAtIGRvdC5kaWFtZXRlcik7XG4gICAgICBkb3QueSA9IHA1LmNvbnN0cmFpbihkb3QueSwgMCwgcDUuaGVpZ2h0IC0gZG90LmRpYW1ldGVyKTtcblxuICAgICAgcDUuZmlsbCgwLCAwLCAyNTUpO1xuICAgICAgcDUuZWxsaXBzZShkb3QueCwgZG90LnksIGRvdC5kaWFtZXRlciwgZG90LmRpYW1ldGVyKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gPFNrZXRjaCBzZXR1cD17c2V0dXB9IGRyYXc9e2RyYXd9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUDVTa2V0Y2g7Il0sIm5hbWVzIjpbIlJlYWN0IiwiU2tldGNoIiwiUDVTa2V0Y2giLCJudW1Eb3RzIiwiZG90cyIsInNldHVwIiwicDUiLCJjYW52YXNQYXJlbnRSZWYiLCJjcmVhdGVDYW52YXMiLCJwYXJlbnQiLCJpIiwicHVzaCIsIngiLCJyYW5kb20iLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJkaWFtZXRlciIsImRyYXciLCJiYWNrZ3JvdW5kIiwibm9TdHJva2UiLCJmb3JFYWNoIiwiZG90IiwiaW5kZXgiLCJkaXN0YW5jZSIsImRpc3QiLCJtb3VzZVgiLCJtb3VzZVkiLCJjb25zdHJhaW4iLCJmaWxsIiwiZWxsaXBzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/sketch.tsx\n");

/***/ })

};
;