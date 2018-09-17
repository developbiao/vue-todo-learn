module.exports = (isDev) => {
    return {
        //preserveWhitepace: true,
        extractCSS: !isDev,
        cssModules: {},
        //hostReload: true // 根据环境变量生成
    }
}