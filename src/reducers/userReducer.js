
const initState = {
    user: null,
    isAuthenticated: null,
    token: localStorage.getItem('token'),
    userId: localStorage.getItem('userId'),
    role: localStorage.getItem('role'),
    isLoading: false,
    message: null,
    messageSuccess: null,
    isLoadingSignUp: false,
    loginError: null,
    loginSuccess:null
}

const userReducer = (state = initState , action) => {
    switch(action.type){

        case "SIGN_UP_SUCCESS":
            return {
                ...state,
                messageSuccess: action.payload.msg,
                message: null,
                isLoadingSignUp: false
            }
        case "SIGN_UP_FAILED":
                return {...state, message: action.payload, messageSuccess:null, isLoadingSignUp: false}
        case "IS_LOADING_REGISTRATION":
            return {...state, isLoadingSignUp:true};
        case "IS_LOADING_LOGIN":
                return {...state, isLoading:true};

        case "LOGIN_SUCCESS":
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("userId", action.payload.user.id)
            localStorage.setItem("role", action.payload.user.role)
            window.location.href="/"
            return{
                ...state,
                 isAuthenticated:true,
                isLoading: false, 
                user: action.payload.user, 
                token: action.payload.token, 
                userId: action.payload.user.id, 
                role: action.payload.user.role,
                loginSuccess: "Success! Close this modal and continue shopping.",
                loginError:null
             }

        case "LOGIN_FAIL":
                localStorage.removeItem('token');
                localStorage.removeItem('userId');
                localStorage.removeItem('role');
                return{
                    ...state,
                    token: null,
                    user: null,
                    isAuthenticated: false,
                    isLoading: false,
                    loginError: action.payload.msg,
                    userId:null,
                    role:null,
                    loginSuccess:null
                }

        case "LOGOUT_SUCCESS":
                localStorage.removeItem('token');
                localStorage.removeItem('userId');
                localStorage.removeItem('role');
                return{
                    ...state,
                    token: null,
                    user: null,
                    isAuthenticated: false,
                    isLoading: false,
                    userId:null,
                    role:null,
                    loginSuccess:null
                }
        default:
            return state;
    }
}

export default userReducer;