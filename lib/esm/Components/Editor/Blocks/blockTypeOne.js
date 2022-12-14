"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.default = {
    name: 'block-type-one',
    fields: [
        { type: 'text', name: 'title', label: 'Title:' },
        { type: 'text', name: 'subtitle', label: 'Subtitle:' },
        { type: 'textarea', name: 'description', label: 'Description:' },
        { type: 'image', name: 'image', label: 'Image:' },
    ],
    preview: function (data) {
        var _a, _b;
        return (react_1.default.createElement("section", { className: "text-gray-600 body-font" },
            react_1.default.createElement("div", { className: "container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" },
                react_1.default.createElement("div", { className: "lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" },
                    react_1.default.createElement("h1", { className: "title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" }, data === null || data === void 0 ? void 0 :
                        data.title,
                        react_1.default.createElement("br", { className: "hidden lg:inline-block" }), data === null || data === void 0 ? void 0 :
                        data.subtitle),
                    react_1.default.createElement("p", { className: "mb-8 leading-relaxed whitespace-pre-wrap" }, "".concat(data === null || data === void 0 ? void 0 : data.description))),
                react_1.default.createElement("div", { className: "lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex items-start justify-center" },
                    react_1.default.createElement("img", { className: "object-cover object-center rounded ", alt: "hero", src: "https://".concat((_a = data === null || data === void 0 ? void 0 : data.image) === null || _a === void 0 ? void 0 : _a.bucket, ".s3.ap-southeast-2.amazonaws.com/").concat((_b = data === null || data === void 0 ? void 0 : data.image) === null || _b === void 0 ? void 0 : _b.key) })))));
    },
};
