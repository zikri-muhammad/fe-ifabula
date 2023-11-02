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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addBook: function() { return /* binding */ addBook; },\n/* harmony export */   deleteBook: function() { return /* binding */ deleteBook; },\n/* harmony export */   getBook: function() { return /* binding */ getBook; },\n/* harmony export */   resetDetail: function() { return /* binding */ resetDetail; },\n/* harmony export */   setDetail: function() { return /* binding */ setDetail; },\n/* harmony export */   setSource: function() { return /* binding */ setSource; },\n/* harmony export */   updateBook: function() { return /* binding */ updateBook; }\n/* harmony export */ });\n/* harmony import */ var _library_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/library/axios */ \"(app-pages-browser)/./src/library/axios.ts\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\n\nconst bookSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"bookSlice\",\n    initialState: {\n        source: [],\n        detail: null\n    },\n    reducers: {\n        setSource (state, param) {\n            let { payload } = param;\n            state.source = payload;\n        },\n        setDetail (state, param) {\n            let { payload } = param;\n            state.detail = payload;\n        },\n        resetDetail (state) {\n            state.detail = null;\n        }\n    }\n});\n// export const updateBook = (payload: any) => async (dispatch: AppDispatch, getState: RootState) => {\n//     const detail: any = getState.books.detail\n//     await axios.put(`/book/${detail.id}`, payload).then(({ data }) => {\n//         dispatch(getBook())\n//     }).catch(({ response }) => {\n//         console.log(response?.data)\n//     })\n// }\nconst updateBook = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"books/updateBook\", async (payload, param)=>{\n    let { dispatch, getState } = param;\n    const detail = getState().books.detail;\n    await _library_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put(\"/book/\".concat(detail === null || detail === void 0 ? void 0 : detail.id), payload).then((param)=>{\n        let { data } = param;\n        dispatch(getBook());\n    }).catch((param)=>{\n        let { response } = param;\n        console.log(response === null || response === void 0 ? void 0 : response.data);\n    });\n});\nconst deleteBook = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"books/deleteBook\", async (_, param)=>{\n    let { dispatch, getState } = param;\n    const detail = getState().books.detail;\n    await _library_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].delete(\"/book/\".concat(detail === null || detail === void 0 ? void 0 : detail.id)).then((param)=>{\n        let { data } = param;\n        dispatch(getBook());\n    }).catch((param)=>{\n        let { response } = param;\n        console.log(response === null || response === void 0 ? void 0 : response.data);\n    });\n});\nconst addBook = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"books/deleteBook\", async (payload, param)=>{\n    let { dispatch } = param;\n    await _library_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/books\", payload).then((param)=>{\n        let { data } = param;\n        dispatch(getBook());\n    }).catch((param)=>{\n        let { response } = param;\n        console.log(response === null || response === void 0 ? void 0 : response.data);\n    });\n});\nconst getBook = ()=>async (dispatch)=>{\n        await _library_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"/books\").then((param)=>{\n            let { data } = param;\n            dispatch(setSource(data.data));\n        }).catch((param)=>{\n            let { response } = param;\n            console.log(response === null || response === void 0 ? void 0 : response.data);\n        });\n    };\nconst { setSource, setDetail, resetDetail } = bookSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (bookSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZXMvc2xpY2VzL2Jvb2tTbGljZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQzZCO0FBSWpFLE1BQU1HLFlBQVlELDZEQUFXQSxDQUFDO0lBQzFCRSxNQUFNO0lBQ05DLGNBQWM7UUFDVkMsUUFBUSxFQUFFO1FBQ1ZDLFFBQVE7SUFDWjtJQUNBQyxVQUFVO1FBQ05DLFdBQVVDLEtBQUssRUFBRSxLQUFXO2dCQUFYLEVBQUVDLE9BQU8sRUFBRSxHQUFYO1lBQ2JELE1BQU1KLE1BQU0sR0FBR0s7UUFDbkI7UUFDQUMsV0FBVUYsS0FBSyxFQUFFLEtBQVc7Z0JBQVgsRUFBRUMsT0FBTyxFQUFFLEdBQVg7WUFDYkQsTUFBTUgsTUFBTSxHQUFHSTtRQUNuQjtRQUNBRSxhQUFZSCxLQUFLO1lBQ2JBLE1BQU1ILE1BQU0sR0FBRztRQUNuQjtJQUNKO0FBQ0o7QUFHQSxzR0FBc0c7QUFFdEcsZ0RBQWdEO0FBQ2hELDBFQUEwRTtBQUMxRSw4QkFBOEI7QUFDOUIsbUNBQW1DO0FBQ25DLHNDQUFzQztBQUN0QyxTQUFTO0FBQ1QsSUFBSTtBQUVHLE1BQU1PLGFBQWFiLGtFQUFnQkEsQ0FBMkQsb0JBQW9CLE9BQU9VO1FBQVMsRUFBRUksUUFBUSxFQUFFQyxRQUFRLEVBQUU7SUFDM0osTUFBTVQsU0FBY1MsV0FBV0MsS0FBSyxDQUFDVixNQUFNO0lBQzNDLE1BQU1QLHNEQUFLQSxDQUFDa0IsR0FBRyxDQUFDLFNBQW9CLE9BQVhYLG1CQUFBQSw2QkFBQUEsT0FBUVksRUFBRSxHQUFJUixTQUFTUyxJQUFJLENBQUM7WUFBQyxFQUFFQyxJQUFJLEVBQUU7UUFDMUROLFNBQVNPO0lBQ2IsR0FBR0MsS0FBSyxDQUFDO1lBQUMsRUFBRUMsUUFBUSxFQUFFO1FBQ2xCQyxRQUFRQyxHQUFHLENBQUNGLHFCQUFBQSwrQkFBQUEsU0FBVUgsSUFBSTtJQUM5QjtBQUNKLEdBQUc7QUFFSSxNQUFNTSxhQUFhMUIsa0VBQWdCQSxDQUEyRCxvQkFBb0IsT0FBTzJCO1FBQUcsRUFBRWIsUUFBUSxFQUFFQyxRQUFRLEVBQUU7SUFDckosTUFBTVQsU0FBY1MsV0FBV0MsS0FBSyxDQUFDVixNQUFNO0lBQzNDLE1BQU1QLHNEQUFLQSxDQUFDNkIsTUFBTSxDQUFDLFNBQW9CLE9BQVh0QixtQkFBQUEsNkJBQUFBLE9BQVFZLEVBQUUsR0FBSUMsSUFBSSxDQUFDO1lBQUMsRUFBRUMsSUFBSSxFQUFFO1FBQ3BETixTQUFTTztJQUNiLEdBQUdDLEtBQUssQ0FBQztZQUFDLEVBQUVDLFFBQVEsRUFBRTtRQUNsQkMsUUFBUUMsR0FBRyxDQUFDRixxQkFBQUEsK0JBQUFBLFNBQVVILElBQUk7SUFDOUI7QUFDSixHQUFHO0FBR0ksTUFBTVMsVUFBVTdCLGtFQUFnQkEsQ0FBcUMsb0JBQW9CLE9BQU9VO1FBQVMsRUFBRUksUUFBUSxFQUFFO0lBQ3hILE1BQU1mLHNEQUFLQSxDQUFDK0IsSUFBSSxDQUFFLFVBQVNwQixTQUFTUyxJQUFJLENBQUM7WUFBQyxFQUFFQyxJQUFJLEVBQUU7UUFDaEROLFNBQVNPO0lBRVgsR0FBR0MsS0FBSyxDQUFDO1lBQUMsRUFBRUMsUUFBUSxFQUFFO1FBQ2xCQyxRQUFRQyxHQUFHLENBQUNGLHFCQUFBQSwrQkFBQUEsU0FBVUgsSUFBSTtJQUM5QjtBQUNKLEdBQUc7QUFFSSxNQUFNQyxVQUFVLElBQU0sT0FBT1A7UUFDaEMsTUFBTWYsc0RBQUtBLENBQUNnQyxHQUFHLENBQUMsVUFBVVosSUFBSSxDQUFDO2dCQUFDLEVBQUVDLElBQUksRUFBRTtZQUNwQ04sU0FBU04sVUFBVVksS0FBS0EsSUFBSTtRQUNoQyxHQUFHRSxLQUFLLENBQUM7Z0JBQUMsRUFBRUMsUUFBUSxFQUFFO1lBQ2xCQyxRQUFRQyxHQUFHLENBQUNGLHFCQUFBQSwrQkFBQUEsU0FBVUgsSUFBSTtRQUM5QjtJQUNKLEVBQUM7QUFFTSxNQUFNLEVBQUVaLFNBQVMsRUFBRUcsU0FBUyxFQUFFQyxXQUFXLEVBQUUsR0FBR1YsVUFBVThCLE9BQU87QUFDdEUsK0RBQWU5QixVQUFVK0IsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmVzL3NsaWNlcy9ib29rU2xpY2UudHN4PzVmMDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJAL2xpYnJhcnkvYXhpb3NcIjtcbmltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7IEFwcERpc3BhdGNoLCBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcblxuXG5jb25zdCBib29rU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogXCJib29rU2xpY2VcIixcbiAgICBpbml0aWFsU3RhdGU6IHtcbiAgICAgICAgc291cmNlOiBbXSxcbiAgICAgICAgZGV0YWlsOiBudWxsLFxuICAgIH0sXG4gICAgcmVkdWNlcnM6IHtcbiAgICAgICAgc2V0U291cmNlKHN0YXRlLCB7IHBheWxvYWQgfSkge1xuICAgICAgICAgICAgc3RhdGUuc291cmNlID0gcGF5bG9hZFxuICAgICAgICB9LFxuICAgICAgICBzZXREZXRhaWwoc3RhdGUsIHsgcGF5bG9hZCB9KSB7XG4gICAgICAgICAgICBzdGF0ZS5kZXRhaWwgPSBwYXlsb2FkXG4gICAgICAgIH0sXG4gICAgICAgIHJlc2V0RGV0YWlsKHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5kZXRhaWwgPSBudWxsXG4gICAgICAgIH1cbiAgICB9XG59KVxuXG5cbi8vIGV4cG9ydCBjb25zdCB1cGRhdGVCb29rID0gKHBheWxvYWQ6IGFueSkgPT4gYXN5bmMgKGRpc3BhdGNoOiBBcHBEaXNwYXRjaCwgZ2V0U3RhdGU6IFJvb3RTdGF0ZSkgPT4ge1xuXG4vLyAgICAgY29uc3QgZGV0YWlsOiBhbnkgPSBnZXRTdGF0ZS5ib29rcy5kZXRhaWxcbi8vICAgICBhd2FpdCBheGlvcy5wdXQoYC9ib29rLyR7ZGV0YWlsLmlkfWAsIHBheWxvYWQpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4vLyAgICAgICAgIGRpc3BhdGNoKGdldEJvb2soKSlcbi8vICAgICB9KS5jYXRjaCgoeyByZXNwb25zZSB9KSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlPy5kYXRhKVxuLy8gICAgIH0pXG4vLyB9XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVCb29rID0gY3JlYXRlQXN5bmNUaHVuazxhbnksIG51bWJlciwgeyBzdGF0ZTogUm9vdFN0YXRlLCBkaXNwYXRjaDogQXBwRGlzcGF0Y2ggfT4oJ2Jvb2tzL3VwZGF0ZUJvb2snLCBhc3luYyAocGF5bG9hZCwgeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4ge1xuICAgIGNvbnN0IGRldGFpbDogYW55ID0gZ2V0U3RhdGUoKS5ib29rcy5kZXRhaWw7XG4gICAgYXdhaXQgYXhpb3MucHV0KGAvYm9vay8ke2RldGFpbD8uaWR9YCwgcGF5bG9hZCkudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZ2V0Qm9vaygpKTtcbiAgICB9KS5jYXRjaCgoeyByZXNwb25zZSB9KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlPy5kYXRhKVxuICAgIH0pXG59KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUJvb2sgPSBjcmVhdGVBc3luY1RodW5rPGFueSwgbmV2ZXIgLCB7IHN0YXRlOiBSb290U3RhdGUsIGRpc3BhdGNoOiBBcHBEaXNwYXRjaCB9PignYm9va3MvZGVsZXRlQm9vaycsIGFzeW5jIChfLCB7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PiB7XG4gICAgY29uc3QgZGV0YWlsOiBhbnkgPSBnZXRTdGF0ZSgpLmJvb2tzLmRldGFpbDtcbiAgICBhd2FpdCBheGlvcy5kZWxldGUoYC9ib29rLyR7ZGV0YWlsPy5pZH1gKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICBkaXNwYXRjaChnZXRCb29rKCkpO1xuICAgIH0pLmNhdGNoKCh7IHJlc3BvbnNlIH0pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2U/LmRhdGEpXG4gICAgfSlcbn0pO1xuXG5cbmV4cG9ydCBjb25zdCBhZGRCb29rID0gY3JlYXRlQXN5bmNUaHVuazxhbnksIGFueSwge2Rpc3BhdGNoOiBBcHBEaXNwYXRjaCB9PignYm9va3MvZGVsZXRlQm9vaycsIGFzeW5jIChwYXlsb2FkLCB7IGRpc3BhdGNoIH0pID0+IHtcbiAgICBhd2FpdCBheGlvcy5wb3N0KGAvYm9va3NgLCBwYXlsb2FkKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgZGlzcGF0Y2goZ2V0Qm9vaygpKVxuICAgICAgXG4gICAgfSkuY2F0Y2goKHsgcmVzcG9uc2UgfSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZT8uZGF0YSlcbiAgICB9KVxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRCb29rID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoOiBBcHBEaXNwYXRjaCkgPT4ge1xuICAgIGF3YWl0IGF4aW9zLmdldChcIi9ib29rc1wiKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRTb3VyY2UoZGF0YS5kYXRhKSlcbiAgICB9KS5jYXRjaCgoeyByZXNwb25zZSB9KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlPy5kYXRhKVxuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCB7IHNldFNvdXJjZSwgc2V0RGV0YWlsLCByZXNldERldGFpbCB9ID0gYm9va1NsaWNlLmFjdGlvbnNcbmV4cG9ydCBkZWZhdWx0IGJvb2tTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImF4aW9zIiwiY3JlYXRlQXN5bmNUaHVuayIsImNyZWF0ZVNsaWNlIiwiYm9va1NsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInNvdXJjZSIsImRldGFpbCIsInJlZHVjZXJzIiwic2V0U291cmNlIiwic3RhdGUiLCJwYXlsb2FkIiwic2V0RGV0YWlsIiwicmVzZXREZXRhaWwiLCJ1cGRhdGVCb29rIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsImJvb2tzIiwicHV0IiwiaWQiLCJ0aGVuIiwiZGF0YSIsImdldEJvb2siLCJjYXRjaCIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZUJvb2siLCJfIiwiZGVsZXRlIiwiYWRkQm9vayIsInBvc3QiLCJnZXQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/stores/slices/bookSlice.tsx\n"));

/***/ })

});