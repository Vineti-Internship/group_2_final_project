const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };
  
//body={} for get requests
export const generalFetch = async (url, method, body={}, headers = defaultHeaders) => {
    try {
        const response = await fetch(`http://localhost:3000/${url}`,{
            method,
            body: JSON.stringify(body),
            headers
        });
        const data = await response.json();
        return data;
    } catch(e){
        console.log('Request failed', e);
    }
  }