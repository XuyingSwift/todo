class AuthenticationService {
    registerSuccessfulLogin(username, password){
        console.log('register')
        sessionStorage.setItem('authenticatedUser', username)
        console.log(sessionStorage.getItem('authenticatedUser'))
    }
    logout(){
        sessionStorage.removeItem('authenticatedUser')
    }
    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user === null) return false
        return true
    }
}

export default new AuthenticationService()