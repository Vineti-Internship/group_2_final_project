import {isEmpty} from './isEmpty';
const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };  
  
export const generalFetch = async (url, method, body={}, headers = defaultHeaders) => {
    try {
        let response={};
        if(!isEmpty(body)){
            response = await fetch(`http://localhost:3000/${url}`,{
                method,
                body: JSON.stringify(body),
                headers
            });
        }
        else{
            response = await fetch(`http://localhost:3000/${url}`,{
                method,
                headers
            });            
        }
        if(response.ok){
            const data = await response.json();
            return data;
        } else {
            return false;
        }
    } catch(e){
        console.log('Request failed', e);
    }
  }