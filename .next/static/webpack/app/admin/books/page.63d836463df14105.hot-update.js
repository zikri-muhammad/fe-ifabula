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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addBook: function() { return /* binding */ addBook; },\n/* harmony export */   deleteBook: function() { return /* binding */ deleteBook; },\n/* harmony export */   getBook: function() { return /* binding */ getBook; },\n/* harmony export */   resetDetail: function() { return /* binding */ resetDetail; },\n/* harmony export */   setDetail: function() { return /* binding */ setDetail; },\n/* harmony export */   setSource: function() { return /* binding */ setSource; },\n/* harmony export */   updateBook: function() { return /* binding */ updateBook; }\n/* harmony export */ });\n/* harmony import */ var _library_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/library/axios */ \"(app-pages-browser)/./src/library/axios.ts\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n\n\n\nconst bookSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSlice)({\n    name: \"bookSlice\",\n    initialState: {\n        source: [],\n        detail: null\n    },\n    reducers: {\n        setSource (state, param) {\n            let { payload } = param;\n            state.source = payload;\n        },\n        setDetail (state, param) {\n            let { payload } = param;\n            state.detail = payload;\n        },\n        resetDetail (state) {\n            state.detail = null;\n        }\n    }\n});\n// export const updateBook = (payload: any) => async (dispatch: AppDispatch, getState: RootState) => {\n//     const detail: any = getState.books.detail\n//     await axios.put(`/book/${detail.id}`, payload).then(({ data }) => {\n//         dispatch(getBook())\n//     }).catch(({ response }) => {\n//         console.log(response?.data)\n//     })\n// }\nconst updateBook = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(\"books/updateBook\", async (payload, param)=>{\n    let { dispatch, getState } = param;\n    const detail = getState().books.detail;\n    await _library_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put(\"/book/\".concat(detail === null || detail === void 0 ? void 0 : detail.id), payload).then((param)=>{\n        let { data } = param;\n        dispatch(getBook());\n    }).catch((param)=>{\n        let { response } = param;\n        console.log(response === null || response === void 0 ? void 0 : response.data);\n    });\n});\nconst deleteBook = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(\"books/deleteBook\", async (_, param)=>{\n    let { dispatch, getState } = param;\n    const detail = getState().books.detail;\n    await _library_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].delete(\"/book/\".concat(detail === null || detail === void 0 ? void 0 : detail.id)).then((param)=>{\n        let { data } = param;\n        dispatch(getBook());\n    }).catch((param)=>{\n        let { response } = param;\n        console.log(response === null || response === void 0 ? void 0 : response.data);\n    });\n});\nconst addBook = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(\"books/deleteBook\", async (payload, param)=>{\n    let { dispatch } = param;\n    await _library_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/books\", payload).then((param)=>{\n        let { data } = param;\n        dispatch(getBook());\n        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(\"success\");\n    }).catch((param)=>{\n        let { response } = param;\n        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast;\n        console.log(response === null || response === void 0 ? void 0 : response.data);\n    });\n});\nconst getBook = ()=>async (dispatch)=>{\n        await _library_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"/books\").then((param)=>{\n            let { data } = param;\n            dispatch(setSource(data.data));\n        }).catch((param)=>{\n            let { response } = param;\n            console.log(response === null || response === void 0 ? void 0 : response.data);\n        });\n    };\nconst { setSource, setDetail, resetDetail } = bookSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (bookSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZXMvc2xpY2VzL2Jvb2tTbGljZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFvQztBQUM2QjtBQUUxQjtBQUd2QyxNQUFNSSxZQUFZRiw2REFBV0EsQ0FBQztJQUMxQkcsTUFBTTtJQUNOQyxjQUFjO1FBQ1ZDLFFBQVEsRUFBRTtRQUNWQyxRQUFRO0lBQ1o7SUFDQUMsVUFBVTtRQUNOQyxXQUFVQyxLQUFLLEVBQUUsS0FBVztnQkFBWCxFQUFFQyxPQUFPLEVBQUUsR0FBWDtZQUNiRCxNQUFNSixNQUFNLEdBQUdLO1FBQ25CO1FBQ0FDLFdBQVVGLEtBQUssRUFBRSxLQUFXO2dCQUFYLEVBQUVDLE9BQU8sRUFBRSxHQUFYO1lBQ2JELE1BQU1ILE1BQU0sR0FBR0k7UUFDbkI7UUFDQUUsYUFBWUgsS0FBSztZQUNiQSxNQUFNSCxNQUFNLEdBQUc7UUFDbkI7SUFDSjtBQUNKO0FBR0Esc0dBQXNHO0FBRXRHLGdEQUFnRDtBQUNoRCwwRUFBMEU7QUFDMUUsOEJBQThCO0FBQzlCLG1DQUFtQztBQUNuQyxzQ0FBc0M7QUFDdEMsU0FBUztBQUNULElBQUk7QUFFRyxNQUFNTyxhQUFhZCxrRUFBZ0JBLENBQTJELG9CQUFvQixPQUFPVztRQUFTLEVBQUVJLFFBQVEsRUFBRUMsUUFBUSxFQUFFO0lBQzNKLE1BQU1ULFNBQWNTLFdBQVdDLEtBQUssQ0FBQ1YsTUFBTTtJQUMzQyxNQUFNUixzREFBS0EsQ0FBQ21CLEdBQUcsQ0FBQyxTQUFvQixPQUFYWCxtQkFBQUEsNkJBQUFBLE9BQVFZLEVBQUUsR0FBSVIsU0FBU1MsSUFBSSxDQUFDO1lBQUMsRUFBRUMsSUFBSSxFQUFFO1FBQzFETixTQUFTTztJQUNiLEdBQUdDLEtBQUssQ0FBQztZQUFDLEVBQUVDLFFBQVEsRUFBRTtRQUNsQkMsUUFBUUMsR0FBRyxDQUFDRixxQkFBQUEsK0JBQUFBLFNBQVVILElBQUk7SUFDOUI7QUFDSixHQUFHO0FBRUksTUFBTU0sYUFBYTNCLGtFQUFnQkEsQ0FBMkQsb0JBQW9CLE9BQU80QjtRQUFHLEVBQUViLFFBQVEsRUFBRUMsUUFBUSxFQUFFO0lBQ3JKLE1BQU1ULFNBQWNTLFdBQVdDLEtBQUssQ0FBQ1YsTUFBTTtJQUMzQyxNQUFNUixzREFBS0EsQ0FBQzhCLE1BQU0sQ0FBQyxTQUFvQixPQUFYdEIsbUJBQUFBLDZCQUFBQSxPQUFRWSxFQUFFLEdBQUlDLElBQUksQ0FBQztZQUFDLEVBQUVDLElBQUksRUFBRTtRQUNwRE4sU0FBU087SUFDYixHQUFHQyxLQUFLLENBQUM7WUFBQyxFQUFFQyxRQUFRLEVBQUU7UUFDbEJDLFFBQVFDLEdBQUcsQ0FBQ0YscUJBQUFBLCtCQUFBQSxTQUFVSCxJQUFJO0lBQzlCO0FBQ0osR0FBRztBQUdJLE1BQU1TLFVBQVU5QixrRUFBZ0JBLENBQXFDLG9CQUFvQixPQUFPVztRQUFTLEVBQUVJLFFBQVEsRUFBRTtJQUN4SCxNQUFNaEIsc0RBQUtBLENBQUNnQyxJQUFJLENBQUUsVUFBU3BCLFNBQVNTLElBQUksQ0FBQztZQUFDLEVBQUVDLElBQUksRUFBRTtRQUNoRE4sU0FBU087UUFDVHBCLGlEQUFLQSxDQUFDOEIsT0FBTyxDQUFDO0lBQ2hCLEdBQUdULEtBQUssQ0FBQztZQUFDLEVBQUVDLFFBQVEsRUFBRTtRQUNwQnRCLGlEQUFLQTtRQUNIdUIsUUFBUUMsR0FBRyxDQUFDRixxQkFBQUEsK0JBQUFBLFNBQVVILElBQUk7SUFDOUI7QUFDSixHQUFHO0FBRUksTUFBTUMsVUFBVSxJQUFNLE9BQU9QO1FBQ2hDLE1BQU1oQixzREFBS0EsQ0FBQ2tDLEdBQUcsQ0FBQyxVQUFVYixJQUFJLENBQUM7Z0JBQUMsRUFBRUMsSUFBSSxFQUFFO1lBQ3BDTixTQUFTTixVQUFVWSxLQUFLQSxJQUFJO1FBQ2hDLEdBQUdFLEtBQUssQ0FBQztnQkFBQyxFQUFFQyxRQUFRLEVBQUU7WUFDbEJDLFFBQVFDLEdBQUcsQ0FBQ0YscUJBQUFBLCtCQUFBQSxTQUFVSCxJQUFJO1FBQzlCO0lBQ0osRUFBQztBQUVNLE1BQU0sRUFBRVosU0FBUyxFQUFFRyxTQUFTLEVBQUVDLFdBQVcsRUFBRSxHQUFHVixVQUFVK0IsT0FBTztBQUN0RSwrREFBZS9CLFVBQVVnQyxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZXMvc2xpY2VzL2Jvb2tTbGljZS50c3g/NWYwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcIkAvbGlicmFyeS9heGlvc1wiO1xuaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuaywgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2gsIFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcblxuXG5jb25zdCBib29rU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogXCJib29rU2xpY2VcIixcbiAgICBpbml0aWFsU3RhdGU6IHtcbiAgICAgICAgc291cmNlOiBbXSxcbiAgICAgICAgZGV0YWlsOiBudWxsLFxuICAgIH0sXG4gICAgcmVkdWNlcnM6IHtcbiAgICAgICAgc2V0U291cmNlKHN0YXRlLCB7IHBheWxvYWQgfSkge1xuICAgICAgICAgICAgc3RhdGUuc291cmNlID0gcGF5bG9hZFxuICAgICAgICB9LFxuICAgICAgICBzZXREZXRhaWwoc3RhdGUsIHsgcGF5bG9hZCB9KSB7XG4gICAgICAgICAgICBzdGF0ZS5kZXRhaWwgPSBwYXlsb2FkXG4gICAgICAgIH0sXG4gICAgICAgIHJlc2V0RGV0YWlsKHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5kZXRhaWwgPSBudWxsXG4gICAgICAgIH1cbiAgICB9XG59KVxuXG5cbi8vIGV4cG9ydCBjb25zdCB1cGRhdGVCb29rID0gKHBheWxvYWQ6IGFueSkgPT4gYXN5bmMgKGRpc3BhdGNoOiBBcHBEaXNwYXRjaCwgZ2V0U3RhdGU6IFJvb3RTdGF0ZSkgPT4ge1xuXG4vLyAgICAgY29uc3QgZGV0YWlsOiBhbnkgPSBnZXRTdGF0ZS5ib29rcy5kZXRhaWxcbi8vICAgICBhd2FpdCBheGlvcy5wdXQoYC9ib29rLyR7ZGV0YWlsLmlkfWAsIHBheWxvYWQpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4vLyAgICAgICAgIGRpc3BhdGNoKGdldEJvb2soKSlcbi8vICAgICB9KS5jYXRjaCgoeyByZXNwb25zZSB9KSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlPy5kYXRhKVxuLy8gICAgIH0pXG4vLyB9XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVCb29rID0gY3JlYXRlQXN5bmNUaHVuazxhbnksIG51bWJlciwgeyBzdGF0ZTogUm9vdFN0YXRlLCBkaXNwYXRjaDogQXBwRGlzcGF0Y2ggfT4oJ2Jvb2tzL3VwZGF0ZUJvb2snLCBhc3luYyAocGF5bG9hZCwgeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4ge1xuICAgIGNvbnN0IGRldGFpbDogYW55ID0gZ2V0U3RhdGUoKS5ib29rcy5kZXRhaWw7XG4gICAgYXdhaXQgYXhpb3MucHV0KGAvYm9vay8ke2RldGFpbD8uaWR9YCwgcGF5bG9hZCkudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZ2V0Qm9vaygpKTtcbiAgICB9KS5jYXRjaCgoeyByZXNwb25zZSB9KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlPy5kYXRhKVxuICAgIH0pXG59KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUJvb2sgPSBjcmVhdGVBc3luY1RodW5rPGFueSwgbmV2ZXIgLCB7IHN0YXRlOiBSb290U3RhdGUsIGRpc3BhdGNoOiBBcHBEaXNwYXRjaCB9PignYm9va3MvZGVsZXRlQm9vaycsIGFzeW5jIChfLCB7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PiB7XG4gICAgY29uc3QgZGV0YWlsOiBhbnkgPSBnZXRTdGF0ZSgpLmJvb2tzLmRldGFpbDtcbiAgICBhd2FpdCBheGlvcy5kZWxldGUoYC9ib29rLyR7ZGV0YWlsPy5pZH1gKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICBkaXNwYXRjaChnZXRCb29rKCkpO1xuICAgIH0pLmNhdGNoKCh7IHJlc3BvbnNlIH0pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2U/LmRhdGEpXG4gICAgfSlcbn0pO1xuXG5cbmV4cG9ydCBjb25zdCBhZGRCb29rID0gY3JlYXRlQXN5bmNUaHVuazxhbnksIGFueSwge2Rpc3BhdGNoOiBBcHBEaXNwYXRjaCB9PignYm9va3MvZGVsZXRlQm9vaycsIGFzeW5jIChwYXlsb2FkLCB7IGRpc3BhdGNoIH0pID0+IHtcbiAgICBhd2FpdCBheGlvcy5wb3N0KGAvYm9va3NgLCBwYXlsb2FkKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgZGlzcGF0Y2goZ2V0Qm9vaygpKVxuICAgICAgdG9hc3Quc3VjY2Vzcygnc3VjY2VzcycpXG4gICAgfSkuY2F0Y2goKHsgcmVzcG9uc2UgfSkgPT4ge1xuICAgICAgdG9hc3RcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2U/LmRhdGEpXG4gICAgfSlcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0Qm9vayA9ICgpID0+IGFzeW5jIChkaXNwYXRjaDogQXBwRGlzcGF0Y2gpID0+IHtcbiAgICBhd2FpdCBheGlvcy5nZXQoXCIvYm9va3NcIikudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0U291cmNlKGRhdGEuZGF0YSkpXG4gICAgfSkuY2F0Y2goKHsgcmVzcG9uc2UgfSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZT8uZGF0YSlcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3QgeyBzZXRTb3VyY2UsIHNldERldGFpbCwgcmVzZXREZXRhaWwgfSA9IGJvb2tTbGljZS5hY3Rpb25zXG5leHBvcnQgZGVmYXVsdCBib29rU2xpY2UucmVkdWNlciJdLCJuYW1lcyI6WyJheGlvcyIsImNyZWF0ZUFzeW5jVGh1bmsiLCJjcmVhdGVTbGljZSIsInRvYXN0IiwiYm9va1NsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInNvdXJjZSIsImRldGFpbCIsInJlZHVjZXJzIiwic2V0U291cmNlIiwic3RhdGUiLCJwYXlsb2FkIiwic2V0RGV0YWlsIiwicmVzZXREZXRhaWwiLCJ1cGRhdGVCb29rIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsImJvb2tzIiwicHV0IiwiaWQiLCJ0aGVuIiwiZGF0YSIsImdldEJvb2siLCJjYXRjaCIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZUJvb2siLCJfIiwiZGVsZXRlIiwiYWRkQm9vayIsInBvc3QiLCJzdWNjZXNzIiwiZ2V0IiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/stores/slices/bookSlice.tsx\n"));

/***/ })

});