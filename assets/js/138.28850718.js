(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{696:function(t,s,a){"use strict";a.r(s);var n=a(7),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"clash配置指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clash配置指南"}},[t._v("#")]),t._v(" clash配置指南")]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/Dreamacro/clash/blob/dev/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Clash"),a("OutboundLink")],1),t._v("是一款非常好用的科学上网工具，但是要合理地使用的话需要对其配置有一定的熟悉，希望可以借本文梳理与之相关的概念:")]),t._v(" "),a("ul",[a("li",[t._v("网络代理的基本原理")]),t._v(" "),a("li",[t._v("clash 配置介绍")])]),t._v(" "),a("h2",{attrs:{id:"网络代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络代理"}},[t._v("#")]),t._v(" 网络代理")]),t._v(" "),a("p",[t._v("根据被代理对象的不同，网络代理可以分为以下两种类型：")]),t._v(" "),a("p",[t._v("Forward Proxy Server（正向代理服务器）,又称为代理服务器，是"),a("strong",[t._v("客户端")]),t._v("所在内部网络和外部网络之间的一个中转服务器，客户端通过该服务器发送请求到互联网上的服务器，之后代理服务器再将请求结果返回给客户端。这种机制可以有效地提高网络性能，同时保护客户端隐私。")]),t._v(" "),a("p",[t._v("正向代理服务器例子：抓包工具(Charles, Proxyman, Fiddler)，梯子工具(Clash, Shadowsocks, V2ray)。")]),t._v(" "),a("p",[t._v("Reverse Proxy Server（反向代理服务器）则是站在"),a("strong",[t._v("Web 服务器")]),t._v("的角度上，为 Web 服务器提供安全性、可扩展性、负载均衡、透明性等功能，实现对外部或客户端的转发请求。")]),t._v(" "),a("p",[t._v("反向代理服务器的例子: Nginx、Apache HTTP Server.")]),t._v(" "),a("h3",{attrs:{id:"代理工具的基本原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代理工具的基本原理"}},[t._v("#")]),t._v(" 代理工具的基本原理")]),t._v(" "),a("p",[t._v("以抓包工具为例，当用户打开抓包工具的时候， 抓包工具会做两件事:")]),t._v(" "),a("ol",[a("li",[t._v("启动一个代理服务器用来转发网络请求")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" http "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" httpProxy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http-proxy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PROXY_PORT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7890")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建代理服务器")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" proxyServer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" httpProxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nproxyServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Error with proxy server:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeHead")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/plain"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Proxy error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nproxyServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"proxyReq"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("proxyReq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Proxying request:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("host "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nproxyServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"proxyRes"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("proxyRes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Proxied response:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("statusCode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nproxyServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PROXY_PORT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Proxy server listening on port ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PROXY_PORT")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("通过命令行更改网关， 让所有的请求都经过 proxy server， 再将请求通过 UI 的形式展示出来")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" exec "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"child_process"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" proxyServer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.1.100"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" proxyPort "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"7890"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 抓包工具会通过命令行更改网关")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" command "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('netsh interface ip set address name="Local Area Connection" gateway=')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("proxyServer"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(" gwmetric=0")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stdout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stderr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Error setting default gateway: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stderr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Error setting default gateway: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("stderr"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Default gateway set to ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("proxyServer"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("p",[t._v("当然，对于梯子工具来说，还需要对应的远程代理服务器与加密协议来转发网络请求。")]),t._v(" "),a("h2",{attrs:{id:"clash-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clash-配置"}},[t._v("#")]),t._v(" clash 配置")]),t._v(" "),a("p",[t._v("下面详细介绍下 clash 的配置文件")]),t._v(" "),a("h3",{attrs:{id:"配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),a("p",[t._v("clash 的配置文件位于"),a("code",[t._v("~/.config/clash")]),t._v("目录下，包含以下文件:")]),t._v(" "),a("ul",[a("li",[t._v("config.yaml: clash 默认的配置文件")]),t._v(" "),a("li",[t._v("NEWclash.yaml: 用户的配置文件在中")]),t._v(" "),a("li",[t._v("cache.db: 一个数据库文件, 用来缓存 DNS 记录提升性能;")]),t._v(" "),a("li",[t._v("Country.mmdb: IP 与国家映射配置文件")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chenxiaoyao6228/cloudimg@main/2023/clash-2.png",alt:""}})]),t._v(" "),a("p",[t._v("clash 配置用的是 yaml 文件，关于 yaml(发音 /ˈjæməl/ )语法可参见阮一峰老师的"),a("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2016/07/yaml.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("YAML 语言教程"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"config-yaml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-yaml"}},[t._v("#")]),t._v(" config.yaml")]),t._v(" "),a("p",[t._v("下面看看官方的默认配置文件")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mixed-port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7890")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("external-controller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9090")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allow-lan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" rule\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("log-level")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" warning\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxy-groups")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rules")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DOMAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("SUFFIX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("openai.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DOMAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("SUFFIX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("google.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DOMAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("KEYWORD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("google"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DOMAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("google.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DOMAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("SUFFIX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ad.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("REJECT\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" GEOIP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("CN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" MATCH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("h3",{attrs:{id:"mixed-port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mixed-port"}},[t._v("#")]),t._v(" mixed-port")]),t._v(" "),a("p",[t._v("clash 允许使用多个端口进行混合代理模式的方式。当你想要使用多个混合代理端口以避免端口冲突时，这非常有用。")]),t._v(" "),a("p",[t._v("假设你需要从家里访问公司的内部资源，但你公司的网络有严格的防火墙规则。你可以使用 Clash 设置混合代理，使用不同的协议（如 Shadowsocks、Vmess、Trojan）在不同的端口上运行。通过在不同的端口上使用 VPN 协议而非 Shadowsocks（如 Vmess 或 Trojan），可以避免检测并提高 VPN 连接的稳定性。而在其他协议不可用时，可以使用 Shadowsocks。")]),t._v(" "),a("p",[t._v("例如，你可以在端口 8989 上使用 Shadowsocks，在端口 8990 上使用 Vmess，在端口 8991 上使用 Trojan。使用这些值设置 mixed-port，你可以根据需要切换协议和端口以访问公司的内部资源。")]),t._v(" "),a("p",[t._v("以下是实现此混合代理场景的示例配置文件：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mixed-port: 8989\nrules:\n  - DOMAIN-KEYWORD,google,vmess,8990\n  - DOMAIN-SUFFIX,company.com,trojan,8991\n  - MATCH,*,shadowsocks\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("在此示例中，对于 google.com 的请求将使用端口 8990 上的 Vmess 协议，对于任何以 company.com 结尾的域的请求将使用端口 8991 上的 Trojan 协议，而其他请求将使用端口 8989 上的 Shadowsocks。")]),t._v(" "),a("h3",{attrs:{id:"external-controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external-controller"}},[t._v("#")]),t._v(" external-controller")]),t._v(" "),a("p",[t._v("Clash 的 RESTful API，可用于验证配置是否成功, 除了 API 之外，还可以使用对应的面板来查看我们的配置项")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chenxiaoyao6228/cloudimg@main/2013/../2023/clash-3.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"allow-lan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#allow-lan"}},[t._v("#")]),t._v(" allow-lan")]),t._v(" "),a("p",[t._v("allow-lan 配置选项在 Clash 配置文件中确定是否允许局域网连接。当 allow-lan 设置为 true 时（默认值），Clash 将接受来自本地网络设备的代理连接。如果你想与家庭网络上的其他设备共享代理服务该配置可能很有用。但是，如果 allow-lan 设置为 false，则 Clash 将仅接受来自运行 Clash 实例的设备的代理连接。如果你想将对代理服务的访问权限限制为特定设备或网络可能很有用。")]),t._v(" "),a("h3",{attrs:{id:"mode-global-rule-direct"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mode-global-rule-direct"}},[t._v("#")]),t._v(" mode： Global, Rule, Direct")]),t._v(" "),a("p",[t._v("Clash 可以根据配置可以运行不同的模式。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chenxiaoyao6228/cloudimg@main/2023/clash-1.png",alt:""}})]),t._v(" "),a("p",[t._v("Global：所有的流量将会遵循同一个 Proxy 规则，即全局代理，所有流量将会被发送到同一个代理服务器，无论请求的目的地址是什么。")]),t._v(" "),a("p",[t._v("Rule：该策略依据自定义的规则进行流量路由，比如可以根据网址、IP 地址、或流量类型等来进行分流，对于不同的流量目的地址，可以采用不同的代理策略，包括使用不同的代理协议（如 HTTP、Socks5、Shadowsocks 等）。")]),t._v(" "),a("p",[t._v("Direct：所有流量将会直接走本地网络，不会被发送到任何代理服务器中转。")]),t._v(" "),a("h3",{attrs:{id:"proxy-group-代理组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy-group-代理组"}},[t._v("#")]),t._v(" Proxy-group(代理组)")]),t._v(" "),a("p",[t._v('"代理组"模式类似于“混合”模式，但允许用户指定每个目的地使用哪些代理服务器。')]),t._v(" "),a("h3",{attrs:{id:"rules-规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rules-规则"}},[t._v("#")]),t._v(" rules(规则)")]),t._v(" "),a("p",[t._v('DOMAIN-SUFFIX: 此规则匹配网站的域名后缀，并可用于指定如何处理该网站的请求。处理请求的选项有 "DIRECT"（不使用代理发送请求）、"PROXY"（通过代理发送请求）或 "REJECT"（拒绝请求）。 示例: DOMAIN-SUFFIX,openai.com,DIRECT')]),t._v(" "),a("p",[t._v("DOMAIN-KEYWORD: 此规则匹配网站 URL 中的关键词，并可用于指定如何处理该网站的请求（与 DOMAIN-SUFFIX 相同）。 示例: DOMAIN-KEYWORD,google,DIRECT")]),t._v(" "),a("p",[t._v("DOMAIN: 此规则匹配网站的精确域名，并可用于指定如何处理该网站的请求（与 DOMAIN-SUFFIX 相同）。 示例: DOMAIN,google.com,DIRECT")]),t._v(" "),a("p",[t._v("IP-CIDR: 此规则匹配网络的 IP 地址范围，并可用于指定如何处理该网络的请求（与 DOMAIN-SUFFIX 相同）。 示例: IP-CIDR,0.0.0.0/8,DIRECT")]),t._v(" "),a("p",[t._v("GEOIP: 此规则匹配客户端 IP 地址的国家代码，并可用于指定如何处理该国家的请求（与 DOMAIN-SUFFIX 相同）。 示例: GEOIP,CN,DIRECT")]),t._v(" "),a("p",[t._v("Fallback: 此规则指定如果其他规则不匹配时要使用的代理组。 示例: Fallback,Proxy")]),t._v(" "),a("p",[t._v("MATCH: 此规则匹配代理组中的正则表达式模式，并可用于从该组中选择特定的代理。 示例: MATCH,DIRECT")])])}),[],!1,null,null,null);s.default=r.exports}}]);