function saturdayFun(activity="roller-skate") {
<<<<<<< HEAD
  return(`This Saturday, I want to ${activity}!`);
}

function mondayWork(activity="go to the office") {
  return(`This Monday, I will ${activity}.`);
} 
  
  function wrapAdjective(param = "*"){
  return function(adj = "special"){
    return `You are ${param}${adj}${param}!`
  }
}

let Calculator= {
  add(a,b) {
  return a+b 
},
  subtract(a,b) {
  return a-b 
},
 multiply(a,b) {
  return a*b 
},
 divide(a,b) {
  return a/b 
}
}

function actionApplyer(start, array) {
    for (let i = 0; i < array.length; i++) {
    start = array[i](start)
    }
    return start
} 
=======
  console.log(`This Saturday, I want to ${activity}!`);
}
saturdayFun()
>>>>>>> 89e0525c958c3ab78bb49a04e8d8a89f8133c68c



