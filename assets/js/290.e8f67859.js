(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{847:function(o,t,a){"use strict";a.r(t);var c=a(7),v=Object(c.a)({},(function(){var o=this,t=o.$createElement,a=o._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[o._v("#")]),o._v(" 前言")]),o._v(" "),a("p",[o._v("单点登录指用户只需输入一次账密，在"),a("strong",[o._v("一处完成登录")]),o._v("，之后可以"),a("strong",[o._v("直接进入所有业务系统")]),o._v("。想要完成单点登录的效果，必须有一个唯一身份源，其他业务系统必须配合完成改造和对接。")]),o._v(" "),a("p",[o._v("单点登录的主要目标是提供更便捷的用户体验，减少用户需要管理多个账户和密码的负担，同时也有助于提升安全性，因为用户不再需要在每个应用程序中输入凭据，从而减少了可能的安全漏洞。")]),o._v(" "),a("h2",{attrs:{id:"通过-cookie-实现单点登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-cookie-实现单点登录"}},[o._v("#")]),o._v(" 通过 cookie 实现单点登录")]),o._v(" "),a("p",[o._v("一个常见的实现方法是通过将用户的登录信息存储在浏览器的 Cookie 中，然后在其他系统中读取这些 Cookie 中的信息，从而实现用户的单次登录在多个关联系统中的共享。")]),o._v(" "),a("p",[o._v("假设存在三个域名：id.company.com、a.company.com 和 b. company.com, 其中，id.company.com 作为统一登录服务的提供方")]),o._v(" "),a("ol",[a("li",[o._v("用户在未登录的情况下访问 a.company.com：")])]),o._v(" "),a("ul",[a("li",[o._v("用户尝试访问 a.company.com，由于用户未在当前系统登录，系统检测到未认证状态，因此将用户重定向到 id.company.com 进行身份验证。")]),o._v(" "),a("li",[o._v("用户访问身份提供者 id.company.com 并提供登录凭据。")]),o._v(" "),a("li",[o._v("身份提供者验证凭据，并在验证通过后，生成一个唯一的身份标识（如用户 ID 或令牌）。")]),o._v(" "),a("li",[o._v("身份提供者将该身份标识存储在 Cookie 中，设置在域名 company.com 下的名为 `token`` 的 Cookie。")])]),o._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[o._v("用户访问 b.company.com 时实现单点登录：")])]),o._v(" "),a("ul",[a("li",[a("p",[o._v("用户尝试访问另一个系统 b.company.com。")])]),o._v(" "),a("li",[a("p",[o._v("b.company.com 读取 token Cookie 信息, 并向统一登录服务请求身份验证。")])]),o._v(" "),a("li",[a("p",[o._v("统一登录服务验证 token Cookie 中的身份标识，并在验证通过后，授予用户访问权限，无需用户再次提供登录凭据。")])])])])}),[],!1,null,null,null);t.default=v.exports}}]);