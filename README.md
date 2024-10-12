<h1 align="center">NezhaDash</h1>

<strong>NezhaDash 是一个基于 Next.js 和 哪吒监控 的仪表盘</strong>
<br>

</div>

| 一键部署到 Vercel-推荐                                | Docker部署                                                      | Cloudflare部署                                                          | 如何更新？                                                |
| ----------------------------------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------- |
| [部署简易教程](https://buycoffee.top/blog/tech/nezha) | [Docker 部署教程](https://buycoffee.top/blog/tech/nezha-docker) | [Cloudflare 部署教程](https://buycoffee.top/blog/tech/nezha-cloudflare) | [更新教程](https://buycoffee.top/blog/tech/nezha-upgrade) |
| [Vercel-demo](https://nezha-dash-ruddy.vercel.app)    | [Docker-demo](https://nezha-docker.buycoffee.tech)              | [Cloudflare-demo](https://nezha-cloudflare.buycoffee.tech)              |

#### 环境变量

| 变量名                         | 含义                             | 示例                             |
| ------------------------------ | -------------------------------- | -------------------------------- |
| NezhaBaseUrl                   | nezha 面板地址                   | http://120.x.x.x:8008            |
| NezhaAuth                      | nezha 面板 API Token             | 5hAY3QX6Nl9B3Uxxxx26KMvOMyXS1Udi |
| NEXT_PUBLIC_NezhaFetchInterval | 获取数据间隔（毫秒）             | **默认**：2000                   |
| NEXT_PUBLIC_ShowFlag           | 是否显示旗帜                     | **默认**：false                  |
| NEXT_PUBLIC_ShowTag            | 是否显示标签                     | **默认**：false                  |
| NEXT_PUBLIC_ShowNetTransfer    | 是否显示流量信息                 | **默认**：false                  |
| NEXT_PUBLIC_ForceUseSvgFlag    | 是否强制使用SVG旗帜          | **默认**：false                  |

