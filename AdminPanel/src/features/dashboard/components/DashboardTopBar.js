import SelectBox from "../../../components/Input/SelectBox"
import ArrowDownTrayIcon  from '@heroicons/react/24/outline/ArrowDownTrayIcon'
import ShareIcon  from '@heroicons/react/24/outline/ShareIcon'
import EnvelopeIcon  from '@heroicons/react/24/outline/EnvelopeIcon'
import EllipsisVerticalIcon  from '@heroicons/react/24/outline/EllipsisVerticalIcon'
import ArrowPathIcon  from '@heroicons/react/24/outline/ArrowPathIcon'
import { useState } from "react"
import Datepicker from "react-tailwindcss-datepicker"; 



const periodOptions = [
    {name : "Today", value : "Сегодня"},
    {name : "Yesterday", value : "Вчера"},
    {name : "This Week", value : "Текущая неделя"},
    {name : "Last Week", value : "Прошлая неделя"},
    {name : "This Month", value : "Текущий месяц"},
    {name : "Last Month", value : "Прошлый месяц"},
]

function DashboardTopBar({updateDashboardPeriod}){

        const [dateValue, setDateValue] = useState({ 
            startDate: new Date(), 
            endDate: new Date() 
        }); 
        
        const handleDatePickerValueChange = (newValue) => {
            console.log("newValue:", newValue); 
            setDateValue(newValue); 
            updateDashboardPeriod(newValue)
        } 


    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="">
            <Datepicker 
                containerClassName="w-72 " 
                value={dateValue} 
                theme={"light"}
                inputClassName="input input-bordered w-72" 
                popoverDirection={"down"}
                toggleClassName="invisible"
                onChange={handleDatePickerValueChange} 
                showShortcuts={true} 
                primaryColor={"white"} 
            /> 
            {/* <SelectBox 
                options={periodOptions}
                labelTitle="Period"
                placeholder="Select date range"
                containerStyle="w-72"
                labelStyle="hidden"
                defaultValue="TODAY"
                updateFormValue={updateSelectBoxValue}
            /> */}
            </div>
            <div className="text-right ">
                <button className="btn btn-ghost btn-sm normal-case"><ArrowPathIcon className="w-4 mr-2"/>Обновить</button>
                <button className="btn btn-ghost btn-sm normal-case  ml-2"><ShareIcon className="w-4 mr-2"/>Подеилться</button>

                <div className="dropdown dropdown-bottom dropdown-end  ml-2">
                    <label tabIndex={0} className="btn btn-ghost btn-sm normal-case btn-square "><EllipsisVerticalIcon className="w-5"/></label>
                    <ul tabIndex={0} className="dropdown-content menu menu-compact  p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a><EnvelopeIcon className="w-4"/>Почта</a></li>
                        <li><a><ArrowDownTrayIcon className="w-4"/>Установить</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DashboardTopBar