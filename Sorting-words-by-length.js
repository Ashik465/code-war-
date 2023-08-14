// Sorting words by length in a sentence

const str ='java is really hard'

//  function sortLength ()

const sortLength =(s) =>{

    const wordArray = s.split(' ')

    wordArray.sort((a,b) =>{
        return a.length-b.length ;  //ascending order
        // return b.length-a.length ;  //descending order

    })

    return wordArray

}

console.log(sortLength(str))