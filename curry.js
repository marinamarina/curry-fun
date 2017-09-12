var makeCurry = function(fn) {
  if (typeof fn !== 'function') {
    throw Error('bad salmon!')
  }

  return function() {
    // get the args
    var args = [].slice.call(arguments)
    // apply the args
    return fn.apply(null, args)
  }
}

module.exports = makeCurry
