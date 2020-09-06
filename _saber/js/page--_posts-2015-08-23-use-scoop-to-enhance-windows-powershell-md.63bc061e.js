(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{350:function(e,t,o){"use strict";o.r(t);var a=o(0),s=function(e){var t,a,s,p=(s=void 0,(t={}).type=a="post",t.internal=s,t.contentType="markdown",t.slug="use-scoop-to-enhance-windows-powershell",t.content=s,t.createdAt=new Date(1440343151e3),t.updatedAt=new Date(1441358378e3),t.layout=a,t.title="用 Scoop 改善 Windows Powershell",t.date="2015-08-23 23:19:11",t.updated="2015-09-04 17:19:38",t.assets={cover:o(56)},t.categories=["技术"],t.markdownHeadings=[{text:"一本道",slug:"一本道",level:2},{text:"正题",slug:"正题",level:2}],t.excerpt='<p style="text-align:center"><strong><a href="/blog/2018/05/talk-about-scoop-the-package-manager-for-windows-again">关于 Scoop 的新文章</a></strong></p>\n',t.permalink="/blog/2015/08/use-scoop-to-enhance-windows-powershell",t.attributes=t,t.categoriesInfo=[{name:"技术",permalink:"/blog/category/technology"}],t),n=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=p}].concat(n);["layout","transition"].forEach((function(t){var o=e.options.PageComponent;o&&(e.options[t]=o[t]),void 0===e.options[t]&&(e.options[t]=p[t])})),p.slug&&(e.options.name="page-wrapper-"+p.slug.replace(/[^0-9a-z\-]/gi,"-"))},p=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("layout-manager",[a("p",{staticStyle:{"text-align":"center"}},[a("strong",[a("saber-link",{attrs:{to:"/blog/2018/05/talk-about-scoop-the-package-manager-for-windows-again"}},[e._v("关于 Scoop 的新文章")])],1)]),e._v(" "),a("h2",{attrs:{id:"一本道"}},[e._v("一本道")]),e._v(" "),a("p",[e._v("软件包管理工具想必大家已经很清楚并且使用过。Debian/ Ubuntu 的 apt-get，\nArch Linux 的 Pacman，就连本身并无自带包管理工具的 Mac 都有了 Macports\n和极其好用的 Homebrew。至于 Windows 下，\nGeek 们也生产出各式各样的工具以贴合他们的 *nix 使用习惯。其中软件包管理工具中比较出名的就是 "),a("strong",[a("saber-link",{attrs:{to:"https://chocolatey.org/"}},[e._v("chocolatey")])],1),e._v(" 了。")]),e._v(" "),a("p",[e._v("然而本文并不细谈 chocolatey，而谈的是一个叫做 "),a("strong",[a("saber-link",{attrs:{to:"http://scoop.sh/"}},[e._v("Scoop")])],1),e._v("\n工具。官网上的描述是“A command-line installer for Windows”，其实说白了，就是和 chocolatey 同属一种东西，也就是 Windows 下的软件包管理工具，但其并没有 chocolatey 出名与强大。")]),e._v(" "),a("p",[e._v("那我为什么要用 Scoop 而不是 chocolatey？一正是 chocolatey 够强大，但其实我一开始并没打算折腾 Powershell，因为已经在用 Git Bash / MSYS2，所以我无需使用太过庞大的工具；二是 scoop 有吸引我的地方，它能把 Powershell\n弄得看起来像 Linux shell 的样子，这也是为什么我要折腾 PS 的促因。")]),e._v(" "),a("div",{staticClass:"gad"},[a("adsbygoogle",{attrs:{"ad-layout":"in-article","ad-format":"fluid","ad-slot":"8422573867"}})],1),e._v(" "),a("p",[e._v("看 Scoop 主页的 Demo 视频，你会发现视频里的 PS 用起来很简约，而又是更方便了，不仅能安装运行各种 GNU 工具（"),a("code",{pre:!0},[e._v("curl")]),e._v("、"),a("code",{pre:!0},[e._v("vim")]),e._v(" 等），而且 "),a("code",{pre:!0},[e._v("$PS1")]),e._v(" 看起来像是 Linux 下的终端，还能显示 git 仓库的分支信息，简直 Geek 范十足。虽说已有 MSYS2 这种更集成的 *nix 环境，但既然看到了 Scoop 又挺不错的于是就折腾下呗。毕竟是 Windows 内置的嘛，还能 Win + R powershell 快速打开，有时候打下指令（"),a("code",{pre:!0},[e._v("ipconfig")]),e._v("、"),a("code",{pre:!0},[e._v("nslookup")]),e._v(" 什么的）还是会用到的呢。")]),e._v(" "),a("figure",{attrs:{"data-type":"image"}},[a("saber-image",{attrs:{src:o(78),alt:"",title:"配置 Scoop 后的样子"}}),a("figcaption",[e._v("配置 Scoop 后的样子")])],1),e._v(" "),a("h2",{attrs:{id:"正题"}},[e._v("正题")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("确保你已安装 Powershell 3（其实 Windows7+ 应该都已经集成了），然后 WIn + R 输入 powershell 打开 PS，一句命令安装 scoop：")]),e._v(" "),a("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"powershell"}},[a("pre",{pre:!0,attrs:{class:"saber-highlight-code language-powershell"}},[a("code",{pre:!0,attrs:{class:"language-powershell"}},[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("iex")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("new-object")]),e._v(" net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("webclient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("downloadstring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://get.scoop.sh'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")])])])])]),e._v(" "),a("li",[a("p",[e._v("安装完成后输入 "),a("code",{pre:!0},[e._v("scoop help")]),e._v("，如果报错则需要允许 PS 提供脚本执行权限，执行：")]),e._v(" "),a("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"powershell"}},[a("pre",{pre:!0,attrs:{class:"saber-highlight-code language-powershell"}},[a("code",{pre:!0,attrs:{class:"language-powershell"}},[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("set-executionpolicy")]),e._v(" unrestricted "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("s cu")])])])]),e._v(" "),a("li",[a("p",[e._v("然后就可以像 apt-get 那样 "),a("code",{pre:!0},[e._v("install/uninstall")]),e._v(" 软件包了：")]),e._v(" "),a("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"powershell"}},[a("pre",{pre:!0,attrs:{class:"saber-highlight-code language-powershell"}},[a("code",{pre:!0,attrs:{class:"language-powershell"}},[e._v("scoop install pkgname")])])]),a("p",[e._v("用 scoop 安装软件包时不会弹出 UAC 要求提权，因为软件包是安装在当前用户的 "),a("code",{pre:!0},[e._v("appdata")]),e._v(" 下的，并通过 shims path 管理调用执行文件，而不是将每个执行文件的路径都加到 path 中。")])]),e._v(" "),a("li",[a("p",[e._v("开始美化控制台显示样式（★）首先 "),a("code",{pre:!0},[e._v("scoop install concfg")]),e._v(" 安装 "),a("code",{pre:!0},[e._v("concfg")]),e._v("，然后导入 Solarized 主题"),a("code",{pre:!0},[e._v("concfg import solarized small")]),e._v("（concfg 支持多种主题，详见 "),a("saber-link",{attrs:{to:"https://github.com/lukesampson/concfg/tree/master/presets"}},[e._v("concfg/presets")]),e._v("），期间会提示你替换了哪些控制台（其实也就 "),a("code",{pre:!0},[e._v("CMD")]),e._v(" 和 "),a("code",{pre:!0},[e._v("PS")]),e._v("）的样式。然后 "),a("code",{pre:!0},[e._v("scoop install pshazz")]),e._v(" 安装 "),a("code",{pre:!0},[e._v("pshazz")]),e._v("，当安装完后马上就能看到 shell prompt 发生变化了，而且 cd 到一个 git 仓库还能看到分支信息，还支持 git auto-completion 呢。")],1)]),e._v(" "),a("li",[a("p",[e._v("然后还可以安装使用 "),a("code",{pre:!0},[e._v("touch")]),e._v("、"),a("code",{pre:!0},[e._v("curl")]),e._v("、"),a("code",{pre:!0},[e._v("vim")]),e._v(" 等更多的 GNU 命令行工具。\nscoop 官方的 Packages 是 "),a("saber-link",{attrs:{to:"https://github.com/lukesampson/scoop/tree/master/bucket"}},[e._v("bucket")]),e._v("，如果里面没有你想安装的工具你还可以"),a("saber-link",{attrs:{to:"https://github.com/lukesampson/scoop/wiki/Buckets#creating-your-own-bucket"}},[e._v("自定义 bucket")]),e._v(" 或 "),a("saber-link",{attrs:{to:"https://github.com/lukesampson/scoop/wiki/Creating-an-app-manifest"}},[e._v("创建一个 package")]),e._v("。")],1)]),e._v(" "),a("li",[a("p",[e._v("最后还能用 scoop 进行开发语言环境的"),a("saber-link",{attrs:{to:"https://github.com/lukesampson/scoop/wiki/Switching-Ruby-and-Python-Versions"}},[e._v("多版本控制")]),e._v("呢，比如 "),a("code",{pre:!0},[e._v("scoop install python27 python")]),e._v(" 同时安装 Py2.7 和 Py3，然后 "),a("code",{pre:!0},[e._v("scoop reset python27")]),e._v(" 选择 Py2.7，"),a("code",{pre:!0},[e._v("scoop reset python")]),e._v(" 则设置为 Py3。")],1)])]),e._v(" "),a("p",[e._v("至于更详尽的使用方法请 "),a("code",{pre:!0},[e._v("scoop help")]),e._v(" 或访问 "),a("saber-link",{attrs:{to:"https://github.com/lukesampson/scoop/wiki"}},[e._v("Scoop Wiki")]),e._v(" 咯。")],1),e._v(" "),a("p",[e._v("总结：所以说这种人就只能为他们的这种“如此难以伺候”而不断地折腾自己的电脑，折腾自己。这就是所谓“生命不息，折腾不止”吧哈哈哈。。。卒")])])}),[],!1,null,null,null);"function"==typeof s&&s(p);t.default=p.exports},56:function(e,t,o){e.exports={srcSet:o.p+"images/20181225013-28be324a.png 600w,"+o.p+"images/20181225013-1eea2bc6.png 480w",images:[{path:o.p+"images/20181225013-28be324a.png",width:600,height:450},{path:o.p+"images/20181225013-1eea2bc6.png",width:480,height:360}],src:o.p+"images/20181225013-28be324a.png",toString:function(){return o.p+"images/20181225013-28be324a.png"},placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAIAAADRv8uKAAAACXBIWXMAAAsSAAALEgHS3X78AAADXUlEQVRIx+2Wy08TURTGLxRU1Kgr48aFLty4MfEP0EQTEzdudG+iiWIEChQEfMYEgkpM0AQkUVASUDGRaG1pp9PyLq20gOXRYnm2lVjb0k57Z+4UpOOZ6ob3FCkrki+TZprc3z3nfOecQSTMJlUcs/J7lFQqy7B8GK/ITiKYDeE5zIUZNoo5fsvAOIQFwk94AvJ31g+9rhhHWAYnHRynEqfLX6a03W4yV1J2uETSwZhhBZ4fdflzm/or1LYq2j6PRSSXvFSDlQSOM9k9+qGZR8qB88/bnmpG5iOYj3DL/bVpYAgoGuG83iBlGSv/ZL3ZaGnodJBwhBM7Cv+Xq+GISAivJYYN+ma1fZPmwYknSuu38V8Ct7S0G4w4RgjUT4jGxS9VDJ6EOMZ/GAam2gcmRqe80EibMECgL5X9ntfG6VddU2+M041mV4NpkeAvy5gP2OFAkA1FfrNkNapUMGawwJO69lGUo0Vy7cEHHXuLDChLi/IolPtPafk6dF19pdEmzEUxs9awTAAs2hVHLteZUB6dUki3Of397tCeYkNqIb2rxLCjWFRGSSvK11W3j0MVoI/XPRNJmPLQD4Tx+U8+bkMKPZx+utoixBaabT9T8nQpBbSsSJ96Sy+7pUcFdM/oT0j1aoZKDAynLHD80HfXvhIaFerTiw2Q8Au1/YIQe2F0wT0AmVakRwr6SFnnjDc0v7qhEgOL84/nGzvsUFFZkQEwGbdb0TX11beDgiDcaXHCPSDhSE6dq7FIDFcaGApMWMX7XpRD7YyXE2Vrj5Z2maZmXQF8qsoCscJ7AJd8tgtzkgq8PjieNI4Phs5UdqJ8Oq2QRlmai/Xf/GGu1uzZXUCDk8FiYv5zqWarW6KzpIDxPEump2cO3ReruP9u60uTG5NoQ6/ngWbsITVWrh8/XAp30h2412p3BZavvw2C4x3Mq746ISwk112qtzm9kWPl3WdrrMbJoNbhaxn5dbzCBMk/UWEk4RW20EbBorPIM3UfylLLFFpZAZWep4HfSK5BmSp0Q4Uyv6TmalC2WvFxUHqeJdUYds7khFvVPfjFOKzsHlb3DLf0iE/KPPJXKuOQ7qsj4AvC+pM+gKUMEBbKvHwlLFYU7sclsm+Q9K/UtZXo/kbJ/q7eBm+Dt1x/AB8brTcj5boOAAAAAElFTkSuQmCC",width:600,height:450}},78:function(e,t,o){e.exports={srcSet:o.p+"images/20150823002-ad81f904.png 782w,"+o.p+"images/20150823002-d7069d51.png 720w,"+o.p+"images/20150823002-0324b887.png 480w",images:[{path:o.p+"images/20150823002-ad81f904.png",width:782,height:577},{path:o.p+"images/20150823002-d7069d51.png",width:720,height:531},{path:o.p+"images/20150823002-0324b887.png",width:480,height:354}],src:o.p+"images/20150823002-ad81f904.png",toString:function(){return o.p+"images/20150823002-ad81f904.png"},placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAdCAIAAABXK7kkAAAACXBIWXMAAAsSAAALEgHS3X78AAACpklEQVRIx2P4++/fj+/fvn/7+vXbdyD+CgLfvn4DoU/UAZ/B6NOXL19AnC9fvn379vfvX4ZfP7/fe/H2xtM3r549fv3q9dvXr9++evny+bPXL57//fXr/58/IPSXfPT3969/v38DyQ/v3v7/9/fbl88vX7788OEDw7evX7YfO7fxyJndBw9t239478nTO48e33HoyO5jx8/euHX+9p1zN26dvXr97LUb5KDrN05dvgpEZ65eP3z6HJA8d/XGK6Df3rxh+Pjpk1FgJLuehYi1q5C5E5OpPYe7L7O1MxMQ2bkymDswqBsxKOsxqOiTiVQNGFSASJ8RaI68lriVy4EjRz98eM8ADHePlGwpB08pO3dlN38FFx8+EztmXQsWPUs2Ays2fSt2A2sgAnIpRKz6VgxaptKO3keOn/jw/j3Ix3r+EUw65qJWrsKWLqLWbkKWzoKWznxmDqI2brKOnvLOPvJO3qx6lkBtDNpmZCNGHXMGNUMpR+/L169//AC2WMsnBBieQEcx6ZoDSXZDG04jG6CngaqBDmIEagPqocBKNIsvXrkKDurPn53iUsWsXRWcfQUtnEWsXGQdvXV8QzkNrRk0TUC+pMyjWCy+CrYY6GNtn1CgHRyGNuyG1sAgBapgBHpdHxzHYMRIXR9DLAYmLsuIBBlHTxU3f4OAcGCMitu5K7r6Krn6aXuHaHgFq3n4cxnZUO5vLD42Do5m07cERirIrzDPMYHZQMREDe9itxjoLQZVQ3QLqBS1BC02oJbPRi0etXjU4lGLRy0etZjipg9qm8uCdogZ2FzUMJZx8gU29kAWf/j4ScXRi0FKlUlJh0FBm3aIUVGHQVpNwtzxxJmzH96/Y/jx48e0xctr+yc3TZ7eOGkaTVH9hCnds+Zeunz565cvANUg0BJn5xqWAAAAAElFTkSuQmCC",width:782,height:577}}}]);