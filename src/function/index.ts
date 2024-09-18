import axios from "axios"


//function name -> getPokemons
// we will make api request with axios
//lets install axios

export const getPokemons = async () => {
    //step 1 create array which store pokemon id and image
    let data: { id: number, image?: string }[] = []
    
    //we will use loop 
    for (let i = 0; i < 6; i++) {
        // so id will range from 200 to 700
        //we can push the num value in data
        // but we may get duplicate value   so...
        while (true) {
            let num = Math.ceil(Math.random() * 700 + 200)
            if (data.includes({ id: num })) continue
            
            //else
            // we need to fetch image based on id.
            // set response type to blob.
            const response = await axios.get(`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${num}.png`, {responseType: 'blob'})
            //we have used url.createObjectUrl to make image blob url  ->
            data.push({ id: num, image: URL.createObjectURL(new Blob([response.data])) })
            //end while
            break
        }
        
    }
    //after for loop -> return data array
    return data
}