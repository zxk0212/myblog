module.exports = {
    title: "ZCY's blog",
    description: '一个在校大学生整理的设计模式',
    dest: './dist',
    port: '8080',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require('./nav'),
        sidebar: require('./sidebar')
    }
}
