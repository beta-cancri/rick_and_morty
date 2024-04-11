const validation = (data) => {

    let errors   = {};

    if(!data.email){
        errors.email = "Email is required"
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)){
        errors.email = "This is not an Email, please enter a valid Email.";
    }else if (data.email.length > 35){
        errors.email = "Email must be less than 36 chraracters."
    }

    if(!data.password){
        errors.password = "Password is required";
    }else if(!/\d/.test(data.password)){
        errors.password = "The password must contain a number."
    }else if(data.password.length < 6 || data.password.length > 10){
        errors.password = "The password must be between 6 and 10 characters."
    }

    return errors;

};

export default validation