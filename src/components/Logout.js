
const Logout = async () => {
    let name = 'jwt_token'
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  }

export default Logout;
