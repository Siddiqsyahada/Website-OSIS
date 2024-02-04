function grow(x){
    let result = x[0]
    for(let i = 1; i < x.length; i ++){
      result = result * x[i]
    }

  return result
}

console.log(grow([4, 1, 1, 1, 4]))