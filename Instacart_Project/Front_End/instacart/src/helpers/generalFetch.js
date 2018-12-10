const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };
  
//body='' for get requests
export const generalFetch = async (url, method, body='', headers = defaultHeaders) => {
    try {
        let response={};
        if(body){
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
        const data = await response.json();
        // console.log(data);
        return data;
    } catch(e){
        console.log('Request failed', e);
        return false;
    }
  }