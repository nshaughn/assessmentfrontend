import { writeCookie } from "../common";

export const register = async (name, email, password, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}signup`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                'name': name,
                "email": email,
                "password": password
            })
        });
        const data = await response.json()
        console.log(data)
        console.log(data.token)
        setter(data.name)
        writeCookie("jwt_token", data.token, 7)
    } catch (error) {
        console.log(error)
    }
}

export const login = async (email, password, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        });
        const data = await response.json()
        console.log(data.token)
        setter(data.name)
        writeCookie("jwt_token", data.token, 7)
    } catch (error) {
        console.log(error)
    }
}

export const displayUsers = async (token) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}list`, {
            method: "GET",
            headers: {"Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`            
        }
        });
        const data = await response.json()

        const usernames = data.userList.map(users => users.name)
        return usernames
    } catch (error)  {
        console.log(error)
    }
}

export const editName = async (token, name) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}editname`, {
            method: "PUT",
            headers: {"Content-Type": "application/json", "Authorization":`Bearer ${token}`},
            body: JSON.stringify({"name": name})
        });
        const data = await response.json()
        console.log(data)
    } catch (error)  {
        console.log(error)
    }
}

export const editEmail = async (token, email) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}editemail`, {
            method: "PUT",
            headers: {"Content-Type": "application/json", "Authorization":`Bearer ${token}`},
            body: JSON.stringify({"email": email})
        });
        const data = await response.json()
        console.log(data)
    } catch (error)  {
        console.log(error)
    }
}

export const editPassword = async (token, password) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}editpassword`, {
            method: "PUT",
            headers: {"Content-Type": "application/json", "Authorization":`Bearer ${token}`},
            body: JSON.stringify({"password": password})
        });
        const data = await response.json()
        console.log(data)
    } catch (error)  {
        console.log(error)
    }
}

export const deleteAccount = async (token) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}delete`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json", "Authorization":`Bearer ${token}`}
        });
        const data = await response.json()
        console.log(data)
    } catch (error)  {
        console.log(error)
    }
}

export const findUser = async (cookie) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}findUser`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${cookie}`
            }
        });
        const data = await response.json()
        console.log(data)
        return data.name.name
        
    } catch (error) {
        console.log(error)
    }
}
