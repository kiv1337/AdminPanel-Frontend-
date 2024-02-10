import { useState } from "react"
import { useDispatch } from "react-redux"
import InputText from '../../../components/Input/InputText'
import ErrorText from '../../../components/Typography/ErrorText'
import { showNotification } from "../../common/headerSlice"
import { addNewLead } from "../leadSlice"

const INITIAL_LEAD_OBJ = {
    first_name : "",
    last_name : "",
    email : ""
}

function AddLeadModalBody({closeModal}){
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [leadObj, setLeadObj] = useState(INITIAL_LEAD_OBJ)


    const saveNewLead = () => {
        if(leadObj.first_name.trim() === "")return setErrorMessage("Обязательное поле")
        else if(leadObj.email.trim() === "")return setErrorMessage("Обязательное поле")
        else{
            let newLeadObj = {
                "id": 7,
                "email": leadObj.email,
                "first_name": leadObj.first_name,
                "last_name": leadObj.last_name,
                "avatar": "https://yt3.googleusercontent.com/pU1CjXA_sqq-VXXAtRJqpQTbqnBBmR0hBzO3c3F_FTeU-VDitgQVohwchyfmiFuU3xwjMTN7PA=s900-c-k-c0x00ffffff-no-rj"
            }
            dispatch(addNewLead({newLeadObj}))
            dispatch(showNotification({message : "New Lead Added!", status : 1}))
            closeModal()
        }
    }

    const updateFormValue = ({updateType, value}) => {
        setErrorMessage("")
        setLeadObj({...leadObj, [updateType] : value})
    }

    return(
        <>

            <InputText type="text" defaultValue={leadObj.first_name} updateType="first_name" containerStyle="mt-4" labelTitle="Имя" updateFormValue={updateFormValue}/>

            <InputText type="text" defaultValue={leadObj.last_name} updateType="last_name" containerStyle="mt-4" labelTitle="Фамилия" updateFormValue={updateFormValue}/>

            <InputText type="email" defaultValue={leadObj.email} updateType="email" containerStyle="mt-4" labelTitle="Почта" updateFormValue={updateFormValue}/>


            <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
            <div className="modal-action">
                <button  className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
                <button  className="btn btn-primary px-6" onClick={() => saveNewLead()}>Save</button>
            </div>
        </>
    )
}

export default AddLeadModalBody