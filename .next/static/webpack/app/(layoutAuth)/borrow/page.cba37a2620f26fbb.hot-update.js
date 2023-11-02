"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(layoutAuth)/borrow/page",{

/***/ "(app-pages-browser)/./src/stores/slices/bookSlice.tsx":
/*!*****************************************!*\
  !*** ./src/stores/slices/bookSlice.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addBook: function() { return /* binding */ addBook; },\n/* harmony export */   deleteBook: function() { return /* binding */ deleteBook; },\n/* harmony export */   getBook: function() { return /* binding */ getBook; },\n/* harmony export */   resetDetail: function() { return /* binding */ resetDetail; },\n/* harmony export */   setDetail: function() { return /* binding */ setDetail; },\n/* harmony export */   setSource: function() { return /* binding */ setSource; },\n/* harmony export */   updateBook: function() { return /* binding */ updateBook; }\n/* harmony export */ });\n/* harmony import */ var _library_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/library/axios */ \"(app-pages-browser)/./src/library/axios.ts\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n\n\n\nconst bookSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSlice)({\n    name: \"bookSlice\",\n    initialState: {\n        source: [],\n        detail: null\n    },\n    reducers: {\n        setSource (state, param) {\n            let { payload } = param;\n            state.source = payload;\n        },\n        setDetail (state, param) {\n            let { payload } = param;\n            state.detail = payload;\n        },\n        resetDetail (state) {\n            state.detail = null;\n        }\n    }\n});\n// export const updateBook = (payload: any) => async (dispatch: AppDispatch, getState: RootState) => {\n//     const detail: any = getState.books.detail\n//     await axios.put(`/book/${detail.id}`, payload).then(({ data }) => {\n//         dispatch(getBook())\n//     }).catch(({ response }) => {\n//         console.log(response?.data)\n//     })\n// }\nconst updateBook = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(\"books/updateBook\", async (payload, param)=>{\n    let { dispatch, getState } = param;\n    const detail = getState().books.detail;\n    await _library_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put(\"/book/\".concat(detail === null || detail === void 0 ? void 0 : detail.id), payload).then((param)=>{\n        let { data } = param;\n        dispatch(getBook());\n    }).catch((param)=>{\n        let { response } = param;\n        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(response.data.errMessage);\n        console.log(response === null || response === void 0 ? void 0 : response.data);\n    });\n});\nconst deleteBook = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(\"books/deleteBook\", async (_, param)=>{\n    let { dispatch, getState } = param;\n    const detail = getState().books.detail;\n    await _library_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].delete(\"/book/\".concat(detail === null || detail === void 0 ? void 0 : detail.id)).then((param)=>{\n        let { data } = param;\n        dispatch(getBook());\n    }).catch((param)=>{\n        let { response } = param;\n        console.log(response === null || response === void 0 ? void 0 : response.data);\n    });\n});\nconst addBook = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(\"books/deleteBook\", async (payload, param)=>{\n    let { dispatch } = param;\n    await _library_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/books\", payload).then((param)=>{\n        let { data } = param;\n        dispatch(getBook());\n        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(\"success\");\n    }).catch((param)=>{\n        let { response } = param;\n        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(response.data.errMessage);\n        console.log(response === null || response === void 0 ? void 0 : response.data);\n    });\n});\nconst getBook = ()=>async (dispatch)=>{\n        await _library_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"/books\").then((param)=>{\n            let { data } = param;\n            dispatch(setSource(data.data));\n        }).catch((param)=>{\n            let { response } = param;\n            console.log(response === null || response === void 0 ? void 0 : response.data);\n        });\n    };\nconst { setSource, setDetail, resetDetail } = bookSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (bookSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZXMvc2xpY2VzL2Jvb2tTbGljZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFvQztBQUM2QjtBQUUxQjtBQUl2QyxNQUFNSSxZQUFZRiw2REFBV0EsQ0FBQztJQUMxQkcsTUFBTTtJQUNOQyxjQUFjO1FBQ1ZDLFFBQVEsRUFBRTtRQUNWQyxRQUFRO0lBQ1o7SUFDQUMsVUFBVTtRQUNOQyxXQUFVQyxLQUFLLEVBQUUsS0FBVztnQkFBWCxFQUFFQyxPQUFPLEVBQUUsR0FBWDtZQUNiRCxNQUFNSixNQUFNLEdBQUdLO1FBQ25CO1FBQ0FDLFdBQVVGLEtBQUssRUFBRSxLQUFXO2dCQUFYLEVBQUVDLE9BQU8sRUFBRSxHQUFYO1lBQ2JELE1BQU1ILE1BQU0sR0FBR0k7UUFDbkI7UUFDQUUsYUFBWUgsS0FBSztZQUNiQSxNQUFNSCxNQUFNLEdBQUc7UUFDbkI7SUFDSjtBQUNKO0FBR0Esc0dBQXNHO0FBRXRHLGdEQUFnRDtBQUNoRCwwRUFBMEU7QUFDMUUsOEJBQThCO0FBQzlCLG1DQUFtQztBQUNuQyxzQ0FBc0M7QUFDdEMsU0FBUztBQUNULElBQUk7QUFFRyxNQUFNTyxhQUFhZCxrRUFBZ0JBLENBQTJELG9CQUFvQixPQUFPVztRQUFTLEVBQUVJLFFBQVEsRUFBRUMsUUFBUSxFQUFFO0lBQzNKLE1BQU1ULFNBQWNTLFdBQVdDLEtBQUssQ0FBQ1YsTUFBTTtJQUMzQyxNQUFNUixzREFBS0EsQ0FBQ21CLEdBQUcsQ0FBQyxTQUFvQixPQUFYWCxtQkFBQUEsNkJBQUFBLE9BQVFZLEVBQUUsR0FBSVIsU0FBU1MsSUFBSSxDQUFDO1lBQUMsRUFBRUMsSUFBSSxFQUFFO1FBQzFETixTQUFTTztJQUNiLEdBQUdDLEtBQUssQ0FBQztZQUFDLEVBQUVDLFFBQVEsRUFBRTtRQUNwQnRCLGlEQUFLQSxDQUFDdUIsS0FBSyxDQUFDRCxTQUFTSCxJQUFJLENBQUNLLFVBQVU7UUFDbENDLFFBQVFDLEdBQUcsQ0FBQ0oscUJBQUFBLCtCQUFBQSxTQUFVSCxJQUFJO0lBQzlCO0FBQ0osR0FBRztBQUVJLE1BQU1RLGFBQWE3QixrRUFBZ0JBLENBQTJELG9CQUFvQixPQUFPOEI7UUFBRyxFQUFFZixRQUFRLEVBQUVDLFFBQVEsRUFBRTtJQUNySixNQUFNVCxTQUFjUyxXQUFXQyxLQUFLLENBQUNWLE1BQU07SUFDM0MsTUFBTVIsc0RBQUtBLENBQUNnQyxNQUFNLENBQUMsU0FBb0IsT0FBWHhCLG1CQUFBQSw2QkFBQUEsT0FBUVksRUFBRSxHQUFJQyxJQUFJLENBQUM7WUFBQyxFQUFFQyxJQUFJLEVBQUU7UUFDcEROLFNBQVNPO0lBQ2IsR0FBR0MsS0FBSyxDQUFDO1lBQUMsRUFBRUMsUUFBUSxFQUFFO1FBQ2xCRyxRQUFRQyxHQUFHLENBQUNKLHFCQUFBQSwrQkFBQUEsU0FBVUgsSUFBSTtJQUM5QjtBQUNKLEdBQUc7QUFHSSxNQUFNVyxVQUFVaEMsa0VBQWdCQSxDQUFxQyxvQkFBb0IsT0FBT1c7UUFBUyxFQUFFSSxRQUFRLEVBQUU7SUFDeEgsTUFBTWhCLHNEQUFLQSxDQUFDa0MsSUFBSSxDQUFFLFVBQVN0QixTQUFTUyxJQUFJLENBQUM7WUFBQyxFQUFFQyxJQUFJLEVBQUU7UUFDaEROLFNBQVNPO1FBQ1RwQixpREFBS0EsQ0FBQ2dDLE9BQU8sQ0FBQztJQUNoQixHQUFHWCxLQUFLLENBQUM7WUFBQyxFQUFFQyxRQUFRLEVBQUU7UUFDcEJ0QixpREFBS0EsQ0FBQ3VCLEtBQUssQ0FBQ0QsU0FBU0gsSUFBSSxDQUFDSyxVQUFVO1FBQ2xDQyxRQUFRQyxHQUFHLENBQUNKLHFCQUFBQSwrQkFBQUEsU0FBVUgsSUFBSTtJQUM5QjtBQUNKLEdBQUc7QUFFSSxNQUFNQyxVQUFVLElBQU0sT0FBT1A7UUFDaEMsTUFBTWhCLHNEQUFLQSxDQUFDb0MsR0FBRyxDQUFDLFVBQVVmLElBQUksQ0FBQztnQkFBQyxFQUFFQyxJQUFJLEVBQUU7WUFDcENOLFNBQVNOLFVBQVVZLEtBQUtBLElBQUk7UUFDaEMsR0FBR0UsS0FBSyxDQUFDO2dCQUFDLEVBQUVDLFFBQVEsRUFBRTtZQUNsQkcsUUFBUUMsR0FBRyxDQUFDSixxQkFBQUEsK0JBQUFBLFNBQVVILElBQUk7UUFDOUI7SUFDSixFQUFDO0FBRU0sTUFBTSxFQUFFWixTQUFTLEVBQUVHLFNBQVMsRUFBRUMsV0FBVyxFQUFFLEdBQUdWLFVBQVVpQyxPQUFPO0FBQ3RFLCtEQUFlakMsVUFBVWtDLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3Jlcy9zbGljZXMvYm9va1NsaWNlLnRzeD81ZjAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiQC9saWJyYXJ5L2F4aW9zXCI7XG5pbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rLCBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBBcHBEaXNwYXRjaCwgUm9vdFN0YXRlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IHsgZXJyb3IgfSBmcm9tIFwiY29uc29sZVwiO1xuXG5cbmNvbnN0IGJvb2tTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiBcImJvb2tTbGljZVwiLFxuICAgIGluaXRpYWxTdGF0ZToge1xuICAgICAgICBzb3VyY2U6IFtdLFxuICAgICAgICBkZXRhaWw6IG51bGwsXG4gICAgfSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBzZXRTb3VyY2Uoc3RhdGUsIHsgcGF5bG9hZCB9KSB7XG4gICAgICAgICAgICBzdGF0ZS5zb3VyY2UgPSBwYXlsb2FkXG4gICAgICAgIH0sXG4gICAgICAgIHNldERldGFpbChzdGF0ZSwgeyBwYXlsb2FkIH0pIHtcbiAgICAgICAgICAgIHN0YXRlLmRldGFpbCA9IHBheWxvYWRcbiAgICAgICAgfSxcbiAgICAgICAgcmVzZXREZXRhaWwoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLmRldGFpbCA9IG51bGxcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cblxuLy8gZXhwb3J0IGNvbnN0IHVwZGF0ZUJvb2sgPSAocGF5bG9hZDogYW55KSA9PiBhc3luYyAoZGlzcGF0Y2g6IEFwcERpc3BhdGNoLCBnZXRTdGF0ZTogUm9vdFN0YXRlKSA9PiB7XG5cbi8vICAgICBjb25zdCBkZXRhaWw6IGFueSA9IGdldFN0YXRlLmJvb2tzLmRldGFpbFxuLy8gICAgIGF3YWl0IGF4aW9zLnB1dChgL2Jvb2svJHtkZXRhaWwuaWR9YCwgcGF5bG9hZCkudGhlbigoeyBkYXRhIH0pID0+IHtcbi8vICAgICAgICAgZGlzcGF0Y2goZ2V0Qm9vaygpKVxuLy8gICAgIH0pLmNhdGNoKCh7IHJlc3BvbnNlIH0pID0+IHtcbi8vICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2U/LmRhdGEpXG4vLyAgICAgfSlcbi8vIH1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUJvb2sgPSBjcmVhdGVBc3luY1RodW5rPGFueSwgbnVtYmVyLCB7IHN0YXRlOiBSb290U3RhdGUsIGRpc3BhdGNoOiBBcHBEaXNwYXRjaCB9PignYm9va3MvdXBkYXRlQm9vaycsIGFzeW5jIChwYXlsb2FkLCB7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PiB7XG4gICAgY29uc3QgZGV0YWlsOiBhbnkgPSBnZXRTdGF0ZSgpLmJvb2tzLmRldGFpbDtcbiAgICBhd2FpdCBheGlvcy5wdXQoYC9ib29rLyR7ZGV0YWlsPy5pZH1gLCBwYXlsb2FkKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICBkaXNwYXRjaChnZXRCb29rKCkpO1xuICAgIH0pLmNhdGNoKCh7IHJlc3BvbnNlIH0pID0+IHtcbiAgICAgIHRvYXN0LmVycm9yKHJlc3BvbnNlLmRhdGEuZXJyTWVzc2FnZSlcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2U/LmRhdGEpXG4gICAgfSlcbn0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQm9vayA9IGNyZWF0ZUFzeW5jVGh1bms8YW55LCBuZXZlciAsIHsgc3RhdGU6IFJvb3RTdGF0ZSwgZGlzcGF0Y2g6IEFwcERpc3BhdGNoIH0+KCdib29rcy9kZWxldGVCb29rJywgYXN5bmMgKF8sIHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IHtcbiAgICBjb25zdCBkZXRhaWw6IGFueSA9IGdldFN0YXRlKCkuYm9va3MuZGV0YWlsO1xuICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgL2Jvb2svJHtkZXRhaWw/LmlkfWApLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGdldEJvb2soKSk7XG4gICAgfSkuY2F0Y2goKHsgcmVzcG9uc2UgfSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZT8uZGF0YSlcbiAgICB9KVxufSk7XG5cblxuZXhwb3J0IGNvbnN0IGFkZEJvb2sgPSBjcmVhdGVBc3luY1RodW5rPGFueSwgYW55LCB7ZGlzcGF0Y2g6IEFwcERpc3BhdGNoIH0+KCdib29rcy9kZWxldGVCb29rJywgYXN5bmMgKHBheWxvYWQsIHsgZGlzcGF0Y2ggfSkgPT4ge1xuICAgIGF3YWl0IGF4aW9zLnBvc3QoYC9ib29rc2AsIHBheWxvYWQpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICBkaXNwYXRjaChnZXRCb29rKCkpXG4gICAgICB0b2FzdC5zdWNjZXNzKCdzdWNjZXNzJylcbiAgICB9KS5jYXRjaCgoeyByZXNwb25zZSB9KSA9PiB7XG4gICAgICB0b2FzdC5lcnJvcihyZXNwb25zZS5kYXRhLmVyck1lc3NhZ2UpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlPy5kYXRhKVxuICAgIH0pXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldEJvb2sgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEFwcERpc3BhdGNoKSA9PiB7XG4gICAgYXdhaXQgYXhpb3MuZ2V0KFwiL2Jvb2tzXCIpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldFNvdXJjZShkYXRhLmRhdGEpKVxuICAgIH0pLmNhdGNoKCh7IHJlc3BvbnNlIH0pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2U/LmRhdGEpXG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHsgc2V0U291cmNlLCBzZXREZXRhaWwsIHJlc2V0RGV0YWlsIH0gPSBib29rU2xpY2UuYWN0aW9uc1xuZXhwb3J0IGRlZmF1bHQgYm9va1NsaWNlLnJlZHVjZXIiXSwibmFtZXMiOlsiYXhpb3MiLCJjcmVhdGVBc3luY1RodW5rIiwiY3JlYXRlU2xpY2UiLCJ0b2FzdCIsImJvb2tTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJzb3VyY2UiLCJkZXRhaWwiLCJyZWR1Y2VycyIsInNldFNvdXJjZSIsInN0YXRlIiwicGF5bG9hZCIsInNldERldGFpbCIsInJlc2V0RGV0YWlsIiwidXBkYXRlQm9vayIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJib29rcyIsInB1dCIsImlkIiwidGhlbiIsImRhdGEiLCJnZXRCb29rIiwiY2F0Y2giLCJyZXNwb25zZSIsImVycm9yIiwiZXJyTWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJkZWxldGVCb29rIiwiXyIsImRlbGV0ZSIsImFkZEJvb2siLCJwb3N0Iiwic3VjY2VzcyIsImdldCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/stores/slices/bookSlice.tsx\n"));

/***/ })

});