import config from "../config";

export const getUser = (token) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ 
            f: 'json'
        })
    };
    fetch(config.mainUrl + config.getUserUrl, requestOptions)
        .then(response => response.json())
        .then(
            data => {
                return {
                    success: true,
                    data
                };
            },
            error => {
                return {
                    success: false,
                    error
                }
            }
        );
    
}