const app = require('../src/app')
const pact = require('pact-node')

console.log(pact)

describe('Pact Verification Test', () => {
    test('It conforms to the contract', () => {
        return pact.verificationFor("Simple Server", { port: 5678 }, app)
            .withPactsFrom({ directory: "tests/pacts/pact.json" })
            .withState("a user with an id named 'user' exists", (params) => {
                console.log("State: a user with an id named 'user' exists: " + params)
            })
            .verify()   
    })
})
