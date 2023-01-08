import config from "../config";

export const getRecipients = (args) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(args)
    };
    fetch(config.mainUrl + config.getRecipients, requestOptions)
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