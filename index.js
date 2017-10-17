

function produceDrivingRange(blockRange) {
  return function(startingBlock, endingBlock) {
    let start = parseInt(startingBlock)
    let end = parseInt(endingBlock)
    let distance = end - start

    if(distance <= blockRange) {
      return `within range by ${blockRange - distance}`
    } else {
      return `${distance - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(tipPercentage) {
  return function(rideFare) {
    return rideFare * tipPercentage
  }
}