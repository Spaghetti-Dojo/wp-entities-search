(()=>{var e={942:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function s(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,o(n)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=i(t,n));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r),n.d(r,{CompositeEntitiesByKind:()=>m,ControlOption:()=>V,ImmutableRecord:()=>j,PluralSelectControl:()=>_,RadioControl:()=>N,SearchControl:()=>C,Set:()=>i,SingularSelectControl:()=>b,ToggleControl:()=>P,convertEntitiesToControlOptions:()=>F,isControlOption:()=>$,orderSelectedOptionsAtTheTop:()=>w,searchEntities:()=>c,uniqueControlOptions:()=>g,useEntityRecords:()=>U,useQueryViewablePostTypes:()=>k,useQueryViewableTaxonomies:()=>L,useSearch:()=>v});const e=window.wp.hooks,t=new class{controllers=new Map;has(e){return this.controllers.has(e.context())}add(e){const t=e.context();return this.controller(t)?.abort(),this.set(e),this.controller(t)}delete(e){this.controllers.delete(e.context())}set(e){this.controllers.set(e.context(),e)}controller(e){return this.controllers.get(e)}};class s{#e;#t;#n;constructor(e,t){if(""===e)throw new Error("Abort Controllers, context cannot be empty");this.#e=new AbortController,this.#t=e,this.#n=t}context(){return this.#t}abort(){return this.#e.abort(this.reason()),this}signal(){return this.#e.signal}isAborted(){return this.#e.signal.aborted}reason(){return new DOMException(this.#n,"AbortError")}}const o=window.lodash;class i{#r;constructor(e=[]){this.#r=this.ensureUniqueness(e)}add(e){return this.has(e)?this:new i([...this.#r,e])}delete(e){return this.has(e)?new i(this.#r.filter((t=>!this.isEqual(t,e)))):this}has(e){return this._has(e,this.#r)}map(e){return new i(this.#r.map(e))}toArray(){return Object.freeze([...this.#r])}forEach(e){this.#r.forEach(e)}length(){return this.#r.length}concat(e){return new i([...this.#r,...e.toArray()])}filter(e){return new i(this.#r.filter(e))}find(e){return this.#r.slice(0).find(e)}first(){return this.#r.slice(0)[0]}last(){return this.#r.slice(-1)[0]}copy(e,t){return new i(this.#r.slice(e,t))}equals(e){if(this.length()!==e.length())return!1;if(this===e)return!0;for(const t of this)if(!e.has(t))return!1;return!0}*[Symbol.iterator](){for(const e of this.#r)yield e}isEqual(e,t){return(0,o.isEqual)(e,t)}_has(e,t){return t.some((t=>this.isEqual(t,e)))}ensureUniqueness(e){return e.reduce(((e,t)=>(this._has(t,e)||e.push(t),e)),[])}}const a=window.wp.apiFetch,l=n.n(a)();async function c(n,r,o,a){var c,d,h;const{exclude:p,include:E,fields:v=["title","id"],...w}=null!=a?a:{},g=new URLSearchParams({per_page:"10",order:"DESC",orderBy:"title",...{exclude:null!==(c=p?.toArray())&&void 0!==c?c:[],include:null!==(d=E?.toArray())&&void 0!==d?d:[],...w},type:n,search:o,subtype:r.toArray(),_fields:u(v)}).toString(),m=t.add(new s(g,`Request aborted with parameters: ${g}`)),f=await l({path:`?rest_route=/wp/v2/search&${g}`,signal:null!==(h=m?.signal())&&void 0!==h?h:null}).catch((t=>{throw t instanceof DOMException&&"AbortError"===t.name&&(0,e.doAction)("wp-entities-search.on-search.abort",t),t}));return new i(f)}function u(e){return e.join(",")}const d=window.React;var h=n.n(d);function p(e,t){switch(t.type){case"UPDATE_ENTITIES":return{...e,entities:t.entities};case"UPDATE_KIND":return{...e,kind:t.kind};case"UPDATE_CONTEXTUAL_ENTITIES_OPTIONS":return{...e,contextualEntitiesOptions:t.contextualEntitiesOptions};case"UPDATE_CURRENT_ENTITIES_OPTIONS":return{...e,currentEntitiesOptions:t.currentEntitiesOptions};case"UPDATE_SELECTED_ENTITIES_OPTIONS":return{...e,selectedEntitiesOptions:t.selectedEntitiesOptions,entities:t.selectedEntitiesOptions.map((e=>e.value))};case"CLEAN_ENTITIES_OPTIONS":return{...e,selectedEntitiesOptions:new i,contextualEntitiesOptions:new i,currentEntitiesOptions:new i};case"UPDATE_ENTITIES_OPTIONS_FOR_NEW_KIND":return{...e,contextualEntitiesOptions:t.entitiesOptions,currentEntitiesOptions:t.entitiesOptions,selectedEntitiesOptions:new i,entities:new i,kind:t.kind};case"UPDATE_SEARCH_PHRASE":return{...e,searchPhrase:t.searchPhrase};default:return e}}const E=window.wp.compose;function v(t,n,r,s){return(0,E.useThrottle)((o=>{const a=("string"==typeof(l=o)?l:l.target.value).trim();var l;t(a,n,{exclude:r}).then((e=>s({type:"UPDATE_CURRENT_ENTITIES_OPTIONS",currentEntitiesOptions:e}))).catch((t=>{(0,e.doAction)("wp-entities-search.on-search.error",t);const n=new i;return s({type:"UPDATE_CURRENT_ENTITIES_OPTIONS",currentEntitiesOptions:n}),n})).finally((()=>s({type:"UPDATE_SEARCH_PHRASE",searchPhrase:a})))}),300,{leading:!1,trailing:!0})}function w(e,t){if(e.length()<=0)return e;if(void 0===t||t.length()<=0)return e;let n=new i,r=new i;return e.forEach((e=>{t.has(e.value)?n=n.add(e):r=r.add(e)})),n.concat(r)}function g(e){let t=new i;const n=[];for(const r of e)n.includes(r.value)||(t=t.add(r)),n.push(r.value);return t}function m(t){const[n,r]=function(t,n){const[r,s]=(0,d.useReducer)(p,function(e){return{entities:new i([]),kind:new i([]),contextualEntitiesOptions:new i,currentEntitiesOptions:new i,selectedEntitiesOptions:new i,searchPhrase:"",...e}}(t));return(0,d.useEffect)((()=>{Promise.all([n("",r.kind,{exclude:r.entities}),r.entities.length()>0?n("",r.kind,{include:r.entities,per_page:"-1"}):void 0]).then((e=>{var t,n;const r=null!==(t=e[0])&&void 0!==t?t:new i,o=null!==(n=e[1])&&void 0!==n?n:new i;s({type:"UPDATE_SELECTED_ENTITIES_OPTIONS",selectedEntitiesOptions:o}),s({type:"UPDATE_CONTEXTUAL_ENTITIES_OPTIONS",contextualEntitiesOptions:r}),s({type:"UPDATE_CURRENT_ENTITIES_OPTIONS",currentEntitiesOptions:r})})).catch((t=>{(0,e.doAction)("wp-entities-search.on-storage-initialization.error",t)}))}),[]),[r,s]}({entities:t.entities.value,kind:t.kind.value},t.searchEntities),s=v(t.searchEntities,n.kind,n.entities,r),o={...t.entities,value:n.entities,options:w(g(n.selectedEntitiesOptions.concat(n.currentEntitiesOptions)),n.entities),onChange:s=>{t.entities.onChange(s),s.length()<=0?r({type:"UPDATE_SELECTED_ENTITIES_OPTIONS",selectedEntitiesOptions:new i}):Promise.all([t.searchEntities(n.searchPhrase,n.kind,{exclude:s}),t.searchEntities("",n.kind,{include:s,per_page:"-1"})]).then((e=>{var t,n;const s=null!==(t=e[0])&&void 0!==t?t:new i,o=null!==(n=e[1])&&void 0!==n?n:new i;r({type:"UPDATE_SELECTED_ENTITIES_OPTIONS",selectedEntitiesOptions:o}),r({type:"UPDATE_CURRENT_ENTITIES_OPTIONS",currentEntitiesOptions:s})})).catch((t=>{(0,e.doAction)("wp-entities-search.on-change-entities.error",t)}))}},a={...t.kind,value:n.kind,onChange:s=>{const o=new i;if(t.kind.onChange(s),t.entities.onChange(o),s.length()<=0)return r({type:"CLEAN_ENTITIES_OPTIONS"}),void r({type:"UPDATE_KIND",kind:s});t.searchEntities(n.searchPhrase,s,{exclude:n.entities}).then((e=>{r({type:"UPDATE_ENTITIES_OPTIONS_FOR_NEW_KIND",entitiesOptions:e,kind:s})})).catch((t=>{r({type:"CLEAN_ENTITIES_OPTIONS"}),(0,e.doAction)("wp-entities-search.on-change-kind.error",t)}))}};return(0,d.createElement)(d.Fragment,null,t.children(o,a,s))}var f=n(942),O=n.n(f);const T=window.wp.i18n;function S(){return(0,d.createElement)("p",{className:"wes-no-option-message"},(0,T.__)("No options","wp-entities-search"))}function _(e){const[t,n]=h().useState(e.value),r=O()(e.className,"wes-select-control","wes-select-control--plural");return e.options.length()<=0?(0,d.createElement)(S,null):(0,d.createElement)("select",{multiple:!0,className:r,value:t.toArray(),onChange:t=>{t.target.selectedOptions.length<=0&&e.onChange(new i);const r=Array.from(t.target.selectedOptions).map((e=>e.value)),s=e.options.filter((e=>r.includes(String(e.value)))).map((e=>e.value));n(s),e.onChange(s)}},e.options.map((e=>(0,d.createElement)("option",{key:e.value,className:`wes-select-control-item wes-select-control-item--${e.value}`,value:e.value},e.label))))}function y(e){const t=h().useId();return null!=e?e:t}function N(e){const t=O()(e.className,"wes-radio-control"),n=t=>{const{target:n}=t,r=e.options.find((e=>String(e.value)===n.value));r&&e.onChange(r.value)};return(0,d.createElement)("div",{className:t},e.options.map((t=>(0,d.createElement)(I,{key:t.value,label:t.label,value:t.value,selectedValue:e.value,onChange:n}))))}function I(e){const t=y(),n=String(e.value);return(0,d.createElement)("div",{className:`wes-radio-control-item wes-radio-control-item--${n}`},(0,d.createElement)("label",{htmlFor:t},(0,d.createElement)("input",{type:"radio",id:t,checked:e.selectedValue===e.value,value:n,onChange:e.onChange}),e.label))}function C(e){const t=y(e.id),n=e.label||(0,T.__)("Search","wp-entities-search"),[r,s]=h().useState(""),o={type:"search",value:r,className:"wes-search-control__input",onChange:t=>{s(t.target.value),e.onChange(t.target.value)}};return(0,d.createElement)("div",{className:"wes-search-control"},(0,d.createElement)("label",{htmlFor:t},(0,d.createElement)("span",{className:"wes-search-control__label"},n),(0,d.createElement)("input",{id:t,...o})))}function b(e){const t=O()(e.className,"wes-select-control","wes-select-control--singular");return e.options.length()<=0?(0,d.createElement)(S,null):(0,d.createElement)("select",{className:t,value:e?.value,onChange:t=>{const{target:n}=t,r=e.options.find((e=>String(e.value)===n.value));r&&e.onChange(r.value)}},e.options.map((e=>(0,d.createElement)("option",{key:e.value,className:`wes-select-control-item wes-select-control-item--${e.value}`,value:e.value},e.label))))}function P(e){const t=O()(e.className,"wes-toggle-control");if(e.options.length()<=0)return(0,d.createElement)(S,null);const n=t=>{const{target:n}=t,r=e.options.find((e=>String(e.value)===n.value));r&&(n.checked?e.onChange(e.value.add(r.value)):e.onChange(e.value.delete(r.value)))};return(0,d.createElement)("div",{className:t},e.options.map((t=>(0,d.createElement)(A,{key:t.value,label:t.label,value:t.value,selectedValues:e.value,onChange:n}))))}function A(e){const t=y(),n=String(e.value);return(0,d.createElement)("div",{className:`wes-toggle-control-item wes-toggle-control-item--${n}`},(0,d.createElement)("label",{htmlFor:t},(0,d.createElement)("input",{type:"checkbox",id:t,className:`wes-toggle-control-item__input-${n}`,checked:e.selectedValues?.has(e.value),value:n,onChange:e.onChange}),e.label))}const R=window.wp.coreData;var x=function(e){return e.ERROR="ERROR",e.SUCCESS="SUCCESS",e.RESOLVING="RESOLVING",e}(x||{});function U(e,t,n={}){const r=(0,R.useEntityRecords)(e,t,n),s=r.status;return Object.freeze({records:()=>{var e;return new i(null!==(e=r.records)&&void 0!==e?e:[])},isResolving:()=>r.isResolving&&!r.hasResolved&&s===x.RESOLVING,errored:()=>D(r,x.ERROR),succeed:()=>D(r,x.SUCCESS)})}function D(e,t){return e?.hasResolved&&e?.status===t}function k(){const e=U("root","postType",{per_page:-1}),t=e.records().filter((e=>e.viewable));return{...e,records:()=>t}}function L(){const e=U("root","taxonomy",{per_page:-1}),t=e.records().filter((e=>e.visibility.publicly_queryable));return{...e,records:()=>t}}class j{#s={};constructor(e={}){this.#s=e}get(e,t){var n;return null!==(n=this.#s[e])&&void 0!==n?n:t}set(e,t){return new j({...this.#s,[e]:t})}}function q(e,t){if(!e)throw new Error(t)}class V{constructor(e,t,n=new j){q(""!==e,"ControlOption: Label must be a non empty string."),q(""!==t,"ControlOption: Value must be a non empty string."),this.label=e,this.value=t,this.extra=n}}function F(e,t,n,...r){return e.map((e=>{const s=e[t],o=e[n];q("string"==typeof s,"Label key must be a string");const i=r.reduce(((t,n)=>({...t,[n]:e[n]})),{});return new V(s,o,new j(i))}))}function $(e){return null!==e&&"object"==typeof e&&"value"in e&&"label"in e&&"string"==typeof e.label}})(),window.wpEntitiesSearch=r})();