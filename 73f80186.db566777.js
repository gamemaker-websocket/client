(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(84)),l={id:"messages",title:"Send and receive data",sidebar_label:"Send and receive data"},s={unversionedId:"api/messages",id:"api/messages",isDocsHomePage:!1,title:"Send and receive data",description:"GWS provides several functions to send data to the other players.",source:"@site/docs\\api\\messages.md",slug:"/api/messages",permalink:"/client/api/messages",editUrl:"https://github.com/gamemaker-websocket/client/edit/master/docs/docs/api/messages.md",version:"current",sidebar_label:"Send and receive data",sidebar:"default",previous:{title:"Connection handling",permalink:"/client/api/connection"},next:{title:"Lobbies",permalink:"/client/api/lobbies"}},o=[],c={toc:o};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"GWS provides several functions to send data to the other players. "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"All send functions accept these 3 arguments:")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"msg_id")," - The message ID. You will use this to identify the kind of message received from a player. "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"player_id")," - The ID of the player which to send the message (use 255 to send to all lobby players)."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"data")," - Data to send (string/number/array/buffer/etc)."),Object(i.b)("p",null,"For example, if you want to send a chat message to a player."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"net_send_string(0, 12, \"Hello world!\");\n// 0 is defined by you to understand the kind of data, in this case a 'chat message'.\n")),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"The full list of the available functions:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"net_send()")," - Buffer"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"net_send_string()")," - String"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"net_send_string_array()")," - Array of strings"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"net_send_number()")," - Number"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"net_send_number_array()")," - Array of numbers"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"net_send_byte()")," - Byte"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"net_send_byte_array()")," - Array of bytes"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"net_send_array()")," - Array of numbers/strings/booleans/int64"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"net_send_list()")," - List of numbers/strings/booleans/int64"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"net_send_map()")," - Map of numbers/strings/booleans/int64")),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Listen for incoming messages:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"net_on(msg_id, callback);\n")),Object(i.b)("p",null,"This will register a callback function for the specific message ID, that will be executed every time the player receives a message."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'function on_message(player_id, message) {\n  show_debug_message(string(player_id) + " sent a message: " + message);\n};\nnet_on(0, on_message);\n// This will register the callback for all the messages with ID 0\n')))}b.isMDXComponent=!0},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.a.createElement(d,s(s({ref:t},c),{},{components:n})):r.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);