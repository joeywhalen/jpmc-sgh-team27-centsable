
const url = "https://reactjs.org/docs/forms.html"


export const AuthApiService = {
  //Create a new user
  createUser(user){
    return fetch("http://localhost:3000/api/v1/users", {
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
    return fetch("http://localhost:3000/api/v1/users", {
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
