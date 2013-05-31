var Methods = module.exports;

Methods.time = function(data, callback) {
    
    // No errors but the time in seconds!
    callback(null, Date.now());
};