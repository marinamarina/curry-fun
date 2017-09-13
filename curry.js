var makeCurry = function(fn) {
  if (typeof fn !== 'function') {
    throw Error('bad salmon!')
  }

  return function curriedFn() {
    // get the args
    var args = [].slice.call(arguments)

    if(args.length < fn.length) {
      return function() {
        return curriedFn.apply(null, args.concat([].slice.call(arguments)))
      }
    }
    
    // apply the args
    return fn.apply(null, args)
  }
}

module.exports = makeCurry
