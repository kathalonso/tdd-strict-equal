function strictEqual1(var1, var2) {
    if(var1 == var2) {
        return false 
    } else {
        return true
    }
}


function strictEqual2(var1, var2) {
    if(typeof (var1) == typeof (var2) && var1 == var2 ) {

            return true 
    } else {
        return false
    }
}

module.exports = strictEqual2
