"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/page",{

/***/ "(app-pages-browser)/./src/app/admin/page.tsx":
/*!********************************!*\
  !*** ./src/app/admin/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DashboardAdmin; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Base_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Base/Footer */ \"(app-pages-browser)/./src/components/Base/Footer.tsx\");\n/* harmony import */ var _components_layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layouts/AdminLayout */ \"(app-pages-browser)/./src/components/layouts/AdminLayout.tsx\");\n/* harmony import */ var _stores_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/stores/hook */ \"(app-pages-browser)/./src/stores/hook.ts\");\n/* harmony import */ var _stores_slices_bookSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/stores/slices/bookSlice */ \"(app-pages-browser)/./src/stores/slices/bookSlice.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction DashboardAdmin() {\n    _s();\n    const books = (0,_stores_hook__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.books);\n    const dispatch = (0,_stores_hook__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        dispatch((0,_stores_slices_bookSlice__WEBPACK_IMPORTED_MODULE_4__.getBook)());\n    }, []);\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);\n    function changeForm(e) {\n        setForm({\n            ...form,\n            [e.target.name]: e.target.value\n        });\n    }\n    function submitBook() {\n        dispatch((0,_stores_slices_bookSlice__WEBPACK_IMPORTED_MODULE_4__.addBook)(form));\n        setForm(null);\n    }\n    const Info = [\n        {\n            icon_local: \"Icon_Total_Cost_White.svg\",\n            icon_hover: \"Icon_Total_Cost.svg\",\n            desc: \"$35,768\",\n            name: \"Total Buku\"\n        },\n        {\n            icon_local: \"Icon_Champion.svg\",\n            icon_hover: \"Icon_Champion_White.svg\",\n            desc: \"$66,053\",\n            name: \"Total Sales\"\n        },\n        {\n            icon_local: \"Icon_Calender.svg\",\n            icon_hover: \"Icon_Calender_White.svg\",\n            desc: \"$35,000,00\",\n            name: \"This Week\"\n        },\n        {\n            icon_local: \"Icon_PieChart.svg\",\n            icon_hover: \"Icon_PieChart_White.svg\",\n            desc: \"$63,00K\",\n            name: \"Revenue\"\n        },\n        {\n            icon_local: \"Icon_Wallet.svg\",\n            icon_hover: \"Icon_Wallet_White.svg\",\n            desc: \"Last payment\",\n            name: \"$1250\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            title: \"Home\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-6 pt-8 space-y-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-white text-3xl font-semibold\",\n                                    children: \"Dashboard\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/page.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-base font-semibold\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-gray-500\",\n                                        children: [\n                                            \"Home / \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-[#0BB885]\",\n                                                children: \"Dashboard\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/page.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 40\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/page.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/page.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/page.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full flex  transition-all overflow-x-auto scrollbar-none overflow-hidden justify-start md:justify-center space-x-5 \",\n                            children: Info.map((item, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>console.log(\"click\"),\n                                    className: \"min-w-[10rem] w-full flex items-center justify-center space-x-4 rounded-lg py-7 bg-[#1C243F] cursor-pointer hover:bg-[#0BB885] focus:bg-[#0BB885] group \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                    src: __webpack_require__(\"(app-pages-browser)/./src/assetts/icons sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(item.icon_local)),\n                                                    alt: \"info\",\n                                                    className: (item.icon_local == \"Icon_Total_Cost_White.svg\" ? \"w-14 h-14 \" : \"w-9 h-9 \") + \"block group-hover:hidden group-focus:hidden\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/page.tsx\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 45\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                    src: __webpack_require__(\"(app-pages-browser)/./src/assetts/icons sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(item.icon_hover)),\n                                                    alt: \"info\",\n                                                    className: (item.icon_hover == \"Icon_Total_Cost.svg\" ? \"w-14 h-14 \" : \"w-9 h-9 \") + \"hidden group-hover:block group-focus:block\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/page.tsx\",\n                                                    lineNumber: 97,\n                                                    columnNumber: 45\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/page.tsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col justify-start \",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex justify-start text-lg  text-white \",\n                                                    children: item.name\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/page.tsx\",\n                                                    lineNumber: 101,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex justify-start text-base whitespace-nowrap text-gray-500 group-hover:text-white group-focus:text-white\",\n                                                    children: item.desc\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/page.tsx\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 41\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/page.tsx\",\n                                            lineNumber: 100,\n                                            columnNumber: 37\n                                        }, this)\n                                    ]\n                                }, i, true, {\n                                    fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/page.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 33\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/page.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/page.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Base_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/page.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ocudev/Documents/Project/Ocudev/nodejs/fe/src/app/admin/page.tsx\",\n            lineNumber: 76,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(DashboardAdmin, \"Vxo/Uhd+wS6aB3QO9clNXdNPaos=\", false, function() {\n    return [\n        _stores_hook__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _stores_hook__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch\n    ];\n});\n_c = DashboardAdmin;\nvar _c;\n$RefreshReg$(_c, \"DashboardAdmin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWRtaW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRWtEO0FBS1M7QUFFSTtBQUNGO0FBQzlCO0FBQ2E7QUFFN0IsU0FBU1M7O0lBR3BCLE1BQU1DLFFBQVFQLDREQUFjQSxDQUFDLENBQUNRLFFBQVVBLE1BQU1ELEtBQUs7SUFDbkQsTUFBTUUsV0FBV1YsNERBQWNBO0lBRS9CSyxnREFBU0EsQ0FBQztRQUNOSyxTQUFTUCxpRUFBT0E7SUFDcEIsR0FBRyxFQUFFO0lBRUwsTUFBTSxDQUFDUSxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFNO0lBR3RDLFNBQVNPLFdBQVdDLENBQU07UUFDdEJGLFFBQVE7WUFDSixHQUFHRCxJQUFJO1lBQ1AsQ0FBQ0csRUFBRUMsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRUYsRUFBRUMsTUFBTSxDQUFDRSxLQUFLO1FBQ25DO0lBQ0o7SUFFQSxTQUFTQztRQUNMUixTQUFTUixpRUFBT0EsQ0FBQ1M7UUFDakJDLFFBQVE7SUFDWjtJQUVBLE1BQU1PLE9BQU87UUFDVDtZQUNJQyxZQUFZO1lBQ1pDLFlBQVk7WUFDWkMsTUFBTTtZQUNOTixNQUFNO1FBQ1Y7UUFDQTtZQUNJSSxZQUFZO1lBQ1pDLFlBQVk7WUFDWkMsTUFBTTtZQUNOTixNQUFNO1FBQ1Y7UUFDQTtZQUNJSSxZQUFZO1lBQ1pDLFlBQVk7WUFDWkMsTUFBTTtZQUNOTixNQUFNO1FBQ1Y7UUFDQTtZQUNJSSxZQUFZO1lBQ1pDLFlBQVk7WUFDWkMsTUFBTTtZQUNOTixNQUFNO1FBQ1Y7UUFDQTtZQUNJSSxZQUFZO1lBQ1pDLFlBQVk7WUFDWkMsTUFBTTtZQUNOTixNQUFNO1FBQ1Y7S0FDSDtJQUVELHFCQUNJO2tCQUVJLDRFQUFDakIsdUVBQVdBO1lBQUN3QixPQUFNOzs4QkFDZiw4REFBQ0M7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNEO29DQUFJQyxXQUFVOzhDQUFvQzs7Ozs7OzhDQUduRCw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQ1gsNEVBQUNEO3dDQUFJQyxXQUFVOzs0Q0FBZ0I7MERBQ3BCLDhEQUFDQztnREFBS0QsV0FBVTswREFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUlwRCw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBRVBOLEtBQUtRLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxrQkFDWiw4REFBQ0M7b0NBQU9DLFNBQVMsSUFBTUMsUUFBUUMsR0FBRyxDQUFDO29DQUFrQlIsV0FBVTs7c0RBQzNELDhEQUFDRDs7OERBRU8sOERBQUNwQixtREFBS0E7b0RBQUM4QixLQUFLQyx5RkFBUSxLQUFtQyxPQUFoQlAsS0FBS1IsVUFBVTtvREFBS2dCLEtBQUk7b0RBQU9YLFdBQVcsQ0FBQ0csS0FBS1IsVUFBVSxJQUFJLDhCQUE4QixlQUFlLFVBQVMsSUFBSzs7Ozs7OzhEQUdoSyw4REFBQ2hCLG1EQUFLQTtvREFBQzhCLEtBQUtDLHlGQUFRLEtBQW1DLE9BQWhCUCxLQUFLUCxVQUFVO29EQUFLZSxLQUFJO29EQUFPWCxXQUFXLENBQUNHLEtBQUtQLFVBQVUsSUFBSSx3QkFBd0IsZUFBZSxVQUFTLElBQUs7Ozs7Ozs7Ozs7OztzREFHbEssOERBQUNHOzRDQUFJQyxXQUFVOzs4REFDWCw4REFBQ0Q7b0RBQUlDLFdBQVU7OERBQ1ZHLEtBQUtaLElBQUk7Ozs7Ozs4REFFZCw4REFBQ1E7b0RBQUlDLFdBQVU7OERBQ1ZHLEtBQUtOLElBQUk7Ozs7Ozs7Ozs7Ozs7bUNBZDRCTzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFzQmxFLDhEQUFDL0IsK0RBQVVBOzs7Ozs7Ozs7Ozs7QUFJM0I7R0F0R3dCUzs7UUFHTk4sd0RBQWNBO1FBQ1hELHdEQUFjQTs7O0tBSlhPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYWRtaW4vcGFnZS50c3g/Njc3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgQmFzZUZvb3RlciBmcm9tIFwiQC9jb21wb25lbnRzL0Jhc2UvRm9vdGVyXCI7XG5pbXBvcnQgQnV0dG9uU29saWQgZnJvbSBcIkAvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uU29saWRcIjtcblxuaW1wb3J0IElucHV0U2VsZWN0IGZyb20gXCJAL2NvbXBvbmVudHMvSW5wdXQvU2VsZWN0XCI7XG5pbXBvcnQgSW5wdXRUZXh0IGZyb20gXCJAL2NvbXBvbmVudHMvSW5wdXQvVGV4dFwiO1xuaW1wb3J0IEFkbWluTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvbGF5b3V0cy9BZG1pbkxheW91dFwiO1xuaW1wb3J0IFVzZXJMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXRzL1VzZXJMYXlvdXRcIjtcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL3N0b3Jlcy9ob29rXCI7XG5pbXBvcnQgeyBhZGRCb29rLCBnZXRCb29rIH0gZnJvbSBcIkAvc3RvcmVzL3NsaWNlcy9ib29rU2xpY2VcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmRBZG1pbigpIHtcblxuXG4gICAgY29uc3QgYm9va3MgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmJvb2tzKVxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGdldEJvb2soKSlcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpXG5cblxuICAgIGZ1bmN0aW9uIGNoYW5nZUZvcm0oZTogYW55KSB7XG4gICAgICAgIHNldEZvcm0oe1xuICAgICAgICAgICAgLi4uZm9ybSxcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdWJtaXRCb29rKCkge1xuICAgICAgICBkaXNwYXRjaChhZGRCb29rKGZvcm0pKVxuICAgICAgICBzZXRGb3JtKG51bGwpXG4gICAgfVxuXG4gICAgY29uc3QgSW5mbyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWNvbl9sb2NhbDogXCJJY29uX1RvdGFsX0Nvc3RfV2hpdGUuc3ZnXCIsXG4gICAgICAgICAgICBpY29uX2hvdmVyOiBcIkljb25fVG90YWxfQ29zdC5zdmdcIixcbiAgICAgICAgICAgIGRlc2M6IFwiJDM1LDc2OFwiLFxuICAgICAgICAgICAgbmFtZTogXCJUb3RhbCBCdWt1XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGljb25fbG9jYWw6IFwiSWNvbl9DaGFtcGlvbi5zdmdcIixcbiAgICAgICAgICAgIGljb25faG92ZXI6IFwiSWNvbl9DaGFtcGlvbl9XaGl0ZS5zdmdcIixcbiAgICAgICAgICAgIGRlc2M6IFwiJDY2LDA1M1wiLFxuICAgICAgICAgICAgbmFtZTogXCJUb3RhbCBTYWxlc1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpY29uX2xvY2FsOiBcIkljb25fQ2FsZW5kZXIuc3ZnXCIsXG4gICAgICAgICAgICBpY29uX2hvdmVyOiBcIkljb25fQ2FsZW5kZXJfV2hpdGUuc3ZnXCIsXG4gICAgICAgICAgICBkZXNjOiBcIiQzNSwwMDAsMDBcIixcbiAgICAgICAgICAgIG5hbWU6IFwiVGhpcyBXZWVrXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGljb25fbG9jYWw6IFwiSWNvbl9QaWVDaGFydC5zdmdcIixcbiAgICAgICAgICAgIGljb25faG92ZXI6IFwiSWNvbl9QaWVDaGFydF9XaGl0ZS5zdmdcIixcbiAgICAgICAgICAgIGRlc2M6IFwiJDYzLDAwS1wiLFxuICAgICAgICAgICAgbmFtZTogXCJSZXZlbnVlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGljb25fbG9jYWw6IFwiSWNvbl9XYWxsZXQuc3ZnXCIsXG4gICAgICAgICAgICBpY29uX2hvdmVyOiBcIkljb25fV2FsbGV0X1doaXRlLnN2Z1wiLFxuICAgICAgICAgICAgZGVzYzogXCJMYXN0IHBheW1lbnRcIixcbiAgICAgICAgICAgIG5hbWU6IFwiJDEyNTBcIixcbiAgICAgICAgfVxuICAgIF1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG5cbiAgICAgICAgICAgIDxBZG1pbkxheW91dCB0aXRsZT1cIkhvbWVcIiA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB0LTggc3BhY2UteS01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0zeGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhc2hib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWUgLyA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjMEJCODg1XVwiPkRhc2hib2FyZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCAgdHJhbnNpdGlvbi1hbGwgb3ZlcmZsb3cteC1hdXRvIHNjcm9sbGJhci1ub25lIG92ZXJmbG93LWhpZGRlbiBqdXN0aWZ5LXN0YXJ0IG1kOmp1c3RpZnktY2VudGVyIHNwYWNlLXgtNSBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdjbGljaycpfSBrZXk9e2l9IGNsYXNzTmFtZT1cIm1pbi13LVsxMHJlbV0gdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNwYWNlLXgtNCByb3VuZGVkLWxnIHB5LTcgYmctWyMxQzI0M0ZdIGN1cnNvci1wb2ludGVyIGhvdmVyOmJnLVsjMEJCODg1XSBmb2N1czpiZy1bIzBCQjg4NV0gZ3JvdXAgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17cmVxdWlyZShgQC9hc3NldHRzL2ljb25zLyR7aXRlbS5pY29uX2xvY2FsfWApfSBhbHQ9XCJpbmZvXCIgY2xhc3NOYW1lPXsoaXRlbS5pY29uX2xvY2FsID09IFwiSWNvbl9Ub3RhbF9Db3N0X1doaXRlLnN2Z1wiID8gXCJ3LTE0IGgtMTQgXCIgOiBcInctOSBoLTkgXCIpICsgXCJibG9jayBncm91cC1ob3ZlcjpoaWRkZW4gZ3JvdXAtZm9jdXM6aGlkZGVuXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17cmVxdWlyZShgQC9hc3NldHRzL2ljb25zLyR7aXRlbS5pY29uX2hvdmVyfWApfSBhbHQ9XCJpbmZvXCIgY2xhc3NOYW1lPXsoaXRlbS5pY29uX2hvdmVyID09IFwiSWNvbl9Ub3RhbF9Db3N0LnN2Z1wiID8gXCJ3LTE0IGgtMTQgXCIgOiBcInctOSBoLTkgXCIpICsgXCJoaWRkZW4gZ3JvdXAtaG92ZXI6YmxvY2sgZ3JvdXAtZm9jdXM6YmxvY2tcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IHRleHQtbGcgIHRleHQtd2hpdGUgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgdGV4dC1iYXNlIHdoaXRlc3BhY2Utbm93cmFwIHRleHQtZ3JheS01MDAgZ3JvdXAtaG92ZXI6dGV4dC13aGl0ZSBncm91cC1mb2N1czp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEJhc2VGb290ZXIgLz5cbiAgICAgICAgICAgIDwvQWRtaW5MYXlvdXQgPlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbIkJhc2VGb290ZXIiLCJBZG1pbkxheW91dCIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJhZGRCb29rIiwiZ2V0Qm9vayIsIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEYXNoYm9hcmRBZG1pbiIsImJvb2tzIiwic3RhdGUiLCJkaXNwYXRjaCIsImZvcm0iLCJzZXRGb3JtIiwiY2hhbmdlRm9ybSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzdWJtaXRCb29rIiwiSW5mbyIsImljb25fbG9jYWwiLCJpY29uX2hvdmVyIiwiZGVzYyIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsIm1hcCIsIml0ZW0iLCJpIiwiYnV0dG9uIiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciLCJzcmMiLCJyZXF1aXJlIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/admin/page.tsx\n"));

/***/ })

});