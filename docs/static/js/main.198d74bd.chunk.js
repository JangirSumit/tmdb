(this.webpackJsonptmdb=this.webpackJsonptmdb||[]).push([[0],[,,,,,,,,function(e,t,a){},,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAASklEQVRoge3WoRHAIAADQNqBUF2MSboYioVAtwrRu4j+y6jEpRQAIOd4B7W3mSiya1z3o/OZKvIVAwAgyRdKMwAAknyhNAMAgD9bExUMFjaScHYAAAAASUVORK5CYII="},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAACIElEQVQ4jX2T3UuTYRjGf/ezTZfQQjJjB/HiVhB40ub+gdTaFEGPxPAwIQjbUX9GJ0YdBEInjWJHiuDWi9o/oJMO+gCbzUGISxI/sNW29+5AN7dX6Tp6Pq77uu/nuu9HcKE3nW7zdVWGBBMX5QYAokUHtSu7vsyn8fG/zXxp3kQ/vBlBzQwQcgufIm/Q5Gr/5GL9wNQXfStvk6iZ/08wQNhBFqLLqemWCk4zzzcLAryO3qOmytT6klvIUTUj6wMTGelNp9vau6qfgTDA01tROn1+FCXebQGQLW1hEPYqZZ5t5E4zy/fyrue213+tOqx6EgzQ6fOTuG5ROD7gxeZHAEaDIayOAJmdQqMERXvar1bjXkflvqDNFxSOD5hczVKu1QBI/9ggFUs0seoGaNyAWnUzZiODxLst5rbzjWCA37Uq89t5Et0Ws5HBs9apsYxwJiwtTW3FuewARtUAW3XCw9wSdqnIaDCM3+Np8C55vIwFQ9ilIlPrS2diqkWvg9oGedws3NMRIBVLMLedB2AsGMbqCPD1aM/tQdbrCRwt6kHgG+hNgL1KmcxOAUFIhu4AYJeKfDn8xX6lZYo3//xsswUgtpIadpAFXIM0GxkEuGiQaqJmeG1gwm7YFl1OTSMy4xa5AA4iydzdBy/B9Zkiy++GRPR5/TnnoGwg+iTXP/m+YYOb07f6yqf7lxOIxlFzMsuGAo7acuUwuxZ7VGnm/wPOJdGWeipTrwAAAABJRU5ErkJggg=="},function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),i=a.n(s),o=(a(18),a(1)),c=a.n(o),l=a(2),u=a(3),d=a(4),p=a(6),m=a(5),g=a(7);var h=function(e,t,a){var n;return function(){var r=this,s=arguments,i=function(){n=null,a||e.apply(r,s)},o=a&&!n;clearTimeout(n),n=setTimeout(i,t),o&&e.apply(r,s)}};a(8);var f=function(e){return r.a.createElement("span",{className:"g-tag"},e.genres.find((function(t){return t.id===e.gid})).name)};var v=function(e){for(var t=[],a=1;a<=10;a++)a<=e.vote_average?t.push(r.a.createElement("span",{key:a,className:"fa fa-star checked"})):t.push(r.a.createElement("span",{key:a,className:"fa fa-star"}));return t};var w=function(e){return r.a.createElement("div",{className:"item poster card"},r.a.createElement("div",{className:"image_content"},e.data.poster_path?r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"show-on-wide",src:e.data.poster_path&&"https://image.tmdb.org/t/p/w185_and_h278_bestv2".concat(e.data.poster_path),alt:"",style:{width:"183px",height:"278px"}}),r.a.createElement("img",{className:"show-on-mobile",src:e.data.poster_path&&"https://image.tmdb.org/t/p/w500_and_h282_face".concat(e.data.backdrop_path),alt:"",style:{width:"100%",height:"278px"}})):r.a.createElement("div",{className:"no-image"})),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"p-tag"},10*parseInt(e.data.vote_average),r.a.createElement("small",null,"%")),r.a.createElement("div",{style:{display:"inline-block",textAlign:"left",width:"calc(100% - 65px)"}},r.a.createElement("a",{id:"movie_".concat(e.data.id),className:"title result",href:"/movie/".concat(e.data.id,"?language=en-US"),title:e.data.title,alt:e.data.title},e.data.title),r.a.createElement("span",null,r.a.createElement("small",null,e.data.release_date)))),r.a.createElement("p",{className:"overview"},r.a.createElement("span",{className:"desc",title:e.data.overview},e.data.overview.length>200?e.data.overview.substring(0,200)+"...":e.data.overview),r.a.createElement("span",{className:"lang-tile"},r.a.createElement("b",null,"Original Language"),":"," ",r.a.createElement("small",null,e.data.original_language&&e.langs.find((function(t){return t.iso_639_1===e.data.original_language})).english_name)),r.a.createElement("span",{className:"lang-tile"},r.a.createElement("b",null,"Popularity"),": ",r.a.createElement("small",null,e.data.popularity))),r.a.createElement("div",{className:"tag-wrapper",style:{textAlign:"left",bottom:"15px"}},e.data.genre_ids.length?e.data.genre_ids.map((function(t){return r.a.createElement(f,{genres:e.g.genres,key:t,gid:t})})):""),r.a.createElement("div",{className:"star-ratings"},r.a.createElement(v,{vote_average:e.data.vote_average})," ",r.a.createElement("span",{style:{color:"grey"}},"(",e.data.vote_count,")"))))},b=a(11),k=a.n(b),y=a(12),A=a.n(y),E=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"onMobileMenuClick",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.onMobileMenuItemClick({label:t.target.innerText,api:t.target.dataset.api});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onSettingsClick",value:function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.onSettingsClick();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"mobile-menu"},r.a.createElement("ul",null,[{label:"Popular Movies",api:"/discover/movie?sort_by=popularity.desc"},{label:"Highest Rated Movies",api:"/discover/movie?certification=R&sort_by=vote_average.desc"},{label:"Popular Kids Movies",api:"/discover/movie?certification.lte=G&sort_by=popularity.desc"},{label:"Best Movies of 2019",api:"/discover/movie?primary_release_year=2019&sort_by=vote_average.desc"},{label:"Highest Rated Sci-fi Movies",api:"/discover/movie?with_genres=878&sort_by=vote_average.desc"}].map((function(t){return r.a.createElement("li",{key:t.label,onClick:function(t){return e.onMobileMenuClick(t)},"data-api":t.api},t.label)}))),r.a.createElement("div",{className:"settings-wrapper",onClick:function(){return e.onSettingsClick()}},r.a.createElement("img",{src:A.a}),r.a.createElement("span",null,"Settings")))}}]),t}(n.Component),x=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"onHomeClick",value:function(e){this.props.onHomeClick()}},{key:"onLangChange",value:function(e){window.localStorage.setItem("lang",e.target.value)}},{key:"onCountryChange",value:function(e){window.localStorage.setItem("country",e.target.value)}},{key:"render",value:function(){var e=this,t=window.localStorage.getItem("lang")||"en",a=window.localStorage.getItem("country")||"IN";return r.a.createElement("div",{className:"settings-page-wrapper"},r.a.createElement("div",{className:"nav-bar"},r.a.createElement("span",{className:"home-span",onClick:function(t){return e.onHomeClick(t)}},"Home")," ","> ",r.a.createElement("small",null,"Settings")),r.a.createElement("h2",null,"Settings"),r.a.createElement("p",null,"Select Language"),r.a.createElement("select",{id:"language",onChange:function(t){return e.onLangChange(t)},defaultValue:t},this.props.langs.map((function(e){return r.a.createElement("option",{key:e.iso_639_1,value:e.iso_639_1},e.english_name)}))),r.a.createElement("p",null,"Select Country"),r.a.createElement("select",{id:"country",onChange:function(t){return e.onCountryChange(t)},defaultValue:a},this.props.countries.map((function(e){return r.a.createElement("option",{key:e.iso_3166_1,value:e.iso_3166_1},e.english_name)}))))}}]),t}(n.Component),M=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(m.a)(t).call(this))).onKeyUp=h((function(t){e.loadData(1)}),400),e.state={data:{},g:[],langs:[],showMobileMenu:!1,resultText:"",selectedMenu:"",showSettings:!1},e}return Object(g.a)(t,e),Object(d.a)(t,[{key:"loadData",value:function(){var e=Object(l.a)(c.a.mark((function e(t){var a,n,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=window.localStorage.getItem("lang")||"en-US",n="https://api.themoviedb.org/3/search/movie?api_key=c98d68ce201dd1845ce26a43f4f9d9d7&page=".concat(t,"&language=").concat(a,"&query=").concat(document.getElementById("search_text").value),r=fetch(n),e.next=5,r;case 5:return e.next=7,e.sent.json();case 7:s=e.sent,this.setState({data:s,page:t,total_pages:s.total_pages,resultText:"Search Results",selectedMenu:""});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,r,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.addEventListener("scroll",this.handleScroll.bind(this)),t=fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=c98d68ce201dd1845ce26a43f4f9d9d7&language=en-US"),a=fetch("https://api.themoviedb.org/3/configuration/languages?api_key=c98d68ce201dd1845ce26a43f4f9d9d7"),n=fetch("https://api.themoviedb.org/3/configuration/countries?api_key=c98d68ce201dd1845ce26a43f4f9d9d7"),e.next=6,t;case 6:return e.next=8,e.sent.json();case 8:return r=e.sent,e.next=11,a;case 11:return e.next=13,e.sent.json();case 13:return s=e.sent,e.next=16,n;case 16:return e.next=18,e.sent.json();case 18:i=e.sent,this.setState({g:r,langs:s,countries:i});case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onMobileMenuItemClick",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({selectedMenu:t}),e.next=3,this.loadMenuData(1,t.api,t.label);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onPrevClick",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((t=this.state.page)>1)){e.next=8;break}if(this.state.selectedMenu){e.next=7;break}return e.next=5,this.loadData(--t);case 5:e.next=8;break;case 7:this.loadMenuData(--t,this.state.selectedMenu.api,this.state.selectedMenu.label);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onNextClick",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state.page,a=this.state.total_pages,!(t>0&&t<a)){e.next=9;break}if(this.state.selectedMenu){e.next=8;break}return e.next=6,this.loadData(++t);case 6:e.next=9;break;case 8:this.loadMenuData(++t,this.state.selectedMenu.api,this.state.selectedMenu.label);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadMenuData",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,r,s,i,o,l=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:1,a=l.length>1?l[1]:void 0,n=l.length>2?l[2]:void 0,r=window.localStorage.getItem("lang")||"en-US",s="https://api.themoviedb.org/3".concat(a,"&api_key=c98d68ce201dd1845ce26a43f4f9d9d7&page=").concat(t,"&language=").concat(r),i=fetch(s),e.next=8,i;case 8:return e.next=10,e.sent.json();case 10:o=e.sent,this.setState({data:o,page:t,total_pages:o.total_pages,resultText:n,showMobileMenu:!1});case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onMobileMenuClick",value:function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({showMobileMenu:!this.state.showMobileMenu});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onSettingsClick",value:function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({showSettings:!0,showMobileMenu:!1});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onHomeClick",value:function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({showSettings:!1,showMobileMenu:!1});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){this.setState({showMobileMenu:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:"https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg",className:"App-logo",alt:"logo",onClick:function(t){return e.onHomeClick(t)}}),r.a.createElement("div",{className:"title",onClick:function(t){return e.onHomeClick(t)}},"Community built movie and TV database"),r.a.createElement("img",{src:k.a,alt:"menu",className:"burger-menu",onClick:function(t){return e.onMobileMenuClick(t)}})),this.state.showSettings?r.a.createElement(x,{langs:this.state.langs,countries:this.state.countries,onHomeClick:function(t){return e.onHomeClick(t)}}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"search_bar"},r.a.createElement("section",{className:"search"},r.a.createElement("div",{className:"sub_media"},r.a.createElement("input",{id:"search_text",type:"text",placeholder:"Search for a movie, tv show, person...",className:"k-input",onKeyUp:function(t){return e.onKeyUp(t)}})))),r.a.createElement("section",{className:"content"},r.a.createElement("div",{style:{paddingTop:"10px"}},r.a.createElement("span",{style:{paddingTop:"10px",fontSize:"18px",fontWeight:"bold"}},this.state.data&&this.state.data.results&&this.state.data.results.length?this.state.resultText:"")),r.a.createElement("div",{className:"results flex"},this.state.data&&this.state.data.results&&this.state.data.results.length?this.state.data.results.map((function(t){return r.a.createElement(w,{key:t.id,data:t,g:e.state.g,langs:e.state.langs})})):""),r.a.createElement("div",{style:{paddingTop:"10px",marginBottom:"60px"}},r.a.createElement("span",{style:{paddingTop:"10px",fontSize:"18px",fontWeight:"bold"}},this.state.data&&this.state.data.results?"Total Results: "+this.state.data.total_results+" | ":""," "),r.a.createElement("small",null,this.state.data.page?"Total Pages "+this.state.data.total_pages:""),r.a.createElement("small",null,this.state.data.page?" | Page "+this.state.data.page:""))),r.a.createElement(r.a.Fragment,null,this.state.data&&this.state.data.total_pages>1?r.a.createElement("section",{className:"pagination"},r.a.createElement("img",{className:"prev-page",onClick:function(t){return e.onPrevClick(t)},alt:"",src:"https://img.icons8.com/flat_round/64/000000/circled-left-2--v1.png"}),r.a.createElement("img",{className:"next-page",onClick:function(t){return e.onNextClick(t)},alt:"",src:"https://img.icons8.com/flat_round/64/000000/circled-right-2--v1.png"})):"")),this.state.showMobileMenu?r.a.createElement(E,{onMobileMenuItemClick:function(t){return e.onMobileMenuItemClick(t)},onSettingsClick:function(t){return e.onSettingsClick(t)}}):"")}}]),t}(n.Component),_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(M,null),document.getElementById("root")),function(e){if(console.log("******** ".concat(""," *********")),"serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");_?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(t,e)}))}}()}],[[13,1,2]]]);
//# sourceMappingURL=main.198d74bd.chunk.js.map