import config from "../config";

export const getMsgList = (userid, offset, limit, filterField, filterValue, orderBy) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({
            f: 'json',
            userid,
            offset, 
            limit,
            filterField,
            filterValue,
            orderBy
        })
    };
    fetch(config.mainUrl + 'users/' + userid + 'events', requestOptions)
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