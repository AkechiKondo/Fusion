import config from "../config";

export const logIn = (username, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            username: username,
            password: password,
            f: 'json'
        })
    };
    fetch(config.mainUrl + config.generateTokenUrl, requestOptions)
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