import { useState } from "react"
import { useDispatch } from "react-redux"
import TitleCard from "../../components/Cards/TitleCard"
import { showNotification } from "../common/headerSlice"


const INITIAL_INTEGRATION_LIST = [
    {name : "Slack", icon : "https://cdn-icons-png.flaticon.com/512/2111/2111615.png", isActive : true, 
    description : "Slack - это программа для обмена мгновенными сообщениями, разработанная Slack Technologies и принадлежащая Salesforce."},
    {name : "Facebook", icon : "https://cdn-icons-png.flaticon.com/512/124/124010.png", isActive : false, 
    description : "Meta Platforms, Inc., ведет бизнес как Meta и ранее называлась Facebook, Inc. и TheFacebook."},
    {name : "Linkedin", icon : "https://cdn-icons-png.flaticon.com/512/174/174857.png", isActive : true, 
    description : "LinkedIn - это социальная медиа-платформа, ориентированная на бизнес и занятость, которая работает через веб-сайты и мобильные приложения."},
    {name : "Google Ads", icon : "https://cdn-icons-png.flaticon.com/512/2301/2301145.png", isActive : false, 
    description : "Google Ads - это рекламная онлайн-платформа, разработанная Google, где рекламодатели делают ставки на показ кратких рекламных объявлений, предложений услуг"},
    {name : "Gmail", icon : "https://cdn-icons-png.flaticon.com/512/5968/5968534.png", isActive : false, 
    description : "Gmail - это бесплатный почтовый сервис, предоставляемый Google. По состоянию на 2019 год у него было 1,5 миллиарда активных пользователей по всему миру."},
    {name : "VK", icon : "https://upload.wikimedia.org/wikipedia/commons/9/9a/VK_Logo.png", isActive : false, 
    description : "Российская социальная сеть со штаб-квартирой в Санкт-Петербурге. Сайт доступен на 82 языках; особенно популярен среди русскоязычных пользователей"},
    {name : "Одноклассники", icon : "https://st.mycdn.me/res/i/ok_logo-r.png", isActive : false, 
    description : "Российская социальная сеть, принадлежащая VK. На май 2022 года 50-й по популярности сайт в мире. Проект запущен 26 марта 2006 года."},
]

function Integration(){

    const dispatch = useDispatch()

    const [integrationList, setIntegrationList] = useState(INITIAL_INTEGRATION_LIST)


    const updateIntegrationStatus = (index) => {
        let integration = integrationList[index]
        setIntegrationList(integrationList.map((i, k) => {
            if(k===index)return {...i, isActive : !i.isActive}
            return i
        }))
        dispatch(showNotification({message : `${integration.name} ${integration.isActive ? "отключено" : "включено"}` , status : 1}))
    }


    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                integrationList.map((i, k) => {
                    return(
                        <TitleCard key={k} title={i.name} topMargin={"mt-2"}>
                            
                            <p className="flex">
                                <img alt="icon" src={i.icon} className="w-12 h-12 inline-block mr-4" />
                                {i.description}
                            </p>
                            <div className="mt-6 text-right">
                                <input type="checkbox" className="toggle toggle-success toggle-lg" checked={i.isActive} onChange={() => updateIntegrationStatus(k)}/>
                            </div>
                            
                        </TitleCard>
                    )
                
                })
            }
            </div>
        </>
    )
}

export default Integration