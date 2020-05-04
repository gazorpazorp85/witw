(function(e){function t(t){for(var r,a,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/witw/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"state",(function(){return w})),n.d(r,"mutations",(function(){return M})),n.d(r,"actions",(function(){return x}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=n("f13c"),a=n.n(i),s=n("8c4f"),c=n("323e"),l=n.n(c),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home",class:{darkMode:e.isDarkModeOn},on:{scroll:e.handleScroll}},[n("div",{staticClass:"main-container home-subcontainer",class:{darkMode:e.isDarkModeOn},attrs:{id:"top"}},[n("CountryFilter",{attrs:{isDarkModeOn:e.isDarkModeOn},on:{filterCountries:e.onFilterCountries}}),n("CountryList",{attrs:{countries:e.countriesToShow,isDarkModeOn:e.isDarkModeOn}}),n("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#top",expression:"'#top'"}],staticClass:"pointer scroll-to-top-btn",class:{darkMode:e.isDarkModeOn,shown:e.scrollpx>110},attrs:{href:"#"}})],1)])},d=[],p=(n("4de4"),n("caad"),n("b0c0"),n("2532"),n("96cf"),n("1da1")),f=n("2f62"),v=(n("d81d"),n("bc3a")),h=n.n(v),g=n("9e0b"),m="https://restcountries.eu/rest/v2",y=h.a.create({baseURL:m,withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),k={query:b,getCountryByCode:_};function b(){return C.apply(this,arguments)}function C(){return C=Object(p["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.get("/all");case 3:return t=e.sent,n=t.data,e.abrupt("return",n||[]);case 8:e.prev=8,e.t0=e["catch"](0),console.log("error getting countries");case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),C.apply(this,arguments)}function _(e){return O.apply(this,arguments)}function O(){return O=Object(p["a"])(regeneratorRuntime.mark((function e(t){var n,r,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.get("/alpha?codes=".concat(t));case 3:return n=e.sent,r=n.data,o=r[0].borders,i=o.map((function(e){return g["byIso"](e)})),r[0].borders=i.filter((function(e){return e})),e.abrupt("return",r||{});case 11:e.prev=11,e.t0=e["catch"](0),console.log("error getting country");case 14:case"end":return e.stop()}}),e,null,[[0,11]])}))),O.apply(this,arguments)}var w={countries:[],country:{}},M={SET_COUNTRIES:function(e,t){e.countries=t},SET_COUNTRY:function(e,t){e.country=t}},x={getCountries:function(e){return Object(p["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,k.query();case 4:return r=t.sent,n("SET_COUNTRIES",r),t.abrupt("return",r);case 9:throw t.prev=9,t.t0=t["catch"](1),console.log(t.t0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},getCountry:function(e,t){return Object(p["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.next=4,k.getCountryByCode(t);case 4:return o=n.sent,r("SET_COUNTRY",o[0]),n.abrupt("return",o[0]);case 9:throw n.prev=9,n.t0=n["catch"](1),console.log(n.t0),n.t0;case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))()}};o["a"].use(f["a"]);var D=new f["a"].Store({modules:{country:r},state:{filterOptions:["Show All","Africa","America","Asia","Europe","Oceania"]}}),S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"countries-container",class:{darkMode:e.isDarkModeOn}},e._l(e.countriesToShow,(function(t){return n("CountryPreview",{key:e.countries[t-1].name,attrs:{country:e.countries[t-1],isDarkModeOn:e.isDarkModeOn}})})),1),e.countriesToShow<e.max?n("div",{staticClass:"flex center align-center pointer capitalize show-more-btn",on:{click:e.showMoreCountries}},[n("div",[e._v("show more")])]):e._e()])},R=[],T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{staticClass:"country-container",class:{CountryPreviewDarkMode:e.isDarkModeOn},attrs:{to:"/country/"+e.country.alpha3Code}},[n("div",[n("div",{staticClass:"flag-container"},[n("img",{attrs:{src:e.country.flag,alt:e.country.name}})]),n("div",{staticClass:"country-preview-info-container"},[n("div",{staticClass:"bold country-name"},[e._v(e._s(e.country.name))]),n("div",[n("span",{staticClass:"bold"},[e._v("Population: ")]),n("span",[e._v(e._s(e._f("localizeNumber")(e.country.population)))])]),n("div",[n("span",{staticClass:"bold"},[e._v("Region: ")]),n("span",[e._v(e._s(e.country.region))])]),n("div",[n("span",{staticClass:"bold"},[e._v("Capital: ")]),n("span",[e._v(e._s(e.country.capital))])])])])])},j=[],B={props:{country:{required:!0},isDarkModeOn:{required:!0}}},F=B,E=n("2877"),N=Object(E["a"])(F,T,j,!1,null,null,null),L=N.exports,$={props:{isDarkModeOn:{required:!0},countries:{type:Array,required:!0}},data:function(){return{countriesToShow:25,prevCountriesLength:this.countries.length,max:this.countries.length}},components:{CountryPreview:L},beforeUpdate:function(){this.max=this.countries.length,this.prevCountriesLength!==this.max&&(this.countriesToShow=this.countries.length>=25?25:this.countries.length,this.prevCountriesLength=this.max)},methods:{showMoreCountries:function(){this.countriesToShow=this.countriesToShow+25<this.max?this.countriesToShow+25:this.max}}},P=$,q=Object(E["a"])(P,S,R,!1,null,null,null),A=q.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"filter-container"},[e.toggleRegionFilter?n("div",{staticClass:"screen",on:{click:function(t){return t.target!==t.currentTarget?null:e.onToggleRegionFilter(t)}}}):e._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:e.filterBy.name,expression:"filterBy.name"}],class:{countryFilterElementsDarkMode:e.isDarkModeOn},attrs:{type:"text",id:"txt-filter",placeholder:"Search for a country..."},domProps:{value:e.filterBy.name},on:{input:[function(t){t.target.composing||e.$set(e.filterBy,"name",t.target.value)},e.onFilter]}}),n("div",{staticClass:"region-filter-container",class:{countryFilterElementsDarkMode:e.isDarkModeOn}},[n("div",{staticClass:"pointer region-filter-select-container",class:{countryFilterElementsDarkMode:e.isDarkModeOn},on:{click:function(t){return t.target!==t.currentTarget?null:e.onToggleRegionFilter(t)}}},[e._v(" "+e._s(e.filterRegionInput)+" "),this.toggleRegionFilter?n("div",{staticClass:"region-filter",class:{countryFilterElementsDarkMode:e.isDarkModeOn}},e._l(e.filterOptions,(function(t){return n("div",{key:t,staticClass:"filter-option",on:{click:function(t){return e.onSetRegionFilter(t)}}},[e._v(e._s(t))])})),0):e._e()])])])},U=[],z={props:{isDarkModeOn:{required:!0}},data:function(){return{filterBy:{name:"",region:""},toggleRegionFilter:!1,filterOptions:this.$store.state.filterOptions}},computed:{filterRegionInput:function(){return""===this.filterBy.region?"Filter by Region":this.filterBy.region}},methods:{onFilter:function(){this.$emit("filterCountries",this.filterBy)},onToggleRegionFilter:function(){return this.toggleRegionFilter=!this.toggleRegionFilter},onSetRegionFilter:function(e){var t="Show All"===e.target.textContent?"":e.target.textContent;this.filterBy.region=t,this.onFilter(),this.toggleRegionFilter=!this.toggleRegionFilter}}},J=z,Y=Object(E["a"])(J,I,U,!1,null,null,null),H=Y.exports;function V(e,t){return W.apply(this,arguments)}function W(){return W=Object(p["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.dispatch("getCountries");case 3:r=e.sent,t.params.countries=r,n(),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),n({name:"not-found"});case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),W.apply(this,arguments)}var G={props:{isDarkModeOn:{required:!0},countries:{type:Array,required:!0}},data:function(){return{filterBy:{name:"",region:""},scrollpx:0}},components:{CountryList:A,CountryFilter:H},computed:{countriesToShow:function(){var e=this.filterBy.name.toLowerCase(),t=this.filterBy.region.toLowerCase();return this.countries.filter((function(n){return n.name.toLowerCase().includes(e)&&n.region.toLowerCase().includes(t)})).sort((function(e,t){var n=e.name.toLowerCase(),r=t.name.toLowerCase();return n<r?-1:n>r?1:0}))}},beforeRouteEnter:function(e,t,n){V(e,n)},methods:{onFilterCountries:function(e){this.filterBy=e},handleScroll:function(){this.scrollpx=this.$el.scrollTop}}},K=G,Q=Object(E["a"])(K,u,d,!1,null,null,null),X=Q.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"country-details-page",class:{darkMode:e.isDarkModeOn}},[n("div",{staticClass:"flex column main-container country-details-container",class:{darkMode:e.isDarkModeOn}},[n("div",{staticClass:"flex pointer capitalize back-btn",class:{backBtnDark:e.isDarkModeOn},on:{click:this.goBack}},[n("span",{staticClass:"back-btn-text"},[e._v("back")])]),n("div",{staticClass:"flex details-subcontainer"},[n("div",{staticClass:"details-flag-container"},[n("img",{attrs:{src:e.country.flag,alt:e.country.name}})]),n("div",{staticClass:"flex column info-container"},[n("div",{staticClass:"details-info-country-name"},[e._v(e._s(e.country.name))]),n("div",{staticClass:"flex column info-subcontainer"},[n("div",{staticClass:"left-subcontainer"},[n("div",{staticClass:"info-field"},[n("span",[e._v("Native Name:")]),e._v(" "+e._s(e.country.nativeName)+" ")]),n("div",{staticClass:"info-field"},[n("span",[e._v("Population:")]),e._v(" "+e._s(e._f("localizeNumber")(e.country.population))+" ")]),n("div",{staticClass:"info-field"},[n("span",[e._v("Region:")]),e._v(" "+e._s(e.country.region)+" ")]),n("div",{staticClass:"info-field"},[n("span",[e._v("Sub Region:")]),e._v(" "+e._s(e.country.subregion)+" ")]),n("div",{staticClass:"info-field"},[n("span",[e._v("Capital:")]),e._v(" "+e._s(e.country.capital)+" ")])]),n("div",{staticClass:"flex info-field"},[n("span",[e._v("Top Level Domain:")]),e._l(e.country.topLevelDomain,(function(t){return n("div",{key:t},[e._v(" "+e._s(t)+" ")])}))],2),n("div",{staticClass:"flex info-field"},[n("span",[e._v("Currencies:")]),e._l(e.country.currencies,(function(t){return n("div",{key:t.name},[e._v(" "+e._s(t.name)+" ")])}))],2),n("div",{staticClass:"flex info-field"},[n("span",[e._v("Languages:")]),e._l(e.country.languages,(function(t){return n("div",{key:t.name},[e._v(" "+e._s(t.name)+" ")])}))],2)]),0!==e.country.borders.length?n("div",{staticClass:"flex border-countries-container"},[n("div",{staticClass:"category-name"},[e._v("Border Countries:")]),e._l(e.country.borders,(function(t){return n("router-link",{key:t.iso2,staticClass:"border-country-button",class:{borderCountrybtnDarkMode:e.isDarkModeOn},attrs:{to:"/country/"+t.iso3}},[n("div",[e._v(e._s(t.country))])])}))],2):e._e()])])])])},ee=[];function te(e,t){return ne.apply(this,arguments)}function ne(){return ne=Object(p["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.dispatch("getCountry",t.params.code);case 3:r=e.sent,t.params.country=r,n(),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),n({name:"not-found"});case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),ne.apply(this,arguments)}var re={props:{isDarkModeOn:{required:!0},country:{type:Object,required:!0}},beforeRouteEnter:function(e,t,n){te(e,n)},beforeRouteUpdate:function(e,t,n){te(e,n)},methods:{goBack:function(){this.$router.push("/")}}},oe=re,ie=Object(E["a"])(oe,Z,ee,!1,null,null,null),ae=ie.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex full",class:{darkMode:e.isDarkModeOn}},[n("div",{staticClass:"main-container"},[n("h1",[e._v("Oops!")]),n("h2",[e._v("The page you're looking for is not there.")]),n("router-link",{attrs:{to:"/"}},[e._v("Back to home page")])],1)])},ce=[],le={data:function(){return{isDarkModeOn:null}},created:function(){this.isDarkModeOn=JSON.parse(localStorage.getItem("darkMode"))||!1},watch:{isDarkModeOn:function(){JSON.parse(localStorage.getItem("darkMode"))}}},ue=le,de=Object(E["a"])(ue,se,ce,!1,null,null,null),pe=de.exports;o["a"].use(s["a"]);var fe=[{path:"/",name:"Home",component:X,props:!0},{path:"/country/:code",component:ae,props:!0},{path:"/404",name:"not-found",component:pe,props:!0},{path:"*",redirect:{name:"not-found",params:{resource:"page"}}}],ve=new s["a"]({base:"/witw/",routes:fe});ve.beforeEach((function(e,t,n){l.a.start(),n()})),ve.afterEach((function(){l.a.done()}));var he=ve,ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("NavBar",{on:{darkModeOn:e.setDarkMode}}),n("router-view",{attrs:{isDarkModeOn:this.isDarkModeOn}})],1)},me=[],ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-bar-border",class:{navBarDarkMode:e.isDarkModeOn}},[n("div",{staticClass:"main-container nav-bar"},[n("div",{staticClass:"title"},[e._v("Where in the world?")]),n("div",{staticClass:"capitalize pointer dark-mode-btn",class:{light:e.isDarkModeOn},on:{click:this.setMode}},[e._v(" "+e._s(e.getButtonTxt)+" ")])])])},ke=[],be={data:function(){return{isDarkModeOn:null}},computed:{getButtonTxt:function(){return this.isDarkModeOn?"light mode":"dark mode"}},methods:{setMode:function(){this.isDarkModeOn=!this.isDarkModeOn,this.$emit("darkModeOn",this.isDarkModeOn),localStorage.setItem("darkMode",this.isDarkModeOn)}},created:function(){this.isDarkModeOn=JSON.parse(localStorage.getItem("darkMode"))||!1}},Ce=be,_e=Object(E["a"])(Ce,ye,ke,!1,null,null,null),Oe=_e.exports,we={data:function(){return{isDarkModeOn:null}},components:{NavBar:Oe},methods:{setDarkMode:function(e){this.isDarkModeOn=e}},created:function(){this.isDarkModeOn=JSON.parse(localStorage.getItem("darkMode"))||!1}},Me=we,xe=(n("5c0b"),Object(E["a"])(Me,ge,me,!1,null,null,null)),De=xe.exports,Se=n("9483");Object(Se["a"])("".concat("/witw/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].filter("localizeNumber",(function(e){return e?e.toLocaleString():0}));n("a5d8");o["a"].config.productionTip=!1,o["a"].use(a.a,{container:".home"}),new o["a"]({router:he,store:D,VueScrollTo:a.a,render:function(e){return e(De)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.380da7b5.js.map