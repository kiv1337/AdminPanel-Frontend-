import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'
import InputText from '../../../components/Input/InputText'
import TextAreaInput from '../../../components/Input/TextAreaInput'
import ToogleInput from '../../../components/Input/ToogleInput'

function ProfileSettings(){


    const dispatch = useDispatch()

    const updateProfile = () => {
        dispatch(showNotification({message : "Profile Updated", status : 1}))    
    }

    const updateFormValue = ({updateType, value}) => {
        console.log(updateType)
    }

    return(
        <>
            
            <TitleCard title="Профиль" topMargin="mt-2">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Имя" defaultValue="Kiv" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Почта" defaultValue="kiv@gmail.com" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Роль" defaultValue="Веб-разработчик" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Место проживания" defaultValue="Москва" updateFormValue={updateFormValue}/>
                    <TextAreaInput labelTitle="Информация о себе" defaultValue="Ничего" updateFormValue={updateFormValue}/>
                </div>
                <div className="divider" ></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Языки" defaultValue="Русский, английский" updateFormValue={updateFormValue}/>
                    <InputText labelTitle="Тайм-зон" defaultValue="MSK" updateFormValue={updateFormValue}/>
                </div>

                <div className="mt-16"><button className="btn btn-primary float-right" onClick={() => updateProfile()}>Обновить</button></div>
            </TitleCard>
        </>
    )
}


export default ProfileSettings