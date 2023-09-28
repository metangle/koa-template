const {createResponse} = require('../util')
module.exports = {
    'GET /api/articles': async (ctx, next) => {
        console.log('ctx', ctx)
        ctx.body = createResponse('Hello world!')
    },
};
