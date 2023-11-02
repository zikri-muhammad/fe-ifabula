"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/books/page",{

/***/ "(app-pages-browser)/./src/stores/slices/bookSlice.tsx":
/*!*****************************************!*\
  !*** ./src/stores/slices/bookSlice.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addBook: function() { return /* binding */ addBook; },\n/* harmony export */   deleteBook: function() { return /* binding */ deleteBook; },\n/* harmony export */   getBook: function() { return /* binding */ getBook; },\n/* harmony export */   resetDetail: function() { return /* binding */ resetDetail; },\n/* harmony export */   setDetail: function() { return /* binding */ setDetail; },\n/* harmony export */   setSource: function() { return /* binding */ setSource; },\n/* harmony export */   updateBook: function() { return /* binding */ updateBook; }\n/* harmony export */ });\n/* harmony import */ var _library_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/library/axios */ \"(app-pages-browser)/./src/library/axios.ts\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n\n\n\nconst bookSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSlice)({\n    name: \"bookSlice\",\n    initialState: {\n        source: [],\n        detail: null\n    },\n    reducers: {\n        setSource (state, param) {\n            let { payload } = param;\n            state.source = payload;\n        },\n        setDetail (state, param) {\n            let { payload } = param;\n            state.detail = payload;\n        },\n        resetDetail (state) {\n            state.detail = null;\n        }\n    }\n});\n// export const updateBook = (payload: any) => async (dispatch: AppDispatch, getState: RootState) => {\n//     const detail: any = getState.books.detail\n//     await axios.put(`/book/${detail.id}`, payload).then(({ data }) => {\n//         dispatch(getBook())\n//     }).catch(({ response }) => {\n//         console.log(response?.data)\n//     })\n// }\nconst updateBook = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(\"books/updateBook\", async (payload, param)=>{\n    let { dispatch, getState } = param;\n    const detail = getState().books.detail;\n    await _library_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put(\"/book/\".concat(detail === null || detail === void 0 ? void 0 : detail.id), payload).then((param)=>{\n        let { data } = param;\n        dispatch(getBook());\n        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(response.data.errMessage);\n    }).catch((param)=>{\n        let { response: response1 } = param;\n        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(response1.data.errMessage);\n        console.log(response1 === null || response1 === void 0 ? void 0 : response1.data);\n    });\n});\nconst deleteBook = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(\"books/deleteBook\", async (_, param)=>{\n    let { dispatch, getState } = param;\n    const detail = getState().books.detail;\n    await _library_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].delete(\"/book/\".concat(detail === null || detail === void 0 ? void 0 : detail.id)).then((param)=>{\n        let { data } = param;\n        dispatch(getBook());\n    }).catch((param)=>{\n        let { response: response1 } = param;\n        console.log(response1 === null || response1 === void 0 ? void 0 : response1.data);\n    });\n});\nconst addBook = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(\"books/deleteBook\", async (payload, param)=>{\n    let { dispatch } = param;\n    await _library_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/books\", payload).then((param)=>{\n        let { data } = param;\n        dispatch(getBook());\n        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(\"success\");\n    }).catch((param)=>{\n        let { response: response1 } = param;\n        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(response1.data.errMessage);\n        console.log(response1 === null || response1 === void 0 ? void 0 : response1.data);\n    });\n});\nconst getBook = ()=>async (dispatch)=>{\n        await _library_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"/books\").then((param)=>{\n            let { data } = param;\n            dispatch(setSource(data.data));\n        }).catch((param)=>{\n            let { response: response1 } = param;\n            console.log(response1 === null || response1 === void 0 ? void 0 : response1.data);\n        });\n    };\nconst { setSource, setDetail, resetDetail } = bookSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (bookSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZXMvc2xpY2VzL2Jvb2tTbGljZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFvQztBQUM2QjtBQUUxQjtBQUl2QyxNQUFNSSxZQUFZRiw2REFBV0EsQ0FBQztJQUMxQkcsTUFBTTtJQUNOQyxjQUFjO1FBQ1ZDLFFBQVEsRUFBRTtRQUNWQyxRQUFRO0lBQ1o7SUFDQUMsVUFBVTtRQUNOQyxXQUFVQyxLQUFLLEVBQUUsS0FBVztnQkFBWCxFQUFFQyxPQUFPLEVBQUUsR0FBWDtZQUNiRCxNQUFNSixNQUFNLEdBQUdLO1FBQ25CO1FBQ0FDLFdBQVVGLEtBQUssRUFBRSxLQUFXO2dCQUFYLEVBQUVDLE9BQU8sRUFBRSxHQUFYO1lBQ2JELE1BQU1ILE1BQU0sR0FBR0k7UUFDbkI7UUFDQUUsYUFBWUgsS0FBSztZQUNiQSxNQUFNSCxNQUFNLEdBQUc7UUFDbkI7SUFDSjtBQUNKO0FBR0Esc0dBQXNHO0FBRXRHLGdEQUFnRDtBQUNoRCwwRUFBMEU7QUFDMUUsOEJBQThCO0FBQzlCLG1DQUFtQztBQUNuQyxzQ0FBc0M7QUFDdEMsU0FBUztBQUNULElBQUk7QUFFRyxNQUFNTyxhQUFhZCxrRUFBZ0JBLENBQTJELG9CQUFvQixPQUFPVztRQUFTLEVBQUVJLFFBQVEsRUFBRUMsUUFBUSxFQUFFO0lBQzNKLE1BQU1ULFNBQWNTLFdBQVdDLEtBQUssQ0FBQ1YsTUFBTTtJQUMzQyxNQUFNUixzREFBS0EsQ0FBQ21CLEdBQUcsQ0FBQyxTQUFvQixPQUFYWCxtQkFBQUEsNkJBQUFBLE9BQVFZLEVBQUUsR0FBSVIsU0FBU1MsSUFBSSxDQUFDO1lBQUMsRUFBRUMsSUFBSSxFQUFFO1FBQzVETixTQUFTTztRQUNUcEIsaURBQUtBLENBQUNxQixLQUFLLENBQUNDLFNBQVNILElBQUksQ0FBQ0ksVUFBVTtJQUV0QyxHQUFHQyxLQUFLLENBQUM7WUFBQyxFQUFFRixVQUFBQSxTQUFRLEVBQUU7UUFDbEJ0QixpREFBS0EsQ0FBQ3FCLEtBQUssQ0FBQ0MsVUFBU0gsSUFBSSxDQUFDSSxVQUFVO1FBQ3BDRSxRQUFRQyxHQUFHLENBQUNKLHNCQUFBQSxnQ0FBQUEsVUFBVUgsSUFBSTtJQUM5QjtBQUNKLEdBQUc7QUFFSSxNQUFNUSxhQUFhN0Isa0VBQWdCQSxDQUEyRCxvQkFBb0IsT0FBTzhCO1FBQUcsRUFBRWYsUUFBUSxFQUFFQyxRQUFRLEVBQUU7SUFDckosTUFBTVQsU0FBY1MsV0FBV0MsS0FBSyxDQUFDVixNQUFNO0lBQzNDLE1BQU1SLHNEQUFLQSxDQUFDZ0MsTUFBTSxDQUFDLFNBQW9CLE9BQVh4QixtQkFBQUEsNkJBQUFBLE9BQVFZLEVBQUUsR0FBSUMsSUFBSSxDQUFDO1lBQUMsRUFBRUMsSUFBSSxFQUFFO1FBQ3BETixTQUFTTztJQUNiLEdBQUdJLEtBQUssQ0FBQztZQUFDLEVBQUVGLFVBQUFBLFNBQVEsRUFBRTtRQUNsQkcsUUFBUUMsR0FBRyxDQUFDSixzQkFBQUEsZ0NBQUFBLFVBQVVILElBQUk7SUFDOUI7QUFDSixHQUFHO0FBR0ksTUFBTVcsVUFBVWhDLGtFQUFnQkEsQ0FBcUMsb0JBQW9CLE9BQU9XO1FBQVMsRUFBRUksUUFBUSxFQUFFO0lBQ3hILE1BQU1oQixzREFBS0EsQ0FBQ2tDLElBQUksQ0FBRSxVQUFTdEIsU0FBU1MsSUFBSSxDQUFDO1lBQUMsRUFBRUMsSUFBSSxFQUFFO1FBQ2hETixTQUFTTztRQUNUcEIsaURBQUtBLENBQUNnQyxPQUFPLENBQUM7SUFDaEIsR0FBR1IsS0FBSyxDQUFDO1lBQUMsRUFBRUYsVUFBQUEsU0FBUSxFQUFFO1FBQ3BCdEIsaURBQUtBLENBQUNxQixLQUFLLENBQUNDLFVBQVNILElBQUksQ0FBQ0ksVUFBVTtRQUNsQ0UsUUFBUUMsR0FBRyxDQUFDSixzQkFBQUEsZ0NBQUFBLFVBQVVILElBQUk7SUFDOUI7QUFDSixHQUFHO0FBRUksTUFBTUMsVUFBVSxJQUFNLE9BQU9QO1FBQ2hDLE1BQU1oQixzREFBS0EsQ0FBQ29DLEdBQUcsQ0FBQyxVQUFVZixJQUFJLENBQUM7Z0JBQUMsRUFBRUMsSUFBSSxFQUFFO1lBQ3BDTixTQUFTTixVQUFVWSxLQUFLQSxJQUFJO1FBQ2hDLEdBQUdLLEtBQUssQ0FBQztnQkFBQyxFQUFFRixVQUFBQSxTQUFRLEVBQUU7WUFDbEJHLFFBQVFDLEdBQUcsQ0FBQ0osc0JBQUFBLGdDQUFBQSxVQUFVSCxJQUFJO1FBQzlCO0lBQ0osRUFBQztBQUVNLE1BQU0sRUFBRVosU0FBUyxFQUFFRyxTQUFTLEVBQUVDLFdBQVcsRUFBRSxHQUFHVixVQUFVaUMsT0FBTztBQUN0RSwrREFBZWpDLFVBQVVrQyxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZXMvc2xpY2VzL2Jvb2tTbGljZS50c3g/NWYwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcIkAvbGlicmFyeS9heGlvc1wiO1xuaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuaywgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2gsIFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCB7IGVycm9yIH0gZnJvbSBcImNvbnNvbGVcIjtcblxuXG5jb25zdCBib29rU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogXCJib29rU2xpY2VcIixcbiAgICBpbml0aWFsU3RhdGU6IHtcbiAgICAgICAgc291cmNlOiBbXSxcbiAgICAgICAgZGV0YWlsOiBudWxsLFxuICAgIH0sXG4gICAgcmVkdWNlcnM6IHtcbiAgICAgICAgc2V0U291cmNlKHN0YXRlLCB7IHBheWxvYWQgfSkge1xuICAgICAgICAgICAgc3RhdGUuc291cmNlID0gcGF5bG9hZFxuICAgICAgICB9LFxuICAgICAgICBzZXREZXRhaWwoc3RhdGUsIHsgcGF5bG9hZCB9KSB7XG4gICAgICAgICAgICBzdGF0ZS5kZXRhaWwgPSBwYXlsb2FkXG4gICAgICAgIH0sXG4gICAgICAgIHJlc2V0RGV0YWlsKHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5kZXRhaWwgPSBudWxsXG4gICAgICAgIH1cbiAgICB9XG59KVxuXG5cbi8vIGV4cG9ydCBjb25zdCB1cGRhdGVCb29rID0gKHBheWxvYWQ6IGFueSkgPT4gYXN5bmMgKGRpc3BhdGNoOiBBcHBEaXNwYXRjaCwgZ2V0U3RhdGU6IFJvb3RTdGF0ZSkgPT4ge1xuXG4vLyAgICAgY29uc3QgZGV0YWlsOiBhbnkgPSBnZXRTdGF0ZS5ib29rcy5kZXRhaWxcbi8vICAgICBhd2FpdCBheGlvcy5wdXQoYC9ib29rLyR7ZGV0YWlsLmlkfWAsIHBheWxvYWQpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4vLyAgICAgICAgIGRpc3BhdGNoKGdldEJvb2soKSlcbi8vICAgICB9KS5jYXRjaCgoeyByZXNwb25zZSB9KSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlPy5kYXRhKVxuLy8gICAgIH0pXG4vLyB9XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVCb29rID0gY3JlYXRlQXN5bmNUaHVuazxhbnksIG51bWJlciwgeyBzdGF0ZTogUm9vdFN0YXRlLCBkaXNwYXRjaDogQXBwRGlzcGF0Y2ggfT4oJ2Jvb2tzL3VwZGF0ZUJvb2snLCBhc3luYyAocGF5bG9hZCwgeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4ge1xuICAgIGNvbnN0IGRldGFpbDogYW55ID0gZ2V0U3RhdGUoKS5ib29rcy5kZXRhaWw7XG4gICAgYXdhaXQgYXhpb3MucHV0KGAvYm9vay8ke2RldGFpbD8uaWR9YCwgcGF5bG9hZCkudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgIGRpc3BhdGNoKGdldEJvb2soKSk7XG4gICAgICB0b2FzdC5lcnJvcihyZXNwb25zZS5kYXRhLmVyck1lc3NhZ2UpXG4gICAgICBcbiAgICB9KS5jYXRjaCgoeyByZXNwb25zZSB9KSA9PiB7XG4gICAgICAgIHRvYXN0LmVycm9yKHJlc3BvbnNlLmRhdGEuZXJyTWVzc2FnZSlcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2U/LmRhdGEpXG4gICAgfSlcbn0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQm9vayA9IGNyZWF0ZUFzeW5jVGh1bms8YW55LCBuZXZlciAsIHsgc3RhdGU6IFJvb3RTdGF0ZSwgZGlzcGF0Y2g6IEFwcERpc3BhdGNoIH0+KCdib29rcy9kZWxldGVCb29rJywgYXN5bmMgKF8sIHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IHtcbiAgICBjb25zdCBkZXRhaWw6IGFueSA9IGdldFN0YXRlKCkuYm9va3MuZGV0YWlsO1xuICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgL2Jvb2svJHtkZXRhaWw/LmlkfWApLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGdldEJvb2soKSk7XG4gICAgfSkuY2F0Y2goKHsgcmVzcG9uc2UgfSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZT8uZGF0YSlcbiAgICB9KVxufSk7XG5cblxuZXhwb3J0IGNvbnN0IGFkZEJvb2sgPSBjcmVhdGVBc3luY1RodW5rPGFueSwgYW55LCB7ZGlzcGF0Y2g6IEFwcERpc3BhdGNoIH0+KCdib29rcy9kZWxldGVCb29rJywgYXN5bmMgKHBheWxvYWQsIHsgZGlzcGF0Y2ggfSkgPT4ge1xuICAgIGF3YWl0IGF4aW9zLnBvc3QoYC9ib29rc2AsIHBheWxvYWQpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICBkaXNwYXRjaChnZXRCb29rKCkpXG4gICAgICB0b2FzdC5zdWNjZXNzKCdzdWNjZXNzJylcbiAgICB9KS5jYXRjaCgoeyByZXNwb25zZSB9KSA9PiB7XG4gICAgICB0b2FzdC5lcnJvcihyZXNwb25zZS5kYXRhLmVyck1lc3NhZ2UpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlPy5kYXRhKVxuICAgIH0pXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldEJvb2sgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6IEFwcERpc3BhdGNoKSA9PiB7XG4gICAgYXdhaXQgYXhpb3MuZ2V0KFwiL2Jvb2tzXCIpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldFNvdXJjZShkYXRhLmRhdGEpKVxuICAgIH0pLmNhdGNoKCh7IHJlc3BvbnNlIH0pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2U/LmRhdGEpXG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHsgc2V0U291cmNlLCBzZXREZXRhaWwsIHJlc2V0RGV0YWlsIH0gPSBib29rU2xpY2UuYWN0aW9uc1xuZXhwb3J0IGRlZmF1bHQgYm9va1NsaWNlLnJlZHVjZXIiXSwibmFtZXMiOlsiYXhpb3MiLCJjcmVhdGVBc3luY1RodW5rIiwiY3JlYXRlU2xpY2UiLCJ0b2FzdCIsImJvb2tTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJzb3VyY2UiLCJkZXRhaWwiLCJyZWR1Y2VycyIsInNldFNvdXJjZSIsInN0YXRlIiwicGF5bG9hZCIsInNldERldGFpbCIsInJlc2V0RGV0YWlsIiwidXBkYXRlQm9vayIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJib29rcyIsInB1dCIsImlkIiwidGhlbiIsImRhdGEiLCJnZXRCb29rIiwiZXJyb3IiLCJyZXNwb25zZSIsImVyck1lc3NhZ2UiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJkZWxldGVCb29rIiwiXyIsImRlbGV0ZSIsImFkZEJvb2siLCJwb3N0Iiwic3VjY2VzcyIsImdldCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/stores/slices/bookSlice.tsx\n"));

/***/ })

});