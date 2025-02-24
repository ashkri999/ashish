!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a474fd88-2707-4f3e-b1eb-c330aaccff26",e._sentryDebugIdIdentifier="sentry-dbid-a474fd88-2707-4f3e-b1eb-c330aaccff26")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9091],{37539:function(e,t,r){r.d(t,{l:function(){return d}});var a=r(29163),s=r(34871),i=r(54490);r(44194);var l=r(18704);let u=(0,s.B)("FormLabelRequiredText",{root:(0,a.css)`
    ${i.Z.SmallPrint1}
    color: var(--zds-text-default, ${l.w.GrayWarm9});
    text-transform: lowercase;

    &::before {
      content: '(';
    }

    &::after {
      content: ')';
    }

    &[data-state='disabled'] {
      color: var(--zds-text-weakest, ${l.w.GrayWarm5});
    }
  `}),n=({children:e="Required",isDisabled:t=!1})=>(0,a.jsx)("span",{"aria-hidden":"true",css:u.root,"data-state":t?"disabled":void 0,"data-zds":!0},e),o=(0,s.B)("FormLabel",{root:(0,a.css)`
    display: grid;
    justify-content: start;
    grid-gap: var(--zds-space-2);
    grid-auto-flow: column;
    grid-auto-columns: auto;
    cursor: pointer;
    color: var(--zds-text-default);

    &[data-align-items='center'] {
      align-items: center;
    }

    &[data-align-items='start'] {
      align-items: start;
    }

    &[data-justify-content='start'] {
      justify-content: start;
    }

    &[data-justify-content='stretch'] {
      justify-content: stretch;
    }

    &[data-state~='selected'] {
      color: var(--zds-text-default);
    }

    &[data-state~='errored'] {
      color: var(--zds-status-error-stronger);
    }

    &[data-state~='disabled'] {
      cursor: not-allowed;
      color: var(--zds-text-weakest);
    }

    &[data-size='compact'] {
      ${i.Z.MinimalPrint3}
    }

    &[data-size='small'] {
      ${i.Z.SmallPrint3}
    }

    &[data-size='medium'] {
      ${i.Z.Body2}
    }

    &[data-size='medium'][data-state='selected'] {
      ${i.Z.Body3}
    }
  `,asterisk:(0,a.css)`
    ${i.Z.Body2Multiline}
    color: var(--zds-ui-brand);
    text-decoration: none;
  `}),d=({children:e,alignItems:t="center",htmlFor:r,isDisabled:s,isErrored:i,isRequired:l,isSelected:u,justifyContent:d="start",requiredText:f,size:c="medium"})=>(0,a.jsx)("label",{css:o.root,"data-align-items":t,"data-justify-content":d,"data-size":c,"data-state":[u&&"selected",i&&"errored",s&&"disabled"].filter(Boolean).join(" ")||void 0,"data-zds":!0,htmlFor:r},e,l&&(0,a.jsx)("abbr",{css:o.asterisk,title:"required"},"*"),l?f?(0,a.jsx)(n,{isDisabled:s},f):(0,a.jsx)(n,{isDisabled:s}):null)},56468:function(e,t,r){r.d(t,{Dq:function(){return ep},Gc:function(){return V},KN:function(){return M},Qr:function(){return R},RV:function(){return F},U2:function(){return g},bc:function(){return N},cI:function(){return eL},cl:function(){return O},t8:function(){return U}});var a=r(44194),s=e=>"checkbox"===e.type,i=e=>e instanceof Date,l=e=>null==e;let u=e=>"object"==typeof e;var n=e=>!l(e)&&!Array.isArray(e)&&u(e)&&!i(e),o=e=>n(e)&&e.target?s(e.target)?e.target.checked:e.target.value:e,d=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,f=(e,t)=>e.has(d(t)),c=e=>{let t=e.constructor&&e.constructor.prototype;return n(t)&&t.hasOwnProperty("isPrototypeOf")},y="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function m(e){let t;let r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(!(y&&(e instanceof Blob||e instanceof FileList))&&(r||n(e))))return e;else if(t=r?[]:{},r||c(e))for(let r in e)e.hasOwnProperty(r)&&(t[r]=m(e[r]));else t=e;return t}var p=e=>Array.isArray(e)?e.filter(Boolean):[],_=e=>void 0===e,g=(e,t,r)=>{if(!t||!n(e))return r;let a=p(t.split(/[,[\].]+?/)).reduce((e,t)=>l(e)?e:e[t],e);return _(a)||a===e?_(e[t])?r:e[t]:a},v=e=>"boolean"==typeof e;let h={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},b={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},x={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},A=a.createContext(null),V=()=>a.useContext(A),F=e=>{let{children:t,...r}=e;return a.createElement(A.Provider,{value:r},t)};var w=(e,t,r,a=!0)=>{let s={defaultValues:t._defaultValues};for(let i in e)Object.defineProperty(s,i,{get:()=>(t._proxyFormState[i]!==b.all&&(t._proxyFormState[i]=!a||b.all),r&&(r[i]=!0),e[i])});return s},S=e=>n(e)&&!Object.keys(e).length,k=(e,t,r,a)=>{r(e);let{name:s,...i}=e;return S(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(e=>t[e]===(!a||b.all))},D=e=>Array.isArray(e)?e:[e],C=(e,t,r)=>!e||!t||e===t||D(e).some(e=>e&&(r?e===t:e.startsWith(t)||t.startsWith(e)));function j(e){let t=a.useRef(e);t.current=e,a.useEffect(()=>{let r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}function O(e){let t=V(),{control:r=t.control,disabled:s,name:i,exact:l}=e||{},[u,n]=a.useState(r._formState),o=a.useRef(!0),d=a.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),f=a.useRef(i);return f.current=i,j({disabled:s,next:e=>o.current&&C(f.current,e.name,l)&&k(e,d.current,r._updateFormState)&&n({...r._formState,...e}),subject:r._subjects.state}),a.useEffect(()=>(o.current=!0,d.current.isValid&&r._updateValid(!0),()=>{o.current=!1}),[r]),w(u,r,d.current,!1)}var E=e=>"string"==typeof e,B=(e,t,r,a,s)=>E(e)?(a&&t.watch.add(e),g(r,e,s)):Array.isArray(e)?e.map(e=>(a&&t.watch.add(e),g(r,e))):(a&&(t.watchAll=!0),r),L=e=>/^\w*$/.test(e),T=e=>p(e.replace(/["|']|\]/g,"").split(/\.|\[/));function U(e,t,r){let a=-1,s=L(t)?[t]:T(t),i=s.length,l=i-1;for(;++a<i;){let t=s[a],i=r;if(a!==l){let r=e[t];i=n(r)||Array.isArray(r)?r:isNaN(+s[a+1])?{}:[]}e[t]=i,e=e[t]}return e}function N(e){let t=V(),{name:r,disabled:s,control:i=t.control,shouldUnregister:l}=e,u=f(i._names.array,r),n=function(e){let t=V(),{control:r=t.control,name:s,defaultValue:i,disabled:l,exact:u}=e||{},n=a.useRef(s);n.current=s,j({disabled:l,subject:r._subjects.values,next:e=>{C(n.current,e.name,u)&&d(m(B(n.current,r._names,e.values||r._formValues,!1,i)))}});let[o,d]=a.useState(r._getWatch(s,i));return a.useEffect(()=>r._removeUnmounted()),o}({control:i,name:r,defaultValue:g(i._formValues,r,g(i._defaultValues,r,e.defaultValue)),exact:!0}),d=O({control:i,name:r}),c=a.useRef(i.register(r,{...e.rules,value:n}));return c.current=i.register(r,e.rules),a.useEffect(()=>{let e=i._options.shouldUnregister||l,t=(e,t)=>{let r=g(i._fields,e);r&&(r._f.mount=t)};if(t(r,!0),e){let e=m(g(i._options.defaultValues,r));U(i._defaultValues,r,e),_(g(i._formValues,r))&&U(i._formValues,r,e)}return()=>{(u?e&&!i._state.action:e)?i.unregister(r):t(r,!1)}},[r,i,u,l]),a.useEffect(()=>{g(i._fields,r)&&i._updateDisabledField({disabled:s,fields:i._fields,name:r,value:g(i._fields,r)._f.value})},[s,r,i]),{field:{name:r,value:n,...v(s)||v(d.disabled)?{disabled:d.disabled||s}:{},onChange:a.useCallback(e=>c.current.onChange({target:{value:o(e),name:r},type:h.CHANGE}),[r]),onBlur:a.useCallback(()=>c.current.onBlur({target:{value:g(i._formValues,r),name:r},type:h.BLUR}),[r,i]),ref:e=>{let t=g(i._fields,r);t&&e&&(t._f.ref={focus:()=>e.focus(),select:()=>e.select(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()})}},formState:d,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!g(d.errors,r)},isDirty:{enumerable:!0,get:()=>!!g(d.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!g(d.touchedFields,r)},error:{enumerable:!0,get:()=>g(d.errors,r)}})}}let R=e=>e.render(N(e));var M=(e,t,r,a,s)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[a]:s||!0}}:{},z=()=>{let e="undefined"==typeof performance?Date.now():1e3*performance.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{let r=(16*Math.random()+e)%16|0;return("x"==t?r:3&r|8).toString(16)})},$=(e,t,r={})=>r.shouldFocus||_(r.shouldFocus)?r.focusName||`${e}.${_(r.focusIndex)?t:r.focusIndex}.`:"",q=e=>({isOnSubmit:!e||e===b.onSubmit,isOnBlur:e===b.onBlur,isOnChange:e===b.onChange,isOnAll:e===b.all,isOnTouch:e===b.onTouched}),I=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));let P=(e,t,r,a)=>{for(let s of r||Object.keys(e)){let r=g(e,s);if(r){let{_f:e,...i}=r;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],s)&&!a||e.ref&&t(e.ref,e.name)&&!a)break}else n(i)&&P(i,t)}}};var W=(e,t,r)=>{let a=p(g(e,r));return U(a,"root",t[r]),U(e,r,a),e},Z=e=>"file"===e.type,G=e=>"function"==typeof e,H=e=>{if(!y)return!1;let t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},K=e=>E(e),Q=e=>"radio"===e.type,J=e=>e instanceof RegExp;let X={value:!1,isValid:!1},Y={value:!0,isValid:!0};var ee=e=>{if(Array.isArray(e)){if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!_(e[0].attributes.value)?_(e[0].value)||""===e[0].value?Y:{value:e[0].value,isValid:!0}:Y:X}return X};let et={isValid:!1,value:null};var er=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,et):et;function ea(e,t,r="validate"){if(K(e)||Array.isArray(e)&&e.every(K)||v(e)&&!e)return{type:r,message:K(e)?e:"",ref:t}}var es=e=>n(e)&&!J(e)?e:{value:e,message:""},ei=async(e,t,r,a,i)=>{let{ref:u,refs:o,required:d,maxLength:f,minLength:c,min:y,max:m,pattern:p,validate:h,name:b,valueAsNumber:A,mount:V,disabled:F}=e._f,w=g(t,b);if(!V||F)return{};let k=o?o[0]:u,D=e=>{a&&k.reportValidity&&(k.setCustomValidity(v(e)?"":e||""),k.reportValidity())},C={},j=Q(u),O=s(u),B=(A||Z(u))&&_(u.value)&&_(w)||H(u)&&""===u.value||""===w||Array.isArray(w)&&!w.length,L=M.bind(null,b,r,C),T=(e,t,r,a=x.maxLength,s=x.minLength)=>{let i=e?t:r;C[b]={type:e?a:s,message:i,ref:u,...L(e?a:s,i)}};if(i?!Array.isArray(w)||!w.length:d&&(!(j||O)&&(B||l(w))||v(w)&&!w||O&&!ee(o).isValid||j&&!er(o).isValid)){let{value:e,message:t}=K(d)?{value:!!d,message:d}:es(d);if(e&&(C[b]={type:x.required,message:t,ref:k,...L(x.required,t)},!r))return D(t),C}if(!B&&(!l(y)||!l(m))){let e,t;let a=es(m),s=es(y);if(l(w)||isNaN(w)){let r=u.valueAsDate||new Date(w),i=e=>new Date(new Date().toDateString()+" "+e),l="time"==u.type,n="week"==u.type;E(a.value)&&w&&(e=l?i(w)>i(a.value):n?w>a.value:r>new Date(a.value)),E(s.value)&&w&&(t=l?i(w)<i(s.value):n?w<s.value:r<new Date(s.value))}else{let r=u.valueAsNumber||(w?+w:w);l(a.value)||(e=r>a.value),l(s.value)||(t=r<s.value)}if((e||t)&&(T(!!e,a.message,s.message,x.max,x.min),!r))return D(C[b].message),C}if((f||c)&&!B&&(E(w)||i&&Array.isArray(w))){let e=es(f),t=es(c),a=!l(e.value)&&w.length>+e.value,s=!l(t.value)&&w.length<+t.value;if((a||s)&&(T(a,e.message,t.message),!r))return D(C[b].message),C}if(p&&!B&&E(w)){let{value:e,message:t}=es(p);if(J(e)&&!w.match(e)&&(C[b]={type:x.pattern,message:t,ref:u,...L(x.pattern,t)},!r))return D(t),C}if(h){if(G(h)){let e=ea(await h(w,t),k);if(e&&(C[b]={...e,...L(x.validate,e.message)},!r))return D(e.message),C}else if(n(h)){let e={};for(let a in h){if(!S(e)&&!r)break;let s=ea(await h[a](w,t),k,a);s&&(e={...s,...L(a,s.message)},D(s.message),r&&(C[b]=e))}if(!S(e)&&(C[b]={ref:k,...e},!r))return C}}return D(!0),C};function el(e,t){return[...e,...D(t)]}var eu=e=>Array.isArray(e)?e.map(()=>void 0):void 0;function en(e,t,r){return[...e.slice(0,t),...D(r),...e.slice(t)]}var eo=(e,t,r)=>Array.isArray(e)?(_(e[r])&&(e[r]=void 0),e.splice(r,0,e.splice(t,1)[0]),e):[];function ed(e,t){return[...D(t),...D(e)]}var ef=(e,t)=>_(t)?[]:function(e,t){let r=0,a=[...e];for(let e of t)a.splice(e-r,1),r++;return p(a).length?a:[]}(e,D(t).sort((e,t)=>e-t)),ec=(e,t,r)=>{e[t]=[e[r],e[r]=e[t]][0]};function ey(e,t){let r=Array.isArray(t)?t:L(t)?[t]:T(t),a=1===r.length?e:function(e,t){let r=t.slice(0,-1).length,a=0;for(;a<r;)e=_(e)?a++:e[t[a++]];return e}(e,r),s=r.length-1,i=r[s];return a&&delete a[i],0!==s&&(n(a)&&S(a)||Array.isArray(a)&&function(e){for(let t in e)if(e.hasOwnProperty(t)&&!_(e[t]))return!1;return!0}(a))&&ey(e,r.slice(0,-1)),e}var em=(e,t,r)=>(e[t]=r,e);function ep(e){let t=V(),{control:r=t.control,name:s,keyName:i="id",shouldUnregister:l}=e,[u,n]=a.useState(r._getFieldArray(s)),o=a.useRef(r._getFieldArray(s).map(z)),d=a.useRef(u),f=a.useRef(s),c=a.useRef(!1);f.current=s,d.current=u,r._names.array.add(s),e.rules&&r.register(s,e.rules),j({next:({values:e,name:t})=>{if(t===f.current||!t){let t=g(e,f.current);Array.isArray(t)&&(n(t),o.current=t.map(z))}},subject:r._subjects.array});let y=a.useCallback(e=>{c.current=!0,r._updateFieldArray(s,e)},[r,s]);return a.useEffect(()=>{if(r._state.action=!1,I(s,r._names)&&r._subjects.state.next({...r._formState}),c.current&&(!q(r._options.mode).isOnSubmit||r._formState.isSubmitted)){if(r._options.resolver)r._executeSchema([s]).then(e=>{let t=g(e.errors,s),a=g(r._formState.errors,s);(a?!t&&a.type||t&&(a.type!==t.type||a.message!==t.message):t&&t.type)&&(t?U(r._formState.errors,s,t):ey(r._formState.errors,s),r._subjects.state.next({errors:r._formState.errors}))});else{let e=g(r._fields,s);e&&e._f&&ei(e,r._formValues,r._options.criteriaMode===b.all,r._options.shouldUseNativeValidation,!0).then(e=>!S(e)&&r._subjects.state.next({errors:W(r._formState.errors,e,s)}))}}r._subjects.values.next({name:s,values:{...r._formValues}}),r._names.focus&&P(r._fields,(e,t)=>{if(r._names.focus&&t.startsWith(r._names.focus)&&e.focus)return e.focus(),1}),r._names.focus="",r._updateValid(),c.current=!1},[u,s,r]),a.useEffect(()=>(g(r._formValues,s)||r._updateFieldArray(s),()=>{(r._options.shouldUnregister||l)&&r.unregister(s)}),[s,r,i,l]),{swap:a.useCallback((e,t)=>{let a=r._getFieldArray(s);ec(a,e,t),ec(o.current,e,t),y(a),n(a),r._updateFieldArray(s,a,ec,{argA:e,argB:t},!1)},[y,s,r]),move:a.useCallback((e,t)=>{let a=r._getFieldArray(s);eo(a,e,t),eo(o.current,e,t),y(a),n(a),r._updateFieldArray(s,a,eo,{argA:e,argB:t},!1)},[y,s,r]),prepend:a.useCallback((e,t)=>{let a=D(m(e)),i=ed(r._getFieldArray(s),a);r._names.focus=$(s,0,t),o.current=ed(o.current,a.map(z)),y(i),n(i),r._updateFieldArray(s,i,ed,{argA:eu(e)})},[y,s,r]),append:a.useCallback((e,t)=>{let a=D(m(e)),i=el(r._getFieldArray(s),a);r._names.focus=$(s,i.length-1,t),o.current=el(o.current,a.map(z)),y(i),n(i),r._updateFieldArray(s,i,el,{argA:eu(e)})},[y,s,r]),remove:a.useCallback(e=>{let t=ef(r._getFieldArray(s),e);o.current=ef(o.current,e),y(t),n(t),r._updateFieldArray(s,t,ef,{argA:e})},[y,s,r]),insert:a.useCallback((e,t,a)=>{let i=D(m(t)),l=en(r._getFieldArray(s),e,i);r._names.focus=$(s,e,a),o.current=en(o.current,e,i.map(z)),y(l),n(l),r._updateFieldArray(s,l,en,{argA:e,argB:eu(t)})},[y,s,r]),update:a.useCallback((e,t)=>{let a=m(t),i=em(r._getFieldArray(s),e,a);o.current=[...i].map((t,r)=>t&&r!==e?o.current[r]:z()),y(i),n([...i]),r._updateFieldArray(s,i,em,{argA:e,argB:a},!0,!1)},[y,s,r]),replace:a.useCallback(e=>{let t=D(m(e));o.current=t.map(z),y([...t]),n([...t]),r._updateFieldArray(s,[...t],e=>e,{},!0,!1)},[y,s,r]),fields:a.useMemo(()=>u.map((e,t)=>({...e,[i]:o.current[t]||z()})),[u,i])}}function e_(){let e=[];return{get observers(){return e},next:t=>{for(let r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(e=>e!==t)}}),unsubscribe:()=>{e=[]}}}var eg=e=>l(e)||!u(e);function ev(e,t){if(eg(e)||eg(t))return e===t;if(i(e)&&i(t))return e.getTime()===t.getTime();let r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(let s of r){let r=e[s];if(!a.includes(s))return!1;if("ref"!==s){let e=t[s];if(i(r)&&i(e)||n(r)&&n(e)||Array.isArray(r)&&Array.isArray(e)?!ev(r,e):r!==e)return!1}}return!0}var eh=e=>"select-multiple"===e.type,eb=e=>Q(e)||s(e),ex=e=>H(e)&&e.isConnected,eA=e=>{for(let t in e)if(G(e[t]))return!0;return!1};function eV(e,t={}){let r=Array.isArray(e);if(n(e)||r)for(let r in e)Array.isArray(e[r])||n(e[r])&&!eA(e[r])?(t[r]=Array.isArray(e[r])?[]:{},eV(e[r],t[r])):l(e[r])||(t[r]=!0);return t}var eF=(e,t)=>(function e(t,r,a){let s=Array.isArray(t);if(n(t)||s)for(let s in t)Array.isArray(t[s])||n(t[s])&&!eA(t[s])?_(r)||eg(a[s])?a[s]=Array.isArray(t[s])?eV(t[s],[]):{...eV(t[s])}:e(t[s],l(r)?{}:r[s],a[s]):a[s]=!ev(t[s],r[s]);return a})(e,t,eV(t)),ew=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:a})=>_(e)?e:t?""===e?NaN:e?+e:e:r&&E(e)?new Date(e):a?a(e):e;function eS(e){let t=e.ref;return(e.refs?e.refs.every(e=>e.disabled):t.disabled)?void 0:Z(t)?t.files:Q(t)?er(e.refs).value:eh(t)?[...t.selectedOptions].map(({value:e})=>e):s(t)?ee(e.refs).value:ew(_(t.value)?e.ref.value:t.value,e)}var ek=(e,t,r,a)=>{let s={};for(let r of e){let e=g(t,r);e&&U(s,r,e._f)}return{criteriaMode:r,names:[...e],fields:s,shouldUseNativeValidation:a}},eD=e=>_(e)?e:J(e)?e.source:n(e)?J(e.value)?e.value.source:e.value:e,eC=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ej(e,t,r){let a=g(e,r);if(a||L(r))return{error:a,name:r};let s=r.split(".");for(;s.length;){let a=s.join("."),i=g(t,a),l=g(e,a);if(i&&!Array.isArray(i)&&r!==a)break;if(l&&l.type)return{name:a,error:l};s.pop()}return{name:r}}var eO=(e,t,r,a,s)=>!s.isOnAll&&(!r&&s.isOnTouch?!(t||e):(r?a.isOnBlur:s.isOnBlur)?!e:(r?!a.isOnChange:!s.isOnChange)||e),eE=(e,t)=>!p(g(e,t)).length&&ey(e,t);let eB={mode:b.onSubmit,reValidateMode:b.onChange,shouldFocusError:!0};function eL(e={}){let t=a.useRef(),r=a.useRef(),[u,d]=a.useState({isDirty:!1,isValidating:!1,isLoading:G(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:G(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...function(e={},t){let r,a={...eB,...e},u={submitCount:0,isDirty:!1,isLoading:G(a.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},d={},c=(n(a.defaultValues)||n(a.values))&&m(a.defaultValues||a.values)||{},x=a.shouldUnregister?{}:m(c),A={action:!1,mount:!1,watch:!1},V={mount:new Set,unMount:new Set,array:new Set,watch:new Set},F=0,w={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},k={values:e_(),array:e_(),state:e_()},C=e.resetOptions&&e.resetOptions.keepDirtyValues,j=q(a.mode),O=q(a.reValidateMode),L=a.criteriaMode===b.all,T=e=>t=>{clearTimeout(F),F=setTimeout(e,t)},N=async e=>{if(w.isValid||e){let e=a.resolver?S((await Q()).errors):await X(d,!0);e!==u.isValid&&k.state.next({isValid:e})}},R=e=>w.isValidating&&k.state.next({isValidating:e}),M=(e,t)=>{U(u.errors,e,t),k.state.next({errors:u.errors})},z=(e,t,r,a)=>{let s=g(d,e);if(s){let i=g(x,e,_(r)?g(c,e):r);_(i)||a&&a.defaultChecked||t?U(x,e,t?i:eS(s._f)):et(e,i),A.mount&&N()}},$=(e,t,r,a,s)=>{let i=!1,l=!1,n={name:e};if(!r||a){w.isDirty&&(l=u.isDirty,u.isDirty=n.isDirty=Y(),i=l!==n.isDirty);let r=ev(g(c,e),t);l=g(u.dirtyFields,e),r?ey(u.dirtyFields,e):U(u.dirtyFields,e,!0),n.dirtyFields=u.dirtyFields,i=i||w.dirtyFields&&!r!==l}if(r){let t=g(u.touchedFields,e);t||(U(u.touchedFields,e,r),n.touchedFields=u.touchedFields,i=i||w.touchedFields&&t!==r)}return i&&s&&k.state.next(n),i?n:{}},K=(t,a,s,i)=>{let l=g(u.errors,t),n=w.isValid&&v(a)&&u.isValid!==a;if(e.delayError&&s?(r=T(()=>M(t,s)))(e.delayError):(clearTimeout(F),r=null,s?U(u.errors,t,s):ey(u.errors,t)),(s?!ev(l,s):l)||!S(i)||n){let e={...i,...n&&v(a)?{isValid:a}:{},errors:u.errors,name:t};u={...u,...e},k.state.next(e)}R(!1)},Q=async e=>a.resolver(x,a.context,ek(e||V.mount,d,a.criteriaMode,a.shouldUseNativeValidation)),J=async e=>{let{errors:t}=await Q(e);if(e)for(let r of e){let e=g(t,r);e?U(u.errors,r,e):ey(u.errors,r)}else u.errors=t;return t},X=async(e,t,r={valid:!0})=>{for(let s in e){let i=e[s];if(i){let{_f:e,...s}=i;if(e){let s=V.array.has(e.name),l=await ei(i,x,L,a.shouldUseNativeValidation&&!t,s);if(l[e.name]&&(r.valid=!1,t))break;t||(g(l,e.name)?s?W(u.errors,l,e.name):U(u.errors,e.name,l[e.name]):ey(u.errors,e.name))}s&&await X(s,t,r)}}return r.valid},Y=(e,t)=>(e&&t&&U(x,e,t),!ev(en(),c)),ee=(e,t,r)=>B(e,V,{...A.mount?x:_(t)?c:E(e)?{[e]:t}:t},r,t),et=(e,t,r={})=>{let a=g(d,e),i=t;if(a){let r=a._f;r&&(r.disabled||U(x,e,ew(t,r)),i=H(r.ref)&&l(t)?"":t,eh(r.ref)?[...r.ref.options].forEach(e=>e.selected=i.includes(e.value)):r.refs?s(r.ref)?r.refs.length>1?r.refs.forEach(e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(i)?!!i.find(t=>t===e.value):i===e.value)):r.refs[0]&&(r.refs[0].checked=!!i):r.refs.forEach(e=>e.checked=e.value===i):Z(r.ref)?r.ref.value="":(r.ref.value=i,r.ref.type||k.values.next({name:e,values:{...x}})))}(r.shouldDirty||r.shouldTouch)&&$(e,i,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&eu(e)},er=(e,t,r)=>{for(let a in t){let s=t[a],l=`${e}.${a}`,u=g(d,l);!V.array.has(e)&&eg(s)&&(!u||u._f)||i(s)?et(l,s,r):er(l,s,r)}},ea=(e,r,a={})=>{let s=g(d,e),i=V.array.has(e),n=m(r);U(x,e,n),i?(k.array.next({name:e,values:{...x}}),(w.isDirty||w.dirtyFields)&&a.shouldDirty&&k.state.next({name:e,dirtyFields:eF(c,x),isDirty:Y(e,n)})):!s||s._f||l(n)?et(e,n,a):er(e,n,a),I(e,V)&&k.state.next({...u}),k.values.next({name:e,values:{...x}}),A.mount||t()},es=async e=>{let t=e.target,s=t.name,i=!0,l=g(d,s),n=e=>{i=Number.isNaN(e)||e===g(x,s,e)};if(l){let f,c;let y=t.type?eS(l._f):o(e),m=e.type===h.BLUR||e.type===h.FOCUS_OUT,p=!eC(l._f)&&!a.resolver&&!g(u.errors,s)&&!l._f.deps||eO(m,g(u.touchedFields,s),u.isSubmitted,O,j),_=I(s,V,m);U(x,s,y),m?(l._f.onBlur&&l._f.onBlur(e),r&&r(0)):l._f.onChange&&l._f.onChange(e);let v=$(s,y,m,!1),b=!S(v)||_;if(m||k.values.next({name:s,type:e.type,values:{...x}}),p)return w.isValid&&N(),b&&k.state.next({name:s,..._?{}:v});if(!m&&_&&k.state.next({...u}),R(!0),a.resolver){let{errors:e}=await Q([s]);if(n(y),i){let t=ej(u.errors,d,s),r=ej(e,d,t.name||s);f=r.error,s=r.name,c=S(e)}}else f=(await ei(l,x,L,a.shouldUseNativeValidation))[s],n(y),i&&(f?c=!1:w.isValid&&(c=await X(d,!0)));i&&(l._f.deps&&eu(l._f.deps),K(s,c,f,v))}},el=(e,t)=>{if(g(u.errors,t)&&e.focus)return e.focus(),1},eu=async(e,t={})=>{let r,s;let i=D(e);if(R(!0),a.resolver){let t=await J(_(e)?e:i);r=S(t),s=e?!i.some(e=>g(t,e)):r}else e?((s=(await Promise.all(i.map(async e=>{let t=g(d,e);return await X(t&&t._f?{[e]:t}:t)}))).every(Boolean))||u.isValid)&&N():s=r=await X(d);return k.state.next({...!E(e)||w.isValid&&r!==u.isValid?{}:{name:e},...a.resolver||!e?{isValid:r}:{},errors:u.errors,isValidating:!1}),t.shouldFocus&&!s&&P(d,el,e?i:V.mount),s},en=e=>{let t={...c,...A.mount?x:{}};return _(e)?t:E(e)?g(t,e):e.map(e=>g(t,e))},eo=(e,t)=>({invalid:!!g((t||u).errors,e),isDirty:!!g((t||u).dirtyFields,e),isTouched:!!g((t||u).touchedFields,e),error:g((t||u).errors,e)}),ed=(e,t,r)=>{let a=(g(d,e,{_f:{}})._f||{}).ref;U(u.errors,e,{...t,ref:a}),k.state.next({name:e,errors:u.errors,isValid:!1}),r&&r.shouldFocus&&a&&a.focus&&a.focus()},ef=(e,t={})=>{for(let r of e?D(e):V.mount)V.mount.delete(r),V.array.delete(r),t.keepValue||(ey(d,r),ey(x,r)),t.keepError||ey(u.errors,r),t.keepDirty||ey(u.dirtyFields,r),t.keepTouched||ey(u.touchedFields,r),a.shouldUnregister||t.keepDefaultValue||ey(c,r);k.values.next({values:{...x}}),k.state.next({...u,...t.keepDirty?{isDirty:Y()}:{}}),t.keepIsValid||N()},ec=({disabled:e,name:t,field:r,fields:a,value:s})=>{if(v(e)){let i=e?void 0:_(s)?eS(r?r._f:g(a,t)._f):s;U(x,t,i),$(t,i,!1,!1,!0)}},em=(e,t={})=>{let r=g(d,e),s=v(t.disabled);return U(d,e,{...r||{},_f:{...r&&r._f?r._f:{ref:{name:e}},name:e,mount:!0,...t}}),V.mount.add(e),r?ec({field:r,disabled:t.disabled,name:e}):z(e,!0,t.value),{...s?{disabled:t.disabled}:{},...a.progressive?{required:!!t.required,min:eD(t.min),max:eD(t.max),minLength:eD(t.minLength),maxLength:eD(t.maxLength),pattern:eD(t.pattern)}:{},name:e,onChange:es,onBlur:es,ref:s=>{if(s){em(e,t),r=g(d,e);let a=_(s.value)&&s.querySelectorAll&&s.querySelectorAll("input,select,textarea")[0]||s,i=eb(a),l=r._f.refs||[];(i?l.find(e=>e===a):a===r._f.ref)||(U(d,e,{_f:{...r._f,...i?{refs:[...l.filter(ex),a,...Array.isArray(g(c,e))?[{}]:[]],ref:{type:a.type,name:e}}:{ref:a}}}),z(e,!1,void 0,a))}else(r=g(d,e,{}))._f&&(r._f.mount=!1),(a.shouldUnregister||t.shouldUnregister)&&!(f(V.array,e)&&A.action)&&V.unMount.add(e)}}},ep=()=>a.shouldFocusError&&P(d,el,V.mount),eA=(e,t)=>async r=>{r&&(r.preventDefault&&r.preventDefault(),r.persist&&r.persist());let s=m(x);if(k.state.next({isSubmitting:!0}),a.resolver){let{errors:e,values:t}=await Q();u.errors=e,s=t}else await X(d);ey(u.errors,"root"),S(u.errors)?(k.state.next({errors:{}}),await e(s,r)):(t&&await t({...u.errors},r),ep(),setTimeout(ep)),k.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:S(u.errors),submitCount:u.submitCount+1,errors:u.errors})},eV=(r,a={})=>{let s=r?m(r):c,i=m(s),l=r&&!S(r)?i:c;if(a.keepDefaultValues||(c=s),!a.keepValues){if(a.keepDirtyValues||C)for(let e of V.mount)g(u.dirtyFields,e)?U(l,e,g(x,e)):ea(e,g(l,e));else{if(y&&_(r))for(let e of V.mount){let t=g(d,e);if(t&&t._f){let e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(H(e)){let t=e.closest("form");if(t){t.reset();break}}}}d={}}x=e.shouldUnregister?a.keepDefaultValues?m(c):{}:m(l),k.array.next({values:{...l}}),k.values.next({values:{...l}})}V={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},A.mount||t(),A.mount=!w.isValid||!!a.keepIsValid,A.watch=!!e.shouldUnregister,k.state.next({submitCount:a.keepSubmitCount?u.submitCount:0,isDirty:a.keepDirty?u.isDirty:!!(a.keepDefaultValues&&!ev(r,c)),isSubmitted:!!a.keepIsSubmitted&&u.isSubmitted,dirtyFields:a.keepDirtyValues?u.dirtyFields:a.keepDefaultValues&&r?eF(c,r):{},touchedFields:a.keepTouched?u.touchedFields:{},errors:a.keepErrors?u.errors:{},isSubmitSuccessful:!!a.keepIsSubmitSuccessful&&u.isSubmitSuccessful,isSubmitting:!1})},eL=(e,t)=>eV(G(e)?e(x):e,t);return{control:{register:em,unregister:ef,getFieldState:eo,handleSubmit:eA,setError:ed,_executeSchema:Q,_getWatch:ee,_getDirty:Y,_updateValid:N,_removeUnmounted:()=>{for(let e of V.unMount){let t=g(d,e);t&&(t._f.refs?t._f.refs.every(e=>!ex(e)):!ex(t._f.ref))&&ef(e)}V.unMount=new Set},_updateFieldArray:(e,t=[],r,a,s=!0,i=!0)=>{if(a&&r){if(A.action=!0,i&&Array.isArray(g(d,e))){let t=r(g(d,e),a.argA,a.argB);s&&U(d,e,t)}if(i&&Array.isArray(g(u.errors,e))){let t=r(g(u.errors,e),a.argA,a.argB);s&&U(u.errors,e,t),eE(u.errors,e)}if(w.touchedFields&&i&&Array.isArray(g(u.touchedFields,e))){let t=r(g(u.touchedFields,e),a.argA,a.argB);s&&U(u.touchedFields,e,t)}w.dirtyFields&&(u.dirtyFields=eF(c,x)),k.state.next({name:e,isDirty:Y(e,t),dirtyFields:u.dirtyFields,errors:u.errors,isValid:u.isValid})}else U(x,e,t)},_updateDisabledField:ec,_getFieldArray:t=>p(g(A.mount?x:c,t,e.shouldUnregister?g(c,t,[]):[])),_reset:eV,_resetDefaultValues:()=>G(a.defaultValues)&&a.defaultValues().then(e=>{eL(e,a.resetOptions),k.state.next({isLoading:!1})}),_updateFormState:e=>{u={...u,...e}},_disableForm:t=>{v(e.disabled)&&(k.state.next({disabled:e.disabled}),P(d,e=>{e.disabled=t},0,!1))},_subjects:k,_proxyFormState:w,get _fields(){return d},get _formValues(){return x},get _state(){return A},set _state(value){A=value},get _defaultValues(){return c},get _names(){return V},set _names(value){V=value},get _formState(){return u},set _formState(value){u=value},get _options(){return a},set _options(value){a={...a,...value}}},trigger:eu,register:em,handleSubmit:eA,watch:(e,t)=>G(e)?k.values.subscribe({next:r=>e(ee(void 0,t),r)}):ee(e,t,!0),setValue:ea,getValues:en,reset:eL,resetField:(e,t={})=>{g(d,e)&&(_(t.defaultValue)?ea(e,g(c,e)):(ea(e,t.defaultValue),U(c,e,t.defaultValue)),t.keepTouched||ey(u.touchedFields,e),t.keepDirty||(ey(u.dirtyFields,e),u.isDirty=t.defaultValue?Y(e,g(c,e)):Y()),!t.keepError&&(ey(u.errors,e),w.isValid&&N()),k.state.next({...u}))},clearErrors:e=>{e&&D(e).forEach(e=>ey(u.errors,e)),k.state.next({errors:e?u.errors:{}})},unregister:ef,setError:ed,setFocus:(e,t={})=>{let r=g(d,e),a=r&&r._f;if(a){let e=a.refs?a.refs[0]:a.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:eo}}(e,()=>d(e=>({...e}))),formState:u});let c=t.current.control;return c._options=e,j({subject:c._subjects.state,next:e=>{k(e,c._proxyFormState,c._updateFormState,!0)&&d({...c._formState})}}),a.useEffect(()=>c._disableForm(e.disabled),[c,e.disabled]),a.useEffect(()=>{e.values&&!ev(e.values,r.current)?(c._reset(e.values,c._options.resetOptions),r.current=e.values):c._resetDefaultValues()},[e.values,c]),a.useEffect(()=>{c._state.mount||(c._updateValid(),c._state.mount=!0),c._state.watch&&(c._state.watch=!1,c._subjects.state.next({...c._formState})),c._removeUnmounted()}),t.current.formState=w(u,c),t.current}}}]);
//# sourceMappingURL=9091-a2bc8779c5cb5afd.js.map