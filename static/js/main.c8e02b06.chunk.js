(this["webpackJsonpgoit-react-hw-05-budget-planner"]=this["webpackJsonpgoit-react-hw-05-budget-planner"]||[]).push([[0],{105:function(e,n,t){e.exports=t(201)},121:function(e,n){},123:function(e,n){},156:function(e,n){},157:function(e,n){},200:function(e,n,t){},201:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(32),o=t.n(u),i=t(9),l=t(4),c=t(5),s="ADD_BUDGET",p="ADD_EXPENSE",m="REMOVE_EXPENSE",d=t(33),b=t(34),f=t(36),x=t(35),g=t(37);function v(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  width: 100%;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]);return v=function(){return e},e}var h=c.a.form(v()),E=function(e){var n=e.onSubmit,t=void 0===n?function(){return null}:n,a=e.children;return r.a.createElement(h,{onSubmit:t},a)};function y(){var e=Object(l.a)(["\n  display: inline-block;\n  font-size: 20px;\n  color: #171718;\n  cursor: pointer;\n  ","\n"]);return y=function(){return e},e}var j=c.a.label(y(),(function(e){return e.customStyles})),O=function(e){var n=e.children,t=e.customStyles;return r.a.createElement(j,{customStyles:t},n)};function S(){var e=Object(l.a)(["\n  color: #171718;\n  font: inherit;\n  font-size: 1.2rem;\n  padding: 16px;\n  border-radius: 4px;\n  border: 1px solid #bdbdbd;\n  width: 100%;\n  outline: 0;\n\n  &:focus {\n    border: 1px solid #2b32b2;\n  }\n"]);return S=function(){return e},e}var w=c.a.input(S()),C=function(e){var n=e.type,t=void 0===n?" text":n,a=e.value,u=void 0===a?"":a,o=e.onChange,i=void 0===o?function(){return null}:o,l=e.name,c=void 0===l?"":l;return r.a.createElement(w,{type:t,value:u,onChange:i,name:c})};function k(){var e=Object(l.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background-color: #3f51b5;\n  border: 0;\n  outline: 0;\n  padding: 8px 24px;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);\n  font: inherit;\n  text-transform: uppercase;\n  user-select: none;\n\n  transition: background-color 200ms ease-in-out;\n\n  &:hover {\n    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);\n    background-color: #303f9f;\n  }\n"]);return k=function(){return e},e}var D=c.a.button(k()),L=function(e){var n=e.type,t=void 0===n?"button":n,a=e.label,u=void 0===a?"":a,o=e.onClick,i=void 0===o?function(){return null}:o;return r.a.createElement(D,{type:t,onClick:i},u)},P=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(t=Object(f.a)(this,(e=Object(x.a)(n)).call.apply(e,[this].concat(r)))).state={budget:0},t.handleChange=function(e){t.setState({budget:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSave(+t.state.budget),t.setState({budget:0})},t}return Object(g.a)(n,e),Object(b.a)(n,[{key:"render",value:function(){return r.a.createElement(E,{onSubmit:this.handleSubmit},r.a.createElement(O,{customStyles:"\n  margin-bottom: 16px;  \n"},"Enter your total budget",r.a.createElement(C,{type:"number",value:this.state.budget,onChange:this.handleChange})),r.a.createElement(L,{label:"Save",type:"submit"}))}}]),n}(a.Component),A=Object(i.b)((function(e){return{budget:e.budget,expenseList:e.expenseList}}),(function(e){return{onSave:function(n){return e(function(e){return{type:s,payload:e}}(n))}}}))(P),z=t(99),B=t(100),R=t.n(B),N=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(t=Object(f.a)(this,(e=Object(x.a)(n)).call.apply(e,[this].concat(r)))).state={name:"",amount:0},t.handleChange=function(e){t.setState(Object(z.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,r=n.amount,u={id:R.a.generate(),name:a,amount:Number(r)};t.props.onExpense(u),t.setState({name:"",amount:0})},t}return Object(g.a)(n,e),Object(b.a)(n,[{key:"render",value:function(){return r.a.createElement(E,{onSubmit:this.handleSubmit},r.a.createElement(O,{customStyles:"\n  margin-bottom: 16px;  \n"},"Enter expense name",r.a.createElement(C,{type:"text",name:"name",value:this.state.name,onChange:this.handleChange})),r.a.createElement(O,{customStyles:"\n  margin-bottom: 16px;  \n"},"Enter expense amount",r.a.createElement(C,{type:"number",name:"amount",value:this.state.amount,onChange:this.handleChange})),r.a.createElement(L,{label:"Add",type:"submit"}))}}]),n}(a.Component),_=Object(i.b)((function(e){return{budget:e.budget,expenses:e.expenseList}}),(function(e){return{onExpense:function(n){return e(function(e){return{type:p,payload:{name:e.name,amount:e.amount,id:e.id}}}(n))}}}))(N);function F(){var e=Object(l.a)(["\n  border-collapse: collapse;\n  text-align: center;\n  width: 100%;\n\n  tr {\n    border-bottom: 1px solid #212121;\n  }\n\n  td,\n  th {\n    padding-top: 8px;\n    padding-bottom: 8px;\n  }\n"]);return F=function(){return e},e}var J=c.a.table(F()),T=function(e){var n=e.items,t=void 0===n?[]:n,a=e.onRemove;return console.log(t),r.a.createElement(J,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Expense name"),r.a.createElement("th",null,"Expense amount"),r.a.createElement("th",null))),r.a.createElement("tbody",null,t.map((function(e){var n=e.id,t=e.name,u=e.amount;return r.a.createElement("tr",{key:n},r.a.createElement("td",null,t),r.a.createElement("td",null,u),r.a.createElement("td",null,r.a.createElement(L,{label:"Delete",onClick:function(){return a(n)}})))}))))},X=Object(i.b)((function(e){return{items:e.expenseList}}),(function(e){return{onRemove:function(n){return e({type:m,payload:n})}}}))(T);function G(){var e=Object(l.a)(["\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 48px;\n"]);return G=function(){return e},e}function I(){var e=Object(l.a)(["\n  margin-top: 0;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 24px;\n"]);return I=function(){return e},e}function M(){var e=Object(l.a)(["\n  text-align: center;\n  padding: 8px 24px;\n  color: ",";\n  user-select: none;\n"]);return M=function(){return e},e}var U=c.a.div(M(),(function(e){return e.isPositive?"#388E3C":"#D32F2F"})),V=c.a.p(I()),$=c.a.p(G()),q=function(e){var n=e.label,t=e.value,a=e.isPositive;return r.a.createElement(U,{isPositive:a},r.a.createElement(V,null,n),r.a.createElement($,null,t,"\xa0$"))};function H(){var e=Object(l.a)(["\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return H=function(){return e},e}var K=c.a.section(H()),Q=Object(i.b)((function(e){return{budget:e.budget,expenses:e.expenseList}}))((function(e){var n=e.budget,t=function(e){return e.reduce((function(e,n){return e+n.amount}),0)}(e.expenses),a=function(e,n){return e-n}(n,t);return r.a.createElement(K,null,r.a.createElement(q,{label:"Budget",value:n,isPositive:!0}),r.a.createElement(q,{label:"Expenses",value:t}),r.a.createElement(q,{label:"Balance",value:a,isPositive:a>=0}))}));function W(){var e=Object(l.a)(["\n  display: grid;\n  grid-template-columns: 340px 1fr;\n  align-items: flex-start;\n  grid-gap: 24px;\n  max-width: 960px;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return W=function(){return e},e}var Y=c.a.div(W()),Z=Object(i.b)((function(e){return{expenses:e.expenseList}}))((function(e){var n=e.expenses;return r.a.createElement(Y,null,r.a.createElement(A,null),r.a.createElement(Q,null),r.a.createElement(_,null),n.length>0&&r.a.createElement(X,null))})),ee=t(20),ne=t(101),te=t(102),ae=Object(ee.combineReducers)({budget:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case s:return e+n.payload;default:return e}},expenseList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case p:return[n.payload].concat(Object(te.a)(e));case m:return e.filter((function(e){return e.id!==n.payload}));default:return e}}}),re=Object(ee.createStore)(ae,Object(ne.devToolsEnhancer)());t(200);o.a.render(r.a.createElement(i.a,{store:re},r.a.createElement(Z,null)),document.getElementById("root"))}},[[105,1,2]]]);
//# sourceMappingURL=main.c8e02b06.chunk.js.map