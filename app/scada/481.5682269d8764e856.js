"use strict";(self.webpackChunkscada=self.webpackChunkscada||[]).push([[481],{4808:(y,h,i)=>{i.r(h),i.d(h,{ViewerModule:()=>V});var m=i(6895),a=i(4575),d=i(760),s=i(4650),u=i(1481),g=i(1445),f=i(5919);const v=[{path:":id",component:(()=>{class e{constructor(t,r,l,C,M){this.title=t,this.element=r,this.rs=l,this.cs=C,this.route=M,this.id="",this.index=0,this.graph=new d.kJ({container:r.nativeElement,interacting:!1}),this.graph.on("cell:click",({cell:n,e:c})=>{this.cs.Get(n.shape)?.listeners?.click?.call(this,n,c)}),this.graph.on("cell:mouseenter",({cell:n,e:c})=>{this.cs.Get(n.shape)?.listeners?.mouseenter?.call(this,n,c)}),this.graph.on("cell:mouseleave",({cell:n,e:c})=>{this.cs.Get(n.shape)?.listeners?.mouseleave?.call(this,n,c)})}Render(t){t.content?.cells?.forEach(r=>{this.cs.Get(r.shape)}),this.graph.drawBackground({color:t.background_color,image:t.background_image}),this.graph.fromJSON(t.content)}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.rs.get(`api/project/${this.id}`).subscribe(t=>{this.project=t.data,this.title.setTitle(this.project.name),this.Render(this.project.pages[0])})}handlePageChange(t){this.Render(this.project.pages[this.index])}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(u.Dx),s.Y36(s.SBq),s.Y36(g.s),s.Y36(f.m),s.Y36(a.gz))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-viewer"]],decls:0,vars:0,template:function(t,r){},styles:["[_nghost-%COMP%]{display:block;width:100%!important;height:100%!important}"]}),e})()}];let w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[a.Bz.forChild(v),a.Bz]}),e})(),V=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[m.ez,w]}),e})()}}]);