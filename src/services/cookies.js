const getCookiesValue = (key) => {
    
    
    if(document.cookie){
        return document.cookie
        .split('; ')
        .find(row => row.startsWith(`${key}=`))
        .split('=')[1]
    }
    return undefined;
}

const getAccessToken = () => (
    getCookiesValue('accessToken')
)




export {getCookiesValue, getAccessToken}