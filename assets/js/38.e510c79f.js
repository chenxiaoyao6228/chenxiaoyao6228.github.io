(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{595:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"canvas内容擦除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#canvas内容擦除"}},[t._v("#")]),t._v(" Canvas内容擦除")]),t._v(" "),s("h2",{attrs:{id:"基于全局位图实现擦除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于全局位图实现擦除"}},[t._v("#")]),t._v(" 基于全局位图实现擦除")]),t._v(" "),s("h3",{attrs:{id:"重置宽高"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重置宽高"}},[t._v("#")]),t._v(" 重置宽高")]),t._v(" "),s("p",[t._v("由于 canvas 每当高度或宽度被重设时，画布内容就会被清空")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" canvas "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"drawing"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncanvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"clearrect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clearrect"}},[t._v("#")]),t._v(" clearRect")]),t._v(" "),s("p",[t._v("clearRect会把指定范围所有像素变成透明，并擦除之前绘制的所有内容。")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("beginPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fillStyle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#ff6"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fillRect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearRect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("效果参考 "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"globalcompositeoperation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#globalcompositeoperation"}},[t._v("#")]),t._v(" globalCompositeOperation")]),t._v(" "),s("p",[t._v("该属性设置在绘制新形状时应用合成操作的类型")]),t._v(" "),s("h3",{attrs:{id:"clippath"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clippath"}},[t._v("#")]),t._v(" clipPath")]),t._v(" "),s("h2",{attrs:{id:"基于文档模型实现擦除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于文档模型实现擦除"}},[t._v("#")]),t._v(" 基于文档模型实现擦除")]),t._v(" "),s("p",[t._v("以上都是基于全局位图的擦除方案，在大多数情况下，我们的方案都会是基于文档模型开发的，因此上述的Canvas原生 API 实现擦除的功能不能直接被使用。")]),t._v(" "),s("h3",{attrs:{id:"图形覆盖擦除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图形覆盖擦除"}},[t._v("#")]),t._v(" 图形覆盖擦除")]),t._v(" "),s("p",[t._v("橡皮擦作为独立的shape进行绘制，当前画布一样的背景色填充覆盖")]),t._v(" "),s("p",[t._v("效果：\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chenxiaoyao6228/cloudimg@main/2023/canvas-eraser-1.png",alt:""}})]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ul",[s("li",[t._v("实现简单, 支持任意shape")])]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ul",[s("li",[t._v("背景如果不是纯色的情况下不好处理")]),t._v(" "),s("li",[t._v("不支持图形移动等场景")])]),t._v(" "),s("h3",{attrs:{id:"复合图形擦除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复合图形擦除"}},[t._v("#")]),t._v(" 复合图形擦除")]),t._v(" "),s("p",[t._v("针对图形覆盖擦除的改进方案，橡皮笔记作为单独的数据储存在其他shape中")]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ul",[s("li",[t._v("在图形覆盖的基础上，支持拖拽移动")])]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ul",[s("li",[t._v("需要在shape中存储单独的橡皮擦数据，实现相比图形覆盖擦除会复杂一些")])]),t._v(" "),s("p",[t._v("案例： "),s("a",{attrs:{href:"http://fabricjs.com/erasing",target:"_blank",rel:"noopener noreferrer"}},[t._v("FabricJS"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"笔迹标记擦除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#笔迹标记擦除"}},[t._v("#")]),t._v(" 笔迹标记擦除")]),t._v(" "),s("p",[t._v("计算橡皮擦笔迹与shape的点交集，若存在相交的部分，则进行删除")]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ul",[s("li",[t._v("支持任意图形，不会造成shape model的碎片化，面对需要多端同步场景也比较容易实现。可能需要考虑用户删除过程中的取消行为，如 ESC 取消")])]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ul",[s("li",[t._v("不允许用户自定义局部擦除")])]),t._v(" "),s("p",[t._v("案例： "),s("a",{attrs:{href:"https://excalidraw.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("excalidraw"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"图形切割擦除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图形切割擦除"}},[t._v("#")]),t._v(" 图形切割擦除")]),t._v(" "),s("p",[t._v("在用户绘制橡皮擦笔迹的时候，计算橡皮擦笔迹与其他shape的相交情况，将单个图形切割成多个图形。")]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ul",[s("li",[t._v("切割后的图形可单独进行选旋转移动缩放等操作\n缺点：")]),t._v(" "),s("li",[t._v("仅对简单的图形(如自由画笔)有效, 一些复杂的图形对应的model不容易分割")])]),t._v(" "),s("p",[t._v("如果项目仅包含画笔的功能，可以尝试该方案。")]),t._v(" "),s("p",[t._v("而部分支持复杂shape的应用可能使用该方案作为书写笔的擦除方案，而其他复杂的图形不支持橡皮擦擦除")])])}),[],!1,null,null,null);a.default=e.exports}}]);