const queryFood = (data: any, fgid: string) => {
    const allData = data.filter( ( item:any ) => item.fgid === fgid ).sort(() => Math.random() - 0.5);
    let tempData = [];
    const randomLength = Math.floor(Math.random() * 8 + 2);
    for (let i = 0; i < randomLength; i++) {
        tempData.push(allData[i])
    }
    return tempData;
};
const queryServings = (data: any, age:string, gender:string, fgid:string ) => {
    return data.filter( ( item:any ) =>
      item.ages === age && item.gender === gender && item.fgid === fgid
    );
  };

const getFoodMenu= (foodData: Array<any>, servingsData: Array<any>, age:string, gender:string, fgid: string) => {
    const servingsObj = queryServings(servingsData, age, gender, fgid )[0];
    const foods = queryFood(foodData, fgid);
    
    return { servings: servingsObj.servings, foods };
} 

export const getMenu = (userData: any, queryData: any) => {
    const { age, gender } = userData;
    const { foodData, servingsData } = queryData;

    const milkFood = getFoodMenu(foodData, servingsData, age, gender, 'mi');
    const vegitablesFood = getFoodMenu(foodData, servingsData, age, gender, 'vf');
    const grainFood = getFoodMenu(foodData, servingsData, age, gender, 'gr');
    const meatFood = getFoodMenu(foodData, servingsData, age, gender, 'me');
    
    return { milkFood, vegitablesFood, grainFood, meatFood }
}