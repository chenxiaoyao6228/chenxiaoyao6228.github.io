(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{764:function(e,t,r){"use strict";r.r(t);var s=r(7),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"forwarded"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#forwarded"}},[e._v("#")]),e._v(" forwarded")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://npmjs.org/package/forwarded",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/npm/v/forwarded.svg",alt:"NPM Version"}}),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://npmjs.org/package/forwarded",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/npm/dm/forwarded.svg",alt:"NPM Downloads"}}),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/node/v/forwarded.svg",alt:"Node.js Version"}}),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/jshttp/forwarded/actions?query=workflow%3Aci",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://badgen.net/github/checks/jshttp/forwarded/master?label=ci",alt:"Build Status"}}),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://coveralls.io/r/jshttp/forwarded?branch=master",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/coveralls/jshttp/forwarded/master.svg",alt:"Test Coverage"}}),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Parse HTTP X-Forwarded-For header")]),e._v(" "),r("h2",{attrs:{id:"installation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),r("p",[e._v("This is a "),r("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),r("OutboundLink")],1),e._v(" module available through the\n"),r("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm registry"),r("OutboundLink")],1),e._v(". Installation is done using the\n"),r("a",{attrs:{href:"https://docs.npmjs.com/getting-started/installing-npm-packages-locally",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("npm install")]),e._v(" command"),r("OutboundLink")],1),e._v(":")]),e._v(" "),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("$ "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" forwarded\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("h2",{attrs:{id:"api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[e._v("#")]),e._v(" API")]),e._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" forwarded "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'forwarded'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("h3",{attrs:{id:"forwarded-req"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#forwarded-req"}},[e._v("#")]),e._v(" forwarded(req)")]),e._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" addresses "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("forwarded")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("req"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("Parse the "),r("code",[e._v("X-Forwarded-For")]),e._v(" header from the request. Returns an array\nof the addresses, including the socket address for the "),r("code",[e._v("req")]),e._v(", in reverse\norder (i.e. index "),r("code",[e._v("0")]),e._v(" is the socket address and the last index is the\nfurthest address, typically the end-user).")]),e._v(" "),r("h2",{attrs:{id:"testing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[e._v("#")]),e._v(" Testing")]),e._v(" "),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("$ "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("h2",{attrs:{id:"license"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[e._v("#")]),e._v(" License")]),e._v(" "),r("p",[r("a",{attrs:{href:"LICENSE"}},[e._v("MIT")])])])}),[],!1,null,null,null);t.default=a.exports}}]);