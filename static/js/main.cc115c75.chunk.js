(this["webpackJsonphowrandomyouare.frontend"]=this["webpackJsonphowrandomyouare.frontend"]||[]).push([[0],{109:function(e,o,t){"use strict";t.d(o,"b",(function(){return r})),t.d(o,"c",(function(){return c}));var n=t(19),a="notificacao/NOTIFICAR",i={mensagem:"",tipo:"erro",exibeNotificacao:!1};o.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,o=arguments.length>1?arguments[1]:void 0;switch(o.type){case a:return Object(n.a)(Object(n.a)({},e),{},{mensagem:o.payload.mensagem,tipo:"erro",exibeNotificacao:!0});case"notificacao/NOTIFICAR_SUCESSO":return Object(n.a)(Object(n.a)({},e),{},{mensagem:o.payload.mensagem,tipo:"sucesso",exibeNotificacao:!0});case"notificacao/OCULTAR_NOTIFICACAO":return Object(n.a)(Object(n.a)({},e),{},{mensagem:"",exibeNotificacao:!1});default:return e}};var r=function(e){return{type:a,payload:{mensagem:e}}},c=function(){return{type:"notificacao/OCULTAR_NOTIFICACAO"}}},147:function(e,o,t){"use strict";t.d(o,"a",(function(){return r}));t(439);var n={producao:{codigo:"producao"},homologacao:{codigo:"homologacao"},rollout:{codigo:"rollout"},desenvolvimento:{codigo:"desenvolvimento"},local:{codigo:"local"},teste:{codigo:"teste"}},a={REACT_APP_NOME_AMBIENTE:n.desenvolvimento,PUBLIC_URL:"http://localhost/",API_GATEWAY_URL:"https://el0qu4lpna.execute-api.sa-east-1.amazonaws.com"},i={REACT_APP_NOME_AMBIENTE:n.producao,PUBLIC_URL:"xxx.com.br/",API_GATEWAY_URL:"https://el0qu4lpna.execute-api.sa-east-1.amazonaws.com"};function r(){return(window&&window.location&&window.location.hostname).startsWith("xxx.com.br")?i:a}},218:function(e,o,t){"use strict";var n=t(60),a=t(224),i=t(19),r={usuario:null,acessoNegado:!1};var c=t(109),l=Object(n.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,o=arguments.length>1?arguments[1]:void 0;switch(o.type){case"app/login/INSERIR_DADOS_ACESSO":return Object(i.a)(Object(i.a)({},e),{},{usuario:o.payload,tempoRenovarSecao:null,acessoNegado:!1});case"app/login/LIMPAR_DADOS_ACESSO":return Object(i.a)(Object(i.a)({},r),{},{acessoNegado:!0,usuario:null});default:return e}},notificacao:c.a}),u=n.d,s=Object(n.e)(l,u(Object(n.a)(a.a)));o.a=s},232:function(e,o,t){e.exports=t(441)},430:function(e,o,t){},435:function(e,o,t){},441:function(e,o,t){"use strict";t.r(o);t(233),t(242);var n=t(0),a=t.n(n),i=t(29),r=t.n(i),c=(t(430),t(72)),l=(t(435),t(19)),u=function(e,o,t){for(var n={},a=0;a<=o;a++){n[e.replace("{i}",a)]=t(a)}return n},s=function(e){return e?8*e+"px":"0"},f={palette:{primary:{light:"#656D75",main:"#656D75",dark:"#656D75"},secondary:{light:"#D31245",main:"#D31245"},action:{disabled:{}},background:{default:"#ffffff"}},spacing:8,typography:{fontFamily:"Helvetica",h1:{fontWeight:"bold",fontSize:"2.25rem",color:"#656D75"},h2:{fontWeight:"600",fontSize:"1.5rem",color:"#656D75"},h3:{fontWeight:"600",fontSize:"1.3125rem",color:"#656D75"},h4:{fontWeight:"500",fontSize:"1rem",color:"#656D75"},body1:{fontWeight:"500",fontSize:"0.75rem"},body2:{fontWeight:"lighter",fontSize:"0.625rem"},subtitle1:{fontWeight:"600",fontSize:"1rem",color:"#C0C6D6"},subtitle2:{fontWeight:"normal",fontSize:"0.75rem",color:"#8CA0B3"}},overrides:{MuiOutlinedInput:{root:{"&.Mui-disabled":{backgroundColor:"rgba(192,192,222,0.15)"},color:"#656D75",fontWeight:"500",fontSize:"1rem"}},MuiFormLabel:{root:{fontFamily:"Helvetica",color:"#636D76",fontSize:"1rem",fontWeight:"500"}},MuiButton:{root:{textTransform:"none",fontWeight:"600","&.Mui-disabled":{backgroundColor:"#C0C6D6",color:"#ffffff"}}},MuiTableCell:{root:{"&.spacing-1":{padding:"14px 8px 14px 8px"}},head:{fontSize:"14px",color:"#61688B",fontWeight:"normal",padding:"10px ".concat(s(1)," 2px ").concat(s(1))},footer:{borderBottom:"0px"},body:{fontSize:"16px",fontWeight:"500",color:"#656D75",padding:"10px ".concat(s(1)," 10px ").concat(s(1)),borderBottom:"1px solid #F9F9F9"}},MuiFormHelperText:{contained:{marginLeft:"0px"}},MuiCheckbox:{root:{"&.Mui-disabled":{color:"#C0C6D6"}}},MuiTabs:{root:{fontFamily:"Helvetica"}},MuiTab:{root:{"&.Mui-selected":{color:"#D31245"},fontWeight:"600",fontSize:"1rem"}},MuiButtonBase:{root:{textTransform:"none !important",minWidth:"0px !important"}}},global:Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)({".text-overflow-ellipsis":{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},".italic":{fontStyle:"italic"},".bold":{fontWeight:"bold"},".bolaVermelha":{borderRadius:"50%",height:"5px",width:"5px",backgroundColor:"#D31245",display:"inline-block",marginBottom:"4px",marginRight:"12px"},".body3":{fontWeight:"lighter",lineHeight:"1.4"}},u(".mb-{i}",8,(function(e){return{marginBottom:s(.5*e)}}))),u(".mt-{i}",8,(function(e){return{marginTop:s(.5*e)}}))),u(".mr-{i}",8,(function(e){return{marginRight:s(.5*e)}}))),u(".ml-{i}",8,(function(e){return{marginLeft:s(.5*e)}}))),u(".pl-{i}",8,(function(e){return{paddingLeft:s(.5*e)}}))),u(".pr-{i}",8,(function(e){return{paddingRight:s(.5*e)}}))),u(".pt-{i}",8,(function(e){return{paddingTop:s(.5*e)}})))},m=t(17);var d=Object(n.lazy)((function(){return Promise.all([t.e(3),t.e(4)]).then(t.bind(null,522))})),g=function(){var e,o=a.a.createElement(m.c,null,a.a.createElement(m.a,{exact:!0,path:"/",component:(e=d,function(o){return a.a.createElement(n.Suspense,{fallback:a.a.createElement("div",null,"Carregando...")},a.a.createElement(e,o))})})),t=Object(m.f)((function(e){return o}));return a.a.createElement(t,null)},p=t(467),b=t(466),h=t(225),O=t(465),x=t(469),v=t(463),C=t(464),E=t(223),y=t.n(E),A=t(109),j=Object(O.a)((function(e){return{sucesso:{backgroundColor:"#BF43AB"},erro:{backgroundColor:"rgb(49, 49, 49);"}}})),w=Object(c.b)((function(e){return{mensagem:e.notificacao.mensagem,tipo:e.notificacao.tipo,exibeNotificacao:e.notificacao.exibeNotificacao}}),(function(e){return{ocultar:function(){return e(Object(A.c)())}}}))((function(e){var o=function(){e.ocultar()},t=j(),n="erro"===e.tipo?t.erro:t.sucesso;return a.a.createElement(x.a,{className:"sucesso",classes:{root:n},anchorOrigin:{vertical:"bottom",horizontal:"center"},open:e.exibeNotificacao,ContentProps:{"aria-describedby":"message-id",classes:{root:n}},message:a.a.createElement(v.a,{variant:"subtitle2",style:{color:"#ffffff"},id:"message-id"},e.mensagem),autoHideDuration:7e3,onClose:o,ClickAwayListenerProps:{mouseEvent:!1},action:[a.a.createElement(C.a,{key:"close","aria-label":"Close",color:"inherit",onClick:o},a.a.createElement(y.a,null))]})})),S=Object(h.a)(f);var D=Object(O.a)((function(e){return{"@global":f.global}})),W=Object(c.b)((function(e){return{estaAutenticado:null!=e.login.usuario,usuario:e.login.usuario}}))((function(e){return D(),a.a.createElement(b.a,{theme:S},a.a.createElement(p.a,null),a.a.createElement(g,null),a.a.createElement(w,null))}));t(147),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=t(146),T=t(218),I=a.a.createElement(c.a,{store:T.a},a.a.createElement(N.a,{basename:"/"},a.a.createElement(W,null)));r.a.render(I,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[232,1,2]]]);
//# sourceMappingURL=main.cc115c75.chunk.js.map