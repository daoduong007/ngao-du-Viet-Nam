export const Sort = (arrayOfObject, oderProp, option) => {
  switch(option) {
    case 'increase': return (arrayOfObject.sort((a,b) => (a[oderProp] > b[oderProp]) ? 1: (a[oderProp] < b[oderProp]) ? -1 : 0)) 
    case 'decrease': return (arrayOfObject.sort((a,b) => (a[oderProp] < b[oderProp]) ? 1: (a[oderProp] > b[oderProp]) ? -1 : 0)) 
    default: return arrayOfObject;
  }
}

export const FilterHotel = (arrayOfObject, budget ,hotelStar, reviewScore) => {
  // fill 1 field budget
  if( budget.length !==  0 && hotelStar.length ===  0 && reviewScore.length ===  0 ){

    return arrayOfObject.filter((object :any) => {
      return (object.price >= budget[0] && object.price <= budget[1]);
    })
  } 

  // fill 1 field  hotel star
  else if (budget.length ===  0 && hotelStar.length !==  0 && reviewScore.length ===  0) { 
    let arrayFil2= [];
    
    hotelStar.map((star) => {
      arrayFil2= arrayFil2.concat(arrayOfObject.filter((object: any) => object.star === star));
    })
    return arrayFil2;
  }

  // fill 1 field review score
  else if (budget.length ===  0 && hotelStar.length ===  0 && reviewScore.length !==  0) {
    let arrayFil3 = [];
  
    reviewScore.map((rating) => {
      arrayFil3= arrayFil3.concat(arrayOfObject.filter((arr : any) => arr.rating >= rating));
    })
    return arrayFil3;
  }

  //fill 2 field budget , hotel star 
  else if (budget.length !==  0 && hotelStar.length !==  0 && reviewScore.length ===  0) {
    const arrayFil1 = arrayOfObject.filter((object :any) => {
      return arrayOfObject.filter((object :any) => {
        return (object.price >= budget[0] && object.price <= budget[1]);
      })
    })

    let arrayFil2= [];
    let temporaryArray = [];
    hotelStar.map((star) => {
      temporaryArray= arrayFil1.filter((object: any) =>object.star === star);
      arrayFil2= arrayFil2.concat(temporaryArray);
    })    
    return arrayFil2;
  }

  //fill 2 field   budget, review score
  else if (budget.length !==  0 && hotelStar.length ===  0 && reviewScore.length !==  0) {
    let temporaryArray = [];
    const arrayFil1 = arrayOfObject.filter((object :any) => {
      return arrayOfObject.filter((object :any) => {
        return (object.price >= budget[0] && object.price <= budget[1]);
      })
    })

    let arrayFil3 = [];
    reviewScore.map((rating) => {
      temporaryArray= arrayFil1.filter((arr : any) =>arr.rating >= rating);  
      arrayFil3= arrayFil3.concat(temporaryArray);
    })

    return arrayFil3;
  }

  //fill 2 field  hotel star  ,review score
  else if (budget.length ===  0 && hotelStar.length !==  0 && reviewScore.length !==  0) {
    let arrayFil2= [];
    let temporaryArray = [];
    hotelStar.map((star) => {
      temporaryArray= arrayOfObject.filter((object: any) =>object.star === star);
      arrayFil2= arrayFil2.concat(temporaryArray);
    })

    let arrayFil3 = [];
    reviewScore.map((rating) => {
      temporaryArray= arrayFil2.filter((arr : any) =>arr.rating >= rating);  
      arrayFil3= arrayFil3.concat(temporaryArray);
    })

    return arrayFil3;
  }

  //fill 3 field budget , hotel star, review score
  else if(budget.length !==  0 && hotelStar.length !==  0 && reviewScore.length !==  0) {
    const arrayFil1 = arrayOfObject.filter((object :any) => {
      return arrayOfObject.filter((object :any) => {
        return (object.price >= budget[0] && object.price <= budget[1]);
      })
    })
  
    let arrayFil2= [];
    let temporaryArray = [];
    hotelStar.map((star) => {
      temporaryArray= arrayFil1.filter((object: any) =>object.star === star);
      arrayFil2= arrayFil2.concat(temporaryArray);
    })

    let arrayFil3 = [];
    reviewScore.map((rating) => {
      temporaryArray= arrayFil2.filter((arr : any) =>arr.rating >= rating);  
      arrayFil3= arrayFil3.concat(temporaryArray);
    })

    return arrayFil3;
  } else if(budget.length ===  0 && hotelStar.length ===  0 && reviewScore.length ===  0) { 
    return arrayOfObject}
}

