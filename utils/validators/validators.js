//checks if phone number is in a correct pattern
const validatePhone = (phone) => {
    const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g

    return pattern.test(phone)
}

//checks if password is strong enough(includes an Uppercase letter, numbers and special characters)
const validatePassword = (password) => {
    const pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g

    return pattern.test(password)
}

//checks if email is in a correct pattern
const validateEmail = (email) => {
    const pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g

    return pattern.test(email)
}

//check whether fullname is valid
const validateFullname = (name) => {
    const pattern = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/g

    return pattern.test(name)
}


//checks whether username is valid
const validateUsername = (username) => {
    const pattern = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/g

    return pattern.test(username)
}

//checks whether 2 passwords match
const validateRepeatedPass = (pass, repeatedPass) => {
    if (pass === repeatedPass) {
        return true
    } else {
        return false
    }
}

export {
    validatePassword,
    validatePhone,
    validateEmail,
    validateFullname,
    validateUsername,
    validateRepeatedPass
}