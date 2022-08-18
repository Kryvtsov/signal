import { ages, gender as genders } from "../constants/form";

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
const getFoodInfo = (data: any) => {
    let foodInfo: any = {
        milkFood: [],
        vegitablesFood: [],
        grainFood: [],
        meatFood: []
    }
    data.forEach((item:any) => {
        if (item.fgid === 'mi') {
            foodInfo.milkFood.push(item)
        }
        if (item.fgid === 'vf') {
            foodInfo.vegitablesFood.push(item)
        }
        if (item.fgid === 'gr') {
            foodInfo.grainFood.push(item)
        }
        if (item.fgid === 'me') {
            foodInfo.meatFood.push(item)
        }
    })
    return foodInfo;
}

const getFoodMenu= (foodData: Array<any>, servingsData: Array<any>, age:string, gender:string, fgid: string) => {
    const servingsObj = queryServings(servingsData, age, gender, fgid )[0];
    const foods = queryFood(foodData, fgid);
    
    return { servings: servingsObj.servings, foods };
} 

export const getMenu = (userData: any, queryData: any) => {
    let { age, gender } = userData;
    if (!age || !gender) {
        const randomAgesLength = Math.floor(Math.random() * ages.length);
        const randomGenderLength = Math.floor(Math.random() * 2);
        age = ages[randomAgesLength].value;
        gender = genders[randomGenderLength].value;
    }
    const { foodData, servingsData, foodInfoData } = queryData;

    const milkFood = getFoodMenu(foodData, servingsData, age, gender, 'mi');
    const vegitablesFood = getFoodMenu(foodData, servingsData, age, gender, 'vf');
    const grainFood = getFoodMenu(foodData, servingsData, age, gender, 'gr');
    const meatFood = getFoodMenu(foodData, servingsData, age, gender, 'me');
    const foodInfo = getFoodInfo(foodInfoData)
    
    return { milkFood, vegitablesFood, grainFood, meatFood, foodInfo }
}