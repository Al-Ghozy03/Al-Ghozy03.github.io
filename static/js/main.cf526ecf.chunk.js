(this["webpackJsonpbelajar-react"]=this["webpackJsonpbelajar-react"]||[]).push([[0],{33:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(27),r=a.n(s),i=(a(33),a(11)),l=a(2),o=a(8),j=a.n(o),d=a(12),u=a(9),b=a(13),x=a.n(b),p=a(0);function h(e){var t=n.a.useState([]),a=Object(u.a)(t,2),c=a[0],s=a[1],r=n.a.useState([]),i=Object(u.a)(r,2),o=(i[0],i[1],Object(l.f)().slug),b=function(){var e=Object(d.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.npoint.io/99c279bb173a6e28359c/surat/".concat(o),e.prev=1,e.next=4,x.a.get(t);case 4:a=e.sent,console.log(a.data),console.log("sukses"),s(a.data),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();return n.a.useEffect((function(){b()}),[]),console.log({slug:o}),Object(p.jsx)(n.a.Fragment,{children:Object(p.jsx)("div",{className:"text-right px-24",children:null===c||void 0===c?void 0:c.map((function(e,t){return Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:"text-5xl my-10 text-gray-700",children:e.ar}),Object(p.jsxs)("p",{className:"text-3xl",children:[Object(p.jsxs)("p",{className:"font-semibold text-gray-800",children:["Ayat ",e.nomor]}),e.id]})]},t)}))})})}function m(e){return Object(p.jsx)(n.a.Fragment,{children:Object(p.jsx)("div",{className:"my-3 capitalize ",children:Object(p.jsxs)(i.b,{exact:!0,to:"/".concat(e.nomor),className:"text-center border grid grid-cols-5 hover:text-white hover:bg-purple-500 py-3",children:[Object(p.jsx)("p",{children:e.nomor}),Object(p.jsx)("p",{className:"text-2xl font-semibold",children:e.asma}),Object(p.jsx)("p",{children:e.arti}),Object(p.jsx)("p",{children:e.ayat}),Object(p.jsx)("p",{children:e.type})]})})})}function O(){var e=n.a.useState([]),t=Object(u.a)(e,2),a=t[0],c=t[1],s=function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://al-quran-8d642.firebaseio.com/data.json?print=pretty",e.next=4,x.a.get("https://al-quran-8d642.firebaseio.com/data.json?print=pretty");case 4:t=e.sent,c(t.data),console.log(t.data),console.log("sukses"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return n.a.useEffect((function(){s()}),[]),Object(p.jsxs)(n.a.Fragment,{children:[Object(p.jsx)("h1",{className:"text-4xl font-semibold text-center capitalize",children:"daftar surat"}),Object(p.jsxs)("div",{className:"grid grid-cols-5 capitalize text-center text-xl font-semibold mt-12",children:[Object(p.jsx)("p",{children:"no"}),Object(p.jsx)("p",{children:"surat"}),Object(p.jsx)("p",{children:"arti"}),Object(p.jsx)("p",{children:"jumlah ayat"}),Object(p.jsx)("p",{children:"jenis surat"})]}),Object(p.jsx)("div",{className:"",children:a.map((function(e,t){return Object(p.jsx)(m,{arti:e.arti,asma:e.asma,ayat:e.ayat,nomor:e.nomor,type:e.type},t)}))})]})}var g=a.p+"static/media/quran.b67d128d.png";function f(){return Object(p.jsx)(n.a.Fragment,{children:Object(p.jsxs)("div",{className:"grid grid-cols-8 py-16 px-20",children:[Object(p.jsxs)("div",{className:"col-span-4 mt-24",children:[Object(p.jsx)("h1",{className:"text-6xl mb-7 font-semibold",children:"My Quran"}),Object(p.jsx)("p",{className:"text-lg",children:"Al-Qur'an, Qur'an, atau Quran, adalah sebuah kitab suci utama dalam agama Islam, yang umat Muslim percaya bahwa kitab ini diturunkan oleh Tuhan, kepada Nabi Muhammad. Kitab ini terbagi ke dalam beberapa surah dan setiap surahnya terbagi ke dalam beberapa ayat."}),Object(p.jsx)("div",{})]}),Object(p.jsx)("img",{className:"col-span-4",src:g,alt:""})]})})}function v(){return Object(p.jsx)(i.a,{children:Object(p.jsxs)(l.c,{children:[Object(p.jsxs)(l.a,{exact:!0,path:"/",children:[Object(p.jsx)(f,{}),Object(p.jsx)(O,{})]}),Object(p.jsx)(l.a,{path:"/:slug",children:Object(p.jsx)(h,{})})]})})}var y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,63)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root")),y()}},[[62,1,2]]]);
//# sourceMappingURL=main.cf526ecf.chunk.js.map