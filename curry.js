var makeCurry = function(fn) {
  if (typeof fn !== 'function') {
    throw Error('bad salmon!')
  }

  return function curriedFn() {
    // get the args
    var args = [].slice.call(arguments)

    if(args.length < fn.length) {
      return curriedFn
    }
    
    // apply the args
    return fn.apply(null, args)
  }
}

module.exports = makeCurry
