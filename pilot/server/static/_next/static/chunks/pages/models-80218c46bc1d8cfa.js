(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{22624:function(e,t,l){"use strict";var n=l(64836);t.Z=void 0;var r=n(l(64938)),a=l(85893),s=(0,r.default)([(0,a.jsx)("circle",{cx:"15.5",cy:"9.5",r:"1.5"},"0"),(0,a.jsx)("circle",{cx:"8.5",cy:"9.5",r:"1.5"},"1"),(0,a.jsx)("circle",{cx:"15.5",cy:"9.5",r:"1.5"},"2"),(0,a.jsx)("circle",{cx:"8.5",cy:"9.5",r:"1.5"},"3"),(0,a.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2s-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5z"},"4")],"SentimentSatisfiedAlt");t.Z=s},49769:function(e,t,l){"use strict";var n=l(64836);t.Z=void 0;var r=n(l(64938)),a=l(85893),s=(0,r.default)([(0,a.jsx)("circle",{cx:"15.5",cy:"9.5",r:"1.5"},"0"),(0,a.jsx)("circle",{cx:"8.5",cy:"9.5",r:"1.5"},"1"),(0,a.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z"},"2")],"SentimentVeryDissatisfied");t.Z=s},98034:function(e,t,l){"use strict";var n=l(64836);t.Z=void 0;var r=n(l(64938)),a=l(85893),s=(0,r.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 14H8V8h8v8z"}),"StopCircle");t.Z=s},64938:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=l(52869)},52869:function(e,t,l){"use strict";l.r(t),l.d(t,{capitalize:function(){return r.Z},createChainedFunction:function(){return a},createSvgIcon:function(){return s.Z},debounce:function(){return i},deprecatedPropType:function(){return o},isMuiElement:function(){return c},ownerDocument:function(){return u},ownerWindow:function(){return d},requirePropFactory:function(){return m},setRef:function(){return f},unstable_ClassNameGenerator:function(){return g},unstable_useEnhancedEffect:function(){return p},unstable_useId:function(){return h},unsupportedProp:function(){return x},useControlled:function(){return v},useEventCallback:function(){return b},useForkRef:function(){return j},useIsFocusVisible:function(){return y}});var n=l(37078),r=l(98216),a=function(...e){return e.reduce((e,t)=>null==t?e:function(...l){e.apply(this,l),t.apply(this,l)},()=>{})},s=l(34678),i=l(39336).Z,o=function(e,t){return()=>null},c=l(18719).Z,u=l(82690).Z,d=l(74161).Z;l(87462);var m=function(e,t){return()=>null},f=l(7960).Z,p=l(73546).Z,h=l(92996).Z,x=function(e,t,l,n,r){return null},v=l(19032).Z,b=l(59948).Z,j=l(33703).Z,y=l(99962).Z;let g={configure:e=>{n.Z.configure(e)}}},84567:function(e,t,l){"use strict";l.d(t,{Z:function(){return g}});var n=l(94184),r=l.n(n),a=l(50132),s=l(67294),i=l(53124),o=l(98866),c=l(65223);let u=s.createContext(null);var d=l(63185),m=l(45353),f=l(17415),p=function(e,t){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(l[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(l[n[r]]=e[n[r]]);return l};let h=s.forwardRef((e,t)=>{var l;let{prefixCls:n,className:h,rootClassName:x,children:v,indeterminate:b=!1,style:j,onMouseEnter:y,onMouseLeave:g,skipGroup:_=!1,disabled:w}=e,Z=p(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls:C,direction:N,checkbox:k}=s.useContext(i.E_),O=s.useContext(u),{isFormItemInput:E}=s.useContext(c.aM),S=s.useContext(o.Z),P=null!==(l=(null==O?void 0:O.disabled)||w)&&void 0!==l?l:S,M=s.useRef(Z.value);s.useEffect(()=>{null==O||O.registerValue(Z.value)},[]),s.useEffect(()=>{if(!_)return Z.value!==M.current&&(null==O||O.cancelValue(M.current),null==O||O.registerValue(Z.value),M.current=Z.value),()=>null==O?void 0:O.cancelValue(Z.value)},[Z.value]);let V=C("checkbox",n),[$,I]=(0,d.ZP)(V),z=Object.assign({},Z);O&&!_&&(z.onChange=function(){Z.onChange&&Z.onChange.apply(Z,arguments),O.toggleOption&&O.toggleOption({label:v,value:Z.value})},z.name=O.name,z.checked=O.value.includes(Z.value));let H=r()(`${V}-wrapper`,{[`${V}-rtl`]:"rtl"===N,[`${V}-wrapper-checked`]:z.checked,[`${V}-wrapper-disabled`]:P,[`${V}-wrapper-in-form-item`]:E},null==k?void 0:k.className,h,x,I),F=r()({[`${V}-indeterminate`]:b},f.A,I);return $(s.createElement(m.Z,{component:"Checkbox",disabled:P},s.createElement("label",{className:H,style:Object.assign(Object.assign({},null==k?void 0:k.style),j),onMouseEnter:y,onMouseLeave:g},s.createElement(a.Z,Object.assign({"aria-checked":b?"mixed":void 0},z,{prefixCls:V,className:F,disabled:P,ref:t})),void 0!==v&&s.createElement("span",null,v))))});var x=l(74902),v=l(98423),b=function(e,t){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(l[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(l[n[r]]=e[n[r]]);return l};let j=s.forwardRef((e,t)=>{let{defaultValue:l,children:n,options:a=[],prefixCls:o,className:c,rootClassName:m,style:f,onChange:p}=e,j=b(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:y,direction:g}=s.useContext(i.E_),[_,w]=s.useState(j.value||l||[]),[Z,C]=s.useState([]);s.useEffect(()=>{"value"in j&&w(j.value||[])},[j.value]);let N=s.useMemo(()=>a.map(e=>"string"==typeof e||"number"==typeof e?{label:e,value:e}:e),[a]),k=y("checkbox",o),O=`${k}-group`,[E,S]=(0,d.ZP)(k),P=(0,v.Z)(j,["value","disabled"]),M=a.length?N.map(e=>s.createElement(h,{prefixCls:k,key:e.value.toString(),disabled:"disabled"in e?e.disabled:j.disabled,value:e.value,checked:_.includes(e.value),onChange:e.onChange,className:`${O}-item`,style:e.style,title:e.title},e.label)):n,V={toggleOption:e=>{let t=_.indexOf(e.value),l=(0,x.Z)(_);-1===t?l.push(e.value):l.splice(t,1),"value"in j||w(l),null==p||p(l.filter(e=>Z.includes(e)).sort((e,t)=>{let l=N.findIndex(t=>t.value===e),n=N.findIndex(e=>e.value===t);return l-n}))},value:_,disabled:j.disabled,name:j.name,registerValue:e=>{C(t=>[].concat((0,x.Z)(t),[e]))},cancelValue:e=>{C(t=>t.filter(t=>t!==e))}},$=r()(O,{[`${O}-rtl`]:"rtl"===g},c,m,S);return E(s.createElement("div",Object.assign({className:$,style:f},P,{ref:t}),s.createElement(u.Provider,{value:V},M)))});var y=s.memo(j);h.Group=y,h.__ANT_CHECKBOX=!0;var g=h},80476:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/models",function(){return l(93167)}])},81799:function(e,t,l){"use strict";l.d(t,{A:function(){return d}});var n=l(85893),r=l(41468),a=l(51009),s=l(19284),i=l(25675),o=l.n(i),c=l(67294),u=l(67421);function d(e,t){var l;let{width:r,height:a}=t||{};return e?(0,n.jsx)(o(),{className:"rounded-full border border-gray-200 object-contain bg-white inline-block",width:r||24,height:a||24,src:(null===(l=s.Hf[e])||void 0===l?void 0:l.icon)||"/models/huggingface.svg",alt:"llm"}):null}t.Z=function(e){let{onChange:t}=e,{t:l}=(0,u.$G)(),{modelList:i,model:o}=(0,c.useContext)(r.p);return!i||i.length<=0?null:(0,n.jsx)(a.default,{value:o,placeholder:l("choose_model"),className:"w-52",onChange:e=>{null==t||t(e)},children:i.map(e=>{var t;return(0,n.jsx)(a.default.Option,{children:(0,n.jsxs)("div",{className:"flex items-center",children:[d(e),(0,n.jsx)("span",{className:"ml-2",children:(null===(t=s.Hf[e])||void 0===t?void 0:t.label)||e})]})},e)})})}},93167:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return N}});var n=l(85893),r=l(50489),a=l(67294),s=l(67421),i=l(22624),o=l(49769),c=l(98034),u=l(2453),d=l(83062),m=l(30381),f=l.n(m),p=l(81799),h=function(e){let{info:t}=e,{t:l}=(0,s.$G)(),[m,h]=(0,a.useState)(!1);async function x(e){if(m)return;h(!0);let[,t]=await (0,r.Vx)((0,r.kU)({host:e.host,port:e.port,model:e.model_name,worker_type:e.model_type,params:{}}));h(!1),!0===t&&u.ZP.success(l("stop_model_success"))}return(0,n.jsx)("div",{className:"relative flex flex-col p-1 md:p-2 sm:w-1/2 lg:w-1/3",children:(0,n.jsx)("div",{className:"relative flex items-center p-4 min-w-min rounded-lg justify-between bg-white border-gray-200 border hover:shadow-md dark:border-gray-600 dark:bg-black dark:hover:border-white transition-all text-black dark:text-white",children:(0,n.jsxs)("div",{className:"flex flex-col",children:[t.healthy&&(0,n.jsx)(d.Z,{title:"Healthy",children:(0,n.jsx)(i.Z,{className:"absolute top-4 right-4 !text-3xl !text-green-600"})}),!t.healthy&&(0,n.jsx)(d.Z,{title:"Unhealthy",children:(0,n.jsx)(o.Z,{className:"absolute top-4 right-4 !text-3xl !text-red-600"})}),(0,n.jsx)(d.Z,{title:"Stop Model",children:(0,n.jsx)(c.Z,{className:"absolute right-4 bottom-4 !text-3xl !text-orange-600 cursor-pointer",onClick:()=>{x(t)}})}),(0,n.jsxs)("div",{className:"flex items-center",children:[(0,p.A)(t.model_name,{width:32,height:32}),(0,n.jsxs)("div",{className:"inline-block ml-2",children:[(0,n.jsx)("h3",{className:"text-lg font-semibold",children:t.model_name}),(0,n.jsx)("h3",{className:"text-sm opacity-60",children:t.model_type})]})]}),(0,n.jsxs)("div",{className:"text-sm mt-2",children:[(0,n.jsx)("p",{className:"font-semibold",children:"Host:"}),(0,n.jsx)("p",{className:"opacity-60",children:t.host}),(0,n.jsx)("p",{className:"font-semibold mt-2",children:"Manage host:"}),(0,n.jsxs)("p",{className:"opacity-60",children:[(0,n.jsxs)("span",{children:[t.manager_host,":"]}),(0,n.jsx)("span",{children:t.manager_port})]}),(0,n.jsx)("p",{className:"font-semibold mt-2",children:"Last heart beat:"}),(0,n.jsx)("p",{className:"opacity-60",children:f()(t.last_heartbeat).format("YYYY-MM-DD HH:MM:SS")})]})]})})})},x=l(51009),v=l(39479),b=l(71577),j=l(59566),y=l(48928),g=l(84567),_=function(e){let{params:t,form:l}=e;return((0,a.useEffect)(()=>{if(t){let e={};t.forEach(t=>{e[t.param_name]=t.default_value}),l.setFieldsValue(e)}},[t,l]),!t||(null==t?void 0:t.length)<1)?null:(0,n.jsx)(n.Fragment,{children:null==t?void 0:t.map(e=>{var t;return(0,n.jsx)(v.Z.Item,{label:(0,n.jsx)("p",{className:"whitespace-normal overflow-wrap-break-word",children:(null===(t=e.description)||void 0===t?void 0:t.length)>20?e.param_name:e.description}),name:e.param_name,initialValue:e.default_value,valuePropName:"bool"===e.param_type?"checked":"value",tooltip:e.description,rules:[{required:e.required,message:"Please input ".concat(e.description)}],children:function(e){switch(e.param_type){case"str":return(0,n.jsx)(j.default,{});case"int":return(0,n.jsx)(y.Z,{});case"bool":return(0,n.jsx)(g.Z,{})}}(e)},e.param_name)})})};let{Option:w}=x.default;var Z=function(e){let{onCancel:t,onSuccess:l}=e,{t:i}=(0,s.$G)(),[o,c]=(0,a.useState)([]),[m,f]=(0,a.useState)(),[h,j]=(0,a.useState)(null),[y,g]=(0,a.useState)(!1),[Z]=v.Z.useForm();async function C(){let[,e]=await (0,r.Vx)((0,r.xv)());e&&e.length&&c(e.sort((e,t)=>e.enabled&&!t.enabled?-1:!e.enabled&&t.enabled?1:e.model.localeCompare(t.model))),c(e)}async function N(e){if(!m)return;delete e.model,g(!0);let[,,t]=await (0,r.Vx)((0,r.vA)({host:m.host,port:m.port,model:m.model,worker_type:null==m?void 0:m.worker_type,params:e}));if(g(!1),(null==t?void 0:t.success)===!0)return l&&l(),u.ZP.success(i("start_model_success"))}return(0,a.useEffect)(()=>{C()},[]),(0,n.jsxs)(v.Z,{labelCol:{span:8},wrapperCol:{span:16},onFinish:N,form:Z,children:[(0,n.jsx)(v.Z.Item,{label:"Model",name:"model",rules:[{required:!0,message:i("model_select_tips")}],children:(0,n.jsx)(x.default,{showSearch:!0,onChange:function(e,t){f(t.model),j(t.model.params)},children:null==o?void 0:o.map(e=>(0,n.jsxs)(w,{value:e.model,label:e.model,model:e,disabled:!e.enabled,children:[(0,p.A)(e.model),(0,n.jsx)(d.Z,{title:e.enabled?e.model:i("download_model_tip"),children:(0,n.jsx)("span",{className:"ml-2",children:e.model})}),(0,n.jsx)(d.Z,{title:e.enabled?"".concat(e.host,":").concat(e.port):i("download_model_tip"),children:(0,n.jsxs)("p",{className:"inline-block absolute right-4",children:[(0,n.jsxs)("span",{children:[e.host,":"]}),(0,n.jsx)("span",{children:e.port})]})})]},e.model))})}),(0,n.jsx)(_,{params:h,form:Z}),(0,n.jsxs)("div",{className:"flex justify-center",children:[(0,n.jsx)(b.ZP,{type:"primary",htmlType:"submit",loading:y,children:i("submit")}),(0,n.jsx)(b.ZP,{className:"ml-10",onClick:t,children:"Cancel"})]})]})},C=l(12069),N=function(){let{t:e}=(0,s.$G)(),[t,l]=(0,a.useState)([]),[i,o]=(0,a.useState)(!1);async function c(){let[,e]=await (0,r.Vx)((0,r.fZ)());l(null!=e?e:[])}return(0,a.useEffect)(()=>{c()},[]),(0,n.jsxs)("div",{className:"p-4 md:p-6 h-full",children:[(0,n.jsx)(b.ZP,{className:"mb-4",type:"primary",onClick:()=>{o(!0)},children:e("create_model")}),(0,n.jsx)("div",{className:"flex flex-wrap -m-1 md:-m-2",children:t.map(e=>(0,n.jsx)(h,{info:e},e.model_name))}),(0,n.jsx)(C.default,{width:800,open:i,title:e("create_model"),onCancel:()=>{o(!1)},footer:null,children:(0,n.jsx)(Z,{onCancel:()=>{o(!1)},onSuccess:()=>{o(!1),c()}})})]})}}},function(e){e.O(0,[885,64,479,9,947,928,774,888,179],function(){return e(e.s=80476)}),_N_E=e.O()}]);