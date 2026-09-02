import{r as j,a as H}from"./chrome-CGJGkOVn.js";const W={data:[{type:"column",id:"classic-mvc",attributes:{col:"0"}},{type:"column",id:"server-mvc",attributes:{col:"1"}},{type:"column",id:"am",attributes:{col:"2"}},{type:"column",id:"mvp",attributes:{col:"3"}},{type:"column",id:"mvvm",attributes:{col:"4"}},{type:"column",id:"miscellaneous",attributes:{col:"5"}}]},D={data:[{type:"node-header",id:"0",attributes:{title:"Classic MVC",row:"0"},relationships:{column:{data:{type:"column",id:"classic-mvc"}}}},{type:"node-header",id:"1",attributes:{title:"Application Model",row:"0"},relationships:{column:{data:{type:"column",id:"am"}}}},{type:"node-header",id:"2",attributes:{title:"MVP",row:"0"},relationships:{column:{data:{type:"column",id:"mvp"}}}},{type:"node-header",id:"3",attributes:{title:"MVVM",row:"0"},relationships:{column:{data:{type:"column",id:"mvvm"}}}},{type:"node-header",id:"5",attributes:{title:"Miscellaneous",row:"0"},relationships:{column:{data:{type:"column",id:"miscellaneous"}}}},{type:"node-header",id:"6",attributes:{title:"Server MVC",row:"0"},relationships:{column:{data:{type:"column",id:"server-mvc"}}}}]},O={data:[{type:"node-technology",id:"interface-builder",attributes:{name:"Interface Builder",year:"1986",row:3,classNames:["tech_hist"]},relationships:{column:{data:{type:"column",id:"miscellaneous"}}}},{type:"node-technology",id:"hypercard",attributes:{name:"HyperCard",year:"1987",row:4,classNames:["tech_hist"]},relationships:{column:{data:{type:"column",id:"miscellaneous"}}}},{type:"node-technology",id:"action",attributes:{name:"Action!",year:"1988",row:6,classNames:["tech_hist"]},relationships:{column:{data:{type:"column",id:"miscellaneous"}}}},{type:"node-technology",id:"nextstep",attributes:{name:"NeXTstep",year:"1988",row:7,classNames:["tech_sig"]},relationships:{column:{data:{type:"column",id:"classic-mvc"}},related:{data:[{id:"www",type:"node-technology"},{id:"interface-builder",type:"node-technology"}]}}},{type:"node-technology",id:"www",attributes:{name:"WorldWideWeb",year:"1990",row:8,classNames:["tech_hist"]},relationships:{column:{data:{type:"column",id:"miscellaneous"}}}},{type:"node-technology",id:"dolphin",attributes:{name:"Dolphin",year:"1996",row:13,classNames:["tech_smalltalk"]},relationships:{column:{data:{type:"column",id:"mvp"}}}},{type:"node-technology",id:"msaccess",attributes:{name:"MS-Access",year:"1995",row:12,classNames:["tech_ms"]},relationships:{column:{data:{type:"column",id:"miscellaneous"}}}},{type:"node-technology",id:"swing",attributes:{name:"SWING",year:"1998",row:14,classNames:["tech_sig","tech_java"]},relationships:{column:{data:{type:"column",id:"classic-mvc"}}}},{type:"node-technology",id:"struts",attributes:{name:"Struts",year:"2000",row:15,classNames:["tech_sig","tech_java"]},relationships:{column:{data:{type:"column",id:"server-mvc"}}}},{type:"node-technology",id:"drupal",attributes:{name:"Drupal",year:"2001",row:16,classNames:["tech_php"]},relationships:{column:{data:{type:"column",id:"miscellaneous"}}}},{type:"node-technology",id:"jsf",attributes:{name:"JSF",year:"2004",row:17,classNames:["tech_java"]},relationships:{column:{data:{type:"column",id:"server-mvc"}}}},{type:"node-technology",id:"rails",attributes:{name:"Rails",year:"2004",row:18,classNames:["tech_sig","tech_ruby"]},relationships:{column:{data:{type:"column",id:"server-mvc"}}}},{type:"node-technology",id:"cakephp",attributes:{name:"Cake PHP",year:"2005",row:19,classNames:["tech_php"]},relationships:{column:{data:{type:"column",id:"server-mvc"}}}},{type:"node-technology",id:"django",attributes:{name:"DJango",year:"2005",row:20,classNames:["tech_python"]},relationships:{column:{data:{type:"column",id:"server-mvc"}}}},{type:"node-technology",id:"zend",attributes:{name:"Zend",year:"2006",row:21,classNames:["tech_php"]},relationships:{column:{data:{type:"column",id:"server-mvc"}}}},{type:"node-technology",id:"silverlight",attributes:{name:"Silverlight",year:"2007",row:22,classNames:["tech_ms"]},relationships:{column:{data:{type:"column",id:"mvvm"}}}},{type:"node-technology",id:"sproutcore",attributes:{name:"Sproutcore",year:"2007",row:22,classNames:["tech_sig","tech_js"]},relationships:{column:{data:{type:"column",id:"classic-mvc"}},related:{data:[{id:"ember",type:"node-technology"}]}}},{type:"node-technology",id:"aspnet",attributes:{name:"APS.NET MVC",year:"2008",row:23,classNames:["tech_ms"]},relationships:{column:{data:{type:"column",id:"server-mvc"}}}},{type:"node-technology",id:"angular",attributes:{name:"Angular.js",year:"2009",row:24,classNames:["tech_js"]},relationships:{column:{data:{type:"column",id:"mvvm"}}}},{type:"node-technology",id:"backbone",attributes:{name:"Backbone",year:"2010",row:25,classNames:["tech_js"]},relationships:{column:{data:{type:"column",id:"mvp"}}}},{type:"node-technology",id:"knockout",attributes:{name:"Knockout.js",year:"2010",row:25,classNames:["tech_js"]},relationships:{column:{data:{type:"column",id:"mvvm"}}}},{type:"node-technology",id:"ember",attributes:{name:"Ember.js",year:"2011",row:26,classNames:["tech_js"]},relationships:{column:{data:{type:"column",id:"mvvm"}}}}]},B={data:[{type:"node-dpattern",id:"tmve",attributes:{name:"TMVE",year:"1979",author:"T. Reenskaug",row:"1",children:["mvc79"],definitions:[{term:"Thing",text:"Something that is of interest to the user. It could be concrete, like a house or an integrated circuit. It could be abstract, like a new idea or opinions about a paper. It could be a whole, like a computer, or a part, like a circuit element."},{term:"Model",text:"A Model is an active representation of an abstraction in the form of data in a computing system."},{term:"View",text:"To any given Model there is attached one or more Views, each View being capable of showing one or more pictorial representations of the Model on the screen and on hardcopy. A View is also able to perform such operations upon the Model that is reasonabely associated with that View."},{term:"Editor",text:"An Editor is an interface between a user and one or more views. It provides the user with a suitable command system, for example in the form of menus that may change dynamically according to the current context. It provides the Views with the necessary coordination and command messages."}]},relationships:{column:{data:{type:"column",id:"classic-mvc"}}}},{type:"node-dpattern",id:"mvc79",attributes:{name:"MVC",year:"1979",author:"T. Reenskaug",row:"2",children:["mvc-kp","mvp"],definitions:[{term:"Model",text:"Models represent knowledge. A model could be a single object (rather uninteresting), or it could be some structure of objects."},{term:"View",text:"A view is a (visual) representation of its model. It would ordinarily highlight certain attributes of the model and suppress others. It is thus acting as a presentation filter."},{term:"Controller",text:"A controller is the link between a user and the system."}]},relationships:{column:{data:{type:"column",id:"classic-mvc"}}}},{type:"node-dpattern",id:"pac",attributes:{name:"PAC",year:"1987",author:"J. Coutaz",row:"5",definitions:[{term:"Presentation",text:"the Presentation defines the concrete syntax of the application, i.e. the input and output behavior of the application as perceived by the user. The Presentation of an application is a set of entities, called interactive objects, specialized in man-machine communication."},{term:"Abstraction",text:"the Abstraction part corresponds to the semantics of the application. It implements the functions that the application is able to perform. These functions are supposed to result from a thorough task analysis."},{term:"Control",text:"the Control part maintains the mapping and the consistency between the abstract entities (involved in the interaction and implemented in the Abstract part) and their presentation to the user. It embodies the boundary between semantics and syntax. It is intended to hold the context of the overall interaction between the user and the application."}]},relationships:{column:{data:{type:"column",id:"miscellaneous"}}}},{type:"node-dpattern",id:"mvc-kp",attributes:{name:"MVC K&P",year:"1988",author:"Krasner & Pope",row:"6",children:["am","model2"],definitions:[{term:"Model",text:"The model of an application is the domain-specific software simulation or implementation of the application's central structure."},{term:"View",text:"Views deal with everything graphical: they request data from their model, and display the data."},{term:"Controller",text:"Controllers contain the interface between their associated models and views and the input devices (e.g., keyboard, pointing device, time)."}]},relationships:{column:{data:{type:"column",id:"classic-mvc"}}}},{type:"node-dpattern",id:"am",attributes:{name:"Application Model",year:"1993",author:"VisualWorks",row:"9",children:["pm"],definitions:[{term:"Domain Model",text:"Some object or objects that represent your domain."},{term:"Application Model",text:"Handle user interaction and re-direct messages to the domain model if necessary. Observes the domain model and provides property objects. Deals with view logic and view state."},{term:"View",text:"Each view should display a particular visual representation of some aspect of the model."},{term:"Controller",text:"Manipulates the model and the changes should be reflected in the view."}]},relationships:{column:{data:{type:"column",id:"am"}},related:{data:[{id:"dolphin",type:"node-technology"}]}}},{type:"node-dpattern",id:"observer",attributes:{name:"Observer Pattern",year:"1994",author:"GoF",row:"10",definitions:null},relationships:{column:{data:{type:"column",id:"miscellaneous"}}}},{type:"node-dpattern",id:"data_binding",attributes:{name:"Data Binding",year:"1995",author:"unknown",row:"11",definitions:null},relationships:{column:{data:{type:"column",id:"miscellaneous"}}}},{type:"node-dpattern",id:"mvp",attributes:{name:"MVP",year:"1996",author:"Taligent",row:12,definitions:[{term:"Model",text:"Deals with data management. How do I change my data? How do I specify my data? What is my data?"},{term:"View",text:"Deals with user interface. How do I display my data? How do events map into changes in my data? It hands off events to the presenter, similar to what Application Model does. But, it observes the Model, so the View updates itself."},{term:"Presenter",text:"The View-Controller of a basic MVC is refered as Presentation. This represents the function of the classic Smalltalk controller, but elevated to an application level and taking into account the intermediate selection, command, and interactor concepts. Its role is to interpret the events and gestures initiated by the user and provide business logic. The classic Controller faded into the View."}]},relationships:{column:{data:{type:"column",id:"mvp"}}}},{type:"node-dpattern",id:"model2",attributes:{name:"Model 2",year:"1998",author:"J2EE",row:14,definitions:[{term:"Model",text:"Java Beans"},{term:"View",text:"JSP Pages"},{term:"Controller",text:"A Servlet (later framework) with routing built in"}]},relationships:{column:{data:{type:"column",id:"server-mvc"}}}},{type:"node-dpattern",id:"mva",attributes:{name:"MVA",year:"2001?",author:"Cocoa?",row:16,definitions:[{term:"Model",text:""},{term:"View",text:"Is completely decoupled from the Model."},{term:"Adapter",text:"AKA mediating controller"}]},relationships:{column:{data:{type:"column",id:"mvp"}}}},{type:"node-dpattern",id:"pm",attributes:{name:"Presentation Model",year:"2004",author:"M. Fowler",row:"17",definitions:[{term:"Presentation Model",text:"Stores state and logic, its an abstraction of the view."},{term:"View",text:"Presentation behavior, utterly simple and mainly used to render."}]},relationships:{column:{data:{type:"column",id:"am"}}}},{type:"node-dpattern",id:"mvvm",attributes:{name:"MVVM",year:"2005",author:"Microsoft",row:"19",definitions:[{term:"Model",text:"It is the data or business logic, completely UI independent, that stores the state and does the processing of the problem domain."},{term:"View",text:"Consists of the visual elements, the buttons, windows, graphics and more complex controls of a GUI. In simple examples, the View is data bound directly to the model."},{term:"View Model",text:'The term means "Model of a View", and be thought of as abstraction of the view, but it also provides a specialization of the Model that the View can use for data-binding. It contains data-transformers that convert Model types into View types, and it contains Commands the View can use to interact with the Model.'}]},relationships:{column:{data:{type:"column",id:"mvvm"}},related:{data:[{id:"pm",type:"node-dpattern"},{id:"data_binding",type:"node-dpattern"}]}}},{type:"node-dpattern",id:"mvw",attributes:{name:"MVW",year:"2012",author:"unknown",row:"27",definitions:[{term:"Model",text:""},{term:"View",text:""},{term:"Whatever",text:"Whatever works for you"}]},relationships:{column:{data:{type:"column",id:"miscellaneous"}}}}]};function s(e,t){return e&&typeof e.get=="function"?e.get(t):e[t]}function J(e,t,n){var o=s(e,"colW"),a=s(e,"rowH"),i=s(e,"paddingL"),r=s(e,"paddingR"),l=s(e,"paddingT"),m=s(e,"paddingB"),c=t*o,d=n*a,p=o-i-r,h=a-l-m;return{x:c,y:d,x_padded:i+c,y_padded:l+d,cx:c+o/2,cy:d+a/2,width:p,height:h,rx:p/2,ry:h/2}}var g={paddingT:8,paddingR:12,paddingB:8,paddingL:12,colW:182,rowH:82,maxCols:6,maxRows:29,yearLineFontSize:12};function L(e,t,n,o){var a=e*n,i=t*o;return{viewBoxW:a,viewBoxH:i,viewBox:"0 0 "+a+" "+i}}const F={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1},q=[{year:1980,row:3},{year:1990,row:6},{year:2e3,row:15},{year:2010,row:25}];function R(e){var t=e;t==null&&(t=!!(F&&!1));var n=L(g.colW,g.rowH,g.maxCols,g.maxRows);return Object.assign({},g,n,{showGrid:t})}function y(e){return e&&e.data||[]}function G(e){var t={};return y(e).forEach(function(n){t[n.id]=parseInt(n.attributes.col,10)}),t}function U(e){var t=e.relationships&&e.relationships.related;if(!t||!t.data)return[];var n=Array.isArray(t.data)?t.data:[t.data];return n.map(function(o){return o.id})}function z(e){return e.relationships&&e.relationships.column&&e.relationships.column.data&&e.relationships.column.data.id}function v(e,t,n,o){var a=e.attributes||{},i=n[z(e)],r=parseInt(a.row,10),l=J(o,i,r),m=a.year;return Object.assign({id:e.id,kind:t,name:a.name,title:a.title,year:m,author:a.author,row:r,col:i,children:a.children||[],definitions:a.definitions||null,classNames:a.classNames||[],relatedIds:U(e)},l)}function C(e){var t=parseInt(e.year,10);return isNaN(t)?0:t}function X(e){var t=R(e),n=G(W),o=y(B).map(function(c){return v(c,"dpattern",n,t)}),a=y(O).map(function(c){return v(c,"technology",n,t)}),i=y(D).map(function(c){return v(c,"header",n,t)}),r={};o.concat(a).forEach(function(c){r[c.id]=c});function l(c){c.related=c.relatedIds.map(function(d){return r[d]}).filter(Boolean)}o.forEach(l),a.forEach(l);var m=o.concat(a).sort(function(c,d){var p=C(c),h=C(d);return p<h?-1:p>h?1:0});return{svgenv:t,dpatterns:o,technologies:a,headers:i,gridNodes:m,byId:r,rowDividers:q}}function K(e){for(var t=s(e,"viewBoxW"),n=s(e,"viewBoxH"),o=s(e,"colW"),a=s(e,"rowH"),i=[],r=0;r<t;r+=o)i.push("M"+r+" 0 V"+n+" Z");for(var l=0;l<n;l+=a)i.push("M0 "+l+" H"+t+" Z");return i}function Y(e,t,n){var o=s(e,"yearLineFontSize")*2,a=n*s(e,"rowH"),i=s(e,"yearLineFontSize")*4;return{year:t,x:o,y:a,path:"M"+i+" "+a+" H"+s(e,"viewBoxW")}}function A(e,t,n){var o=s(t,"x"),a=s(t,"y"),i=s(e,"colW"),r=s(e,"rowH");switch(n.border){case"top":o+=i/2,a+=s(e,"paddingT");break;case"right":o+=i,o-=s(e,"paddingR"),a+=r/2;break;case"bottom":o+=i/2,a+=r,a-=s(e,"paddingB");break;case"left":o+=s(e,"paddingL"),a+=r/2;break;default:return null}return{x:o,y:a}}function Z(e,t){return e===t||e<t?1:-1}function $(e,t){return e===t?-1:e<t?1:-1}function Q(e,t){var n=Math.abs(e-t);return n===0?0:n-1}function ee(e,t){if(e===t)return 1;var n=Math.abs(e-t);return n===1?e<t?0:2:n-1}function te(e,t,n){var o=s(e,"colW"),a=t>0?!0:n>1,i=a?o/2:0;return i?"h"+i:""}function ne(e,t,n){var o=s(e,"colW"),a=t>0?!0:n>1,i=a?o/2:0;return i=t===0?i*-1:i,i?"h"+i:""}function ae(e,t,n){if(t<2&&n===0)return null;var o=s(e,"rowH")/2;return n<0?"v-"+o:"v"+o}function oe(e,t,n){if(t>1)return n<1?"v-"+s(e,"rowH")/2:"v"+s(e,"rowH")/2;if(t===0){if(n!==0)return n<1?"v-"+s(e,"rowH")/2:"v"+s(e,"rowH")/2}else if(t===1&&n!==0)return n<1?"v-"+s(e,"rowH")/2:"v"+s(e,"rowH")/2;return null}function ie(e,t,n,o,a){if(t===o&&n===a)return null;var i=Q(t,o),r=ee(n,a);if(!i&&!r)return null;var l=s(e,"colW"),m=s(e,"rowH"),c=Z(t,o),d=$(n,a),p=l*i*c,h=m*r*d;return p=p?"h"+p:"",h=h?"v"+h:"",p&&h?p+" "+h:p+h}function re(e){return e<=1?0:e-1}function se(e){if(e===0||e===1)return 0;if(e===2)return 1;if(e===-2)return-1;var t=e<0;return t?e+1:e-1}function le(e,t,n){var o=re(t),a=se(n);if(!o&&!a)return null;var i=o*s(e,"colW"),r=a*s(e,"rowH");return i=i?"h"+i:"",r=r?"v"+r:"",i&&r?i+" "+r:i+r}function ce(e){var t=s(e,"paddingT"),n=t/2;return"h-"+n+" l"+n+" "+t+" l"+n+" -"+t+" h-"+n}function de(e,t,n){var o=parseInt(s(t,"col")),a=parseInt(s(t,"row")),i=parseInt(s(n,"col")),r=parseInt(s(n,"row"));if(o===i&&a===r)return"";var l=A(e,t,{border:"bottom"}),m=Math.abs(o-i),c=Math.abs(a-r),d=te(e,m,c),p=ie(e,o,a,i,r),h=ne(e,m,c);return d=d?d+" ":"",p=p?p+" ":"",h=h?h+" ":"","M"+l.x+" "+l.y+" v"+s(e,"paddingB")+" "+d+p+h+ce(e)}function pe(e,t){var n=s(e,"col"),o=s(e,"row"),a=s(t,"col"),i=s(t,"row");if(n===a&&o===i)return null;if(n>a||n===a&&o>i){var r=t;t=e,e=r}return{a:e,b:t}}function he(e,t,n){var o=pe(t,n);if(!o)return null;t=o.a,n=o.b;var a=s(n,"col")-s(t,"col"),i=s(n,"row")-s(t,"row"),r=s(e,"paddingR"),l=ae(e,a,i),m=le(e,a,i),c=oe(e,a,i),d=s(e,"paddingL"),p=r?"h"+r+" ":"";l=l?l+" ":"",m=m?m+" ":"",c=c||"";var h=d?" h"+d:"",k=p+l+m+c+h,M=A(e,t,{border:"right"});return k?"M"+M.x+" "+M.y+" "+k:null}var I="http://www.w3.org/2000/svg";function u(e,t){var n=document.createElementNS(I,e);return t&&Object.keys(t).forEach(function(o){var a=t[o];a==null||a===""||n.setAttribute(o,String(a))}),n}function f(e,t,n){var o=u("tspan",n);return o.textContent=t==null?"":String(t),e.appendChild(o),o}function me(e,t){var n=u("g");n.appendChild(u("rect",{class:"node_header",x:t.x_padded,y:t.y_padded,height:t.height,width:t.width}));var o=u("text",{class:"node_header_title",x:t.cx,y:t.cy});f(o,t.title),n.appendChild(o),e.appendChild(n)}function ue(e,t){var n=u("g",{class:"g_"+t.id,"data-node-id":t.id});n.appendChild(u("rect",{class:"node_design",x:t.x_padded,y:t.y_padded,ry:7,rx:7,r:7,height:t.height,width:t.width}));var o=u("text",{class:"node_txt",x:t.cx,y:t.y_padded});f(o,t.name,{dy:"16.8"}),f(o,t.year,{x:t.cx,dy:"16.8"});var a=f(o,t.author,{x:t.cx,dy:"16.8"});a.setAttribute("class","node_txt_auth"),n.appendChild(o),e.appendChild(n)}function fe(e,t,n){var o="g_"+t.id;n&&(o+=" "+n);var a=u("g",{class:o,"data-node-id":t.id});a.appendChild(u("ellipse",{class:"node_tech",cx:t.cx,cy:t.cy,rx:t.rx,ry:t.ry}));var i=u("text",{class:"node_txt",x:t.cx,y:t.y_padded});f(i,t.name,{dy:"32"}),f(i,t.year,{x:t.cx,dy:"16.8"}),a.appendChild(i),e.appendChild(a)}function be(e,t,n){var o=[];return t.forEach(function(a){(a.children||[]).forEach(function(i){var r=n[i];if(r){var l=de(e,a,r);l&&o.push(l)}})}),o}function ge(e,t){var n=[];return t.forEach(function(o){(o.related||[]).forEach(function(a){var i=a.classNames&&a.classNames.length?a.classNames.join(" "):"",r=he(e,o,a);r&&n.push({path:r,classNames:("line line-dashed "+i).trim()})})}),n}function ye(e,t){var n=t.svgenv,o=u("svg",{id:"mvc_tree",xmlns:I,version:"1.1",width:"100%",height:"100%",viewBox:n.viewBox,preserveAspectRatio:"xMinYMin"});return n.showGrid&&K(n).forEach(function(a){o.appendChild(u("path",{d:a,fill:"none",class:"grid_line"}))}),t.rowDividers.forEach(function(a){var i=Y(n,a.year,a.row),r=u("text",{x:i.x,y:i.y,class:"year_line_txt"});f(r,i.year,{dy:"4.233003616333008"}),o.appendChild(r),o.appendChild(u("path",{d:i.path,fill:"none",class:"year_line_path"}))}),t.headers.forEach(function(a){me(o,a)}),be(n,t.dpatterns,t.byId).forEach(function(a){o.appendChild(u("path",{d:a,class:"line"}))}),ge(n,t.gridNodes).forEach(function(a){o.appendChild(u("path",{d:a.path,class:a.classNames}))}),t.dpatterns.forEach(function(a){ue(o,a)}),t.technologies.forEach(function(a){var i=a.classNames&&a.classNames.length?a.classNames:[""];i.forEach(function(r){fe(o,a,r)})}),o.addEventListener("click",function(a){var i=a.target.closest&&a.target.closest("g[data-node-id]");if(i){var r=i.getAttribute("data-node-id"),l=document.getElementById(r);window.location.hash=r,l&&typeof l.scrollIntoView=="function"&&l.scrollIntoView({behavior:"smooth",block:"start"})}}),e.appendChild(o),o}const ve=`<p>
  Used in VisualWorks, a dialect of Smalltalk sold by Cincom as part of Cincom Smalltalk. 
</p>

<p>
  {{link-to-blank 'Smalltalk an Introduction to Application Development Using VisualWorks (1995)'
                  'http://stephane.ducasse.free.fr/FreeBooks/HopkinsHoran/HopkinsHoran.pdf'}}
  is a book that provides a comprehensive description of the VisualWorks 2.0 development environment and its implementation of MVC.
</p>

<p>
  Key features:
  <ul>
    <li>
      Properties are turned into objects that are observable. Say a string property is wrapped with an object that has getters and setters. The wrapper is observable and the mapping between widgets and model is a little easier.
    </li>
  </ul>
</p>

<blockquote>
  As Smalltalk developed in the 80's and 90's this led to some significant variations on the classic MVC model. Indeed one could almost say that MVC disappeared, if you consider the view/controller separation to be an essential part of MVC - which the name does imply.
  <footer>
    <a target="_blank" href="http://martinfowler.com/eaaDev/uiArchs.html#VisualworksApplicationModel">Martin Fowler</a>
  </footer>
</blockquote>
`,we="",_e=`
<p>
  A design pattern used in Java Web applications described in
  {{link-to-blank 'JavaServer Pages - Specification 0.92'
                  'http://www.kirkdorffer.com/jspspecs/jsp092.html#model'}} (October 1998, if not before).
  A year later after release it was formally associated with MVC. The diagrams 
  in the that link show a MVC-like design, but without calling it that explicitly.
</p>

<p>
  When JavaServer Pages (JSP) as a template technology for Java was created, the initial reaction was “just like ASP”. It was also the case that the JSP page was the end point, with URLs ending in .jsp very common. Other technologies (Perl and alike) already had more abstracted ways of composing web applications, and something was needed for the Java servlet ecosystem.
</p>

<p>
  "Model 2" mentioned in the 0.92 JSP spec, became influential amongst Java web developers as a better way to construct applications closer to the tenets of MVC. JavaWorld perhaps had the most
  {{link-to-blank 'sticky article of the time'
                  'http://www.javaworld.com/article/2076557/java-web-development/understanding-javaserver-pages-model-2-architecture.html'}}
  For some Java developers, this was the first time they had been exposed to MVC.
</p>

<p>
  Later, the first big web framework in the Java community to embrace Model 2 wwould be Struts 1.0. Indeed, Struts was the poster child of Model 2 architecture.
</p>

<p>
  In retrospect It was really only a small advance, but it heralded a shift away from each server-side generated page being its own thing, to pages being part of a larger design with a front-controller orchestrating.
  There is another writeup at 
  {{link-to-blank 'Amero Publishing'
                  'http://emereo.net/success/model-2-history/'}}
  that seems to be an excerpt from a book of theirs.
</p>
`,ke=`<p>
  It is not certain which are differences between this pattern and
  <a href="#mvp">MVP</a>.
</p>

<p>
  The pattern arranges model, adapter (mediating controller) and view linearly without any connections whatsoever directly between model and view.
</p>

<p>
  The MVC design used by Cocoa implements the mediator pattern. The framework is well known for using MVA, however the documentation never uses that name, it is unclear who coined the name.
</p>

<p>
  Giving so much responsibility to a singel object, the mediating controller, has been jokingly refered to as 
  {{link-to-blank 'Massive View Controller'
                  'https://twitter.com/Colin_Campbell/status/293167951132098560'}}.
</p>
`,Me=`<p>
  Glenn E. Krasner and Stephen T. Pope published a variation of MVC in
  {{link-to-blank 'A Cookbook for Using the Model-View-Controller User Interface Paradigm in Smalltalk-80'
                  'papers/A_Cookbook_for_Using_the_Model-View-Controller_User_Interface_Paradigm_in_Smalltalk-80.pdf'}}.
</p>

<img src="mvc-kp.png" class="img-responsive center-block">
`,Ce=`<p>
  Trygve Reenskaug revamps TMVE into MVC in 
  {{link-to-blank 'Models-Views-Controllers' 'papers/Models-Views-Controllers.pdf'}}.
</p>
`,xe=`<p>
  Glenn E. Krasner and Stephen T. Pope published a variation of MVC in
  <a href="papers/krasner-pope-88.pdf">
    A Cookbook for Using the Model-View-Controller User Interface Paradigm in Smalltalk-80
  </a>.
</p>
`,Ve=`<p>
  First described by Mike Potel from Taligent Inc. in 
  {{link-to-blank 'MVP: Model-View-Presenter, The Taligent Programming Model for C++ and Java' 
                  'papers/MVP_Model-View-Presenter_The_Taligent_Programming_Model_for_C++_and_Java.pdf'}}
</p>

<img src="mvp.png" class="img-responsive center-block">
`,Ae=`<p>
  Described by John Gossman from Microsoft in his blog post:
  {{link-to-blank 'Introduction to Model/View/ViewModel pattern for building WPF apps'
  'http://blogs.msdn.com/b/johngossman/archive/2005/10/08/478683.aspx'}}.
  From the beginning it was compared to Presentation Model and later, in 2008, 
  {{link-to-blank 'J. Gossman posted'
                  'http://blogs.msdn.com/b/johngossman/archive/2008/05/28/presentationmodel-and-wpf.aspx'}}:
  <blockquote>
    My opinion at this point is the Model-View-ViewModel pattern is a WPF-specific version of the PresentationModel pattern.
  </blockquote>
</p>

<p>
  An interesting observation made about MVVM is that it maps quite well to PAC.
  You can read about that in:
  {{link-to-blank '100 Model/View/ViewModels of Mt. Fuji'
                  'http://blogs.msdn.com/b/johngossman/archive/2005/10/09/478894.aspx'}}
</p>

<p>
  MVVM Key features:
  <ul>
    <li>
      Relies on data binding, a mechanism that gives you boilerplate synchronization code.
    </li>
    <li>
      The ViewModel is easier to unit test compared to code-behind or event-driven code.
      <blockquote>
        <p>
        The ViewModel, though it sounds View-ish is really more Model-ish, and that means you can test it without awkward UI automation and interaction.
        </p>
        <footer>
          <a href="http://blogs.msdn.com/b/johngossman/archive/2006/03/04/543695.aspx">
            Advantages and disadvantages of M-V-VM
          </a>
        </footer>
      </blockquote>
    </li>
  </ul>
</p>

<p>
  MVVM Issues:
  <ul>
    <li>
      Declarative data binding can be harder to debug.
    </li>
    <li>
      In very large apps, data binding can result in considerable memory consumption.
    </li>
    <li>
      It can be overkill for simple UIs.
    </li>
  </ul>
</p>

`,Ie=`<p>
  It is the term used when a technology can't clearly be identified as MVP or MVVM.
</p>
`,Te=`<p>
  Although the technique had been in use since the early days of MVC, it was
  first described in the book <b>Design Patterns: Elements of Reusable Object-Oriented Software</b> by
  Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides.
  The authors are often referred to as the Gang of Four (GoF).
</p>
`,Se=`<p>
  Developed independently from MVC by Joëlle Coutaz in:
  {{link-to-blank 'PAC, an Object Oriented Model for Dialog Design'
                  'papers/PAC_an_Object_Oriented_Model_for_Dialog_Design.pdf'}}.
</p>
<p>
  In an email response J. Coutaz said that:
  <blockquote>
    when she formulated PAC, that she was unaware of MVC, and that she chose the word "control" independently.
    She later discovered MVC and was delighted to see the similarities, but 
    also noted that her (independently coined) term "control" was similar to the term "controller" used with a very different meaning. 
  </blockquote>
  All this was reported by Kyle Brown in
  {{link-to-blank 'Whats a Controller Anyway'
                  'http://c2.com/cgi/wiki?WhatsaControllerAnyway'}}
</p>

<img src="pac.png" imgClass="img-responsive center-block">
`,Ee=`<p>
  Described by Martin Fowler in
  {{link-to-blank 'Development of Further Patterns of Enterprise Application Architecture'
                  'http://martinfowler.com/eaaDev/PresentationModel.html'}}
</p>
<p>
  You must provide a synchronization mechanism between the Presentation Model and the View.
</p>
<p>
  The communication can be set up in different ways:
  <ul>
    <li>
      The View references the Presentation Model
    </li>
    <li>
      The Presentation Model references and observes the View.
    </li>
  </ul>
</p>
`,Ne=`<p>
  Trygve Reenskaug writes a memo, 
  {{link-to-blank 'A note on Dynabook requirements' 
                  'papers/A_note_on_Dynabook_requirements.pdf'}},
  that describes his design for a project management task.
  A couple of months later in another memo the 
  {{link-to-blank 'Thing-Model-View-Editor'
                  'papers/Thing-Model-View-Editor.pdf'}}
  metaphor is explored.
</p>
`,Pe=`<p>
  An interface builder, written by Denison Bollay, that allows editing of the application at run time.
</p>
<p>
  A highly recommended read about the history behind this tool and how it relates to other technologies is found here: 
  {{link-to-blank 'Interface Builder\\'s Alternative Lisp timeline' 'http://paulhammant.com/2013/03/28/interface-builders-alternative-lisp-timeline/'}}
</p>
<blockquote>
  To me, Action! is one the “holy grail” items from the history of user interfaces, if not IT more generally.
  <footer>
    Paul Hammant
  </footer>
</blockquote>
`,je=`<p>
  AngularJS is a tool set for building the framework most suited to your application development.
  It is maintained by Google and the community.
  <blockquote>
    <p>
      Angular is not a framework, it's an HTML compiler
    </p>
    <footer>
      Misko Hevery, creator of Angular
    </footer>
  </blockquote>
</p>
<p>
  In 2012 Angular was declared a Model View Whatever library through a post made in the
  {{link-to-blank 'AngularJS G+ account'
                  'https://plus.google.com/+AngularJS/posts/aZNVhj355G2'}}.
  It wasn't a very formal declaration, but it helped the term to take off.
</p>

`,He="",We="",De="",Oe="",Be=`<p>
  Dolphin, the Object Arts Ltd implementation of Smalltalk, used MVP as its UI model. 
  The design is derived from the Taligent C++ system.
</p>
<p>
  The research and reasonings behind that decision are found in a paper by Andy Bower and Blair McGlashan called: 
  {{link-to-blank 'Twisting the Triad'
                  'papers/Twisting_the_Triad.pdf'}}, published in 2000.
  In their research about MVC, they used VisualWorks 2.5 which actually refers to Application Model 
  and in their paper both terms are used interchangeably.
</p>
<p>
  A detailed timeline about Dolphin can be fount at:
  {{link-to-blank "Ian's Dolphin Smalltalk Pages"
                  'http://www.idb.me.uk/idb/about.html'}}
</p>
`,Je=`<p>
  Drupal is a content management framework and the core installation can serve as a simple web site, a single or multi-user blog, an Internet forum, or a community web site providing for user-generated content.
</p>
<p>
  The framework has been around for a long time and different versions will reflect different MVC designs.
</p>
<a target="_blank" href="http://www.garfieldtech.com/blog/mvc-vs-pac">
  <blockquote>
    Drupal is very much a PAC architecture.
    <footer>
      Larry Garfield
    </footer>
  </blockquote>
</a>

`,Le=`<p>
  Its an opinionated JavaScript framework that embraces the concept of convention over configuration.
  It was originally being developed as SproutCore 2.0, but it changed course, the announcement:
  {{link-to-blank 'Amber.js (formerly SproutCore 2.0) is now Ember.js'
                  'http://yehudakatz.com/2011/12/12/amber-js-formerly-sproutcore-2-0-is-now-ember-js/'}}
  <br>
  You can listen to some of the history in this panel discussion recorded at an Ember.js NYC meetup:
  {{link-to-blank 'Fireside Chat with Ember Core Team Members, June 2013' 'https://youtu.be/L9OOMygo1HI?t=18m30s'}}
</p>
`,Fe=`<p>
</p>
`,qe=`<p>
</p>
`,Re=`<blockquote>
  <p>
    JSF 1.x was based upon the same core ideas as Struts 1.0 but with a few twists:
  </p>
  <ul>
   <li>
     binding user actions to java method calls, 
   </li>
   <li>
     an ecosystem of reusable UI components
   </li>
  </ul> 
  <p>
    Some people called it an improvement over Model 2 architecture, but at its core there was no fundamental difference. The request was intercepted by a front controller, which created the model, the model was used to access data, then the request was forwarded to a view that usually read from the model.
  </p>
  <footer>
    Dennis Byrne
  </footer>
</blockquote>

<p>
  JSF went on to become a standard way of constructing Java web applications. Particularly the page decomposition aspects.
</p>

`,Ge=`<p>
  JavaScript library developed by Microsoft that uses the MVVM pattern.
  Some call it a data binding library and is not wrong since that is a key feature of MVVM.
</p>

`,Ue=`<p>
  In the 90's Microsoft loved "data binding" where UI controls were coupled to rows in database tables. To some this is the antithesis of MVC, and might be the primary reason Microsoft was late to the MVC party.
</p>

<p>
  The 1995 Microsoft Access had a perfectly functional data binding capability. MS Access bound a record in a database table to the form showing it. Forms had next/previous ("&lt;" and "&gt;") controls. When those were interacted with the form would transition to the intended row in the table, with the data-bound fields in the form updating automatically. If the user had changed some fields in the form, before hitting next, they would be saved automatically too when next/prev was pressed. It was possible to veto the advancing of the form, but the data-bound nature of the form and the fields from a database attempted to be dominant. In the context of MVC, there was no intermediate model. The view (form) was wired directly to the database.
</p>

<p>
  ActiveX had a data-binding technology called ActiveX Data Objects (<a href="http://en.wikipedia.org/wiki/ActiveX_Data_Objects">ADO</a>). Microsoft released ADO in October 1996.
</p>

<p>
  MicroSoft launched .Net for public consupmtion in 2000. One facet of that was Active Data Objects (ADO.NET). Obviously that was taking ADO into the new .NET era. It very much continued the data-bound style, and UI technologies for .NET were also wired to it. 
</p>

<p>
  In 2003, Erik Dörnenburg wrote a technology called .NET Entity Objects Framework (<a href="http://neo.sourceforge.net/">NEO</a>). He had worked with NeXTSTEP in '92, which was strongly modelled on MVC, and Enterprise Objects Framework (<a href="http://en.wikipedia.org/wiki/Enterprise_Objects_Framework">EOF</a>) specifically, and wanted to bring some of that to .NET. He was also an Agile enthusiast, and wanted to have as much testable code as possible. He made Neo to help separate ADO.NET a little and allow some that testable, separative goodness. Neo as a persistence technology worked very well with WinForms.NET, at the time, It also had some other strong non-functional features but they are not important to this description. Erik later presented on this at a conference "Data programming beyond ADO.NET" in 2004 (see <a href="http://erik.doernenburg.com/talks/really-old/">his old presentations page - scroll to the bottom</a>), and some time after Microsoft bundled non data-binding technologies with .NET, but it could have been a coincidence. That started their patronage of the MVP sub-family of patterns.
</p>

<p>
  MS being a patron of data-binding for many years might be one part of why they were so late to a proper implementation of MVC. Late being <a href="#aspnet">ASP.Net MVC</a> in 2008.
</p>
`,ze=`<p>
  NextSTEP is an object-oriented, multitasking operating system which was developed by NeXT Computer, Inc.
</p>

<blockquote>
  I started working with NeXTSTEP in '92, which was strongly modelled MVC; and delegation over inheritance for that matter.
  <footer>
    Erik Dörnenburg
  </footer>
</blockquote>

<p>
  NeXTstep was later modified to separate the underlying operating system from the higher-level object libraries.
  The result was the OpenStep API, a predecesor of Mac OS X and the Cocoa API.
</p>
`,Xe=`<blockquote>

  <p>
    On the architectural level, all the inspiration came from the Java world and from Martin Fowler's Patterns of Enterprise Application Architecture.
    That book had just come out in January of 2003 as I started working on Rails in mid-2003. So it was immensely helpful.
  </p>

  <p>
    So was learning from Struts 1.x, and I believe WebWork was around at the time as well.
    I basically studied all the Java frameworks available at the time, and while I was disgusted by the implementation of the ideas, the ideas themselves were powerful.
    The appropriation of MVC into a request/response context as one of those powerful ideas.
  </p>

  <footer>
    David Heinemeier Hansson
  </footer>

</blockquote>

<p>
  Rails heralded a convention over configuration era, and caused a seismic shift in the world of web-application development.
</p>
`,Ke="",Ye=`<p>
  Developed by Apple and claims to have kicked off the JS-MVC movement, its inspired by Cocoa.
</p>

`,Ze=`<p>
  Struts 1 was an early
  {{link-to-blank 'Java web-framework in 2000'
                  'http://en.wikipedia.org/wiki/Apache_Struts'}}
  that honored the "Model 2" ideals. It had a lot of XML configuration.
</p>
`,$e=`<p>
  Java's Swing was a full MVC thick-client library developed originally by Netscape in 1996 as "Internet Foundation Classes", and donated to Sun soon after.
  It was merged with other technologies and launched as Swing. Wikipedia has a 
  {{link-to-blank 'good write'
                  'http://en.wikipedia.org/wiki/Internet_Foundation_Classes'}} up of the origins.
</p>

<p>
  The technology sat on top of the existing "Abstract Window Toolkit"
  ({{link-to-blank 'AWT' 'http://en.wikipedia.org/wiki/Abstract_Window_Toolkit'}}), and provided a comprehensive set of controls for cross-platform UI construction.
  Models and Views were extendable. Controllers pulled things together. Decomposition was easy.
  Views could update models without controller particpation.
  Models, Views and Controllers could be instantiated semi-independently, which was important for testing.
  Testing wasn't a core activity until 
  {{link-to-blank 'JUnit 1.0 in 1997'
                  'https://twitter.com/kentbeck/status/299190735486476289'}}, though.
</p>
`,Qe=`<p>
  Later renamed to Nexus to avoid confusion between the software and the World Wide Web; is the first web browser and editor.
</p>

<blockquote>
  Tim Berners Lee once commented that his pioneering World-Wide-Web application was only feasible at the time because of NeXTstep.
</blockquote>

<p>
  The first web site was published in 1990 and it is still online:
  {{link-to-blank 'The World Wide Web project' 'http://info.cern.ch/hypertext/WWW/TheProject.html'}}
</p>
`,et="";var tt=/\{\{link-to-blank\s+(['"])((?:\\.|(?!\1)[\s\S])*?)\1\s+(['"])((?:\\.|(?!\3)[\s\S])*?)\3\s*\}\}/g;function x(e){return e.replace(/\\(['"\\])/g,"$1")}function nt(e,t){return'<a target="_blank" href="'+t+'">'+e+'<sup><span class="glyphicon glyphicon-new-window" aria-hidden="true"></span></sup></a>'}function at(e){return e?e.replace(tt,function(t,n,o,a,i){return nt(x(o),x(i))}):""}function T(e){var t={};return Object.keys(e).forEach(function(n){var o=n.replace(/^.*\//,"").replace(/\.hbs$/,"");t[o]=at(e[n])}),t}var ot=Object.assign({"../../app/templates/dpatterns/am.hbs":ve,"../../app/templates/dpatterns/data-binding.hbs":we,"../../app/templates/dpatterns/model2.hbs":_e,"../../app/templates/dpatterns/mva.hbs":ke,"../../app/templates/dpatterns/mvc-kp.hbs":Me,"../../app/templates/dpatterns/mvc79.hbs":Ce,"../../app/templates/dpatterns/mvc88.hbs":xe,"../../app/templates/dpatterns/mvp.hbs":Ve,"../../app/templates/dpatterns/mvvm.hbs":Ae,"../../app/templates/dpatterns/mvw.hbs":Ie,"../../app/templates/dpatterns/observer.hbs":Te,"../../app/templates/dpatterns/pac.hbs":Se,"../../app/templates/dpatterns/pm.hbs":Ee,"../../app/templates/dpatterns/tmve.hbs":Ne}),it=Object.assign({"../../app/templates/technologies/action.hbs":Pe,"../../app/templates/technologies/angular.hbs":je,"../../app/templates/technologies/aspnet.hbs":He,"../../app/templates/technologies/backbone.hbs":We,"../../app/templates/technologies/cakephp.hbs":De,"../../app/templates/technologies/django.hbs":Oe,"../../app/templates/technologies/dolphin.hbs":Be,"../../app/templates/technologies/drupal.hbs":Je,"../../app/templates/technologies/ember.hbs":Le,"../../app/templates/technologies/hypercard.hbs":Fe,"../../app/templates/technologies/interface-builder.hbs":qe,"../../app/templates/technologies/jsf.hbs":Re,"../../app/templates/technologies/knockout.hbs":Ge,"../../app/templates/technologies/msaccess.hbs":Ue,"../../app/templates/technologies/nextstep.hbs":ze,"../../app/templates/technologies/rails.hbs":Xe,"../../app/templates/technologies/silverlight.hbs":Ke,"../../app/templates/technologies/sproutcore.hbs":Ye,"../../app/templates/technologies/struts.hbs":Ze,"../../app/templates/technologies/swing.hbs":$e,"../../app/templates/technologies/www.hbs":Qe,"../../app/templates/technologies/zend.hbs":et}),rt=T(ot),st=T(it);function lt(e){return e?e.kind==="dpattern"?rt[e.id]||"":st[e.id]||"":""}function b(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function S(e){return(e||[]).map(function(t){return'<li class="list-group-item"><b>'+b(t.term)+"</b>: "+b(t.text)+"</li>"}).join("")}function E(e,t){return t.filter(function(n){return n.id!==e.id&&n.definitions&&n.definitions.length}).slice().sort(function(n,o){return n.name<o.name?-1:n.name>o.name?1:0})}function V(e){var t=e.map(function(n){return'<option value="'+b(n.id)+'">'+b(n.name)+"</option>"}).join("");return'<select class="form-control c-select"><option selected hidden>compare to:</option>'+t+"</select>"}function ct(e,t){if(!e.definitions||!e.definitions.length)return"";var n=E(e,t);return'<div itemscope itemtype="http://schema.org/Table"><h4 class="bg-info text-info">Pattern Elements</h4><div><div class="col-xs-12 col-md-6"></div><div class="hidden-sm col-md-6">'+V(n)+'</div></div><div class="col-xs-12 col-md-6"><ul class="list-group">'+S(e.definitions)+'</ul></div><div class="col-md-6"><div class="visible-sm-block">'+V(n)+'</div><ul class="list-group compare_to"></ul></div></div>'}function dt(e,t,n){var o=E(t,n),a={};o.forEach(function(l){a[l.id]=l});var i=e.querySelectorAll("select.c-select"),r=e.querySelector(".compare_to");r&&Array.prototype.forEach.call(i,function(l){l.addEventListener("change",function(){var m=l.value;Array.prototype.forEach.call(i,function(d){d.value=m});var c=a[m];r.innerHTML=c?S(c.definitions):""})})}function pt(e,t){t.gridNodes.forEach(function(n){var o=n.author?"panel-primary":"panel-info",a=document.createElement("div");a.id=n.id,a.className="row text_box_info",a.setAttribute("itemscope",""),a.setAttribute("itemtype","http://schema.org/WebPageElement"),a.innerHTML='<div class="panel '+o+'"><div class="panel-heading"><h3 class="panel-title" itemprop="headline">'+b(n.year)+" "+b(n.name)+'</h3><div class="pull-right button_top"><a href="#top"><span class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span></a></div></div><div class="panel-body"><div itemprop="text">'+lt(n)+"</div>"+ct(n,t.dpatterns)+"</div></div>",dt(a,n,t.dpatterns),e.appendChild(a)})}var _=[{name:"Historical",overlayClassName:"tech_hist",checked:!0},{name:"Significant",overlayClassName:"tech_sig",checked:!0},{name:"Java",overlayClassName:"tech_java",checked:!1},{name:"JavaScript",overlayClassName:"tech_js",checked:!0},{name:"Microsoft",overlayClassName:"tech_ms",checked:!0},{name:"PHP",overlayClassName:"tech_php",checked:!1},{name:"Python",overlayClassName:"tech_python",checked:!1},{name:"Ruby",overlayClassName:"tech_ruby",checked:!1},{name:"Smalltalk",overlayClassName:"tech_smalltalk",checked:!0}];function ht(e,t,n){var o=e.querySelectorAll("."+t);Array.prototype.forEach.call(o,function(a){a.classList.toggle("hidden",!n)})}function N(e,t,n){ht(e,t,n)}function mt(e,t){(t||_).forEach(function(n){N(e,n.overlayClassName,n.checked)})}function ut(e,t){var n=document.createElement("div");n.className="overlay_checkbox",n.setAttribute("data-overlay-master","true"),n.setAttribute("itemscope",""),n.setAttribute("itemtype","http://schema.org/SiteNavigationElement"),n.textContent="All",e.appendChild(n);var o=_.map(function(i){var r=document.createElement("div");return r.className="overlay_checkbox"+(i.checked?" checked":""),r.setAttribute("data-overlay",i.overlayClassName),r.setAttribute("itemscope",""),r.setAttribute("itemtype","http://schema.org/SiteNavigationElement"),r.textContent=i.name,r._checked=i.checked,e.appendChild(r),r});function a(i,r){i._checked=r,i.classList.toggle("checked",r),N(t,i.getAttribute("data-overlay"),r)}n.addEventListener("click",function(){var i=!n.classList.contains("checked");n.classList.toggle("checked",i),o.forEach(function(r){a(r,i)})}),o.forEach(function(i){i.addEventListener("click",function(){n.classList.remove("checked"),a(i,!i._checked)})}),mt(t,_)}j(document.getElementById("site-nav"),{page:"index"});var ft=document.getElementById("app");ft.innerHTML='<div id="drawer-root"></div><div class="mvc_tree_wrapper_scroll"><div class="mvc_tree_wrapper" id="tree-mount"></div></div><br><div class="container" id="articles"></div>';H(document.getElementById("drawer-root"));var P=X(),bt=ye(document.getElementById("tree-mount"),P);pt(document.getElementById("articles"),P);ut(document.getElementById("overlays"),bt);if(window.location.hash){var w=document.getElementById(window.location.hash.slice(1));w&&typeof w.scrollIntoView=="function"&&w.scrollIntoView()}
