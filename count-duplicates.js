const fruits = ["apple", "orange", "mango","orange", "mango", "jackfruit"]

const countDuplicate = (fruit) => {
const newObject ={}

 fruit.map(d=>{
    newObject[d] = (newObject[d] || 0)+1 ;
 }

 )

return newObject ;

}


console.log(countDuplicate(fruits))