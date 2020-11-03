(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=(n(0),n(94));const i={title:"Getting Started"},o={unversionedId:"introduction/getting-started",id:"introduction/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Fast-csv is library for parsing and formatting CSVs or any other delimited value file in node.",source:"@site/docs/introduction/getting-started.md",slug:"/introduction/getting-started",permalink:"/fast-csv/docs/introduction/getting-started",editUrl:"https://github.com/C2FO/fast-csv/edit/master/documentation/docs/introduction/getting-started.md",version:"current",sidebar:"docs",next:{title:"Installation",permalink:"/fast-csv/docs/introduction/install"}},c=[{value:"Features",id:"features",children:[]},{value:"Install",id:"install",children:[]},{value:"Packages",id:"packages",children:[{value:"Migrating from older versions",id:"migrating-from-older-versions",children:[]}]}],s={rightToc:c};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Fast-csv is library for parsing and formatting CSVs or any other delimited value file in node."),Object(a.b)("h2",{id:"features"},"Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"CSV Formatting"),Object(a.b)("li",{parentName:"ul"},"CSV Parsing"),Object(a.b)("li",{parentName:"ul"},"Built using typescript."),Object(a.b)("li",{parentName:"ul"},"Flexible ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/fast-csv/docs/formatting/options"}),"formatting")," and ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/fast-csv/docs/parsing/options"}),"parsing")," options, to fit almost any scenario.  "),Object(a.b)("li",{parentName:"ul"},"Built with streams first to avoid creating large memory footprint when parsing large files. "),Object(a.b)("li",{parentName:"ul"},"Battle tested in production, parsing and formatting millions of records every day.")),Object(a.b)("h2",{id:"install"},"Install"),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/fast-csv/docs/introduction/install"}),"installation docs")),Object(a.b)("h2",{id:"packages"},"Packages"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"fast-csv")," - One stop shop for all methods and options from ",Object(a.b)("inlineCode",{parentName:"li"},"@fast-csv/format")," and ",Object(a.b)("inlineCode",{parentName:"li"},"@fast-csv/parse"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@fast-csv/parse")," - Parsing package, use this if you only need to parse files. ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/fast-csv/docs/parsing/getting-started"}),"Get Started!")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"@fast-csv/format")," - Formatting package, use this if you only need to format files. ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/fast-csv/docs/formatting/getting-started"}),"Get Started!"))),Object(a.b)("h3",{id:"migrating-from-older-versions"},"Migrating from older versions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/fast-csv/docs/migration-guides/v2.x-to-v3.x"}),"From ",Object(a.b)("inlineCode",{parentName:"a"},"v2.x")," to ",Object(a.b)("inlineCode",{parentName:"a"},"v3.x"))," ")))}l.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,f=u["".concat(o,".").concat(b)]||u[b]||p[b]||i;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);