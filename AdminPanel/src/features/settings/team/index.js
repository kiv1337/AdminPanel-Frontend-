import moment from "moment"
import { useEfFct, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'

const TopSideButtons = () => {

    const dispatch = useDispatch()

    const addNewTeamMember = () => {
        dispatch(showNotification({message : "Что-то", status : 1}))
    }

    return(
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => addNewTeamMember()}>Пригласить нового</button>
        </div>
    )
}


const TEAM_MEMBERS = [
    {name : "kiv", avatar : "https://yt3.googleusercontent.com/pU1CjXA_sqq-VXXAtRJqpQTbqnBBmR0hBzO3c3F_FTeU-VDitgQVohwchyfmiFuU3xwjMTN7PA=s900-c-k-c0x00ffffff-no-rj", 
    email : "kiv@gmail.com", role : "Владелец", joinedOn : moment(new Date()).add(-5*1, 'days').format("DD MMM YYYY"), lastActive : "5 hr ago"},
    {name : "Максим", avatar : "https://www.rollingstone.com/wp-content/uploads/2023/11/Travis-Scott-Talks-Astroworld.jpg?w=1581&h=1054&crop=1", 
    email : "max@gmail.com", role : "Админ", joinedOn : moment(new Date()).add(-5*2, 'days').format("DD MMM YYYY"), lastActive : "15 min ago"},
    {name : "Алексей", avatar : "https://www.summerfest.com/assets/components/phpthumbof/cache/Performance_bbno_2_02_48_PM_3_22_2023.6b4a3c93722115a85e449853a0c7b6d2536.jpg", 
    email : "alexey@gmail.com", role : "Админ", joinedOn : moment(new Date()).add(-5*3, 'days').format("DD MMM YYYY"), lastActive : "20 hr ago"},
    {name : "Виктор", avatar : "https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/04/12/44/27/49/172246e40cd7.jpg", 
    email : "victor@gmail.com", role : "Менеджер", joinedOn : moment(new Date()).add(-5*4, 'days').format("DD MMM YYYY"), lastActive : "1 hr ago"},
    {name : "Вират", avatar : "https://lastfm.freetls.fastly.net/i/u/500x500/f4abecc188aa3cd5c10630de59ebaadd.jpg", 
    email : "virat@gmail.com", role : "Поддержка", joinedOn : moment(new Date()).add(-5*5, 'days').format("DD MMM YYYY"), lastActive : "40 min ago"},
    {name : "Лектор", avatar : "https://i.scdn.co/image/ab6761610000e5eb16c3d01ed42abc4669e20b2e", 
    email : "lector@gmail.com", role : "Поддержка", joinedOn : moment(new Date()).add(-5*7, 'days').format("DD MMM YYYY"), lastActive : "5 hr ago"},

]

function Team(){


    const [members, setMembers] = useState(TEAM_MEMBERS)

    const getRoleComponent = (role) => {
        if(role  === "Админ")return <div className="badge badge-secondary">{role}</div>
        if(role  === "Менеджер")return <div className="badge">{role}</div>
        if(role  === "Владелец")return <div className="badge badge-primary">{role}</div>
        if(role  === "Поддержка")return <div className="badge badge-accent">{role}</div>
        else return <div className="badge badge-ghost">{role}</div>
    }

    return(
        <>
            
            <TitleCard title="Текущие участники" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Почта</th>
                        <th>Присоединился</th>
                        <th>Роль</th>
                        <th>Активность</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            members.map((l, k) => {
                                return(
                                    <tr key={k}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-circle w-12 h-12">
                                                    <img src={l.avatar} alt="Avatar" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{l.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{l.email}</td>
                                    <td>{l.joinedOn}</td>
                                    <td>{getRoleComponent(l.role)}</td>
                                    <td>{l.lastActive}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </TitleCard>
        </>
    )
}


export default Team