// 路径配置
const DirInfo = {
    // 开发源码
    src: {
        pug: './src/*.pug',
        template: './src/template/*.pug',
        scss: './src/scss/*.scss',
        images: './src/images/*.*',
        js: './src/*.js'
    },
    // 生成代码存放目录
    dist: {
        html: './dist/',
        css: './dist/css/',
        images: './dist/images/',
        js: './dist/js/'        
    }
};
export {DirInfo as Info};