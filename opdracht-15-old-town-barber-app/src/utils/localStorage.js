export const setUserProfile = (profile) => {
localStorage.setItem('userProfile',JSON.stringify(profile))}

export const getUserProfile = () => {
try{ return JSON.parse(localStorage.getItem('userProfile')) || null

}
    catch{
return null
    }

}


export const setAppointment = (profile) => {
    localStorage.setItem('userAppointment', JSON.stringify(profile))
}

export const getAppointment = () => {
try{ return JSON.parse(localStorage.getItem('userAppointment')) || null

}
    catch{
return null
    }
}

