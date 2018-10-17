var addon = require('../native');

console.log(addon.hello());

let verifierDsl = {
    verificationFor: function(providerName, config, app) {
        console.log([(providerName, config, app)])
        console.log(this)
        return verifierDsl
    },

    withPactsFrom: function (pactSource) {
        console.log(pactSource)
        return verifierDsl
    },
            
    withState: function (state, callback) {
        console.log([state, callback])
        return verifierDsl
    },
        
    verify: function () {
        return new Promise((resolve, reject) => {
            reject("Boom")
        })
    }   
}

module.exports = verifierDsl
