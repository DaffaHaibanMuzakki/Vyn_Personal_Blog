function pagination(data,page,limit) {
    let startIndex = (page-1)*limit ; 
    let endIndex = (page)*limit ; 
    console.log("jumlah data");
    console.log(data.length);
    let totalPage =  Math.ceil(data.length/limit) ;
    console.log("total page : ") ; 
    console.log(totalPage);
    
    let filteredArticle = data.slice(startIndex,endIndex);
    return {totalPage,filteredArticle} ;
}


module.exports = pagination ;