(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{593:function(e,r,t){"use strict";t.r(r);var a=t(7),o=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),t("p",[e._v("日常开发中，我们一般使用Performance面板与Memory面板来分析页面的性能问题，但是canvas消耗的主要是 GPU，因此我们还需要其他的辅助手段，这里主要介绍常用的几种性能检测手段")]),e._v(" "),t("ul",[t("li",[e._v("JS 长任务检测: Chrome devtools中的Performance面板")]),e._v(" "),t("li",[e._v("帧率检测: Chrome devtools中的FPS Meter")]),e._v(" "),t("li",[e._v("内存消耗: Chrome performance monitor")])]),e._v(" "),t("h2",{attrs:{id:"js-长任务检测"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js-长任务检测"}},[e._v("#")]),e._v(" JS 长任务检测")]),e._v(" "),t("p",[e._v("打开chrome控制面板，选择Performance面板，点击左上角的"),t("code",[e._v("Record")]),e._v("按钮，然后在页面上进行操作，操作完成后，点击"),t("code",[e._v("Stop")]),e._v("按钮，即可看到页面的性能数据")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chenxiaoyao6228/cloudimg@main/2023/chrome-performance-panel-2.png",alt:""}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chenxiaoyao6228/cloudimg@main/2023/chrome-performance-panel.png",alt:""}})]),e._v(" "),t("p",[e._v("必要的时候降低硬件并发数与 CPU, 以模拟一些低端机型的情况\n"),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chenxiaoyao6228/cloudimg@main/2023/chrome-performance-panel-3.png",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"帧率检测"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#帧率检测"}},[e._v("#")]),e._v(" 帧率检测")]),e._v(" "),t("p",[e._v("打开chrome开发者工具，mac上"),t("code",[e._v("shift+command+p")]),e._v("（windows是"),t("code",[e._v("shift+ctrl+p")]),e._v(")呼出面板，输入"),t("code",[e._v("fps")]),e._v(", 选择"),t("code",[e._v("Show FPS meter")]),e._v("，即可在页面上看到帧率")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chenxiaoyao6228/cloudimg@main/2023/canvas-performance-fps.png",alt:""}})]),e._v(" "),t("p",[e._v("帧率检测是通过"),t("code",[e._v("requestAnimationFrame")]),e._v("来实现的，通过"),t("code",[e._v("requestAnimationFrame")]),e._v("来获取每一帧的时间戳，然后计算出每一帧的时间间隔，从而计算出帧率")]),e._v(" "),t("h2",{attrs:{id:"内存消耗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存消耗"}},[e._v("#")]),e._v(" 内存消耗")]),e._v(" "),t("p",[e._v("我们可以打开chrome performance monitor来查看内存消耗情况，打开方式同上，输入"),t("code",[e._v("performance monitor")]),e._v("，选择"),t("code",[e._v("Show Performance Monitor")]),e._v("，即可看到内存消耗情况")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chenxiaoyao6228/cloudimg@main/2023/chrome-performance-monitor-3.png",alt:""}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chenxiaoyao6228/cloudimg@main/2023/chrome-performance-monitor-2.png",alt:""}})])])}),[],!1,null,null,null);r.default=o.exports}}]);