import axios from "axios";

const baseUrl = "https://contact-management-server-bcmh.onrender.com"

export const createUser = async (data) => {
    return await axios.post(`${baseUrl}/userLogin`,data)
}

export const checkEmail = async (email) =>{
    return await axios.get(`${baseUrl}/userLogin?email=${email}`)
}

export const userLogin = async(email,password)=>{
    return await axios.get(`${baseUrl}/userLogin?email=${email}&password=${password}`)
}

export const addEmployee = async(data) =>{
    return await axios.post(`${baseUrl}/employee`, data)
}

export const getEmployeeContact = async() =>{
    return await axios.get(`${baseUrl}/employee`)
}

export const deleteContact = async(id) => {
    return await axios.delete(`${baseUrl}/employee/${id}`)
}

export const updateEmployee  = async(id, updatedData) => {
    return await axios.put(`${baseUrl}/employee/${id}`, updatedData)
}

export const addList = async (data) => {
    return await axios.post(`${baseUrl}/listRole`, data)
}

export const getList = async() =>{
    return await axios.get(`${baseUrl}/listRole`)
}

export const deleteList = async(id) =>{
    return await axios.delete(`${baseUrl}/listRole/${id}`)
}

export const updateList = async (id, data)=>{
    return await axios.put(`${baseUrl}/listRole/${id}`, data)
}