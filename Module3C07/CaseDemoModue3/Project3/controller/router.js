const userRouter = require('./handleRouter/userRouter');
const showNotFound = require('./handleRouter/notFoundRouter');
const fileRouter = require('./handleRouter/fileRouter');
const router = {
    "register": userRouter.register,
    "notFound": showNotFound,
    "all.min.css": fileRouter.allMinCss
}

module.exports = router;