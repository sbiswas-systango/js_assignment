
let userArr = [
    {name:'A', age:20},
    {name:'B', age:17},
    {name:'C', age:24},
    {name:'A', age:30},
    {name:'D', age:16},
    {name:'E', age:24},
    {name:'F', age:16},
    {name:'G', age:16}
]
let shortlistedUsers =[];

for(let ageIndex =0; ageIndex<ageArr.length; ageIndex++){
    
    for(let userIndex=0; userIndex<userArr.length; userIndex++){

        if(userArr[userIndex].age === ageArr[ageIndex]){
            console.log(userArr[userIndex]);
        }
    }
}