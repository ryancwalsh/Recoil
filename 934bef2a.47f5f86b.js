(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var o=n(1),r=(n(0),n(164));const a={title:"<RecoilRoot ...props />",sidebar_label:"<RecoilRoot />"},i={id:"api-reference/core/RecoilRoot",title:"<RecoilRoot ...props />",description:"Provides the context in which atoms have values. Must be an ancestor of any component that uses any Recoil hooks. Multiple roots may co-exist; atoms will have distinct values within each root. If they are nested, the innermost root will completely mask any outer roots.",source:"@site/docs/api-reference/core/RecoilRoot.md",permalink:"/docs/api-reference/core/RecoilRoot",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/core/RecoilRoot.md",sidebar_label:"<RecoilRoot />",sidebar:"someSidebar",previous:{title:"State Persistence",permalink:"/docs/guides/persistence"},next:{title:"atom(options)",permalink:"/docs/api-reference/core/atom"}},c=[{value:"Example",id:"example",children:[]}],l={rightToc:c};function s({components:e,...t}){return Object(r.b)("wrapper",Object(o.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Provides the context in which atoms have values. Must be an ancestor of any component that uses any Recoil hooks. Multiple roots may co-exist; atoms will have distinct values within each root. If they are nested, the innermost root will completely mask any outer roots."),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Props"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"initializeState?"),": ",Object(r.b)("inlineCode",{parentName:"li"},"(MutableSnapshot => void)"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"An optional function that takes a ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api-reference/core/Snapshot#transforming-snapshots"}),Object(r.b)("inlineCode",{parentName:"a"},"MutableSnapshot"))," to initialize the ",Object(r.b)("inlineCode",{parentName:"li"},"<RecoilRoot>")," atom state.  This sets up the state for the initial render and is not intended for subsequent state changes or async initialization.  Use hooks such as ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api-reference/core/useSetRecoilState"}),Object(r.b)("inlineCode",{parentName:"a"},"useSetRecoilState()"))," or ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api-reference/core/useRecoilCallback"}),Object(r.b)("inlineCode",{parentName:"a"},"useRecoilCallback()"))," for async state changes.")))),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import {RecoilRoot} from 'recoil';\n\nfunction AppRoot() {\n  return (\n    <RecoilRoot>\n      <ComponentThatUsesRecoil />\n    </RecoilRoot>\n  );\n}\n")))}s.isMDXComponent=!0},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(i,".").concat(m)]||u[m]||b[m]||a;return n?r.a.createElement(f,c({ref:t},s,{components:n})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);