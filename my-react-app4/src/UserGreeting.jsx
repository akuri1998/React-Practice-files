
function UserGreeting(props){

    const welcomemessage =  <h2 className = "welcome-message"> 
                            Welcome {props.username}
                            </h2>

    const loginprompt =   <h2 className = "login-prompt">
                           please log in to continue
                           </h2>

    return(props.isLoggedIn ?  welcomemessage : loginprompt );
}

export default UserGreeting;