var e={d:(t,s)=>{for(var r in s)e.o(s,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:s[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{Z:()=>s});const s=class{constructor(e="localStorageDB"){this.name=e,this.storage=void 0===window.localStorage?void 0:window.localStorage,this.supported=void 0!==this.storage}parseValue(e){let t;try{t=JSON.parse(e),void 0===t&&(t=e),"true"===t&&(t=!0),"false"===t&&(t=!1),window.parseFloat(t)===t&&"object"!=typeof t&&(t=window.parseFloat(t))}catch(s){t=e}return t}set(e){let t=this.get(),s=t?Object.assign(t,e):e,r=JSON.stringify(s);return this.storage.setItem(this.name,r),this.parseValue(r)}get(e){let t=this.storage.getItem(this.name);return t=this.parseValue(t),e?t?t[e]:null:t}remove(e){let t=this.storage.getItem(this.name);if(t=this.parseValue(t),e){if(t&&t[e]){delete t[e];let s=JSON.stringify(t);this.storage.setItem(this.name,s)}}else this.storage.removeItem(this.name);return!0}clearAll(){this.storage.removeItem(this.name)}};var r=t.Z;export{r as default};