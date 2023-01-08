import config from "../config";

export const deleteMsg = (userid, msgid) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({
            f: 'json',
            userid,
            msgid
        })
    };
    fetch(config.mainUrl + 'users/' + userid + '/events/' + msgid + '/delete', requestOptions)
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