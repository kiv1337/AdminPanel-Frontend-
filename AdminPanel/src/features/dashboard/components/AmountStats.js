

function AmountStats({}){
    return(
        <div className="stats bg-base-100 shadow">
            <div className="stat">
                <div className="stat-title">Сумма для сбора</div>
                <div className="stat-value">$35,900</div>
                <div className="stat-actions">
                    <button className="btn btn-xs">Пользователи</button> 
                </div>
            </div>
            
            <div className="stat">
                <div className="stat-title">Наличные</div>
                <div className="stat-value">$5,600</div>
                <div className="stat-actions">
                    <button className="btn btn-xs">Участники</button> 
                </div>
            </div>
        </div>
    )
}

export default AmountStats