const {createResponse} = require('../util')
module.exports = {
    'GET /': async (ctx, next) => {
        let title = 'hello koa2'
        await ctx.render('index', {
            title
        })
    },
};