const Api="https://forgotpasswoed.onrender.com"


export async function RegisternewUser(newuser) {
    const res = await fetch(`${Api}/register`, {
      method: "POST",
      body: JSON.stringify(newuser),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  }
  
  export async function SigninUser(user){
    const res = await fetch(`${Api}/signin`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  }

  export async function Activator(id){
    const res=await fetch (`${Api}/activate/${id}`,{
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
    })
    const data = await res.json();
    return data;
  }

  export async function Resetpassword(user) {
    const res = await fetch(`${Api}/forgotpassword`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  }

  export async function UpdatePassword(id,user) {
    const res = await fetch(`${Api}/forgotpassword/${id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  }