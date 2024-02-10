import HeartIcon  from '@heroicons/react/24/outline/HeartIcon'
import BoltIcon  from '@heroicons/react/24/outline/BoltIcon'


function PageStats({}){
    return(
        <div className="stats bg-base-100 shadow">
  
  <div className="stat">
    <div className="stat-figure invisible md:visible">
        <HeartIcon className='w-8 h-8'/>
    </div>
    <div className="stat-title">Количество лайков</div>
    <div className="stat-value">33.6K</div>
    <div className="stat-desc">на 21% больше, чем в прошлом месяце</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure invisible md:visible">
        <BoltIcon className='w-8 h-8'/>
    </div>
    <div className="stat-title">Просмотров страницы</div>
    <div className="stat-value">3.4M</div>
    <div className="stat-desc">на 14% больше, чем в прошлом месяце</div>
  </div>
</div>
    )
}

export default PageStats