function NotificationBodyRightDrawer(){
    return(
        <>
             {
                [...Array(2)].map((_, i) => {
                    return <div key={i} className={"grid mt-3 card bg-base-200 rounded-box p-3" + (i < 5 ? " bg-blue-100" : "")}>
                            {i % 2 === 0 ? `Вчера ваши продажи выросли на 21%` : `Общее количество лайков под постом instagram - новый запуск на этой неделе - превысило 70 тысяч.`}
                        </div> 
                })
            }
        </>
    )
}

export default NotificationBodyRightDrawer