(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{170:function(t,n,e){},266:function(t,n,e){"use strict";var i=e(170);e.n(i).a},275:function(t,n,e){"use strict";e.r(n);var i={name:"ArticleList",computed:{frontmatter(){return this.$page.frontmatter}},mounted(){},methods:{handlerClick(t){this.$router.push(this.$page.path+t+".html")}}},r=(e(266),e(16)),s=Object(r.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"component-article-list"},t._l(t.frontmatter.items,function(n){return e("el-card",{attrs:{shadow:"hover"},nativeOn:{click:function(e){return t.handlerClick(n.link)}}},[e("div",{staticClass:"title"},[t._v(t._s(n.title))]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n      "+t._s(n.description)+"\n    ")])])}),1)},[],!1,null,null,null);n.default=s.exports}}]);