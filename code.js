function likes(names) {
    // TODO
    if(names.length === 1){
      return `${names.join('')} likes this`
    } if(names.length === 2){
      return `${names[0]} and ${names[1]} like this`
    } if(names.length === 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } if(names.length > 3){
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    } else {
      return "no one likes this"
    }
    
  }
  
  console.log(likes(["Alex","Jacob","Henry"]))