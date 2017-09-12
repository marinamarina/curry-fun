var makeCurry = function(fn) {
  if (typeof fn !== 'function') {
    throw Error('bad salmon!')
  }

  return function() {}
}

module.exports = makeCurry
