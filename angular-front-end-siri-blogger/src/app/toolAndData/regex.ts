const regex = {
  //regex for email
  email: /^\S+@\S+\.\S+$/,
  //Regex for password
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
}

export default regex
