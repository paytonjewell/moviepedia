(this.webpackJsonpmoviepedia=this.webpackJsonpmoviepedia||[]).push([[0],[,,,,function(e,n,t){e.exports={main:"MovieInfo_main__2CG-9",poster:"MovieInfo_poster__3L0Xe",movieText:"MovieInfo_movieText__3JcA6",headerInfo:"MovieInfo_headerInfo__nHrwo",description:"MovieInfo_description__3Qw8q",whereTos:"MovieInfo_whereTos__2iXS8",disney:"MovieInfo_disney__3uQMz",cast:"MovieInfo_cast__1_k96"}},,,function(e,n,t){e.exports={main:"TopBar_main__2ntxh",slidein:"TopBar_slidein__lNW6Y",full:"TopBar_full__3oQqw",abbr:"TopBar_abbr__3Ijjj",slideout:"TopBar_slideout__2qo9t",search:"TopBar_search__2bQjJ",searching:"TopBar_searching__1HKT_"}},function(e,n,t){e.exports={main:"MoviePoster_main__gxVUl",poster:"MoviePoster_poster__3Ei73",hover:"MoviePoster_hover__2SsGQ",large:"MoviePoster_large__49f__",small:"MoviePoster_small__1_Ggx",title:"MoviePoster_title__3HKls"}},,function(e,n,t){e.exports={main:"MovieModal_main__3FZwJ",card:"MovieModal_card__iYV7r",closeIcon:"MovieModal_closeIcon__2wgQy"}},function(e,n,t){e.exports={main:"CastCard_main__2DLtM",poster:"CastCard_poster__3cheb",textInfo:"CastCard_textInfo__3kJxF"}},function(e,n,t){e.exports={main:"CastModal_main__lLQr1",card:"CastModal_card__1gKg9",closeIcon:"CastModal_closeIcon__1CrPp"}},function(e,n,t){e.exports={main:"PersonInfo_main__1JHJ5",photo:"PersonInfo_photo__3-IBf",knownFor:"PersonInfo_knownFor__1cpcF"}},,,function(e,n,t){e.exports={main:"Home_main__hNC8H",showMovie:"Home_showMovie__2FQd5"}},,,,,,function(e,n,t){},,,,,,,function(e,n,t){"use strict";t.r(n);var c=t(1),i=t.n(c),o=t(17),s=t.n(o),a=(t(22),t(3)),r=t(7),l=t.n(r),d=t(6),u=t(5),j=t(0);var v=function(e){var n=e.onSearchMovies,t=Object(c.useState)(!1),i=Object(a.a)(t,2),o=i[0],s=i[1],r=Object(c.useState)(""),v=Object(a.a)(r,2),b=v[0],h=v[1],f=Object(c.useState)([]),m=Object(a.a)(f,2),p=m[0],_=m[1],O=G("/search/movie"),x="".concat(O,"&query=").concat(b);return Object(c.useEffect)((function(){p&&n(p)}),[p,n]),Object(c.useEffect)((function(){b?fetch(x).then((function(e){return e.json()})).then((function(e){return _(e.results)})):_([])}),[x,b]),Object(j.jsxs)("div",{className:l.a.main,children:[Object(j.jsxs)("h1",{children:[Object(j.jsx)("span",{className:l.a.abbr,children:"mp"}),Object(j.jsx)("span",{className:l.a.full,children:"moviepedia"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(d.a,{icon:u.a,onClick:function(){return s(!o)}}),Object(j.jsxs)("div",{className:D(l.a.search,o&&l.a.searching),children:[Object(j.jsx)("input",{type:"text",value:b,onChange:function(e){return h(e.target.value)}}),Object(j.jsx)(d.a,{icon:u.b,onClick:function(){h(""),s(!1)}})]})]})]})},b=t(8),h=t.n(b);var f=function(e){var n,t=e.movie,c=e.onClick,i=e.size,o=e.className,s=e.hover,a=null===t||void 0===t?void 0:t.poster_path,r=V(a),l=null===t||void 0===t||null===(n=t.release_date)||void 0===n?void 0:n.slice(0,4);return Object(j.jsxs)("div",{className:D(h.a.main,o),onClick:function(){return c(t)},children:[Object(j.jsx)("div",{className:D(h.a.poster,i&&h.a[i],s&&h.a.hover),style:{backgroundImage:"url(".concat(a?r:"https://critics.io/img/movies/poster-placeholder.png",")")}}),!i&&Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:h.a.title,children:t.title}),Object(j.jsx)("p",{children:l})]})]})},m=t(16),p=t.n(m),_=t(10),O=t.n(_),x=t(4),g=t.n(x),C=t(11),M=t.n(C);var k=function(e){var n=e.person,t=e.onClickCastCard,c=null===n||void 0===n?void 0:n.profile_path,i=V(c);return console.log("payton",c),Object(j.jsxs)("div",{className:M.a.main,onClick:function(){return t(n)},children:[Object(j.jsx)("div",{className:M.a.poster,style:{backgroundImage:"url(".concat(c?i:"https://d3uscstcbhvk7k.cloudfront.net/static/images/slider-placeholder-2x.png",")")}}),Object(j.jsxs)("div",{className:M.a.textInfo,children:[Object(j.jsx)("h4",{children:n.name}),Object(j.jsx)("p",{children:n.character})]})]})},N=t.p+"static/media/disney-plus.45ff3971.png",I=t.p+"static/media/netflix.cca6b5ba.jpeg",y=t.p+"static/media/hbo-max.a03cc0ef.png",S=t.p+"static/media/prime.2472dd12.jpeg",w=t.p+"static/media/googleplay.09c641b0.png",T=t.p+"static/media/yt.6f9e32ba.png",P=t.p+"static/media/vudu.213a0216.png";var B=function(e){var n,t,i,o,s=e.movie,r=e.onClickCastCard,l=null===s||void 0===s||null===(n=s.genres)||void 0===n?void 0:n.map((function(e){return e.name})),d=null===l||void 0===l?void 0:l.join(", "),u=G("/movie/".concat(s.id,"/credits")),v=G("/movie/".concat(s.id,"/watch/providers")),b=Object(c.useState)([]),h=Object(a.a)(b,2),m=h[0],p=h[1],_=Object(c.useState)([]),O=Object(a.a)(_,2),x=O[0],C=O[1],M=D("flatrate"),B=D("rent"),E=D("buy"),H=null===M||void 0===M||null===(t=M.concat(B))||void 0===t||null===(i=t.concat(E))||void 0===i?void 0:i.filter((function(e){return void 0!==e})),J=null===H||void 0===H?void 0:H.includes("Disney Plus"),Q=null===H||void 0===H?void 0:H.includes("Netflix"),F=null===H||void 0===H?void 0:H.includes("HBO Max"),z=null===H||void 0===H?void 0:H.includes("Amazon Video"),q=null===H||void 0===H?void 0:H.includes("Google Play Movies"),A=null===H||void 0===H?void 0:H.includes("YouTube"),V=null===H||void 0===H?void 0:H.includes("Vudu");function D(e){var n;return null===x||void 0===x||null===(n=x[e])||void 0===n?void 0:n.map((function(e){return e.provider_name}))}return Object(c.useEffect)((function(){fetch(u).then((function(e){return e.json()})).then((function(e){var n=e.cast,t=null===n||void 0===n?void 0:n.splice(0,5);p(t)})),fetch(v).then((function(e){return e.json()})).then((function(e){var n;return C(null===e||void 0===e||null===(n=e.results)||void 0===n?void 0:n.US)}))}),[u,v]),Object(j.jsxs)("div",{className:g.a.main,children:[Object(j.jsx)(f,{movie:s,size:"large",className:g.a.poster,hover:!1}),Object(j.jsxs)("div",{className:g.a.movieText,children:[Object(j.jsxs)("div",{className:g.a.headerInfo,children:[Object(j.jsxs)("h1",{children:[s.title," ",Object(j.jsxs)("span",{children:["(",null===s||void 0===s||null===(o=s.release_date)||void 0===o?void 0:o.slice(0,4),")"]})]}),Object(j.jsxs)("p",{children:[s.release_date," | ",d," | ",function(){var e=((null===s||void 0===s?void 0:s.runtime)/60).toString().split("."),n=e[0],t=Math.floor(60*("."+1*e[1]));return"".concat(n,"h ").concat(t,"m")}()]})]}),Object(j.jsxs)("div",{className:g.a.description,children:[Object(j.jsx)("h3",{children:"Description"}),Object(j.jsx)("p",{children:s.overview})]}),Object(j.jsxs)("div",{className:g.a.whereTos,children:[J&&Object(j.jsx)("img",{src:N,className:g.a.disney}),Q&&Object(j.jsx)("img",{src:I}),F&&Object(j.jsx)("img",{src:y}),z&&Object(j.jsx)("img",{src:S}),q&&Object(j.jsx)("img",{src:w}),A&&Object(j.jsx)("img",{src:T}),V&&Object(j.jsx)("img",{src:P})]}),Object(j.jsx)("div",{className:g.a.cast,children:null===m||void 0===m?void 0:m.map((function(e){return Object(j.jsx)(k,{person:e,onClickCastCard:r})}))})]})]})};var E=function(e){var n=e.movie,t=e.onCloseModal,i=e.onClickCastCard,o=function(e){return"https://image.tmdb.org/t/p/original".concat(e)}(n.backdrop_path),s=G("/movie/".concat(n.id)),r=Object(c.useState)({}),l=Object(a.a)(r,2),v=l[0],b=l[1];Object(c.useEffect)((function(){fetch(s).then((function(e){return e.json()})).then((function(e){return b(e)}))}),[s]);var h={backgroundImage:"url(".concat(o,")")};return Object(j.jsx)("div",{className:O.a.main,children:Object(j.jsx)("div",{className:O.a.card,style:h,children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:O.a.closeIcon,onClick:t,children:Object(j.jsx)(d.a,{icon:u.b})}),Object(j.jsx)(B,{movie:v,onClickCastCard:i})]})})})},H=t(12),J=t.n(H),Q=t(13),F=t.n(Q);var z=function(e){var n=e.person,t=e.onClickMovie,i=null===n||void 0===n?void 0:n.profile_path,o=V(i),s=G("/person/".concat(n.id,"/movie_credits")),r=Object(c.useState)([]),l=Object(a.a)(r,2),d=l[0],u=l[1];return Object(c.useEffect)((function(){fetch(s).then((function(e){return e.json()})).then((function(e){var n;return u(null===e||void 0===e||null===(n=e.cast)||void 0===n?void 0:n.splice(0,5))}))}),[s]),Object(j.jsxs)("div",{className:F.a.main,children:[Object(j.jsx)("div",{className:F.a.photo,style:{backgroundImage:"url(".concat(i?o:"https://d3uscstcbhvk7k.cloudfront.net/static/images/slider-placeholder-2x.png",")")}}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:n.name}),Object(j.jsx)("p",{children:n.biography})]}),Object(j.jsx)("div",{className:F.a.knownFor,children:null===d||void 0===d?void 0:d.map((function(e){return Object(j.jsx)(f,{movie:e,size:"small",onClick:t})}))})]})]})};var q=function(e){var n=e.person,t=e.onCloseModal,i=e.onClickMovie,o=Object(c.useState)({}),s=Object(a.a)(o,2),r=s[0],l=s[1],v=G("/person/".concat(null===n||void 0===n?void 0:n.id));return Object(c.useEffect)((function(){fetch(v).then((function(e){return e.json()})).then((function(e){return l(e)}))}),[v]),Object(j.jsx)("div",{className:J.a.main,children:Object(j.jsx)("div",{className:J.a.card,children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:J.a.closeIcon,onClick:t,children:Object(j.jsx)(d.a,{icon:u.b})}),Object(j.jsx)(z,{person:r,onClickMovie:i})]})})})};function A(e){var n=e.searchResults,t=G("/movie/popular"),i=Object(c.useState)([]),o=Object(a.a)(i,2),s=o[0],r=o[1],l=Object(c.useState)(!1),d=Object(a.a)(l,2),u=d[0],v=d[1],b=Object(c.useState)(!1),h=Object(a.a)(b,2),m=h[0],_=h[1],O=Object(c.useState)({}),x=Object(a.a)(O,2),g=x[0],C=x[1],M=Object(c.useState)({}),k=Object(a.a)(M,2),N=k[0],I=k[1];function y(e){v(!0),C(e)}return Object(c.useEffect)((function(){fetch(t).then((function(e){return e.json()})).then((function(e){return r(e.results)}))}),[t]),Object(j.jsxs)("div",{className:D(p.a.main,u&&p.a.showMovie),children:[n.length>0?n.map((function(e){return Object(j.jsx)(f,{movie:e,onClick:function(e){return y(e)},hover:!0})})):s.map((function(e){return Object(j.jsx)(f,{movie:e,onClick:y,hover:!0})})),u&&Object(j.jsx)(E,{movie:g,onCloseModal:function(){return v(!1)},onClickCastCard:function(e){return function(e){v(!1),I(e),_(!0)}(e)}}),m&&Object(j.jsx)(q,{person:N,onCloseModal:function(){return _(!1)},onClickMovie:function(e){return function(e){_(!1),I({}),v(!0),C(e)}(e)}})]})}function G(e){return"https://api.themoviedb.org/3".concat(e,"?api_key=4d91796accee221c06cb109a9805be7e")}function V(e){return"https://image.tmdb.org/t/p/original".concat(e)}function D(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return e})).join(" ")}var K=function(){var e=Object(c.useState)([]),n=Object(a.a)(e,2),t=n[0],i=n[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(v,{onSearchMovies:i}),Object(j.jsx)(A,{searchResults:t})]})};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(K,{})}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.8cd07473.chunk.js.map