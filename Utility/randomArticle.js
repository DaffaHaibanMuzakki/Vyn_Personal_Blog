function GenerateData(data) {
    let result = [] ; 
    for (let index = 0; index < 3; index++) {
        let takeData = (data[parseInt(Math.random()*data.length)]) ; 
        if(result.some(e => e == takeData)){
          index--
        }else{
          result.push(takeData) ; 
        }
        
    }
    return result.filter(e => e != undefined)
}


module.exports = GenerateData;

