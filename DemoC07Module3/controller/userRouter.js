const handlers = require('../service/userService.js');

let router = {
    "home": handlers.home,
    "login": handlers.login,
    "register": handlers.register,
    "upload_images": handlers.uploads
};


module.exports = router;
