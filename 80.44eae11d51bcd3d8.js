"use strict";(self.webpackChunkclothes_app=self.webpackChunkclothes_app||[]).push([[80],{4080:(C,f,d)=>{d.d(f,{Pl:()=>D,UE:()=>u,eL:()=>w,u0:()=>_});var i=d(4650),v=d(6895);class h{attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;null!=t&&(this._attachedHost=null,t.detach())}get isAttached(){return null!=this._attachedHost}setAttachedHost(t){this._attachedHost=t}}class P extends h{constructor(t,e,o,a,c){super(),this.component=t,this.viewContainerRef=e,this.injector=o,this.componentFactoryResolver=a,this.projectableNodes=c}}class u extends h{constructor(t,e,o,a){super(),this.templateRef=t,this.viewContainerRef=e,this.context=o,this.injector=a}get origin(){return this.templateRef.elementRef}attach(t,e=this.context){return this.context=e,super.attach(t)}detach(){return this.context=void 0,super.detach()}}class m extends h{constructor(t){super(),this.element=t instanceof i.SBq?t.nativeElement:t}}class p{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(t){return t instanceof P?(this._attachedPortal=t,this.attachComponentPortal(t)):t instanceof u?(this._attachedPortal=t,this.attachTemplatePortal(t)):this.attachDomPortal&&t instanceof m?(this._attachedPortal=t,this.attachDomPortal(t)):void 0}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}}class _ extends p{constructor(t,e,o,a,c){super(),this.outletElement=t,this._componentFactoryResolver=e,this._appRef=o,this._defaultInjector=a,this.attachDomPortal=n=>{const s=n.element,l=this._document.createComment("dom-portal");s.parentNode.insertBefore(l,s),this.outletElement.appendChild(s),this._attachedPortal=n,super.setDisposeFn(()=>{l.parentNode&&l.parentNode.replaceChild(s,l)})},this._document=c}attachComponentPortal(t){const o=(t.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(t.component);let a;return t.viewContainerRef?(a=t.viewContainerRef.createComponent(o,t.viewContainerRef.length,t.injector||t.viewContainerRef.injector,t.projectableNodes||void 0),this.setDisposeFn(()=>a.destroy())):(a=o.create(t.injector||this._defaultInjector||i.zs3.NULL),this._appRef.attachView(a.hostView),this.setDisposeFn(()=>{this._appRef.viewCount>0&&this._appRef.detachView(a.hostView),a.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(a)),this._attachedPortal=t,a}attachTemplatePortal(t){let e=t.viewContainerRef,o=e.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return o.rootNodes.forEach(a=>this.outletElement.appendChild(a)),o.detectChanges(),this.setDisposeFn(()=>{let a=e.indexOf(o);-1!==a&&e.remove(a)}),this._attachedPortal=t,o}dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(t){return t.hostView.rootNodes[0]}}let D=(()=>{class r extends p{constructor(e,o,a){super(),this._componentFactoryResolver=e,this._viewContainerRef=o,this._isInitialized=!1,this.attached=new i.vpe,this.attachDomPortal=c=>{const n=c.element,s=this._document.createComment("dom-portal");c.setAttachedHost(this),n.parentNode.insertBefore(s,n),this._getRootNode().appendChild(n),this._attachedPortal=c,super.setDisposeFn(()=>{s.parentNode&&s.parentNode.replaceChild(n,s)})},this._document=a}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);const o=null!=e.viewContainerRef?e.viewContainerRef:this._viewContainerRef,c=(e.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(e.component),n=o.createComponent(c,o.length,e.injector||o.injector,e.projectableNodes||void 0);return o!==this._viewContainerRef&&this._getRootNode().appendChild(n.hostView.rootNodes[0]),super.setDisposeFn(()=>n.destroy()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachTemplatePortal(e){e.setAttachedHost(this);const o=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=o,this.attached.emit(o),o}_getRootNode(){const e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}}return r.\u0275fac=function(e){return new(e||r)(i.Y36(i._Vd),i.Y36(i.s_b),i.Y36(v.K0))},r.\u0275dir=i.lG2({type:r,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:["cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[i.qOj]}),r})(),w=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=i.oAB({type:r}),r.\u0275inj=i.cJS({}),r})()}}]);