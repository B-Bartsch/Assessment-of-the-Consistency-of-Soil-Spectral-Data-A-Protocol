!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=5)}([function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isObject=MathJax._.components.global.isObject,exports.combineConfig=MathJax._.components.global.combineConfig,exports.combineDefaults=MathJax._.components.global.combineDefaults,exports.combineWithMathJax=MathJax._.components.global.combineWithMathJax,exports.MathJax=MathJax._.components.global.MathJax},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BboxConfiguration=exports.BboxMethods=void 0;var Configuration_js_1=__webpack_require__(2),SymbolMap_js_1=__webpack_require__(3),TexError_js_1=__webpack_require__(4);exports.BboxMethods={},exports.BboxMethods.BBox=function(parser,name){for(var bbox=parser.GetBrackets(name,""),math=parser.ParseArg(name),parts=bbox.split(/,/),def,background,style,i=0,m=parts.length;m>i;i++){var part=parts[i].trim(),match=part.match(/^(\.\d+|\d+(\.\d*)?)(pt|em|ex|mu|px|in|cm|mm)$/);if(match){if(def)throw new TexError_js_1["default"]("MultipleBBoxProperty","%1 specified twice in %2","Padding",name);var pad=BBoxPadding(match[1]+match[3]);pad&&(def={height:"+"+pad,depth:"+"+pad,lspace:pad,width:"+"+2*parseInt(match[1],10)+match[3]})}else if(part.match(/^([a-z0-9]+|\#[0-9a-f]{6}|\#[0-9a-f]{3})$/i)){if(background)throw new TexError_js_1["default"]("MultipleBBoxProperty","%1 specified twice in %2","Background",name);background=part}else if(part.match(/^[-a-z]+:/i)){if(style)throw new TexError_js_1["default"]("MultipleBBoxProperty","%1 specified twice in %2","Style",name);style=BBoxStyle(part)}else if(""!==part)throw new TexError_js_1["default"]("InvalidBBoxProperty",'"%1" doesn\'t look like a color, a padding dimension, or a style',part)}def&&(math=parser.create("node","mpadded",[math],def)),(background||style)&&(def={},background&&Object.assign(def,{mathbackground:background}),style&&Object.assign(def,{style:style}),math=parser.create("node","mstyle",[math],def)),parser.Push(math)};var BBoxStyle=function(styles){return styles},BBoxPadding=function(pad){return pad};new SymbolMap_js_1.CommandMap("bbox",{bbox:"BBox"},exports.BboxMethods),exports.BboxConfiguration=Configuration_js_1.Configuration.create("bbox",{handler:{macro:["bbox"]}})},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Configuration=MathJax._.input.tex.Configuration.Configuration,exports.ConfigurationHandler=MathJax._.input.tex.Configuration.ConfigurationHandler,exports.ParserConfiguration=MathJax._.input.tex.Configuration.ParserConfiguration},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AbstractSymbolMap=MathJax._.input.tex.SymbolMap.AbstractSymbolMap,exports.RegExpMap=MathJax._.input.tex.SymbolMap.RegExpMap,exports.AbstractParseMap=MathJax._.input.tex.SymbolMap.AbstractParseMap,exports.CharacterMap=MathJax._.input.tex.SymbolMap.CharacterMap,exports.DelimiterMap=MathJax._.input.tex.SymbolMap.DelimiterMap,exports.MacroMap=MathJax._.input.tex.SymbolMap.MacroMap,exports.CommandMap=MathJax._.input.tex.SymbolMap.CommandMap,exports.EnvironmentMap=MathJax._.input.tex.SymbolMap.EnvironmentMap},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=MathJax._.input.tex.TexError["default"]},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var global=__webpack_require__(0),BboxConfiguration=__webpack_require__(1);Object(global.combineWithMathJax)({_:{input:{tex:{bbox:{BboxConfiguration:BboxConfiguration}}}}})}]);