"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/borrow/page",{

/***/ "(app-pages-browser)/./src/app/admin/borrow/page.tsx":
/*!***************************************!*\
  !*** ./src/app/admin/borrow/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AdminBorrowPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Base_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Base/Footer */ \"(app-pages-browser)/./src/components/Base/Footer.tsx\");\n/* harmony import */ var _components_layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layouts/AdminLayout */ \"(app-pages-browser)/./src/components/layouts/AdminLayout.tsx\");\n/* harmony import */ var _stores_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/stores/hook */ \"(app-pages-browser)/./src/stores/hook.ts\");\n/* harmony import */ var _stores_slices_borrowingSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/stores/slices/borrowingSlice */ \"(app-pages-browser)/./src/stores/slices/borrowingSlice.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction AdminBorrowPage() {\n    _s();\n    const borrowing = (0,_stores_hook__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.borrowings);\n    const dispatch = (0,_stores_hook__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        dispatch((0,_stores_slices_borrowingSlice__WEBPACK_IMPORTED_MODULE_4__.getBorrowings)());\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"Borrow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-6 pt-8 space-y-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-white text-3xl font-semibold\",\n                                children: \"Borrow\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/borrow/page.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-base font-semibold\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-gray-500\",\n                                    children: [\n                                        \"Admin / \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-[#0BB885]\",\n                                            children: \"Borrow\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/borrow/page.tsx\",\n                                            lineNumber: 28,\n                                            columnNumber: 37\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/borrow/page.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/borrow/page.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/borrow/page.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        className: \"w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    className: \"w-full font-normal h-12 text-[#323232] space-x-20 bg-[#F9F9F9]\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: \"text-start px-4 rounded-l-xl\",\n                                            children: \"Nama Peminjam\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/borrow/page.tsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: \"text-start px-4\",\n                                            children: \"Email\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/borrow/page.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: \"text-start px-4\",\n                                            children: \"Judul\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/borrow/page.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: \"text-start px-4\",\n                                            children: \"Borrow Date\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/borrow/page.tsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: \"text-start px-4\",\n                                            children: \"Return Date\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/borrow/page.tsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: \"text-start px-4 rounded-r-xl\",\n                                            children: \"Status\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/borrow/page.tsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/borrow/page.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/borrow/page.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: borrowing.source.map((item, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        className: \"w-full text-white space-x-20 border-b border-[#979797]\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \" px-4 text-lg font-normal max-w-sm  \",\n                                                children: item.user.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/borrow/page.tsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \" text-lg font-normal \",\n                                                children: item.user.email\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/borrow/page.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \" text-lg font-normal \",\n                                                children: item.book.penulis\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/borrow/page.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \" px-4 text-lg text-center font-normal max-w-[2rem]\",\n                                                children: item.borrowDate\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/borrow/page.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"px-4 text-lg text-center font-normal max-w-[2rem]\",\n                                                children: item.returnDate\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/borrow/page.tsx\",\n                                                lineNumber: 59,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"px-4 text-lg text-center font-normal max-w-[5rem] \",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"\".concat(item.dayDate ? \"bg-success \" : \" bg-primary-light \", ' + \" w-full text-base p-1 rounded-lg \"'),\n                                                    children: item.dayDate ? \"Return\" : \"Pinjam \"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/borrow/page.tsx\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 37\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/borrow/page.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, i, true, {\n                                        fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/borrow/page.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 29\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/borrow/page.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/borrow/page.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/borrow/page.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Base_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/borrow/page.tsx\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/borrow/page.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(AdminBorrowPage, \"2t2vahti2/bR+p4mg55jfUJ3Ico=\", false, function() {\n    return [\n        _stores_hook__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _stores_hook__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch\n    ];\n});\n_c = AdminBorrowPage;\nvar _c;\n$RefreshReg$(_c, \"AdminBorrowPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWRtaW4vYm9ycm93L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFa0Q7QUFDUztBQUNJO0FBQ0E7QUFDN0I7QUFFbkIsU0FBU007O0lBRXBCLE1BQU1DLFlBQVlKLDREQUFjQSxDQUFDLENBQUNLLFFBQVVBLE1BQU1DLFVBQVU7SUFFNUQsTUFBTUMsV0FBV1IsNERBQWNBO0lBRS9CRyxnREFBU0EsQ0FBQztRQUNOSyxTQUFTTiw0RUFBYUE7SUFDMUIsR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNILHVFQUFXQTtRQUFDVSxPQUFNOzswQkFDZiw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUFvQzs7Ozs7OzBDQUduRCw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ1gsNEVBQUNEO29DQUFJQyxXQUFVOzt3Q0FBZ0I7c0RBQ25CLDhEQUFDQzs0Q0FBS0QsV0FBVTtzREFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlyRCw4REFBQ0U7d0JBQU1GLFdBQVU7OzBDQUNiLDhEQUFDRzswQ0FDRyw0RUFBQ0M7b0NBQUdKLFdBQVU7O3NEQUNWLDhEQUFDSzs0Q0FBR0wsV0FBVTtzREFBK0I7Ozs7OztzREFDN0MsOERBQUNLOzRDQUFHTCxXQUFVO3NEQUFrQjs7Ozs7O3NEQUNoQyw4REFBQ0s7NENBQUdMLFdBQVU7c0RBQWtCOzs7Ozs7c0RBQ2hDLDhEQUFDSzs0Q0FBR0wsV0FBVTtzREFBa0I7Ozs7OztzREFDaEMsOERBQUNLOzRDQUFHTCxXQUFVO3NEQUFrQjs7Ozs7O3NEQUNoQyw4REFBQ0s7NENBQUdMLFdBQVU7c0RBQStCOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHckQsOERBQUNNOzBDQUNJWixVQUFVYSxNQUFNLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFXQyxrQkFFOUIsOERBQUNOO3dDQUFXSixXQUFVOzswREFDbEIsOERBQUNXO2dEQUFHWCxXQUFVOzBEQUNUUyxLQUFLRyxJQUFJLENBQUNDLElBQUk7Ozs7OzswREFFbkIsOERBQUNGO2dEQUFHWCxXQUFVOzBEQUNUUyxLQUFLRyxJQUFJLENBQUNFLEtBQUs7Ozs7OzswREFFcEIsOERBQUNIO2dEQUFHWCxXQUFVOzBEQUNUUyxLQUFLTSxJQUFJLENBQUNDLE9BQU87Ozs7OzswREFFdEIsOERBQUNMO2dEQUFHWCxXQUFVOzBEQUNUUyxLQUFLUSxVQUFVOzs7Ozs7MERBRXBCLDhEQUFDTjtnREFBR1gsV0FBVTswREFDVFMsS0FBS1MsVUFBVTs7Ozs7OzBEQUVwQiw4REFBQ1A7Z0RBQUdYLFdBQVU7MERBQ1YsNEVBQUNEO29EQUFJQyxXQUFXLEdBQXVELE9BQXBEUyxLQUFLVSxPQUFPLEdBQUcsZ0JBQWdCLHNCQUFxQjs4REFDbEVWLEtBQUtVLE9BQU8sR0FBRyxXQUFXOzs7Ozs7Ozs7Ozs7dUNBbEI5QlQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBMEJ6Qiw4REFBQ3ZCLCtEQUFVQTs7Ozs7Ozs7Ozs7QUFHdkI7R0FsRXdCTTs7UUFFRkgsd0RBQWNBO1FBRWZELHdEQUFjQTs7O0tBSlhJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYWRtaW4vYm9ycm93L3BhZ2UudHN4Pzg3ZTMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IEJhc2VGb290ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9CYXNlL0Zvb3RlclwiO1xuaW1wb3J0IEFkbWluTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvbGF5b3V0cy9BZG1pbkxheW91dFwiO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIkAvc3RvcmVzL2hvb2tcIjtcbmltcG9ydCB7IGdldEJvcnJvd2luZ3MgfSBmcm9tIFwiQC9zdG9yZXMvc2xpY2VzL2JvcnJvd2luZ1NsaWNlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW5Cb3Jyb3dQYWdlKCkge1xuXG4gICAgY29uc3QgYm9ycm93aW5nID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ib3Jyb3dpbmdzKVxuXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZ2V0Qm9ycm93aW5ncygpKVxuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBZG1pbkxheW91dCB0aXRsZT1cIkJvcnJvd1wiID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBwdC04IHNwYWNlLXktNVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTN4bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBCb3Jyb3dcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkbWluIC8gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bIzBCQjg4NV1cIj5Cb3Jyb3c8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndy1mdWxsJz5cbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9J3ctZnVsbCBmb250LW5vcm1hbCBoLTEyIHRleHQtWyMzMjMyMzJdIHNwYWNlLXgtMjAgYmctWyNGOUY5RjldJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1zdGFydCBweC00IHJvdW5kZWQtbC14bFwiPk5hbWEgUGVtaW5qYW08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0IHB4LTRcIj5FbWFpbDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtc3RhcnQgcHgtNFwiPkp1ZHVsPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1zdGFydCBweC00XCI+Qm9ycm93IERhdGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0IHB4LTRcIj5SZXR1cm4gRGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtc3RhcnQgcHgtNCByb3VuZGVkLXIteGxcIj5TdGF0dXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAge2JvcnJvd2luZy5zb3VyY2UubWFwKChpdGVtOiBhbnksIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0gY2xhc3NOYW1lPSd3LWZ1bGwgdGV4dC13aGl0ZSBzcGFjZS14LTIwIGJvcmRlci1iIGJvcmRlci1bIzk3OTc5N10nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPScgcHgtNCB0ZXh0LWxnIGZvbnQtbm9ybWFsIG1heC13LXNtICAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udXNlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPScgdGV4dC1sZyBmb250LW5vcm1hbCAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udXNlci5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0nIHRleHQtbGcgZm9udC1ub3JtYWwgJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmJvb2sucGVudWxpc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0nIHB4LTQgdGV4dC1sZyB0ZXh0LWNlbnRlciBmb250LW5vcm1hbCBtYXgtdy1bMnJlbV0nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uYm9ycm93RGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncHgtNCB0ZXh0LWxnIHRleHQtY2VudGVyIGZvbnQtbm9ybWFsIG1heC13LVsycmVtXSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5yZXR1cm5EYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdweC00IHRleHQtbGcgdGV4dC1jZW50ZXIgZm9udC1ub3JtYWwgbWF4LXctWzVyZW1dICc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aXRlbS5kYXlEYXRlID8gXCJiZy1zdWNjZXNzIFwiIDogXCIgYmctcHJpbWFyeS1saWdodCBcIn0gKyBcIiB3LWZ1bGwgdGV4dC1iYXNlIHAtMSByb3VuZGVkLWxnIFwiYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGF5RGF0ZSA/IFwiUmV0dXJuXCIgOiBcIlBpbmphbSBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8QmFzZUZvb3RlciAvPlxuICAgICAgICA8L0FkbWluTGF5b3V0ID5cbiAgICApXG59Il0sIm5hbWVzIjpbIkJhc2VGb290ZXIiLCJBZG1pbkxheW91dCIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJnZXRCb3Jyb3dpbmdzIiwidXNlRWZmZWN0IiwiQWRtaW5Cb3Jyb3dQYWdlIiwiYm9ycm93aW5nIiwic3RhdGUiLCJib3Jyb3dpbmdzIiwiZGlzcGF0Y2giLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5Iiwic291cmNlIiwibWFwIiwiaXRlbSIsImkiLCJ0ZCIsInVzZXIiLCJuYW1lIiwiZW1haWwiLCJib29rIiwicGVudWxpcyIsImJvcnJvd0RhdGUiLCJyZXR1cm5EYXRlIiwiZGF5RGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/admin/borrow/page.tsx\n"));

/***/ })

});