!function(t,e,r,i,a){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof n[i]&&n[i],d=s.cache||{},o="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(e,r){if(!d[e]){if(!t[e]){var a="function"==typeof n[i]&&n[i];if(!r&&a)return a(e,!0);if(s)return s(e,!0);if(o&&"string"==typeof e)return o(e);var h=Error("Cannot find module '"+e+"'");throw h.code="MODULE_NOT_FOUND",h}c.resolve=function(r){var i=t[e][1][r];return null!=i?i:r},c.cache={};var u=d[e]=new l.Module(e);t[e][0].call(u.exports,c,u,u.exports,this)}return d[e].exports;function c(t){var e=c.resolve(t);return!1===e?{}:l(e)}}l.isParcelRequire=!0,l.Module=function(t){this.id=t,this.bundle=l,this.exports={}},l.modules=t,l.cache=d,l.parent=s,l.register=function(e,r){t[e]=[function(t,e){e.exports=r},{}]},Object.defineProperty(l,"root",{get:function(){return n[i]}}),n[i]=l;for(var h=0;h<e.length;h++)l(e[h])}({hBkAA:[function(t,e,r){var i=t("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r),i.export(r,"diagram",()=>b);var a=t("./chunk-RZWOMDKR.mjs"),n=t("./chunk-CN5XARC6.mjs"),s=t("./chunk-ULVYQCHC.mjs"),d=t("./chunk-F3FIDV27.mjs");t("./chunk-GKOISANM.mjs");var o=t("./chunk-ZXHTWV66.mjs");t("./chunk-TZBO7MLI.mjs"),t("./chunk-GRZAG2UZ.mjs"),t("./chunk-HD3LK5B5.mjs");var l=t("./chunk-DLQEHMXD.mjs"),h=0,u=/* @__PURE__ */(0,l.__name)(function(t,e,r,i,a){let n,s,u,c,p,f;let g=/* @__PURE__ */(0,l.__name)(function(t){switch(t){case a.db.relationType.AGGREGATION:return"aggregation";case a.db.relationType.EXTENSION:return"extension";case a.db.relationType.COMPOSITION:return"composition";case a.db.relationType.DEPENDENCY:return"dependency";case a.db.relationType.LOLLIPOP:return"lollipop"}},"getRelationType");e.points=e.points.filter(t=>!Number.isNaN(t.y));let _=e.points,m=(0,o.line_default)().x(function(t){return t.x}).y(function(t){return t.y}).curve(o.basis_default),y=t.append("path").attr("d",m(_)).attr("id","edge"+h).attr("class","relation"),v="";i.arrowMarkerAbsolute&&(v=(v=(v=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),1==r.relation.lineType&&y.attr("class","relation dashed-line"),10==r.relation.lineType&&y.attr("class","relation dotted-line"),"none"!==r.relation.type1&&y.attr("marker-start","url("+v+"#"+g(r.relation.type1)+"Start)"),"none"!==r.relation.type2&&y.attr("marker-end","url("+v+"#"+g(r.relation.type2)+"End)");let x=e.points.length,b=(0,d.utils_default).calcLabelPosition(e.points);if(n=b.x,s=b.y,x%2!=0&&x>1){let t=(0,d.utils_default).calcCardinalityPosition("none"!==r.relation.type1,e.points,e.points[0]),i=(0,d.utils_default).calcCardinalityPosition("none"!==r.relation.type2,e.points,e.points[x-1]);(0,o.log).debug("cardinality_1_point "+JSON.stringify(t)),(0,o.log).debug("cardinality_2_point "+JSON.stringify(i)),u=t.x,c=t.y,p=i.x,f=i.y}if(void 0!==r.title){let e=t.append("g").attr("class","classLabel"),a=e.append("text").attr("class","label").attr("x",n).attr("y",s).attr("fill","red").attr("text-anchor","middle").text(r.title);window.label=a;let d=a.node().getBBox();e.insert("rect",":first-child").attr("class","box").attr("x",d.x-i.padding/2).attr("y",d.y-i.padding/2).attr("width",d.width+i.padding).attr("height",d.height+i.padding)}(0,o.log).info("Rendering relation "+JSON.stringify(r)),void 0!==r.relationTitle1&&"none"!==r.relationTitle1&&t.append("g").attr("class","cardinality").append("text").attr("class","type1").attr("x",u).attr("y",c).attr("fill","black").attr("font-size","6").text(r.relationTitle1),void 0!==r.relationTitle2&&"none"!==r.relationTitle2&&t.append("g").attr("class","cardinality").append("text").attr("class","type2").attr("x",p).attr("y",f).attr("fill","black").attr("font-size","6").text(r.relationTitle2),h++},"drawEdge"),c=/* @__PURE__ */(0,l.__name)(function(t,e,r,i){let a,n,s,d;(0,o.log).debug("Rendering class ",e,r);let l=e.id,h={id:l,label:e.id,width:0,height:0},u=t.append("g").attr("id",i.db.lookUpDomId(l)).attr("class","classGroup");a=e.link?u.append("svg:a").attr("xlink:href",e.link).attr("target",e.linkTarget).append("text").attr("y",r.textHeight+r.padding).attr("x",0):u.append("text").attr("y",r.textHeight+r.padding).attr("x",0);let c=!0;e.annotations.forEach(function(t){let e=a.append("tspan").text("«"+t+"»");c||e.attr("dy",r.textHeight),c=!1});let f=p(e),_=a.append("tspan").text(f).attr("class","title");c||_.attr("dy",r.textHeight);let m=a.node().getBBox().height;if(e.members.length>0){n=u.append("line").attr("x1",0).attr("y1",r.padding+m+r.dividerMargin/2).attr("y2",r.padding+m+r.dividerMargin/2);let t=u.append("text").attr("x",r.padding).attr("y",m+r.dividerMargin+r.textHeight).attr("fill","white").attr("class","classText");c=!0,e.members.forEach(function(e){g(t,e,c,r),c=!1}),s=t.node().getBBox()}if(e.methods.length>0){d=u.append("line").attr("x1",0).attr("y1",r.padding+m+r.dividerMargin+s.height).attr("y2",r.padding+m+r.dividerMargin+s.height);let t=u.append("text").attr("x",r.padding).attr("y",m+2*r.dividerMargin+s.height+r.textHeight).attr("fill","white").attr("class","classText");c=!0,e.methods.forEach(function(e){g(t,e,c,r),c=!1})}let y=u.node().getBBox();var v=" ";e.cssClasses.length>0&&(v+=e.cssClasses.join(" "));let x=u.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",y.width+2*r.padding).attr("height",y.height+r.padding+.5*r.dividerMargin).attr("class",v).node().getBBox().width;return a.node().childNodes.forEach(function(t){t.setAttribute("x",(x-t.getBBox().width)/2)}),e.tooltip&&a.insert("title").text(e.tooltip),n&&n.attr("x2",x),d&&d.attr("x2",x),h.width=x,h.height=y.height+r.padding+.5*r.dividerMargin,h},"drawClass"),p=/* @__PURE__ */(0,l.__name)(function(t){let e=t.id;return t.type&&(e+="<"+(0,o.parseGenericTypes)(t.type)+">"),e},"getClassTitleString"),f=/* @__PURE__ */(0,l.__name)(function(t,e,r,i){(0,o.log).debug("Rendering note ",e,r);let a=e.id,n={id:a,text:e.text,width:0,height:0},s=t.append("g").attr("id",a).attr("class","classGroup"),d=s.append("text").attr("y",r.textHeight+r.padding).attr("x",0),l=JSON.parse(`"${e.text}"`).split("\n");l.forEach(function(t){(0,o.log).debug(`Adding line: ${t}`),d.append("tspan").text(t).attr("class","title").attr("dy",r.textHeight)});let h=s.node().getBBox(),u=s.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",h.width+2*r.padding).attr("height",h.height+l.length*r.textHeight+r.padding+.5*r.dividerMargin).node().getBBox().width;return d.node().childNodes.forEach(function(t){t.setAttribute("x",(u-t.getBBox().width)/2)}),n.width=u,n.height=h.height+l.length*r.textHeight+r.padding+.5*r.dividerMargin,n},"drawNote"),g=/* @__PURE__ */(0,l.__name)(function(t,e,r,i){let{displayText:a,cssStyle:n}=e.getDisplayDetails(),s=t.append("tspan").attr("x",i.padding).text(a);""!==n&&s.attr("style",e.cssStyle),r||s.attr("dy",i.textHeight)},"addTspan"),_={drawClass:c,drawEdge:u,drawNote:f},m={},y=/* @__PURE__ */(0,l.__name)(function(t){let e=Object.entries(m).find(e=>e[1].label===t);if(e)return e[0]},"getGraphId"),v=/* @__PURE__ */(0,l.__name)(function(t){t.append("defs").append("marker").attr("id","extensionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),t.append("defs").append("marker").attr("id","extensionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z"),t.append("defs").append("marker").attr("id","compositionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","compositionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","aggregationStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","aggregationEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","dependencyStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},"insertMarkers"),x=/* @__PURE__ */(0,l.__name)(function(t,e,r,i){let a;let d=(0,o.getConfig2)().class;m={},(0,o.log).info("Rendering diagram "+t);let l=(0,o.getConfig2)().securityLevel;"sandbox"===l&&(a=(0,o.select_default)("#i"+e));let h="sandbox"===l?(0,o.select_default)(a.nodes()[0].contentDocument.body):(0,o.select_default)("body"),u=h.select(`[id='${e}']`);v(u);let c=new s.Graph({multigraph:!0});c.setGraph({isMultiGraph:!0}),c.setDefaultEdgeLabel(function(){return{}});let p=i.db.getClasses();for(let t of[...p.keys()]){let e=p.get(t),r=_.drawClass(u,e,d,i);m[r.id]=r,c.setNode(r.id,r),(0,o.log).info("Org height: "+r.height)}i.db.getRelations().forEach(function(t){(0,o.log).info("tjoho"+y(t.id1)+y(t.id2)+JSON.stringify(t)),c.setEdge(y(t.id1),y(t.id2),{relation:t},t.title||"DEFAULT")}),i.db.getNotes().forEach(function(t){(0,o.log).debug(`Adding note: ${JSON.stringify(t)}`);let e=_.drawNote(u,t,d,i);m[e.id]=e,c.setNode(e.id,e),t.class&&p.has(t.class)&&c.setEdge(t.id,y(t.class),{relation:{id1:t.id,id2:t.class,relation:{type1:"none",type2:"none",lineType:10}}},"DEFAULT")}),(0,n.layout)(c),c.nodes().forEach(function(t){void 0!==t&&void 0!==c.node(t)&&((0,o.log).debug("Node "+t+": "+JSON.stringify(c.node(t))),h.select("#"+(i.db.lookUpDomId(t)||t)).attr("transform","translate("+(c.node(t).x-c.node(t).width/2)+","+(c.node(t).y-c.node(t).height/2)+" )"))}),c.edges().forEach(function(t){void 0!==t&&void 0!==c.edge(t)&&((0,o.log).debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(c.edge(t))),_.drawEdge(u,c.edge(t),c.edge(t).relation,d,i))});let f=u.node().getBBox(),g=f.width+40,x=f.height+40;(0,o.configureSvgSize)(u,x,g,d.useMaxWidth);let b=`${f.x-20} ${f.y-20} ${g} ${x}`;(0,o.log).debug(`viewBox ${b}`),u.attr("viewBox",b)},"draw"),b={parser:a.classDiagram_default,db:a.classDb_default,renderer:{draw:x},styles:a.styles_default,init:/* @__PURE__ */(0,l.__name)(t=>{t.class||(t.class={}),t.class.arrowMarkerAbsolute=t.arrowMarkerAbsolute,(0,a.classDb_default).clear()},"init")}},{"./chunk-RZWOMDKR.mjs":"9BcCS","./chunk-CN5XARC6.mjs":"jzIXo","./chunk-ULVYQCHC.mjs":"gr6zv","./chunk-F3FIDV27.mjs":"4aBfS","./chunk-GKOISANM.mjs":"9F7Gp","./chunk-ZXHTWV66.mjs":"iF86s","./chunk-TZBO7MLI.mjs":"9m8dA","./chunk-GRZAG2UZ.mjs":"4I8cr","./chunk-HD3LK5B5.mjs":"cz0yX","./chunk-DLQEHMXD.mjs":"1MRh8","@parcel/transformer-js/src/esmodule-helpers.js":"XTfsy"}],gr6zv:[function(t,e,r){var i=t("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r),i.export(r,"Graph",()=>o);var a=t("./chunk-TZBO7MLI.mjs"),n=t("./chunk-GRZAG2UZ.mjs"),s=t("./chunk-HD3LK5B5.mjs"),d=t("./chunk-DLQEHMXD.mjs"),o=class{static{(0,d.__name)(this,"Graph")}constructor(t={}){this._isDirected=!(0,a.has_default)(t,"directed")||t.directed,this._isMultigraph=!!(0,a.has_default)(t,"multigraph")&&t.multigraph,this._isCompound=!!(0,a.has_default)(t,"compound")&&t.compound,this._label=void 0,this._defaultNodeLabelFn=(0,s.constant_default)(void 0),this._defaultEdgeLabelFn=(0,s.constant_default)(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children["\0"]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(t){return this._label=t,this}graph(){return this._label}setDefaultNodeLabel(t){return(0,s.isFunction_default)(t)||(t=(0,s.constant_default)(t)),this._defaultNodeLabelFn=t,this}nodeCount(){return this._nodeCount}nodes(){return(0,a.keys_default)(this._nodes)}sources(){var t=this;return(0,a.filter_default)(this.nodes(),function(e){return(0,n.isEmpty_default)(t._in[e])})}sinks(){var t=this;return(0,a.filter_default)(this.nodes(),function(e){return(0,n.isEmpty_default)(t._out[e])})}setNodes(t,e){var r=arguments,i=this;return(0,a.forEach_default)(t,function(t){r.length>1?i.setNode(t,e):i.setNode(t)}),this}setNode(t,e){return(0,a.has_default)(this._nodes,t)?arguments.length>1&&(this._nodes[t]=e):(this._nodes[t]=arguments.length>1?e:this._defaultNodeLabelFn(t),this._isCompound&&(this._parent[t]="\0",this._children[t]={},this._children["\0"][t]=!0),this._in[t]={},this._preds[t]={},this._out[t]={},this._sucs[t]={},++this._nodeCount),this}node(t){return this._nodes[t]}hasNode(t){return(0,a.has_default)(this._nodes,t)}removeNode(t){var e=this;if((0,a.has_default)(this._nodes,t)){var r=/* @__PURE__ */(0,d.__name)(function(t){e.removeEdge(e._edgeObjs[t])},"removeEdge");delete this._nodes[t],this._isCompound&&(this._removeFromParentsChildList(t),delete this._parent[t],(0,a.forEach_default)(this.children(t),function(t){e.setParent(t)}),delete this._children[t]),(0,a.forEach_default)((0,a.keys_default)(this._in[t]),r),delete this._in[t],delete this._preds[t],(0,a.forEach_default)((0,a.keys_default)(this._out[t]),r),delete this._out[t],delete this._sucs[t],--this._nodeCount}return this}setParent(t,e){if(!this._isCompound)throw Error("Cannot set parent in a non-compound graph");if((0,a.isUndefined_default)(e))e="\0";else{e+="";for(var r=e;!(0,a.isUndefined_default)(r);r=this.parent(r))if(r===t)throw Error("Setting "+e+" as parent of "+t+" would create a cycle");this.setNode(e)}return this.setNode(t),this._removeFromParentsChildList(t),this._parent[t]=e,this._children[e][t]=!0,this}_removeFromParentsChildList(t){delete this._children[this._parent[t]][t]}parent(t){if(this._isCompound){var e=this._parent[t];if("\0"!==e)return e}}children(t){if((0,a.isUndefined_default)(t)&&(t="\0"),this._isCompound){var e=this._children[t];if(e)return(0,a.keys_default)(e)}else if("\0"===t)return this.nodes();else if(this.hasNode(t))return[]}predecessors(t){var e=this._preds[t];if(e)return(0,a.keys_default)(e)}successors(t){var e=this._sucs[t];if(e)return(0,a.keys_default)(e)}neighbors(t){var e=this.predecessors(t);if(e)return(0,a.union_default)(e,this.successors(t))}isLeaf(t){return 0===(this.isDirected()?this.successors(t):this.neighbors(t)).length}filterNodes(t){var e=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});e.setGraph(this.graph());var r=this;(0,a.forEach_default)(this._nodes,function(r,i){t(i)&&e.setNode(i,r)}),(0,a.forEach_default)(this._edgeObjs,function(t){e.hasNode(t.v)&&e.hasNode(t.w)&&e.setEdge(t,r.edge(t))});var i={};function n(t){var a=r.parent(t);return void 0===a||e.hasNode(a)?(i[t]=a,a):a in i?i[a]:n(a)}return(0,d.__name)(n,"findParent"),this._isCompound&&(0,a.forEach_default)(e.nodes(),function(t){e.setParent(t,n(t))}),e}setDefaultEdgeLabel(t){return(0,s.isFunction_default)(t)||(t=(0,s.constant_default)(t)),this._defaultEdgeLabelFn=t,this}edgeCount(){return this._edgeCount}edges(){return(0,a.values_default)(this._edgeObjs)}setPath(t,e){var r=this,i=arguments;return(0,a.reduce_default)(t,function(t,a){return i.length>1?r.setEdge(t,a,e):r.setEdge(t,a),a}),this}setEdge(){var t,e,r,i,n=!1,s=arguments[0];"object"==typeof s&&null!==s&&"v"in s?(t=s.v,e=s.w,r=s.name,2==arguments.length&&(i=arguments[1],n=!0)):(t=s,e=arguments[1],r=arguments[3],arguments.length>2&&(i=arguments[2],n=!0)),t=""+t,e=""+e,(0,a.isUndefined_default)(r)||(r=""+r);var d=u(this._isDirected,t,e,r);if((0,a.has_default)(this._edgeLabels,d))return n&&(this._edgeLabels[d]=i),this;if(!(0,a.isUndefined_default)(r)&&!this._isMultigraph)throw Error("Cannot set a named edge when isMultigraph = false");this.setNode(t),this.setNode(e),this._edgeLabels[d]=n?i:this._defaultEdgeLabelFn(t,e,r);var o=c(this._isDirected,t,e,r);return t=o.v,e=o.w,Object.freeze(o),this._edgeObjs[d]=o,l(this._preds[e],t),l(this._sucs[t],e),this._in[e][d]=o,this._out[t][d]=o,this._edgeCount++,this}edge(t,e,r){var i=1==arguments.length?p(this._isDirected,arguments[0]):u(this._isDirected,t,e,r);return this._edgeLabels[i]}hasEdge(t,e,r){var i=1==arguments.length?p(this._isDirected,arguments[0]):u(this._isDirected,t,e,r);return(0,a.has_default)(this._edgeLabels,i)}removeEdge(t,e,r){var i=1==arguments.length?p(this._isDirected,arguments[0]):u(this._isDirected,t,e,r),a=this._edgeObjs[i];return a&&(t=a.v,e=a.w,delete this._edgeLabels[i],delete this._edgeObjs[i],h(this._preds[e],t),h(this._sucs[t],e),delete this._in[e][i],delete this._out[t][i],this._edgeCount--),this}inEdges(t,e){var r=this._in[t];if(r){var i=(0,a.values_default)(r);return e?(0,a.filter_default)(i,function(t){return t.v===e}):i}}outEdges(t,e){var r=this._out[t];if(r){var i=(0,a.values_default)(r);return e?(0,a.filter_default)(i,function(t){return t.w===e}):i}}nodeEdges(t,e){var r=this.inEdges(t,e);if(r)return r.concat(this.outEdges(t,e))}};function l(t,e){t[e]?t[e]++:t[e]=1}function h(t,e){--t[e]||delete t[e]}function u(t,e,r,i){var n=""+e,s=""+r;if(!t&&n>s){var d=n;n=s,s=d}return n+"\x01"+s+"\x01"+((0,a.isUndefined_default)(i)?"\0":i)}function c(t,e,r,i){var a=""+e,n=""+r;if(!t&&a>n){var s=a;a=n,n=s}var d={v:a,w:n};return i&&(d.name=i),d}function p(t,e){return u(t,e.v,e.w,e.name)}o.prototype._nodeCount=0,o.prototype._edgeCount=0,(0,d.__name)(l,"incrementOrInitEntry"),(0,d.__name)(h,"decrementOrRemoveEntry"),(0,d.__name)(u,"edgeArgsToId"),(0,d.__name)(c,"edgeArgsToObj"),(0,d.__name)(p,"edgeObjToId")},{"./chunk-TZBO7MLI.mjs":"9m8dA","./chunk-GRZAG2UZ.mjs":"4I8cr","./chunk-HD3LK5B5.mjs":"cz0yX","./chunk-DLQEHMXD.mjs":"1MRh8","@parcel/transformer-js/src/esmodule-helpers.js":"XTfsy"}]},[],0,"parcelRequire20b6");