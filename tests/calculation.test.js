
const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEqual2 = require('../calculation')

describe('calculation', () => {
    describe('strictEqual2', () => {
        it('two values compared and a boolean returns', () => {
            const var1 = 5
            const var2 = '5'
            const result = strictEqual2(var1,var2)

            expect(result).to.equal(false) 
        })
           
    })
    
    //set up test data
    // run the function with test data
    //  make assertions

})



