"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(layoutAuth)/layout",{

/***/ "(app-pages-browser)/./src/stores/slices/userSlice.ts":
/*!****************************************!*\
  !*** ./src/stores/slices/userSlice.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUser: function() { return /* binding */ getUser; },\n/* harmony export */   loginUser: function() { return /* binding */ loginUser; },\n/* harmony export */   registerUser: function() { return /* binding */ registerUser; },\n/* harmony export */   setUser: function() { return /* binding */ setUser; }\n/* harmony export */ });\n/* harmony import */ var _library_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/library/axios */ \"(app-pages-browser)/./src/library/axios.ts\");\n/* harmony import */ var _types_user_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/types/user.interface */ \"(app-pages-browser)/./src/types/user.interface.ts\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\n\n\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSlice)({\n    name: \"User\",\n    initialState: _types_user_interface__WEBPACK_IMPORTED_MODULE_1__.UserInitial,\n    reducers: {\n        setUser (state, param) {\n            let { payload } = param;\n            state.name = payload.name;\n            state.role = payload.role;\n            state.__v = payload.__v;\n            state.createdAt = payload.createdAt;\n            state._id = payload._id;\n            state.email = payload.email;\n            state.id = payload.id;\n        }\n    }\n});\nconst registerUser = (payload)=>{\n    return new Promise(async (resolve, reject)=>{\n        await _library_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/register\", payload).then((param)=>{\n            let { data } = param;\n            resolve(data);\n        }).catch((param)=>{\n            let { response } = param;\n            alert(response.data.message);\n            reject(response.data.message);\n        });\n    });\n};\nconst loginUser = (payload)=>{\n    return new Promise(async (resolve, reject)=>{\n        await _library_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/login\", payload).then((param)=>{\n            let { data } = param;\n            resolve(data);\n        }).catch((param)=>{\n            let { response } = param;\n            reject(response.data.message);\n        });\n    });\n};\nconst getUser = (token)=>{\n    return new Promise(async (resolve, reject)=>{\n        await _library_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"/me\", {\n            headers: {\n                Authorization: \"Bearer \" + token //the token is a variable which holds the token\n            }\n        }).then((param)=>{\n            let { data, config } = param;\n            resolve(data);\n            console.log(config);\n            console.log(data);\n        }).catch((param)=>{\n            let { response } = param;\n            reject(response);\n            console.log(response);\n        });\n    });\n};\nconst { setUser } = userSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (userSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZXMvc2xpY2VzL3VzZXJTbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW9DO0FBRXVCO0FBQ1o7QUFJL0MsTUFBTUcsWUFBWUQsNkRBQVdBLENBQUM7SUFDMUJFLE1BQU07SUFDTkMsY0FBY0osOERBQVdBO0lBQ3pCSyxVQUFVO1FBQ05DLFNBQVFDLEtBQUssRUFBRSxLQUFXO2dCQUFYLEVBQUVDLE9BQU8sRUFBRSxHQUFYO1lBQ1hELE1BQU1KLElBQUksR0FBR0ssUUFBUUwsSUFBSTtZQUN6QkksTUFBTUUsSUFBSSxHQUFHRCxRQUFRQyxJQUFJO1lBQ3pCRixNQUFNRyxHQUFHLEdBQUdGLFFBQVFFLEdBQUc7WUFDdkJILE1BQU1JLFNBQVMsR0FBR0gsUUFBUUcsU0FBUztZQUNuQ0osTUFBTUssR0FBRyxHQUFHSixRQUFRSSxHQUFHO1lBQ3ZCTCxNQUFNTSxLQUFLLEdBQUdMLFFBQVFLLEtBQUs7WUFDM0JOLE1BQU1PLEVBQUUsR0FBR04sUUFBUU0sRUFBRTtRQUN6QjtJQUNKO0FBQ0o7QUFFTyxNQUFNQyxlQUFlLENBQUNQO0lBQ3pCLE9BQU8sSUFBSVEsUUFBUSxPQUFPQyxTQUFTQztRQUMvQixNQUFNbkIsc0RBQUtBLENBQUNvQixJQUFJLENBQUMsYUFBYVgsU0FBU1ksSUFBSSxDQUFDO2dCQUFDLEVBQUVDLElBQUksRUFBRTtZQUNqREosUUFBUUk7UUFDWixHQUFHQyxLQUFLLENBQUM7Z0JBQUMsRUFBRUMsUUFBUSxFQUFFO1lBQ2xCQyxNQUFNRCxTQUFTRixJQUFJLENBQUNJLE9BQU87WUFDM0JQLE9BQU9LLFNBQVNGLElBQUksQ0FBQ0ksT0FBTztRQUNoQztJQUNKO0FBQ0osRUFBQztBQUNNLE1BQU1DLFlBQVksQ0FBQ2xCO0lBQ3RCLE9BQU8sSUFBSVEsUUFBUSxPQUFPQyxTQUFTQztRQUMvQixNQUFNbkIsc0RBQUtBLENBQUNvQixJQUFJLENBQUMsVUFBVVgsU0FBU1ksSUFBSSxDQUFDO2dCQUFDLEVBQUVDLElBQUksRUFBRTtZQUM5Q0osUUFBUUk7UUFDWixHQUFHQyxLQUFLLENBQUM7Z0JBQUMsRUFBRUMsUUFBUSxFQUFFO1lBQ2xCTCxPQUFPSyxTQUFTRixJQUFJLENBQUNJLE9BQU87UUFDaEM7SUFDSjtBQUNKLEVBQUM7QUFFTSxNQUFNRSxVQUFVLENBQUNDO0lBR3BCLE9BQU8sSUFBSVosUUFBUSxPQUFPQyxTQUFTQztRQUMvQixNQUFNbkIsc0RBQUtBLENBQUM4QixHQUFHLENBQUMsT0FBTztZQUNuQkMsU0FBUztnQkFDTEMsZUFBZSxZQUFZSCxNQUFNLCtDQUErQztZQUNwRjtRQUNKLEdBQUdSLElBQUksQ0FBQztnQkFBQyxFQUFFQyxJQUFJLEVBQUVXLE1BQU0sRUFBRTtZQUNyQmYsUUFBUUk7WUFDUlksUUFBUUMsR0FBRyxDQUFDRjtZQUNaQyxRQUFRQyxHQUFHLENBQUNiO1FBQ2hCLEdBQUdDLEtBQUssQ0FBQztnQkFBQyxFQUFFQyxRQUFRLEVBQUU7WUFDbEJMLE9BQU9LO1lBQ1BVLFFBQVFDLEdBQUcsQ0FBQ1g7UUFDaEI7SUFDSjtBQUNKLEVBQUM7QUFHTSxNQUFNLEVBQUVqQixPQUFPLEVBQUUsR0FBR0osVUFBVWlDLE9BQU87QUFDNUMsK0RBQWVqQyxVQUFVa0MsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmVzL3NsaWNlcy91c2VyU2xpY2UudHM/NTZhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcIkAvbGlicmFyeS9heGlvc1wiO1xuaW1wb3J0IHsgQ3JlZGVudGlhbHNJbnRlcmZhY2UgfSBmcm9tIFwiQC90eXBlcy9jcmVkZW50aWFsLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgVXNlciwgVXNlckluaXRpYWwgfSBmcm9tIFwiQC90eXBlcy91c2VyLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2ggfSBmcm9tIFwiLi4vc3RvcmVcIjtcblxuXG5jb25zdCB1c2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogXCJVc2VyXCIsXG4gICAgaW5pdGlhbFN0YXRlOiBVc2VySW5pdGlhbCxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBzZXRVc2VyKHN0YXRlLCB7IHBheWxvYWQgfSkge1xuICAgICAgICAgICAgc3RhdGUubmFtZSA9IHBheWxvYWQubmFtZVxuICAgICAgICAgICAgc3RhdGUucm9sZSA9IHBheWxvYWQucm9sZVxuICAgICAgICAgICAgc3RhdGUuX192ID0gcGF5bG9hZC5fX3ZcbiAgICAgICAgICAgIHN0YXRlLmNyZWF0ZWRBdCA9IHBheWxvYWQuY3JlYXRlZEF0XG4gICAgICAgICAgICBzdGF0ZS5faWQgPSBwYXlsb2FkLl9pZFxuICAgICAgICAgICAgc3RhdGUuZW1haWwgPSBwYXlsb2FkLmVtYWlsXG4gICAgICAgICAgICBzdGF0ZS5pZCA9IHBheWxvYWQuaWRcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbmV4cG9ydCBjb25zdCByZWdpc3RlclVzZXIgPSAocGF5bG9hZDogQ3JlZGVudGlhbHNJbnRlcmZhY2UpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBhd2FpdCBheGlvcy5wb3N0KFwiL3JlZ2lzdGVyXCIsIHBheWxvYWQpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpXG4gICAgICAgIH0pLmNhdGNoKCh7IHJlc3BvbnNlIH0pID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLmRhdGEubWVzc2FnZSlcbiAgICAgICAgICAgIHJlamVjdChyZXNwb25zZS5kYXRhLm1lc3NhZ2UpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cbmV4cG9ydCBjb25zdCBsb2dpblVzZXIgPSAocGF5bG9hZDogQ3JlZGVudGlhbHNJbnRlcmZhY2UpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBhd2FpdCBheGlvcy5wb3N0KFwiL2xvZ2luXCIsIHBheWxvYWQpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpXG4gICAgICAgIH0pLmNhdGNoKCh7IHJlc3BvbnNlIH0pID0+IHtcbiAgICAgICAgICAgIHJlamVjdChyZXNwb25zZS5kYXRhLm1lc3NhZ2UpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldFVzZXIgPSAodG9rZW46IGFueSkgPT4ge1xuXG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBhd2FpdCBheGlvcy5nZXQoXCIvbWVcIiwge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIC8vdGhlIHRva2VuIGlzIGEgdmFyaWFibGUgd2hpY2ggaG9sZHMgdGhlIHRva2VuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oKHsgZGF0YSwgY29uZmlnIH0pID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoZGF0YSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbmZpZylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIH0pLmNhdGNoKCh7IHJlc3BvbnNlIH0pID0+IHtcbiAgICAgICAgICAgIHJlamVjdChyZXNwb25zZSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cblxuZXhwb3J0IGNvbnN0IHsgc2V0VXNlciB9ID0gdXNlclNsaWNlLmFjdGlvbnNcbmV4cG9ydCBkZWZhdWx0IHVzZXJTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImF4aW9zIiwiVXNlckluaXRpYWwiLCJjcmVhdGVTbGljZSIsInVzZXJTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VycyIsInNldFVzZXIiLCJzdGF0ZSIsInBheWxvYWQiLCJyb2xlIiwiX192IiwiY3JlYXRlZEF0IiwiX2lkIiwiZW1haWwiLCJpZCIsInJlZ2lzdGVyVXNlciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicG9zdCIsInRoZW4iLCJkYXRhIiwiY2F0Y2giLCJyZXNwb25zZSIsImFsZXJ0IiwibWVzc2FnZSIsImxvZ2luVXNlciIsImdldFVzZXIiLCJ0b2tlbiIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY29uZmlnIiwiY29uc29sZSIsImxvZyIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/stores/slices/userSlice.ts\n"));

/***/ })

});