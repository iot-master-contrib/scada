"use strict";(self.webpackChunkscada=self.webpackChunkscada||[]).push([[368],{5368:(H,v,c)=>{c.r(v),c.d(v,{ViewerModule:()=>D});var L=c(6895),y=c(4575),T=c(760),o=c(4650),_=c(1481),w=c(5156);const B=["iframe"];function j(a,r){if(1&a&&(o.TgZ(0,"div"),o._uU(1),o.qZA()),2&a){const i=o.oxw();o.xp6(1),o.Oqu(i.title)}}let V=(()=>{class a{set url(i){this.safeUrl=this.san.bypassSecurityTrustResourceUrl(i)}constructor(i){this.san=i,this.title="\u7a97\u53e3",this.width=400,this.height=300}load(i){console.log("iframe load",i);const t=this.iframe.nativeElement.contentWindow;this.title=t.document.title,setTimeout(()=>{this.title=t.document.title},500),setTimeout(()=>{this.title=t.document.title},2e3)}}return a.\u0275fac=function(i){return new(i||a)(o.Y36(_.H7))},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-window"]],viewQuery:function(i,t){if(1&i&&o.Gf(B,5),2&i){let e;o.iGM(e=o.CRH())&&(t.iframe=e.first)}},inputs:{title:"title",width:"width",height:"height",url:"url"},decls:3,vars:5,consts:[[4,"nzModalTitle"],[3,"src","load"],["iframe",""]],template:function(i,t){1&i&&(o.YNc(0,j,2,1,"div",0),o.TgZ(1,"iframe",1,2),o.NdJ("load",function(s){return t.load(s)}),o.qZA()),2&i&&(o.xp6(1),o.Udp("width",t.width+"px")("height",t.height+"px"),o.Q6J("src",t.safeUrl,o.uOi))},dependencies:[w.h1],styles:["iframe[_ngcontent-%COMP%]{border:none}"]}),a})();class u{constructor(){this._dataLength=0,this._bufferLength=0,this._state=new Int32Array(4),this._buffer=new ArrayBuffer(68),this._buffer8=new Uint8Array(this._buffer,0,68),this._buffer32=new Uint32Array(this._buffer,0,17),this.start()}static hashStr(r,i=!1){return this.onePassHasher.start().appendStr(r).end(i)}static hashAsciiStr(r,i=!1){return this.onePassHasher.start().appendAsciiStr(r).end(i)}static _hex(r){const i=u.hexChars,t=u.hexOut;let e,s,n,f;for(f=0;f<4;f+=1)for(s=8*f,e=r[f],n=0;n<8;n+=2)t[s+1+n]=i.charAt(15&e),e>>>=4,t[s+0+n]=i.charAt(15&e),e>>>=4;return t.join("")}static _md5cycle(r,i){let t=r[0],e=r[1],s=r[2],n=r[3];t+=(e&s|~e&n)+i[0]-680876936|0,t=(t<<7|t>>>25)+e|0,n+=(t&e|~t&s)+i[1]-389564586|0,n=(n<<12|n>>>20)+t|0,s+=(n&t|~n&e)+i[2]+606105819|0,s=(s<<17|s>>>15)+n|0,e+=(s&n|~s&t)+i[3]-1044525330|0,e=(e<<22|e>>>10)+s|0,t+=(e&s|~e&n)+i[4]-176418897|0,t=(t<<7|t>>>25)+e|0,n+=(t&e|~t&s)+i[5]+1200080426|0,n=(n<<12|n>>>20)+t|0,s+=(n&t|~n&e)+i[6]-1473231341|0,s=(s<<17|s>>>15)+n|0,e+=(s&n|~s&t)+i[7]-45705983|0,e=(e<<22|e>>>10)+s|0,t+=(e&s|~e&n)+i[8]+1770035416|0,t=(t<<7|t>>>25)+e|0,n+=(t&e|~t&s)+i[9]-1958414417|0,n=(n<<12|n>>>20)+t|0,s+=(n&t|~n&e)+i[10]-42063|0,s=(s<<17|s>>>15)+n|0,e+=(s&n|~s&t)+i[11]-1990404162|0,e=(e<<22|e>>>10)+s|0,t+=(e&s|~e&n)+i[12]+1804603682|0,t=(t<<7|t>>>25)+e|0,n+=(t&e|~t&s)+i[13]-40341101|0,n=(n<<12|n>>>20)+t|0,s+=(n&t|~n&e)+i[14]-1502002290|0,s=(s<<17|s>>>15)+n|0,e+=(s&n|~s&t)+i[15]+1236535329|0,e=(e<<22|e>>>10)+s|0,t+=(e&n|s&~n)+i[1]-165796510|0,t=(t<<5|t>>>27)+e|0,n+=(t&s|e&~s)+i[6]-1069501632|0,n=(n<<9|n>>>23)+t|0,s+=(n&e|t&~e)+i[11]+643717713|0,s=(s<<14|s>>>18)+n|0,e+=(s&t|n&~t)+i[0]-373897302|0,e=(e<<20|e>>>12)+s|0,t+=(e&n|s&~n)+i[5]-701558691|0,t=(t<<5|t>>>27)+e|0,n+=(t&s|e&~s)+i[10]+38016083|0,n=(n<<9|n>>>23)+t|0,s+=(n&e|t&~e)+i[15]-660478335|0,s=(s<<14|s>>>18)+n|0,e+=(s&t|n&~t)+i[4]-405537848|0,e=(e<<20|e>>>12)+s|0,t+=(e&n|s&~n)+i[9]+568446438|0,t=(t<<5|t>>>27)+e|0,n+=(t&s|e&~s)+i[14]-1019803690|0,n=(n<<9|n>>>23)+t|0,s+=(n&e|t&~e)+i[3]-187363961|0,s=(s<<14|s>>>18)+n|0,e+=(s&t|n&~t)+i[8]+1163531501|0,e=(e<<20|e>>>12)+s|0,t+=(e&n|s&~n)+i[13]-1444681467|0,t=(t<<5|t>>>27)+e|0,n+=(t&s|e&~s)+i[2]-51403784|0,n=(n<<9|n>>>23)+t|0,s+=(n&e|t&~e)+i[7]+1735328473|0,s=(s<<14|s>>>18)+n|0,e+=(s&t|n&~t)+i[12]-1926607734|0,e=(e<<20|e>>>12)+s|0,t+=(e^s^n)+i[5]-378558|0,t=(t<<4|t>>>28)+e|0,n+=(t^e^s)+i[8]-2022574463|0,n=(n<<11|n>>>21)+t|0,s+=(n^t^e)+i[11]+1839030562|0,s=(s<<16|s>>>16)+n|0,e+=(s^n^t)+i[14]-35309556|0,e=(e<<23|e>>>9)+s|0,t+=(e^s^n)+i[1]-1530992060|0,t=(t<<4|t>>>28)+e|0,n+=(t^e^s)+i[4]+1272893353|0,n=(n<<11|n>>>21)+t|0,s+=(n^t^e)+i[7]-155497632|0,s=(s<<16|s>>>16)+n|0,e+=(s^n^t)+i[10]-1094730640|0,e=(e<<23|e>>>9)+s|0,t+=(e^s^n)+i[13]+681279174|0,t=(t<<4|t>>>28)+e|0,n+=(t^e^s)+i[0]-358537222|0,n=(n<<11|n>>>21)+t|0,s+=(n^t^e)+i[3]-722521979|0,s=(s<<16|s>>>16)+n|0,e+=(s^n^t)+i[6]+76029189|0,e=(e<<23|e>>>9)+s|0,t+=(e^s^n)+i[9]-640364487|0,t=(t<<4|t>>>28)+e|0,n+=(t^e^s)+i[12]-421815835|0,n=(n<<11|n>>>21)+t|0,s+=(n^t^e)+i[15]+530742520|0,s=(s<<16|s>>>16)+n|0,e+=(s^n^t)+i[2]-995338651|0,e=(e<<23|e>>>9)+s|0,t+=(s^(e|~n))+i[0]-198630844|0,t=(t<<6|t>>>26)+e|0,n+=(e^(t|~s))+i[7]+1126891415|0,n=(n<<10|n>>>22)+t|0,s+=(t^(n|~e))+i[14]-1416354905|0,s=(s<<15|s>>>17)+n|0,e+=(n^(s|~t))+i[5]-57434055|0,e=(e<<21|e>>>11)+s|0,t+=(s^(e|~n))+i[12]+1700485571|0,t=(t<<6|t>>>26)+e|0,n+=(e^(t|~s))+i[3]-1894986606|0,n=(n<<10|n>>>22)+t|0,s+=(t^(n|~e))+i[10]-1051523|0,s=(s<<15|s>>>17)+n|0,e+=(n^(s|~t))+i[1]-2054922799|0,e=(e<<21|e>>>11)+s|0,t+=(s^(e|~n))+i[8]+1873313359|0,t=(t<<6|t>>>26)+e|0,n+=(e^(t|~s))+i[15]-30611744|0,n=(n<<10|n>>>22)+t|0,s+=(t^(n|~e))+i[6]-1560198380|0,s=(s<<15|s>>>17)+n|0,e+=(n^(s|~t))+i[13]+1309151649|0,e=(e<<21|e>>>11)+s|0,t+=(s^(e|~n))+i[4]-145523070|0,t=(t<<6|t>>>26)+e|0,n+=(e^(t|~s))+i[11]-1120210379|0,n=(n<<10|n>>>22)+t|0,s+=(t^(n|~e))+i[2]+718787259|0,s=(s<<15|s>>>17)+n|0,e+=(n^(s|~t))+i[9]-343485551|0,e=(e<<21|e>>>11)+s|0,r[0]=t+r[0]|0,r[1]=e+r[1]|0,r[2]=s+r[2]|0,r[3]=n+r[3]|0}start(){return this._dataLength=0,this._bufferLength=0,this._state.set(u.stateIdentity),this}appendStr(r){const i=this._buffer8,t=this._buffer32;let s,n,e=this._bufferLength;for(n=0;n<r.length;n+=1){if(s=r.charCodeAt(n),s<128)i[e++]=s;else if(s<2048)i[e++]=192+(s>>>6),i[e++]=63&s|128;else if(s<55296||s>56319)i[e++]=224+(s>>>12),i[e++]=s>>>6&63|128,i[e++]=63&s|128;else{if(s=1024*(s-55296)+(r.charCodeAt(++n)-56320)+65536,s>1114111)throw new Error("Unicode standard supports code points up to U+10FFFF");i[e++]=240+(s>>>18),i[e++]=s>>>12&63|128,i[e++]=s>>>6&63|128,i[e++]=63&s|128}e>=64&&(this._dataLength+=64,u._md5cycle(this._state,t),e-=64,t[0]=t[16])}return this._bufferLength=e,this}appendAsciiStr(r){const i=this._buffer8,t=this._buffer32;let s,e=this._bufferLength,n=0;for(;;){for(s=Math.min(r.length-n,64-e);s--;)i[e++]=r.charCodeAt(n++);if(e<64)break;this._dataLength+=64,u._md5cycle(this._state,t),e=0}return this._bufferLength=e,this}appendByteArray(r){const i=this._buffer8,t=this._buffer32;let s,e=this._bufferLength,n=0;for(;;){for(s=Math.min(r.length-n,64-e);s--;)i[e++]=r[n++];if(e<64)break;this._dataLength+=64,u._md5cycle(this._state,t),e=0}return this._bufferLength=e,this}getState(){const r=this._state;return{buffer:String.fromCharCode.apply(null,Array.from(this._buffer8)),buflen:this._bufferLength,length:this._dataLength,state:[r[0],r[1],r[2],r[3]]}}setState(r){const i=r.buffer,t=r.state,e=this._state;let s;for(this._dataLength=r.length,this._bufferLength=r.buflen,e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],s=0;s<i.length;s+=1)this._buffer8[s]=i.charCodeAt(s)}end(r=!1){const i=this._bufferLength,t=this._buffer8,e=this._buffer32,s=1+(i>>2);this._dataLength+=i;const n=8*this._dataLength;if(t[i]=128,t[i+1]=t[i+2]=t[i+3]=0,e.set(u.buffer32Identity.subarray(s),s),i>55&&(u._md5cycle(this._state,e),e.set(u.buffer32Identity)),n<=4294967295)e[14]=n;else{const f=n.toString(16).match(/(.*?)(.{0,8})$/);if(null===f)return;const g=parseInt(f[2],16),b=parseInt(f[1],16)||0;e[14]=g,e[15]=b}return u._md5cycle(this._state,e),r?this._state:u._hex(this._state)}}if(u.stateIdentity=new Int32Array([1732584193,-271733879,-1732584194,271733878]),u.buffer32Identity=new Int32Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),u.hexChars="0123456789abcdef",u.hexOut=[],u.onePassHasher=new u,"5d41402abc4b2a76b9719d911017c592"!==u.hashStr("hello"))throw new Error("Md5 self test failed.");var d=c(433),C=c(1445),F=c(5635),x=c(6616),P=c(7044),R=c(1664),A=c(3679),z=c(6704);let I=(()=>{class a{constructor(i,t,e,s){this.fb=i,this.rs=t,this.router=e,this.mr=s}submitForm(){console.log("submit form");for(const t in this.validateForm.controls)this.validateForm.controls[t].markAsDirty(),this.validateForm.controls[t].updateValueAndValidity();if(!this.validateForm.valid)return;const i=u.hashStr(this.validateForm.value.password);this.rs.get("/api/auth",{username:this.validateForm.value.username,password:i}).subscribe(t=>{console.log("res:",t),this.mr.close("ok")},t=>{console.log("err:",t)})}ngOnInit(){this.validateForm=this.fb.group({username:[null,[d.kI.required]],password:[null,[d.kI.required]],remember:[!1]})}}return a.\u0275fac=function(i){return new(i||a)(o.Y36(d.qu),o.Y36(C.s),o.Y36(y.F0),o.Y36(w.Lf))},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-auth"]],decls:11,vars:1,consts:[["nz-form","",3,"formGroup","ngSubmit"],["nzErrorTip","\u8bf7\u8f93\u5165\u7528\u6237\u540d!"],["nzPrefixIcon","user","nzSize","large",2,"border-radius","10px"],["type","text","nz-input","","formControlName","username","placeholder","\u7528\u6237\u540d","nzSize","large"],["nzErrorTip","\u8bf7\u8f93\u5165\u5bc6\u7801!"],["nzPrefixIcon","lock","nzSize","large",2,"border-radius","10px"],["type","password","nz-input","","formControlName","password","placeholder","\u5bc6\u7801"],["nz-button","","nzSize","large","nzType","primary"]],template:function(i,t){1&i&&(o.TgZ(0,"form",0),o.NdJ("ngSubmit",function(){return t.submitForm()}),o.TgZ(1,"nz-form-item")(2,"nz-form-control",1)(3,"nz-input-group",2),o._UZ(4,"input",3),o.qZA()()(),o.TgZ(5,"nz-form-item")(6,"nz-form-control",4)(7,"nz-input-group",5),o._UZ(8,"input",6),o.qZA()()(),o.TgZ(9,"button",7),o._uU(10,"\u767b \u5f55"),o.qZA()()),2&i&&o.Q6J("formGroup",t.validateForm)},dependencies:[F.Zp,F.gB,d._Y,d.Fj,d.JJ,d.JL,x.ix,P.w,R.dQ,A.t3,A.SK,z.Lr,z.Nx,z.Fd,d.sg,d.u]}),a})();var U=c(9856),S=c(387),Y=c(4838);const Z=[{path:":id",component:(()=>{class a{constructor(i,t,e,s,n,f,g,b){function m(h){let l=n.snapshot.queryParams[h];return"true"==l||"1"==l}this.title=i,this.element=t,this.rs=e,this.cs=s,this.route=n,this.ns=f,this.ms=g,this.mqtt=b,this.id="",this.index=0,this.subs=[],this.mousewheel=!1,this.panning=!1,this.full=!1,this.padding=10,this.tools={go:h=>{this.project.pages.forEach(l=>{l.name==h&&this.Render(l)})},window:(h,l=400,p=300,E="\u7a97\u53e3")=>{this.ms.create({nzContent:V,nzComponentParams:{url:h,width:l,height:p,title:E},nzWidth:l+48,nzFooter:null})},open:(h,l=!1)=>{l?window.open(h):location.href=h},get:(h,l)=>{this.rs.get(h,l).subscribe(()=>{})},post:(h,l)=>{this.rs.post(h,l).subscribe(()=>{})},auth:h=>{this.ms.create({nzContent:I,nzTitle:"\u8bf7\u8f93\u5165\u767b\u5f55\u5bc6\u7801",nzFooter:null}).afterClose.subscribe(l=>{"ok"==l&&h()})}},this.load(),this.mousewheel=m("mousewheel"),this.panning=m("panning"),this.full=m("full"),this.graph=new T.kJ({container:t.nativeElement,interacting:!1,mousewheel:this.mousewheel,panning:this.panning,autoResize:this.full}),this.graph.on("cell:click",({cell:h,e:l})=>{try{h.data?.listeners?.click?.call(this,h,l,this.tools),this.cs.Get(h.shape)?.listeners?.click?.call(this,h,l,this.tools)}catch(p){this.ns.error("\u70b9\u51fb\u4e8b\u4ef6\u5904\u7406\u9519\u8bef",p.message)}}),this.graph.on("cell:mouseenter",({cell:h,e:l})=>{try{this.cs.Get(h.shape)?.listeners?.mouseenter?.call(this,h,l,this.tools)}catch(p){this.ns.error("\u9f20\u6807\u4e8b\u4ef6\u5904\u7406\u9519\u8bef",p.message)}}),this.graph.on("cell:mouseleave",({cell:h,e:l})=>{try{this.cs.Get(h.shape)?.listeners?.mouseleave?.call(this,h,l,this.tools)}catch(p){this.ns.error("\u9f20\u6807\u4e8b\u4ef6\u5904\u7406\u9519\u8bef",p.message)}}),this.graph.on("cell:custom",h=>{try{h.cell?.data.listeners?.[h.event]?.call(this,h.cell,h.value,this.tools)}catch(l){this.ns.error("\u7ec4\u4ef6\u4e8b\u4ef6\u54cd\u5e94\u5904\u7406\u9519\u8bef",l.message)}})}evaluate(i,t){const e=Object.keys(t),s=Object.values(t);return new Function(...e,"return "+i)(...s)}Render(i){i.content?.cells?.forEach(t=>{this.cs.Get(t.shape)}),this.graph.drawBackground({color:i.background_color,image:i.background_image}),this.graph.fromJSON(i.content),this.full&&(this.graph.centerContent(),this.graph.zoomToFit({padding:this.padding})),this.subs.forEach(t=>t.unsubscribe()),this.subs=[],this.graph.getCells().forEach(t=>{const e=this.cs.Get(t.shape);if(t.data?.bindings)for(const s in t.data.bindings){if(!t.data.bindings.hasOwnProperty(s))continue;const n=t.data.bindings[s];console.log("binding",e.id,s,n);const g=this.mqtt.observe(`up/property/${n.product}/${n.device}`).subscribe(b=>{const m=JSON.parse(b.payload.toString());console.log("data",e.id,s,n,m);try{e.hooks?.[s]?.call(this,t,m[n.variable])}catch(h){this.ns.error("\u6570\u636e\u7ed1\u5b9a\u9519\u8bef",h.message)}});this.subs.push(g)}if(t.data?.listeners)for(const s in t.data.listeners){if(!t.data.listeners.hasOwnProperty(s))continue;const n=t.data.listeners[s];if("string"==typeof n&&n.length>0)try{t.data.listeners[s]=new Function("cell","event","tools",n)}catch(f){this.ns.error("\u811a\u672c\u7f16\u8bd1\u9519\u8bef"+s,n+" "+f.message),t.data.listeners[s]=()=>{this.ns.error("\u7ec4\u4ef6\u811a\u672c\u9519\u8bef"+s,n+" "+f.message)}}}})}load(){this.id=this.route.snapshot.paramMap.get("id"),this.rs.get(`api/project/${this.id}`).subscribe(i=>{this.project=i.data,this.title.setTitle(this.project.name),this.full?this.graph.resize(window.innerWidth,window.innerHeight):this.graph.resize(this.project.width,this.project.height),this.Render(this.project.pages[0])})}onResize(i){this.full&&(this.graph.resize(i.target.innerWidth,i.target.innerHeight),this.graph.centerContent(),this.graph.zoomToFit({padding:this.padding}))}ngOnDestroy(){this.subs.forEach(i=>i.unsubscribe())}handlePageChange(i){this.Render(this.project.pages[this.index])}}return a.\u0275fac=function(i){return new(i||a)(o.Y36(_.Dx),o.Y36(o.SBq),o.Y36(C.s),o.Y36(U.m),o.Y36(y.gz),o.Y36(S.zb),o.Y36(w.Sf),o.Y36(Y.KZ))},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-viewer"]],hostBindings:function(i,t){1&i&&o.NdJ("resize",function(s){return t.onResize(s)},!1,o.Jf7)},decls:0,vars:0,template:function(i,t){},styles:["[_nghost-%COMP%]{display:block;overflow:hidden}"]}),a})()}];let J=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[y.Bz.forChild(Z),y.Bz]}),a})();var O=c(1102);let D=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[L.ez,J,S.L8,w.Qp,F.o7,d.u5,O.PV,x.sL,z.U5,d.UX]}),a})()}}]);