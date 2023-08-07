import URL from '../utils/constant.js'
export const makeNetworkCall=async ()=>{
    try {
        const response= await fetch(URL);  //BLOCK
        const data = await response.json();  //BLOCK
        return data; // wrap promise   
    } catch (err) {
        console.log('Some problem with API calls',err);
        throw err;
    }
        }
export default makeNetworkCall; 