export const FilterTour = (arrayOfObject, budget ,duration, typeTour) => {
  // fill 1 field budget
  if( budget.length !==  0 && duration.length ===  0 && typeTour.length ===  0 ){

    let arrayFil1 = [];
    arrayFil1 = arrayFil1.concat(arrayOfObject.filter((object :any) => (object.price >= budget[0] && object.price <= budget[1])));
   
    return arrayFil1;
  } 

  // fill 1 field  duration
  else if (budget.length ===  0 && duration.length !==  0 && typeTour.length ===  0) { 

    // let arrayFil2= [];
    
    // duration.map((duration) => {
    //   if (duration[1] !== null) {
    //     arrayFil2= arrayFil2.concat(arrayOfObject.filter((object: any) => object.duration >= duration[0] && object.duration <= duration[1]));
    //   } else { 
    //     arrayFil2= arrayFil2.concat(arrayOfObject.filter((object: any) => object.duration >= duration[0]));
    //   }
     
    // })
    return arrayOfObject;
  }

  // fill 1 field typeTour
  else if (budget.length ===  0 && duration.length ===  0 && typeTour.length !==  0) {

    let arrayFil3 = [];
  
    typeTour.map((type) => {
      arrayFil3= arrayFil3.concat(arrayOfObject.filter((arr : any) => arr.typeTour === type));
    })
    return arrayFil3;
  }

  //fill 2 field budget ,duration
  else if (budget.length !==  0 && duration.length !==  0 && typeTour.length ===  0) {
 
    let arrayFil1 = [];
    arrayFil1 = arrayFil1.concat(arrayOfObject.filter((object :any) => (object.price >= budget[0] && object.price <= budget[1])));

    // let arrayFil2= [];
    // let temporaryArray = [];
    // duration.map((star) => {
    //   temporaryArray= arrayFil1.filter((object: any) =>object.star === star);
    //   arrayFil2= arrayFil2.concat(temporaryArray);
    // })    
    return arrayFil1;
  }

  //fill 2 field   budget, typeTour
  else if (budget.length !==  0 && duration.length ===  0 && typeTour.length !==  0) {

    let arrayFil1 = [];
    arrayFil1 = arrayFil1.concat(arrayOfObject.filter((object :any) => (object.price >= budget[0] && object.price <= budget[1])));

    let arrayFil3 = [];
    typeTour.map((type) => {
      arrayFil3= arrayFil3.concat(arrayFil1.filter((arr : any) => arr.typeTour === type));
    })

    return arrayFil3
  }

  //fill 2 field  duration  ,typeTour
  else if (budget.length ===  0 && duration.length !==  0 && typeTour.length !==  0) {

    // let arrayFil2= [];
    // let temporaryArray = [];
    // duration.map((star) => {
    //   temporaryArray= arrayOfObject.filter((object: any) =>object.star === star);
    //   arrayFil2= arrayFil2.concat(temporaryArray);
    // })

    let temporaryArray = [];
    let arrayFil3 = [];
    typeTour.map((type) => {
      temporaryArray= arrayOfObject.filter((arr : any) =>arr.typeTour === type);  
      arrayFil3= arrayFil3.concat(temporaryArray);
    })

    return arrayFil3;
  }

  //fill 3 field budget , duration  ,typeTour
  else if(budget.length !==  0 && duration.length !==  0 && typeTour.length !==  0) {

    let arrayFil1 = [];
    arrayFil1 = arrayFil1.concat(arrayOfObject.filter((object :any) => (object.price >= budget[0] && object.price <= budget[1])));
  
    // let arrayFil2= [];
    // let temporaryArray = [];
    // duration.map((star) => {
    //   temporaryArray= arrayFil1.filter((object: any) =>object.star === star);
    //   arrayFil2= arrayFil2.concat(temporaryArray);
    // })

    let temporaryArray = [];
    let arrayFil3 = [];
    typeTour.map((type) => {
      temporaryArray= arrayFil1.filter((arr : any) =>arr.typeTour >= type);  
      arrayFil3= arrayFil3.concat(temporaryArray);
    })

    return arrayFil3;

  //fill 0 field
  } else if(budget.length ===  0 && duration.length ===  0 && typeTour.length ===  0) { 

    return arrayOfObject}
}