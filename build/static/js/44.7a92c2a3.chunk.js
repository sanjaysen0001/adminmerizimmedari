(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[44],{1016:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HIDE_ALL=0,t.DISPLAY_MENU=function(e){return"DISPLAY_"+e}},1017:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={eventList:new Map,on:function(e,t){var n=this;return this.eventList.has(e)||this.eventList.set(e,new Set),this.eventList.get(e).add(t),function(){return n.eventList.get(e).delete(t)}},emit:function(e){for(var t=this,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return this.eventList.has(e)?(this.eventList.get(e).forEach((function(e){return e.call.apply(e,[t].concat(n))})),!0):(console.warn("<"+e+"> Event is not registered. Did you forgot to bind the event ?"),!1)}};t.eventManager=r},1130:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.cloneItem=function(e,t){return r.Children.map(r.Children.toArray(e).filter((function(e){return Boolean(e)})),(function(e){return r.cloneElement(e,t)}))}},1350:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=i(n(0)),u=a(n(1)),c=a(n(4)),l=n(1130),f=n(1351),d=n(1016),p=n(884),h=n(1017),v=13,y=27,m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={x:0,y:0,visible:!1,nativeEvent:{},propsFromTrigger:{},onShown:null,onHidden:null},t.unsub=[],t.bindWindowEvent=function(){window.addEventListener("resize",t.hide),window.addEventListener("contextmenu",t.hide),window.addEventListener("mousedown",t.hide),window.addEventListener("click",t.hide),window.addEventListener("scroll",t.hide),window.addEventListener("keydown",t.handleKeyboard)},t.unBindWindowEvent=function(){window.removeEventListener("resize",t.hide),window.removeEventListener("contextmenu",t.hide),window.removeEventListener("mousedown",t.hide),window.removeEventListener("click",t.hide),window.removeEventListener("scroll",t.hide),window.removeEventListener("keydown",t.handleKeyboard)},t.onMouseEnter=function(){return window.removeEventListener("mousedown",t.hide)},t.onMouseLeave=function(){return window.addEventListener("mousedown",t.hide)},t.hide=function(e){var n=e;("undefined"===typeof n||2!==n.button&&!0!==n.ctrlKey||"contextmenu"===n.type)&&(t.unBindWindowEvent(),t.setState({visible:!1}))},t.handleKeyboard=function(e){e.keyCode!==v&&e.keyCode!==y||(t.unBindWindowEvent(),t.setState({visible:!1}))},t.setRef=function(e){t.menuRef=e},t.show=function(e,n){e.stopPropagation(),h.eventManager.emit(d.HIDE_ALL);var r=t.getMousePosition(e),o=r.x,i=r.y;t.setState({visible:!0,x:o,y:i,nativeEvent:e,propsFromTrigger:n},t.setMenuPosition)},t}return r(t,e),t.prototype.componentDidMount=function(){this.unsub.push(h.eventManager.on(d.DISPLAY_MENU(this.props.id),this.show)),this.unsub.push(h.eventManager.on(d.HIDE_ALL,this.hide))},t.prototype.componentWillUnmount=function(){this.unsub.forEach((function(e){return e()})),this.unBindWindowEvent()},t.prototype.componentDidUpdate=function(e,t){this.state.visible!==t.visible&&(this.state.visible&&this.props.onShown?this.props.onShown():!this.state.visible&&this.props.onHidden&&this.props.onHidden())},t.prototype.setMenuPosition=function(){var e=window.innerWidth,t=window.innerHeight,n=this.menuRef,r=n.offsetWidth,o=n.offsetHeight,i=this.state,a=i.x,s=i.y;a+r>e&&(a-=a+r-e),s+o>t&&(s-=s+o-t),this.setState({x:a,y:s},this.bindWindowEvent)},t.prototype.getMousePosition=function(e){var t={x:e.clientX,y:e.clientY};return"touchend"===e.type&&(!t.x||!t.y)&&e.changedTouches&&e.changedTouches.length>0&&(t.x=e.changedTouches[0].clientX,t.y=e.changedTouches[0].clientY),(!t.x||t.x<0)&&(t.x=0),(!t.y||t.y<0)&&(t.y=0),t},t.prototype.render=function(){var e,t=this.props,n=t.theme,r=t.animation,i=t.style,a=t.className,u=t.children,d=this.state,h=d.visible,v=d.nativeEvent,y=d.propsFromTrigger,m=d.x,g=d.y,b=c.default(p.styles.menu,a,((e={})[p.styles.theme+n]=n,e[p.styles.animationWillEnter+r]=r,e)),_=o({},i,{left:m,top:g+1,opacity:1});return s.default.createElement(f.Portal,null,h&&s.default.createElement("div",{className:b,style:_,ref:this.setRef,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave},s.default.createElement("div",null,l.cloneItem(u,{nativeEvent:v,propsFromTrigger:y}))))},t.propTypes={id:u.default.oneOfType([u.default.string,u.default.number]).isRequired,children:u.default.node.isRequired,theme:u.default.string,animation:u.default.string,className:u.default.string,style:u.default.object},t}(s.Component);t.Menu=m},1351:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=n(35),a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={canRender:!1},t.container={},t}return r(t,e),t.prototype.componentDidMount=function(){this.container=document.createElement("div"),document.body.appendChild(this.container),this.setState({canRender:!0})},t.prototype.componentWillUnmount=function(){document.body.removeChild(this.container)},t.prototype.render=function(){return this.state.canRender&&i.createPortal(this.props.children,this.container)},t}(o.PureComponent);t.Portal=a},1352:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=i(n(0)),u=a(n(1)),c=a(n(4)),l=n(884),f=function(){},d=function(e){function t(t){var n=e.call(this,t)||this;n.handleClick=function(e){n.isDisabled?e.stopPropagation():n.props.onClick({event:n.props.nativeEvent,props:o({},n.props.propsFromTrigger,n.props.data)})};var r=n.props,i=r.disabled,a=r.nativeEvent,s=r.propsFromTrigger,u=r.data;return n.isDisabled="function"===typeof i?i({event:a,props:o({},s,u)}):i,n}return r(t,e),t.prototype.render=function(){var e,t=this.props,n=t.className,r=t.style,o=t.children,i=c.default(l.styles.item,n,((e={})[""+l.styles.itemDisabled]=this.isDisabled,e));return s.default.createElement("div",{className:i,style:r,onClick:this.handleClick,role:"presentation"},s.default.createElement("div",{className:l.styles.itemContent},o))},t.propTypes={children:u.default.node.isRequired,data:u.default.object,disabled:u.default.oneOfType([u.default.func,u.default.bool]),onClick:u.default.func,nativeEvent:u.default.object,propsFromTrigger:u.default.object,className:u.default.string,style:u.default.object},t.defaultProps={disabled:!1,onClick:f},t}(s.Component);t.Item=d},1353:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),i=n(884);t.Separator=function(){return o.default.createElement("div",{className:i.styles.separator})}},1354:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),i=r(n(1)),a=r(n(4)),s=n(884),u=function(e){var t=e.className,n=e.style,r=e.children;return o.default.createElement("i",{className:a.default(s.styles.itemIcon,t),style:n},r||"")};t.IconFont=u,u.propTypes={children:i.default.node,className:i.default.string,style:i.default.object}},1355:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=i(n(0)),u=a(n(1)),c=a(n(4)),l=n(1130),f=n(884),d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={left:"100%",top:0,bottom:"initial"},t.setRef=function(e){t.menu=e},t}return r(t,e),t.prototype.componentDidMount=function(){var e=window.innerWidth,t=window.innerHeight,n=this.menu.getBoundingClientRect(),r={};n.right<e?(r.left="100%",r.right=void 0):(r.right="100%",r.left=void 0),n.bottom>t?(r.bottom=0,r.top="initial"):(r.bottom="initial",r.top=0),this.setState(r)},t.prototype.handleClick=function(e){e.stopPropagation()},t.prototype.render=function(){var e,t=this.props,n=t.arrow,r=t.disabled,i=t.className,a=t.style,u=t.label,d=t.nativeEvent,p=t.children,h=t.propsFromTrigger,v=c.default(f.styles.item,i,((e={})[""+f.styles.itemDisabled]="function"===typeof r?r({event:d,props:o({},h)}):r,e)),y=o({},a,this.state);return s.default.createElement("div",{className:v,role:"presentation"},s.default.createElement("div",{className:f.styles.itemContent,onClick:this.handleClick},u,s.default.createElement("span",{className:f.styles.submenuArrow},n)),s.default.createElement("div",{className:f.styles.submenu,ref:this.setRef,style:y},l.cloneItem(p,{propsFromTrigger:h,nativeEvent:d})))},t.propTypes={label:u.default.node.isRequired,children:u.default.node.isRequired,nativeEvent:u.default.object,arrow:u.default.node,disabled:u.default.oneOfType([u.default.func,u.default.bool]),className:u.default.string,style:u.default.object},t.defaultProps={arrow:"\u25b6",disabled:!1,nativeEvent:{}},t}(s.Component);t.Submenu=d},1356:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),u=a(n(1)),c=n(1016),l=n(1017),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.childrenRefs=[],t.handleEvent=function(e){e.preventDefault(),e.stopPropagation(),l.eventManager.emit(c.DISPLAY_MENU(t.props.id),e.nativeEvent,o({ref:1===t.childrenRefs.length?t.childrenRefs[0]:t.childrenRefs},t.props.data))},t.setChildRef=function(e){return null===e||t.childrenRefs.push(e)},t}return r(t,e),t.prototype.getChildren=function(){var e=this,t=this.props,n=(t.id,t.component,t.event,t.children),r=(t.className,t.style,t.storeRef),a=(t.data,i(t,["id","component","event","children","className","style","storeRef","data"]));return this.childrenRefs=[],s.Children.map(n,(function(t){return s.isValidElement(t)?s.cloneElement(t,o({},a,r?{ref:e.setChildRef}:{})):t}))},t.prototype.render=function(){var e,t=this.props,n=t.component,r=t.render,i=t.event,a=t.className,u=t.style,c=((e={})[i]=this.handleEvent,e.className=a,e.style=u,e);return"function"===typeof r?r(o({},c,{children:this.getChildren()})):s.createElement(n,c,this.getChildren())},t.propTypes={id:u.default.oneOfType([u.default.string,u.default.number]).isRequired,children:u.default.node.isRequired,component:u.default.oneOfType([u.default.node,u.default.func]),render:u.default.func,event:u.default.string,className:u.default.string,style:u.default.object,storeRef:u.default.bool,data:u.default.object},t.defaultProps={component:"div",event:"onContextMenu",storeRef:!0},t}(s.Component);t.MenuProvider=f},1357:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1017),o=n(1016),i={show:function(e){var t=e.id,n=e.event,i=e.props;r.eventManager.emit(o.DISPLAY_MENU(t),n.nativeEvent||n,i)},hideAll:function(){r.eventManager.emit(o.HIDE_ALL)}};t.contextMenu=i},798:function(e,t,n){e.exports=function(){"use strict";function e(e,t){if(e)for(var n in e)({}).hasOwnProperty.call(e,n)&&t(n,e[n])}var t={unstyled:"p","header-one":"h1","header-two":"h2","header-three":"h3","header-four":"h4","header-five":"h5","header-six":"h6","unordered-list-item":"ul","ordered-list-item":"ol",blockquote:"blockquote",code:"pre"};function n(e){return e&&t[e]}function r(t){var n="";return e(t,(function(e,t){t&&(n+="".concat(e,":").concat(t,";"))})),n}function o(e,t){var n={};return e.COLOR[t]&&(n.COLOR=e.COLOR[t]),e.BGCOLOR[t]&&(n.BGCOLOR=e.BGCOLOR[t]),e.FONTSIZE[t]&&(n.FONTSIZE=e.FONTSIZE[t]),e.FONTFAMILY[t]&&(n.FONTFAMILY=e.FONTFAMILY[t]),e.UNDERLINE[t]&&(n.UNDERLINE=!0),e.ITALIC[t]&&(n.ITALIC=!0),e.BOLD[t]&&(n.BOLD=!0),e.STRIKETHROUGH[t]&&(n.STRIKETHROUGH=!0),e.CODE[t]&&(n.CODE=!0),e.SUBSCRIPT[t]&&(n.SUBSCRIPT=!0),e.SUPERSCRIPT[t]&&(n.SUPERSCRIPT=!0),n}function i(e,t,n){var r=!0;return n>0&&n<e.length?t.forEach((function(t){r=r&&e[t][n]===e[t][n-1]})):r=!1,r}function a(e,t,n,r){var o=e[t];if("function"===typeof r){var i=r(o,n);if(i)return i}if("MENTION"===o.type)return'<a href="'.concat(o.data.url,'" class="wysiwyg-mention" data-mention data-value="').concat(o.data.value,'">').concat(n,"</a>");if("LINK"===o.type){var a=o.data.targetOption||"_self";return'<a href="'.concat(o.data.url,'" target="').concat(a,'">').concat(n,"</a>")}if("IMAGE"===o.type){var s=o.data.alignment;return s&&s.length?'<div style="text-align:'.concat(s,';"><img src="').concat(o.data.src,'" alt="').concat(o.data.alt,'" style="height: ').concat(o.data.height,";width: ").concat(o.data.width,'"/></div>'):'<img src="'.concat(o.data.src,'" alt="').concat(o.data.alt,'" style="height: ').concat(o.data.height,";width: ").concat(o.data.width,'"/>')}return"EMBEDDED_LINK"===o.type?'<iframe width="'.concat(o.data.width,'" height="').concat(o.data.height,'" src="').concat(o.data.src,'" frameBorder="0"></iframe>'):n}function s(e,t,n,r){var a=[],s=Array.from(e.text);if(s.length>0)for(var u,c=function(e){var t=e.text,n=e.inlineStyleRanges,r={BOLD:new Array(t.length),ITALIC:new Array(t.length),UNDERLINE:new Array(t.length),STRIKETHROUGH:new Array(t.length),CODE:new Array(t.length),SUPERSCRIPT:new Array(t.length),SUBSCRIPT:new Array(t.length),COLOR:new Array(t.length),BGCOLOR:new Array(t.length),FONTSIZE:new Array(t.length),FONTFAMILY:new Array(t.length),length:t.length};return n&&n.length>0&&n.forEach((function(e){for(var t=e.offset,n=t+e.length,o=t;o<n;o+=1)0===e.style.indexOf("color-")?r.COLOR[o]=e.style.substring(6):0===e.style.indexOf("bgcolor-")?r.BGCOLOR[o]=e.style.substring(8):0===e.style.indexOf("fontsize-")?r.FONTSIZE[o]=e.style.substring(9):0===e.style.indexOf("fontfamily-")?r.FONTFAMILY[o]=e.style.substring(11):r[e.style]&&(r[e.style][o]=!0)})),r}(e),l=n;l<r;l+=1)l!==n&&i(c,t,l)?(u.text.push(s[l]),u.end=l+1):(u={styles:o(c,l),text:[s[l]],start:l,end:l+1},a.push(u));return a}function u(t,n){var r=s(t,["BOLD","ITALIC","UNDERLINE","STRIKETHROUGH","CODE","SUPERSCRIPT","SUBSCRIPT"],n.start,n.end),o="";return r.forEach((function(t){o+=function(t){var n=t.styles,r=function(e){return e&&e.length>0?e.map((function(e){switch(e){case"\n":return"<br>";case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return e}})).join(""):""}(t.text);return e(n,(function(e,t){r=function(e,t){return"BOLD"===e?"<strong>".concat(t,"</strong>"):"ITALIC"===e?"<em>".concat(t,"</em>"):"UNDERLINE"===e?"<ins>".concat(t,"</ins>"):"STRIKETHROUGH"===e?"<del>".concat(t,"</del>"):"CODE"===e?"<code>".concat(t,"</code>"):"SUPERSCRIPT"===e?"<sup>".concat(t,"</sup>"):"SUBSCRIPT"===e?"<sub>".concat(t,"</sub>"):t}(e,r)})),r}(t)})),o=function(e,t){if(e&&(e.COLOR||e.BGCOLOR||e.FONTSIZE||e.FONTFAMILY)){var n='style="';return e.COLOR&&(n+="color: ".concat(e.COLOR,";")),e.BGCOLOR&&(n+="background-color: ".concat(e.BGCOLOR,";")),e.FONTSIZE&&(n+="font-size: ".concat(e.FONTSIZE).concat(/^\d+$/.test(e.FONTSIZE)?"px":"",";")),e.FONTFAMILY&&(n+="font-family: ".concat(e.FONTFAMILY,";")),"<span ".concat(n+='"',">").concat(t,"</span>")}return t}(n.styles,o)}function c(e,t,n,r){var o=[],i=function(e,t){var n=[],r=0,o=e.entityRanges.map((function(e){return{offset:e.offset,length:e.length,key:e.key,type:"ENTITY"}}));return(o=(o=o.concat(function(e,t){var n=[];if(t)for(var r=0,o=0,i=e,a=t.trigger||"#",s=t.separator||" ";i.length>0&&o>=0;)if(i[0]===a?(o=0,r=0,i=i.substr(a.length)):(o=i.indexOf(s+a))>=0&&(i=i.substr(o+(s+a).length),r+=o+s.length),o>=0){var u=i.indexOf(s)>=0?i.indexOf(s):i.length,c=i.substr(0,u);c&&c.length>0&&n.push({offset:r,length:c.length+a.length,type:"HASHTAG"}),r+=a.length}return n}(e.text,t))).sort((function(e,t){return e.offset-t.offset}))).forEach((function(e){e.offset>r&&n.push({start:r,end:e.offset}),n.push({start:e.offset,end:e.offset+e.length,entityKey:e.key,type:e.type}),r=e.offset+e.length})),r<e.text.length&&n.push({start:r,end:e.text.length}),n}(e,n);return i.forEach((function(n,c){var l=function(e,t,n,r){var o=[];s(e,["COLOR","BGCOLOR","FONTSIZE","FONTFAMILY"],n.start,n.end).forEach((function(t){o.push(u(e,t))}));var i=o.join("");return"ENTITY"===n.type?void 0!==n.entityKey&&null!==n.entityKey&&(i=a(t,n.entityKey,i,r)):"HASHTAG"===n.type&&(i='<a href="'.concat(i,'" class="wysiwyg-hashtag">').concat(i,"</a>")),i}(e,t,n,r);0===c&&(l=function(e){if(e){for(var t=e,n=0;n<t.length&&" "===e[n];n+=1)t=t.replace(" ","&nbsp;");return t}return e}(l)),c===i.length-1&&(l=function(e){if(e){for(var t=e,n=t.length-1;n>=0&&" "===t[n];n-=1)t="".concat(t.substring(0,n),"&nbsp;").concat(t.substring(n+1));return t}return e}(l)),o.push(l)})),o.join("")}function l(e,t,o,i,a){var s,u=[],f=[];return e.forEach((function(e){var d=!1;if(s?s.type!==e.type?(u.push("</".concat(n(s.type),">\n")),u.push("<".concat(n(e.type),">\n"))):s.depth===e.depth?f&&f.length>0&&(u.push(l(f,t,o,i,a)),f=[]):(d=!0,f.push(e)):u.push("<".concat(n(e.type),">\n")),!d){u.push("<li");var p=r(e.data);p&&u.push(' style="'.concat(p,'"')),i&&u.push(' dir = "auto"'),u.push(">"),u.push(c(e,t,o,a)),u.push("</li>\n"),s=e}})),f&&f.length>0&&u.push(l(f,t,o,i,a)),u.push("</".concat(n(s.type),">\n")),u.join("")}return function(e,t,o,i){var s=[];if(e){var u=e.blocks,f=e.entityMap;if(u&&u.length>0){var d=[];if(u.forEach((function(e){if("unordered-list-item"===(h=e.type)||"ordered-list-item"===h)d.push(e);else{if(d.length>0){var u=l(d,f,t,i);s.push(u),d=[]}var p=function(e,t,o,i,s){var u=[];if(function(e){return e.entityRanges.length>0&&(void 0===(t=e.text)||null===t||0===t.length||0===t.trim().length||"atomic"===e.type);var t}(e))u.push(a(t,e.entityRanges[0].key,void 0,s));else{var l=n(e.type);if(l){u.push("<".concat(l));var f=r(e.data);f&&u.push(' style="'.concat(f,'"')),i&&u.push(' dir = "auto"'),u.push(">"),u.push(c(e,t,o,s)),u.push("</".concat(l,">"))}}return u.push("\n"),u.join("")}(e,f,t,o,i);s.push(p)}var h})),d.length>0){var p=l(d,f,t,o,i);s.push(p),d=[]}}}return s.join("")}}()},857:function(e,t,n){"use strict";var r=n(5),o=n(9),i=n(0),a=n.n(i),s=n(1),u=n.n(s),c=n(4),l=n.n(c),f=n(3),d=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"],p={className:u.a.string,cssModule:u.a.object,size:u.a.string,bordered:u.a.bool,borderless:u.a.bool,striped:u.a.bool,dark:u.a.bool,hover:u.a.bool,responsive:u.a.oneOfType([u.a.bool,u.a.string]),tag:f.tagPropType,responsiveTag:f.tagPropType,innerRef:u.a.oneOfType([u.a.func,u.a.string,u.a.object])},h=function(e){var t=e.className,n=e.cssModule,i=e.size,s=e.bordered,u=e.borderless,c=e.striped,p=e.dark,h=e.hover,v=e.responsive,y=e.tag,m=e.responsiveTag,g=e.innerRef,b=Object(o.a)(e,d),_=Object(f.mapToCssModules)(l()(t,"table",!!i&&"table-"+i,!!s&&"table-bordered",!!u&&"table-borderless",!!c&&"table-striped",!!p&&"table-dark",!!h&&"table-hover"),n),O=a.a.createElement(y,Object(r.a)({},b,{ref:g,className:_}));if(v){var E=Object(f.mapToCssModules)(!0===v?"table-responsive":"table-responsive-"+v,n);return a.a.createElement(m,{className:E},O)}return O};h.propTypes=p,h.defaultProps={tag:"table",responsiveTag:"div"},t.a=h},884:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.styles={menu:"react-contexify",submenu:"react-contexify react-contexify__submenu",submenuArrow:"react-contexify__submenu-arrow",separator:"react-contexify__separator",item:"react-contexify__item",itemDisabled:"react-contexify__item--disabled",itemContent:"react-contexify__item__content",itemIcon:"react-contexify__item__icon",theme:"react-contexify__theme--",animationWillEnter:"react-contexify__will-enter--",animationWillLeave:"react-contexify__will-leave--"},t.theme={light:"light",dark:"dark"},t.animation={fade:"fade",flip:"flip",pop:"pop",zoom:"zoom"}},978:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1350);t.Menu=r.Menu;var o=n(1352);t.Item=o.Item;var i=n(1353);t.Separator=i.Separator;var a=n(1354);t.IconFont=a.IconFont;var s=n(1355);t.Submenu=s.Submenu;var u=n(1356);t.MenuProvider=u.MenuProvider;var c=n(1357);t.contextMenu=c.contextMenu;var l=n(884);t.theme=l.theme,t.animation=l.animation}}]);
//# sourceMappingURL=44.7a92c2a3.chunk.js.map