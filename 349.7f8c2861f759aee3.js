(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[349,12],{6012:(S,i,c)=>{c.r(i),c.d(i,{MAT_CARD_CONFIG:()=>o,MatCard:()=>m,MatCardActions:()=>f,MatCardAvatar:()=>x,MatCardContent:()=>u,MatCardFooter:()=>_,MatCardHeader:()=>p,MatCardImage:()=>b,MatCardLgImage:()=>v,MatCardMdImage:()=>C,MatCardModule:()=>F,MatCardSmImage:()=>h,MatCardSubtitle:()=>g,MatCardTitle:()=>l,MatCardTitleGroup:()=>s,MatCardXlImage:()=>M});var e=c(1060),y=c(655),n=c(4010);const D=["*"],I=[[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],[["","mat-card-image",""],["","matCardImage",""],["","mat-card-sm-image",""],["","matCardImageSmall",""],["","mat-card-md-image",""],["","matCardImageMedium",""],["","mat-card-lg-image",""],["","matCardImageLarge",""],["","mat-card-xl-image",""],["","matCardImageXLarge",""]],"*"],w=["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]","*"],A=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],T=["[mat-card-avatar], [matCardAvatar]","mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","*"],o=new e.InjectionToken("MAT_CARD_CONFIG");let m=(()=>{class t{constructor(a){this.appearance=a?.appearance||"raised"}}return t.\u0275fac=function(a){return new(a||t)(e.\u0275\u0275directiveInject(o,8))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:4,hostBindings:function(a,d){2&a&&e.\u0275\u0275classProp("mat-mdc-card-outlined","outlined"===d.appearance)("mdc-card--outlined","outlined"===d.appearance)},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:D,decls:1,vars:0,template:function(a,d){1&a&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275projection(0))},styles:['.mdc-card{display:flex;flex-direction:column;box-sizing:border-box}.mdc-card::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none;pointer-events:none}@media screen and (forced-colors: active){.mdc-card::after{border-color:CanvasText}}.mdc-card--outlined::after{border:none}.mdc-card__content{border-radius:inherit;height:100%}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{color:rgba(0, 0, 0, 0.6);flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled){color:rgba(0, 0, 0, 0.6)}.mat-mdc-card{border-radius:var(--mdc-elevated-card-container-shape);background-color:var(--mdc-elevated-card-container-color);border-width:0;border-style:solid;border-color:var(--mdc-elevated-card-container-color);box-shadow:var(--mdc-elevated-card-container-elevation);--mdc-elevated-card-container-shape:4px;--mdc-outlined-card-container-shape:4px;--mdc-outlined-card-outline-width:1px}.mat-mdc-card .mdc-card::after{border-radius:var(--mdc-elevated-card-container-shape)}.mat-mdc-card-outlined{border-width:var(--mdc-outlined-card-outline-width);border-style:solid;border-color:var(--mdc-outlined-card-outline-color);border-radius:var(--mdc-outlined-card-container-shape);background-color:var(--mdc-outlined-card-container-color);box-shadow:var(--mdc-outlined-card-container-elevation)}.mat-mdc-card-outlined .mdc-card::after{border-radius:var(--mdc-outlined-card-container-shape)}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font);line-height:var(--mat-card-title-text-line-height);font-size:var(--mat-card-title-text-size);letter-spacing:var(--mat-card-title-text-tracking);font-weight:var(--mat-card-title-text-weight)}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color);font-family:var(--mat-card-subtitle-text-font);line-height:var(--mat-card-subtitle-text-line-height);font-size:var(--mat-card-subtitle-text-size);letter-spacing:var(--mat-card-subtitle-text-tracking);font-weight:var(--mat-card-subtitle-text-weight)}.mat-mdc-card{position:relative}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}'],encapsulation:2,changeDetection:0}),t})(),l=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=e.\u0275\u0275defineDirective({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]}),t})(),s=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["mat-card-title-group"]],hostAttrs:[1,"mat-mdc-card-title-group"],ngContentSelectors:w,decls:4,vars:0,template:function(a,d){1&a&&(e.\u0275\u0275projectionDef(I),e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275projection(1),e.\u0275\u0275elementEnd(),e.\u0275\u0275projection(2,1),e.\u0275\u0275projection(3,2))},encapsulation:2,changeDetection:0}),t})(),u=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=e.\u0275\u0275defineDirective({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]}),t})(),g=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=e.\u0275\u0275defineDirective({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]}),t})(),f=(()=>{class t{constructor(){this.align="start"}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=e.\u0275\u0275defineDirective({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(a,d){2&a&&e.\u0275\u0275classProp("mat-mdc-card-actions-align-end","end"===d.align)},inputs:{align:"align"},exportAs:["matCardActions"]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:T,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(a,d){1&a&&(e.\u0275\u0275projectionDef(A),e.\u0275\u0275projection(0),e.\u0275\u0275elementStart(1,"div",0),e.\u0275\u0275projection(2,1),e.\u0275\u0275elementEnd(),e.\u0275\u0275projection(3,2))},encapsulation:2,changeDetection:0}),t})(),_=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=e.\u0275\u0275defineDirective({type:t,selectors:[["mat-card-footer"]],hostAttrs:[1,"mat-mdc-card-footer"]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=e.\u0275\u0275defineDirective({type:t,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-mdc-card-image","mdc-card__media"]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=e.\u0275\u0275defineDirective({type:t,selectors:[["","mat-card-sm-image",""],["","matCardImageSmall",""]],hostAttrs:[1,"mat-mdc-card-sm-image","mdc-card__media"]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=e.\u0275\u0275defineDirective({type:t,selectors:[["","mat-card-md-image",""],["","matCardImageMedium",""]],hostAttrs:[1,"mat-mdc-card-md-image","mdc-card__media"]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=e.\u0275\u0275defineDirective({type:t,selectors:[["","mat-card-lg-image",""],["","matCardImageLarge",""]],hostAttrs:[1,"mat-mdc-card-lg-image","mdc-card__media"]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=e.\u0275\u0275defineDirective({type:t,selectors:[["","mat-card-xl-image",""],["","matCardImageXLarge",""]],hostAttrs:[1,"mat-mdc-card-xl-image","mdc-card__media"]}),t})(),x=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=e.\u0275\u0275defineDirective({type:t,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-mdc-card-avatar"]}),t})(),F=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[n.MatCommonModule,y.CommonModule,n.MatCommonModule]}),t})()}}]);