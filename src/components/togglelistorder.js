import {useReducer, useEffect, useState} from "react"
import employees from "../employees.json"
import List from "../components/list"

function EmployeeSort(){
//create 
const [sort, setSort] = useState({
    id: 0,
    name: "",
    phone: "",
    department: ""
})

const [state, dispatch] = useReducer ((state, action) => {
    if (action.type === "renderEmployees"){
        return [...employees]
    }
    if (action.type === "descending"){
        return sortDescend();
    }
    if (action.type === "ascending"){
        return sortAscend()
    }
    else{
        return state
    }
})

sortAscend = (employees, info) =>{
    employees.sort((employee1, employee2) => {
        if (employee1 > employee2){
            return -1
        }if (employee1 < employee2){
            return 1
        }
        else{
            return 0 
        }
    })
}








}

export default EmployeeSort