const str = 'i love you Ashik'

const reverseWord = (data) =>{
    const dataArray = data.split(' ')

    const result = dataArray.map(d=>{

        return d.split('').reverse().join('')
    })

    return result.join(' ')
}


console.log(reverseWord(str))