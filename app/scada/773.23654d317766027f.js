"use strict";(self.webpackChunkscada=self.webpackChunkscada||[]).push([[773],{773:(F,y,h)=>{h.r(y),h.d(y,{ViewerModule:()=>S});var V=h(6895),g=h(4575),z=h(760),n=h(4650),v=h(1481);let O=(()=>{class s{set url(t){this.safeUrl=this.san.bypassSecurityTrustResourceUrl(t)}constructor(t){this.san=t,this.width=400,this.height=300}}return s.\u0275fac=function(t){return new(t||s)(n.Y36(v.H7))},s.\u0275cmp=n.Xpm({type:s,selectors:[["app-window"]],inputs:{width:"width",height:"height",url:"url"},decls:1,vars:5,consts:[[3,"src"]],template:function(t,e){1&t&&n._UZ(0,"iframe",0),2&t&&(n.Udp("width",e.width+"px")("height",e.height+"px"),n.Q6J("src",e.safeUrl,n.uOi))},styles:["iframe[_ngcontent-%COMP%]{border:none}"]}),s})();var j=h(1445),M=h(5582),b=h(387),C=h(5156),Y=h(4838);const P=[{path:":id",component:(()=>{class s{constructor(t,e,p,r,a,u,f,w){this.title=t,this.element=e,this.rs=p,this.cs=r,this.route=a,this.ns=u,this.ms=f,this.mqtt=w,this.id="",this.index=0,this.subs=[],this.tools={go:o=>{this.project.pages.forEach(i=>{i.name==o&&this.Render(i)})},window:(o,i=400,c=300)=>{this.ms.create({nzContent:O,nzComponentParams:{url:o,width:i,height:c},nzWidth:i+48,nzFooter:null})}};let d=a.snapshot.queryParams.mousewheel,m=a.snapshot.queryParams.panning;this.graph=new z.kJ({container:e.nativeElement,interacting:!1,mousewheel:"true"==d||"1"==d,panning:"true"==m||"1"==m}),this.graph.on("cell:click",({cell:o,e:i})=>{try{o.data.listeners?.click?.call(this,o,i,this.tools),this.cs.Get(o.shape)?.listeners?.click?.call(this,o,i,this.tools)}catch(c){this.ns.error("\u70b9\u51fb\u4e8b\u4ef6\u5904\u7406\u9519\u8bef",c.message)}}),this.graph.on("cell:mouseenter",({cell:o,e:i})=>{try{this.cs.Get(o.shape)?.listeners?.mouseenter?.call(this,o,i,this.tools)}catch(c){this.ns.error("\u9f20\u6807\u4e8b\u4ef6\u5904\u7406\u9519\u8bef",c.message)}}),this.graph.on("cell:mouseleave",({cell:o,e:i})=>{try{this.cs.Get(o.shape)?.listeners?.mouseleave?.call(this,o,i,this.tools)}catch(c){this.ns.error("\u9f20\u6807\u4e8b\u4ef6\u5904\u7406\u9519\u8bef",c.message)}}),this.graph.on("cell:custom",o=>{try{o.cell?.data.listeners?.[o.event]?.call(this,o.cell,o.value,this.tools)}catch(i){this.ns.error("\u7ec4\u4ef6\u4e8b\u4ef6\u54cd\u5e94\u5904\u7406\u9519\u8bef",i.message)}})}evaluate(t,e){const p=Object.keys(e),r=Object.values(e);return new Function(...p,"return "+t)(...r)}Render(t){t.content?.cells?.forEach(e=>{this.cs.Get(e.shape)}),this.graph.drawBackground({color:t.background_color,image:t.background_image}),this.graph.fromJSON(t.content),this.subs.forEach(e=>e.unsubscribe()),this.subs=[],this.graph.getCells().forEach(e=>{const p=this.cs.Get(e.shape);for(const r in e.data.bindings){if(!e.data.bindings.hasOwnProperty(r))continue;const a=e.data.bindings[r];console.log("binding",p.id,r,a);const f=this.mqtt.observe(`up/property/${a.product}/${a.device}`).subscribe(w=>{const d=JSON.parse(w.payload.toString());console.log("data",p.id,r,a,d);try{p.hooks?.[r]?.call(this,e,d[a.variable])}catch(m){this.ns.error("\u6570\u636e\u7ed1\u5b9a\u9519\u8bef",m.message)}});this.subs.push(f)}for(const r in e.data.listeners){if(!e.data.listeners.hasOwnProperty(r))continue;const a=e.data.listeners[r];if("string"==typeof a&&a.length>0)try{e.data.listeners[r]=new Function("cell","event","tools",a)}catch(u){this.ns.error("\u7f16\u8bd1\u9519\u8bef",u.message)}}})}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.rs.get(`api/project/${this.id}`).subscribe(t=>{this.project=t.data,this.title.setTitle(this.project.name),this.Render(this.project.pages[0])})}ngOnDestroy(){this.subs.forEach(t=>t.unsubscribe())}handlePageChange(t){this.Render(this.project.pages[this.index])}}return s.\u0275fac=function(t){return new(t||s)(n.Y36(v.Dx),n.Y36(n.SBq),n.Y36(j.s),n.Y36(M.m),n.Y36(g.gz),n.Y36(b.zb),n.Y36(C.Sf),n.Y36(Y.KZ))},s.\u0275cmp=n.Xpm({type:s,selectors:[["app-viewer"]],decls:0,vars:0,template:function(t,e){},styles:["[_nghost-%COMP%]{display:block;width:100%!important;height:100%!important}"]}),s})()}];let R=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=n.oAB({type:s}),s.\u0275inj=n.cJS({imports:[g.Bz.forChild(P),g.Bz]}),s})(),S=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=n.oAB({type:s}),s.\u0275inj=n.cJS({imports:[V.ez,R,b.L8,C.Qp]}),s})()}}]);