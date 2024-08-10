import{_ as p,D as t,c as i,j as n,a as s,I as l,w as e,a2 as o,o as r}from"./chunks/framework.D7DDXwPo.js";const $=JSON.parse('{"title":"开始","description":"","frontmatter":{},"headers":[],"relativePath":"start/start.md","filePath":"start/start.md"}'),c={name:"start/start.md"},d=n("h1",{id:"开始",tabindex:"-1"},[s("开始 "),n("a",{class:"header-anchor",href:"#开始","aria-label":'Permalink to "开始"'},"​")],-1),u=n("h2",{id:"项目启动",tabindex:"-1"},[s("项目启动 "),n("a",{class:"header-anchor",href:"#项目启动","aria-label":'Permalink to "项目启动"'},"​")],-1),h=n("p",null,"前期准备",-1),_=n("a",{href:"https://www.pnpm.cn/",target:"_blank",rel:"noreferrer"},"pnpm",-1),m=n("li",null,null,-1),b=n("p",null,[s("node版本在18以上，如果本地还有其他项目使用低版本node请安装node版本管理工具， "),n("a",{href:"https://github.com/tj/n",target:"_blank",rel:"noreferrer"},"n"),s("、"),n("a",{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noreferrer"},"nvm"),s(" 等；")],-1),f=n("ul",null,[n("li",null,[s("下载依赖的时候有时候可能会下载不下来，可以选择使用"),n("a",{href:"https://github.com/Pana/nrm",target:"_blank",rel:"noreferrer"},"nrm"),s("包管理工具；")]),n("li",null,"尽量不要使用vscode内置的shell工具下载依赖，有些时候经常下载不下来，不清楚为什么；")],-1),g=n("li",null,[n("p",null,"nrm私仓切换源")],-1),v=o(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  #安装 nrm</span></span>
<span class="line"><span>  npm install -g nrm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  #新增私仓地址   ws可以使用其他名字，只是一个关键字，后面切换的时候需要使用</span></span>
<span class="line"><span>  nrm add  ws http://172.16.125.240:1937/  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  #切换到私仓    如果需要还原到npm源   使用 nrm use npm 即可还原回去</span></span>
<span class="line"><span>  nrm use  ws</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  #查看是否成功切换  如果ws那行前面有个*号证明切换成功 </span></span>
<span class="line"><span>  nrm ls</span></span></code></pre></div><ul><li>运行项目</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  #下载依赖  如果下载依赖有问题或者依赖版本下载不正确，请使用  pnpm store prune  命令清除下pnpm的缓存</span></span>
<span class="line"><span>  pnpm install   </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  #运行</span></span>
<span class="line"><span>  npm run dev</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  #格式化代码 + 校验代码格式</span></span>
<span class="line"><span>  npm run lint</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  #打包</span></span>
<span class="line"><span>  npm run build</span></span></code></pre></div><h2 id="开发注意" tabindex="-1">开发注意 <a class="header-anchor" href="#开发注意" aria-label="Permalink to &quot;开发注意&quot;">​</a></h2><ul><li>大驼峰 = 首字母大写、分割大写</li><li>小驼峰 = 首字母小写、分割大写</li></ul><p>文件命名规则</p><ul><li>页面、组件命名规则&quot;大驼峰&quot;命名；</li><li>文件夹、ts等文件命名命名&quot;小驼峰&quot;；</li></ul><p>代码命名规则</p>`,8),k=n("li",null,'css： css命名方式用"-"分割；',-1),w=n("li",null,'html：标签写法（el-input、gs-spin）、props写法也是用"-"方式,比如说定义的名字为isShow，组件使用的时候应该是is-show而不是isShow；',-1),x=n("p",null,"网络请求相关",-1),C=n("ul",null,[n("li",null,'所有请求都封装在api这个文件夹下面 文件命名规则为 "模块名Apis"；'),n("li",null,"get请求参数放到params里面；"),n("li",null,"post请求参数默认放到data里面，注意有些特别的post请求data跟params都需要；")],-1);function P(S,T,q,y,N,V){const a=t("font");return r(),i("div",null,[d,u,n("ul",null,[n("li",null,[h,n("ul",null,[n("li",null,[s("请使用"),_,s("作为包管理工具，"),l(a,{color:"red"},{default:e(()=>[s("尽量不要选择npm或者yarn！！！")]),_:1}),s("；")]),m]),b,f]),g]),v,n("ul",null,[n("li",null,[s('ts： type、interface、class声明方式为"'),l(a,{color:"red"},{default:e(()=>[s("大驼峰")]),_:1}),s('"；')]),k,w]),x,C])}const B=p(c,[["render",P]]);export{$ as __pageData,B as default};
