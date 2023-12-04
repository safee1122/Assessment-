import{r as c,j as e,F as t,I as u,U as m,u as P,a as F,b as k,C as E,B as R,S as C,m as f}from"./index-7-61QJr-.js";import{M as b,S as z,T as M}from"./Table-CHvNoUiu.js";const N=({editId:h,isModalOpen:r,handleCancel:x,form:d,onFinish:o})=>{const[l,i]=c.useState([]),p=async()=>{const n=await m.getUserRoles();i(n==null?void 0:n.roles)};return c.useEffect(()=>{p()},[]),e.jsx(b,{title:"Enter Product Details",okText:h.current?"Update":"Save",open:r,onOk:d.submit,onCancel:x,children:e.jsxs(t,{form:d,onFinish:o,layout:"vertical",children:[e.jsx(t.Item,{name:"firstname",rules:[{required:!0,message:"Please enter user name"}],children:e.jsx(u,{type:"text",placeholder:"First Name",size:"large"})}),e.jsx(t.Item,{name:"lastname",rules:[{required:!0,message:"Please enter user last name"}],children:e.jsx(u,{type:"text",placeholder:"Last Name",size:"large"})}),e.jsx(t.Item,{name:"email",rules:[{required:!0,message:"Please enter user email"}],children:e.jsx(u,{type:"email",placeholder:"Email",size:"large"})}),e.jsx(t.Item,{name:"password",rules:[{required:!0,message:"Please enter passsword"},{min:5,message:"Password must be at least 5 characters"}],children:e.jsx(u,{type:"password",placeholder:"Password",size:"large"})}),e.jsx(t.Item,{name:"userRole",rules:[{required:!0,message:"Please enter passsword"}],children:e.jsx(z,{mode:"text",style:{width:"100%"},placeholder:"Role",options:l})})]})})},B=()=>{const[h,r]=c.useState(!1),[x,d]=c.useState(!1),[o]=t.useForm(),l=c.useRef(null),i=P(),p=[{title:"FirstName",dataIndex:"firstname",key:"firstname",render:s=>e.jsx("a",{children:s})},{title:"LastName",dataIndex:"lastname",key:"lastname"},{title:"Email",dataIndex:"email",key:"email"},{title:"Action",key:"action",render:(s,a)=>e.jsx(C,{size:"middle",children:e.jsx("a",{onClick:()=>S(a==null?void 0:a._id),children:"Delete"})})}],n=F(k),y=async()=>{try{i(await m.getAll())}catch(s){console.log("error",s)}};c.useEffect(()=>{y()},[]);const j=async s=>{try{await i(await m.create(s)),r(!1),d(!x),f.success("User created Successfully")}catch(a){console.error(a)}},g=()=>{l.current||o.resetFields(),r(!0)},w=()=>{r(!1)},I=async s=>{l.current?U():j(s),o.resetFields()},S=async s=>{try{await i(await m.deleteUser(s))}catch(a){console.error(a)}},U=async()=>{try{f.success("Product updated successfully"),r(!1)}catch(s){console.error(s)}};return e.jsxs(e.Fragment,{children:[e.jsx(E,{className:"card-wrapper",extra:e.jsx(R,{type:"primary",size:"large",onClick:()=>{l.current=!1,g()},children:"Create User"}),children:e.jsx("div",{className:"ag-theme-alpine",style:{height:600,maxwidth:100},children:n&&e.jsx(M,{columns:p,dataSource:n})})}),e.jsx(N,{isModalOpen:h,handleCancel:w,form:o,onFinish:I,editId:l})]})};export{B as default};
