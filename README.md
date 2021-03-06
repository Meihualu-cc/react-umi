# umi project

## Getting Started

使用[Umi 3.x](https://umijs.org/zh-CN/docs)作为框架.

使用[Ant Design 4.x](https://ant.design/index-cn)作为前端组件库

使用[ant-design-pro V5](https://github.com/ant-design/ant-design-pro)模板代码作为指引

本项目由于项目中使用 yarn 2.x 进行包管理,所以建议大家使用[yarn 下载](https://classic.yarnpkg.com/latest.msi).npm 不能保证正常使用.[yarn 2.x 官网](https://yarnpkg.com/)

安装依赖

```bash
yarn install
```

启动项目

```bash
yarn start
```

构建项目

```bash
yarn build
```

构建 Umi 运行时导出内容(如 model 写完后需要执行该命令,才能被 ts 语法提示器检测)

```bash
yarn postinstall
```

更新依赖包

```bash
yarn upgrade-interactive
```

更新 yarn

```bash
yarn set version berry
```

导入 yarn 更新依赖包插件

```bash
yarn plugin import interactive-tools
```

导入 yarn TypeScript 库自动加入插件

```bash
yarn plugin import typescript
```
