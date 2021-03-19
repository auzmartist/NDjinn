var t,n=Object.assign,e=new Uint8Array(16);function r(){if(!t&&!(t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(e)}var o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function u(t){return"string"==typeof t&&o.test(t)}for(var a,i,s=[],p=0;p<256;++p)s.push((p+256).toString(16).substr(1));function c(t,n,e){var o=(t=t||{}).random||(t.rng||r)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,n){e=e||0;for(var a=0;a<16;++a)n[e+a]=o[a];return n}return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(s[t[n+0]]+s[t[n+1]]+s[t[n+2]]+s[t[n+3]]+"-"+s[t[n+4]]+s[t[n+5]]+"-"+s[t[n+6]]+s[t[n+7]]+"-"+s[t[n+8]]+s[t[n+9]]+"-"+s[t[n+10]]+s[t[n+11]]+s[t[n+12]]+s[t[n+13]]+s[t[n+14]]+s[t[n+15]]).toLowerCase();if(!u(e))throw TypeError("Stringified UUID is invalid");return e}(o)}(i=a||(a={})).any="any",i.str="string",i.num="number",i.obj="object",i.vec2="vec2",i.vec3="vec3",i.rgb="rgb",i.hsl="hsl",i.vec4="vec4",i.rgba="rgba",i.mat2="mat2",i.mat3="mat3",i.mat4="mat4";const d=t=>[...Array(t).keys()];function f(t,e,r){const o=function(t,n){var e;const r=(null==n?void 0:n.inputTypes)||(null==(e=d(t.length))?void 0:e.map((t=>a.any))),o=(null==n?void 0:n.outputTypes)||[];return(...n)=>{var e,u;let a=t(...n)||[];return a.__inputs__=null==(e=d(t.length))?void 0:e.map(((t,e)=>r[e]||typeof n[e])),a.__outputs__=null==(u=d(a.length))?void 0:u.map(((t,n)=>o[n]||typeof a[n])),a}}(t,{inputTypes:(r=n({in:[],out:[]},r||{})).in.map((t=>t.type)),outputTypes:r.out.map((t=>t.type))}),u=o(...e);let i=e.map(((t,e)=>n(n({},r.in[e]),{value:t,connected:[]}))),s=u.map(((t,e)=>n(n({},r.out[e]),{value:t,connected:[]})));let p=new Proxy(i,(t=>({set:(n,e,r)=>{try{n[e]=r}catch(o){return!1}finally{return t(r),!0}}}))((()=>y())));const f={},l=[],m={id:c(),inputs:i,outputs:s,run:y,set:function(t){Array.isArray(t)?Object.assign(p,t.map(((t,e)=>n(n({},i[e]),{value:t})))):"object"==typeof t?Object.entries(t).forEach((([t,e])=>{let r=isNaN(parseInt(t))?(t=>i.findIndex((n=>n.name===t)))(t):t;if(!(r>-1))throw new Error(`Unrecognized input name '${t}'.`);p[r]=n(n({},i[r]),{value:e})})):"function"==typeof t?Object.assign(p,t(...i.map((t=>t.value))).map(((t,e)=>n(n({},i[e]),{value:t})))):Object.assign(p,[t].map(((t,e)=>n(n({},i[e]),{value:t}))));return l.forEach((t=>t(m))),m},pipe:function(t,n=v){return f[t.id]={node:t,pipe:n},m.outputs.forEach(((n,e)=>n.connected.push({id:t.id,idx:e}))),t.inputs.forEach(((t,n)=>t.connected.push({id:m.id,idx:n}))),m.run(),t},connect:function(t,n,e){return f[n.id]={node:n,pipe:(...n)=>({[e]:n[t]})},m.outputs[t].connected.push({id:n.id,idx:e}),n.inputs[e].connected.push({id:m.id,idx:t}),m.run(),l.forEach((t=>t(m))),m},subscribe:function(t){return l.push(t),l.length-1},unsubscribe:function(t){return!(t>l.length)&&(l.splice(t,1),!0)}};function y(t=i.map((t=>t.value))){const e=o(...t);return Object.assign(s,e.map(((t,e)=>n(n({},s[e]),{value:t})))),Object.values(f).forEach((({node:t,pipe:n})=>t.set(n(...e)))),l.forEach((t=>t(m))),m}const v=(...t)=>[...t];return m}export{a as DT,f as create};
