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
    return result
}

let data = [
    {
     
      categories: 'science',
      description: 'Derskripsi ini tidak berguna karena ini hanyalah pajangan belaka',
      title: 'WILL ROBOT TAKE US JOB IN THE FUTURE ON ?',
      time: { date: '21', month: '2', year: '2027' },
      image: { imgName: 'MISAL', url: './Public/Alan_Watts.png' },
      content: 'Lorem ipsum adalah kata-kata yang berasal dari italia yang berartibahwa lorem adalah itu dan ipsum adalah itu',
      writer: 'John',
      __v: 0
    },
    {
      
      categories: 'science',
      description: 'Derskripsi ini tidak berguna karena ini hanyalah pajangan belaka',
      title: 'WILL ROBOT TAKE US JOB IN THE FUTURE ON ?',
      time: { date: '21', month: '2', year: '2022' },
      image: { imgName: 'MISAL', url: './Public/Alan_Watts.png' },
      content: 'Lorem ipsum adalah kata-kata yang berasal dari italia yang berartibahwa lorem adalah itu dan ipsum adalah itu',
      writer: 'John',
      __v: 0
    },
    {
      
      categories: 'science',
      description: 'Derskripsi ini tidak berguna karena ini hanyalah pajangan belaka',
      title: 'WILL ROBOT TAKE US JOB IN THE FUTURE ON ?',
      time: { date: '21', month: '9', year: '2022' },
      image: { imgName: 'MISAL', url: './Public/Alan_Watts.png' },
      content: 'Lorem ipsum adalah kata-kata yang berasal dari italia yang berartibahwa lorem adalah itu dan ipsum adalah itu',
      writer: 'John',
      __v: 0
    },
    {
      
      categories: 'science',
      description: 'Derskripsi ini tidak berguna karena ini hanyalah pajangan belaka',
      title: 'WILL ROBOT TAKE US JOB IN THE FUTURE ON ?',
      time: { date: '21', month: '12', year: '2022' },
      image: { imgName: 'MISAL', url: './Public/Alan_Watts.png' },
      content: 'Lorem ipsum adalah kata-kata yang berasal dari italia yang berartibahwa lorem adalah itu dan ipsum adalah itu',
      writer: 'John',
      __v: 0
    },
    {
      
      categories: 'science',
      description: 'Derskripsi ini tidak berguna karena ini hanyalah pajangan belaka',
      title: 'WILL ROBOT TAKE US JOB IN THE FUTURE ON ?',
      time: { date: '9', month: '12', year: '2022' },
      image: { imgName: 'MISAL', url: './Public/Alan_Watts.png' },
      content: 'Lorem ipsum adalah kata-kata yang berasal dari italia yang berarti bahwa lorem adalah itu dan ipsum adalah itu',
      writer: 'John',
      __v: 0
    },
    {
      
      categories: 'science',
      description: 'Derskripsi ini tidak berguna karena ini hanyalah pajangan belaka',
      title: 'WILL ROBOT TAKE US JOB IN THE FUTURE ON ?',
      time: { date: '1', month: '12', year: '2022' },
      image: { imgName: 'MISAL', url: './Public/Alan_Watts.png' },
      content: 'Lorem ipsum adalah kata-kata yang berasal dari italia yang berartibahwa lorem adalah itu dan ipsum adalah itu',
      writer: 'John',
      __v: 0
    },
    {
      
      categories: 'science',
      description: 'Derskripsi ini tidak berguna karena ini hanyalah pajangan belaka',
      title: 'WILL ROBOT TAKE US JOB IN THE FUTURE ON ?',
      time: { date: '1', month: '12', year: '2022' },
      image: { imgName: 'MISAL', url: './Public/Alan_Watts.png' },
      content: 'Lorem ipsum adalah kata-kata yang berasal dari italia yang berarti bahwa lorem adalah itu dan ipsum adalah itu',
      writer: 'John',
      __v: 0
    },
    {
      categories: 'science',
      description: 'Derskripsi ini tidak berguna karena ini hanyalah pajangan belaka',
      title: 'WILL ROBOT TAKE US JOB IN THE FUTURE ON ?',
      time: { date: '1', month: '12', year: '2029' },
      image: { imgName: 'MISAL', url: './Public/Alan_Watts.png' },
      content: 'Lorem ipsum adalah kata-kata yang berasal dari italia yang berarti bahwa lorem adalah itu dan ipsum adalah itu',
      writer: 'John',
      __v: 0
    }
  ]
  
console.log("tesss");


console.log(GenerateData(data));

module.exports = GenerateData;

