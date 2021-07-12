

const url = "https://reactjs.org/docs/forms.html"


const AuthApiService = {
  //Create a new user
  createUser(user){
    return fetch(`${url}/users`, {
      method:'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => 
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))  
      :res.json()
    )
  },
  //Login as a user
  postLogin({username, password}) {
    return fetch(`${url}/auth/login`, {
      method:'POST',
      headers: {
        'content-type' : 'application/json',
      },
      body: JSON.stringify({username, password})
    })
    .then(res => 
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      :res.json()
    );
  },
}