(this.webpackJsonptmdb=this.webpackJsonptmdb||[]).push([[0],{11:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAASklEQVRoge3WoRHAIAADQNqBUF2MSboYioVAtwrRu4j+y6jEpRQAIOd4B7W3mSiya1z3o/OZKvIVAwAgyRdKMwAAknyhNAMAgD9bExUMFjaScHYAAAAASUVORK5CYII="},12:function(e,t,a){e.exports=a(19)},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(10),l=a.n(r),i=(a(17),a(1)),c=a.n(i),o=a(2),u=a(4),m=a(5),d=a(7),p=a(6),g=a(8);var h=function(e,t,a){var n;return function(){var s=this,r=arguments,l=function(){n=null,a||e.apply(s,r)},i=a&&!n;clearTimeout(n),n=setTimeout(l,t),i&&e.apply(s,r)}};a(3);var v=function(e){return s.a.createElement("span",{className:"g-tag"},e.genres.find((function(t){return t.id===e.gid})).name)};var f=function(e){return s.a.createElement("div",{className:"item poster card"},s.a.createElement("div",{className:"image_content"},e.data.poster_path?s.a.createElement(s.a.Fragment,null,s.a.createElement("img",{className:"show-on-wide",src:e.data.poster_path&&"https://image.tmdb.org/t/p/w185_and_h278_bestv2".concat(e.data.poster_path),alt:"",style:{width:"183px",height:"278px"}}),s.a.createElement("img",{className:"show-on-mobile",src:e.data.poster_path&&"https://image.tmdb.org/t/p/w500_and_h282_face".concat(e.data.poster_path),alt:"",style:{width:"100%",height:"278px"}})):s.a.createElement("div",{className:"no-image"})),s.a.createElement("div",{className:"info"},s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"p-tag"},10*parseInt(e.data.vote_average),s.a.createElement("small",null,"%")),s.a.createElement("div",{style:{display:"inline-block",textAlign:"left"}},s.a.createElement("a",{id:"movie_".concat(e.data.id),className:"title result",href:"/movie/".concat(e.data.id,"?language=en-US"),title:e.data.title,alt:e.data.title},e.data.title),s.a.createElement("span",null,s.a.createElement("small",null,e.data.release_date)))),s.a.createElement("p",{className:"overview"},s.a.createElement("span",{className:"desc",title:e.data.overview},e.data.overview.length>300?e.data.overview.substring(0,300)+"...":e.data.overview),s.a.createElement("span",{className:"lang-tile"},s.a.createElement("b",null,"Original Language"),":"," ",s.a.createElement("small",null,e.data.original_language&&e.langs.find((function(t){return t.iso_639_1===e.data.original_language})).english_name)),s.a.createElement("span",{className:"lang-tile"},s.a.createElement("b",null,"Popularity"),": ",s.a.createElement("small",null,e.data.popularity))),s.a.createElement("div",{className:"tag-wrapper",style:{textAlign:"left",position:"absolute",bottom:"15px"}},e.data.genre_ids.length?e.data.genre_ids.map((function(t){return s.a.createElement(v,{genres:e.g.genres,key:t,gid:t})})):"")))},b=a(11),E=a.n(b),A=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"mobile-menu"},s.a.createElement("ul",null,s.a.createElement("li",null,"Popular Movies")))}}]),t}(n.Component),w=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).onKeyUp=h((function(t){e.loadData(1)}),400),e.state={data:{},g:[],langs:[],showMobileMenu:!1},e}return Object(g.a)(t,e),Object(m.a)(t,[{key:"loadData",value:function(){var e=Object(o.a)(c.a.mark((function e(t){var a,n,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.themoviedb.org/3/search/movie?api_key=c98d68ce201dd1845ce26a43f4f9d9d7&page=".concat(t,"&language=en-US&query=").concat(document.getElementById("search_text").value),n=fetch(a),e.next=4,n;case 4:return e.next=6,e.sent.json();case 6:s=e.sent,this.setState({data:s,page:t,total_pages:s.total_pages});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t,a,n,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=c98d68ce201dd1845ce26a43f4f9d9d7&language=en-US"),a=fetch("https://api.themoviedb.org/3/configuration/languages?api_key=c98d68ce201dd1845ce26a43f4f9d9d7"),e.next=4,t;case 4:return e.next=6,e.sent.json();case 6:return n=e.sent,e.next=9,a;case 9:return e.next=11,e.sent.json();case 11:s=e.sent,this.setState({g:n,langs:s});case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onPrevClick",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((t=this.state.page)>1)){e.next=4;break}return e.next=4,this.loadData(--t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onNextClick",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state.page,a=this.state.total_pages,!(t>0&&t<a)){e.next=5;break}return e.next=5,this.loadData(++t);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onMobileMenuClick",value:function(){var e=Object(o.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({showMobileMenu:!this.state.showMobileMenu});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("img",{src:"https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg",className:"App-logo",alt:"logo"}),s.a.createElement("div",{className:"title"},"Community built movie and TV database"),s.a.createElement("img",{src:E.a,alt:"menu",className:"burger-menu",onClick:function(t){return e.onMobileMenuClick(t)}})),s.a.createElement("div",{className:"search_bar"},s.a.createElement("section",{className:"search"},s.a.createElement("div",{className:"sub_media"},s.a.createElement("input",{id:"search_text",type:"text",placeholder:"Search for a movie, tv show, person...",className:"k-input",onKeyUp:function(t){return e.onKeyUp(t)}})))),s.a.createElement("section",{className:"content"},s.a.createElement("div",{style:{paddingTop:"10px"}},s.a.createElement("span",{style:{paddingTop:"10px",fontSize:"18px",fontWeight:"bold"}},this.state.data&&this.state.data.results&&this.state.data.results.length?"Search Results":"")),s.a.createElement("div",{className:"results flex"},this.state.data&&this.state.data.results&&this.state.data.results.length?this.state.data.results.map((function(t){return s.a.createElement(f,{key:t.id,data:t,g:e.state.g,langs:e.state.langs})})):""),s.a.createElement("div",{style:{paddingTop:"10px",marginBottom:"60px"}},s.a.createElement("span",{style:{paddingTop:"10px",fontSize:"18px",fontWeight:"bold"}},this.state.data&&this.state.data.results?"Total Results: "+this.state.data.total_results+" | ":""," "),s.a.createElement("small",null,this.state.data.page?"Total Pages "+this.state.data.total_pages:""),s.a.createElement("small",null,this.state.data.page?" | Page "+this.state.data.page:""))),this.state.data&&this.state.data.total_pages>1?s.a.createElement("section",{className:"pagination"},s.a.createElement("img",{className:"prev-page",onClick:function(t){return e.onPrevClick(t)},alt:"",src:"https://img.icons8.com/flat_round/64/000000/circled-left-2--v1.png"}),s.a.createElement("img",{className:"next-page",onClick:function(t){return e.onNextClick(t)},alt:"",src:"https://img.icons8.com/flat_round/64/000000/circled-right-2--v1.png"})):"",this.state.showMobileMenu?s.a.createElement(A,null):"")}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.968b331f.chunk.js.map