import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const COOKIE_AGE=315360000

export const checkAuth=(dispatcher)=>{
    //console.log(cookies.get('token'))
    console.log("Inside checkAuth");
    if(cookies.get('token')==undefined || cookies.get('token')==null)
        dispatcher(logoutDispatch())
    else
        dispatcher(loginDispatch())
}


// export const register=(data,dispatcher)=>{
//     // setLoading(true)
//     axios.post(base_url+'auth/registration',data).then(res=>{
//         if(!('error' in res.data)){
//             //console.log(res.data.token)

//             //console.log(cookies.get('token'))
//             cookies.set('token',res.data.token,{ path: '/', maxAge: COOKIE_AGE })

//             checkAuth(dispatcher)

//             // setLoading(false)
//             // showToast('Registered successfully')
//         }else{
//             // setLoading(false)
//             // showToast(res.data.error)
//             checkAuth(dispatcher)
//         }
//     }).catch(err=>{
//         //console.log(err)
//         setLoading(false)
//         showToast('Error Occurred')
//         checkAuth(dispatcher)
//     })
// }
export async function login(data) {
   
    console.log("Inside login");
    console.log(data);
    
    try{
        const res = await axios.post(`http://localhost:3005/api/auth/login`,data);
        if(res.data.token){
            console.log("loggined in successfully");
            console.log(res.data);
            cookies.set('token',res.data.token,{ path: '/', maxAge: COOKIE_AGE })
            cookies.set('name',res.data.name,{ path: '/', maxAge: COOKIE_AGE })
            
            window.location.reload();
            // checkAuth(dispatcher)
        }else{
            console.log("vallage na");
            // checkAuth(dispatcher)
        }
    }catch(err){
        console.log("vallage na mara jabo");
        console.log(err)
        // checkAuth(dispatcher)
    }
}

export async function signup(data) {
   
    console.log("Inside sign up");
    console.log(data);

    
    try{
        const res = await axios.post(`http://localhost:3005/api/auth/register`,data);
        if(res.data.token){
            console.log("loggined in successfully");
            console.log(res.data);
            cookies.set('token',res.data.token,{ path: '/', maxAge: COOKIE_AGE })
            cookies.set('name',res.data.name,{ path: '/', maxAge: COOKIE_AGE })
            
            window.location.reload();
            // checkAuth(dispatcher)
        }else{
            console.log("vallage na");
            // checkAuth(dispatcher)
        }
    }catch(err){
        console.log("vallage na mara jabo");
        console.log(err)
        // checkAuth(dispatcher)
    }
}


export async function fetchProfile(){
    axios.get('http://localhost:3005/api/profile',{headers:{authorization:cookies.get('token')}}).then(res=>{
        // console.log(res.data);
        cookies.set('name',res.data.name,{ path: '/', maxAge: COOKIE_AGE })
        //dispatcher(profileDispatch(res.data))
    }).catch(err=>{
        console.log(err)
    })
}
// export const login2=(data,dispatcher)=>{
//     console.log("Inside login 3");
//     console.log(data);
//     console.log("Inside login 2");
    
//     axios.post(base_url+'auth/login',data).then(res=>{
//         if(!('error' in res.data)){
//             console.log("vallage na mara jabo");
//             cookies.set('token',res.data.token,{ path: '/', maxAge: COOKIE_AGE })
//             checkAuth(dispatcher)
           
//             // setLoading(false)
//             // showToast('Logged in successfully')
//         }else{
//             console.log("vallage na");
            
//             // showToast(res.data.error)
//             checkAuth(dispatcher)
//         }
//     }).catch(err=>{
//         console.log("vallage na mara jabo");
//         console.log(err)
//         // setLoading(false)
//         // showToast('Error Occurred')
//         checkAuth(dispatcher)
//     })
// }

export const logout=()=>{
    cookies.remove('token',{ path: '/' })
    // checkAuth(dispatcher)
    window.location.reload();
}

// const loginDispatch=()=>{
//     console.log("Inside loginDispatch");
//     return {
//         type:'SIGNED_IN'
//     }
// }
// const logoutDispatch=()=>{
//     console.log("Inside logoutDispatch");
//     return {
//         type:'SIGNED_OUT'
//     }
// }
