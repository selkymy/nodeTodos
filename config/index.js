var config = require("./config.json");

module.exports = {
    getDbConnectionString: function(){
        return `mongodb://${config.username}:${config.passworld}@ds151108.mlab.com:51108/hungnm_test`
    }
}