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
        return sortDescend(state.action.input);
    }
    if (action.type === "ascending"){
        return sortAscend(state.action.input)
    }
    else{
        return state
    }
})

tableSort = (employee, input) =>{
    setSort({...sort, [employee]:!setSort[employee]})
    if(input === "ascending"){
        dispatch({type: "sortAscend", input: employee})
    }
    if(input === "descending"){
        dispatch({type: "sortDescend", input: employee})
    }
}


sortAscend = (employees, info) =>{
    employees.sort((employee1, employee2) => {
        if (employee1 < employee2){
            return 1
        }if (employee1 > employee2){
            return -1
        }
        else{
            return 0 
        }
    })
}


sortDescend = (employees, info) =>{
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



useEffect(() =>{
    dispatch({ type: "renderEmployees"})
})

return(
    <List />
)


}

export default EmployeeSort