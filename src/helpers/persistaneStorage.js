export const getItem = key => {
    try{
        return JSON.stringify(localStorage.getItem(key))
    }catch(error){
        console.log('Error getting data')
        return null;
    }
}

export const setItem = (key, data) => {
    try{
        JSON.stringify(localStorage.setItem(key, data))
    }catch(error){
        console.log('Error setting data')
    }
}