import TitleCard from "../../../components/Cards/TitleCard"

const userSourceData = [
    {source : "VK Ads", count : "26,345", conversionPercent : 10.2},
    {source : "Telegram Ads", count : "21,341", conversionPercent : 11.7},
    {source : "Instagram Ads", count : "34,379", conversionPercent : 12.4},
    {source : "OK", count : "12,359", conversionPercent : 20.9},
]

function UserChannels(){
    return(
        <TitleCard title={"Источник"}>
             <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th className="normal-case">Источник</th>
                        <th className="normal-case">Количество пользователей</th>
                        <th className="normal-case">Проценты</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            userSourceData.map((u, k) => {
                                return(
                                    <tr key={k}>
                                        <th>{k+1}</th>
                                        <td>{u.source}</td>
                                        <td>{u.count}</td>
                                        <td>{`${u.conversionPercent}%`}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </TitleCard>
    )
}

export default UserChannels