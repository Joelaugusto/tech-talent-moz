const getCookiesValue = (key) => (
    document.cookie
        .split('; ')
        .find(row => row.startsWith(`${key}=`))
        .split('=')[1]
)

const getAccessToken = () => (
    getCookiesValue('accessToken')
)




export {getCookiesValue, getAccessToken}