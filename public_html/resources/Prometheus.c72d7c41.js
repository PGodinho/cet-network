import{s as m}from"./service.541fc1e6.js";import{_ as p,G as _,r as g,o as c,c as v,w as o,a as u,t as a,b as r,F as l,d,e as f,n as b}from"./index.868de8fa.js";const n=Object.freeze({firing:"firing",pending:"pending",inactive:"inactive"}),y={name:"Prometheus",mixins:[m],props:{item:Object},components:{Generic:_},data:()=>({api:{status:"",count:0,alerts:{firing:0,inactive:0,pending:0}}}),computed:{count:function(){return this.countFiring()||this.countPending()||this.countInactive()||0},level:function(){return this.countFiring()?n.firing:this.countPending()?n.pending:n.inactive}},created(){this.fetchStatus()},methods:{fetchStatus:async function(){this.api=await this.fetch("api/v1/alerts").catch(t=>console.log(t))},countFiring:function(){var t,i;return this.api?(i=(t=this.api.data)==null?void 0:t.alerts)==null?void 0:i.filter(e=>e.state===n.firing).length:0},countPending:function(){var t,i;return this.api?(i=(t=this.api.data)==null?void 0:t.alerts)==null?void 0:i.filter(e=>e.state===n.pending).length:0},countInactive:function(){var t,i;return this.api?(i=(t=this.api.data)==null?void 0:t.alerts)==null?void 0:i.filter(e=>e.state===n.pending).length:0}}},k={class:"title is-4"},P={class:"subtitle is-6"};function x(t,i,e,F,B,s){const h=g("Generic");return c(),v(h,{item:e.item},{content:o(()=>[u("p",k,a(e.item.name),1),u("p",P,[e.item.subtitle?(c(),r(l,{key:0},[d(a(e.item.subtitle),1)],64)):t.api?(c(),r(l,{key:1},[d(a(s.count)+" "+a(s.level)+" alerts ",1)],64)):f("",!0)])]),indicator:o(()=>[t.api?(c(),r("div",{key:0,class:b(["status",s.level])},a(s.count),3)):f("",!0)]),_:1},8,["item"])}const S=p(y,[["render",x],["__scopeId","data-v-f5b9c928"]]);export{S as default};
