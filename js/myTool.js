let lo = (x)=>{
	 console.log(x)
}

let st = (k,v)=>{
	return {k,v}
}

let PN = ()=>{
  return Math.random() < .5 ? -1 : 1
}

let rate = (x)=>{
    if(0<x && x<100){
        if (Math.random() * 100 < x) {
            return true
        }
    }else{
        return false
    }

}


let rNF = (x)=>{
	return Math.floor(Math.random()*x)
}

let rN = (x)=>{
	return rNF(x) * PN()
}


