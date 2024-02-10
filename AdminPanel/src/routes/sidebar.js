
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
import WalletIcon from '@heroicons/react/24/outline/WalletIcon'
import CalendarDaysIcon from '@heroicons/react/24/outline/CalendarDaysIcon'
import UserIcon from '@heroicons/react/24/outline/UserIcon'
import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon'
import BoltIcon from '@heroicons/react/24/outline/BoltIcon'
import ChartBarIcon from '@heroicons/react/24/outline/ChartBarIcon'
import CurrencyDollarIcon from '@heroicons/react/24/outline/CurrencyDollarIcon'
import InboxArrowDownIcon from '@heroicons/react/24/outline/InboxArrowDownIcon'
import UsersIcon from '@heroicons/react/24/outline/UsersIcon'

const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [

  {
    path: '/app/dashboard',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'Доска',
  },
  {
    path: '/app/leads',
    icon: <InboxArrowDownIcon className={iconClasses}/>,
    name: 'Заказы',
  },
  {
    path: '/app/transactions',
    icon: <CurrencyDollarIcon className={iconClasses}/>,
    name: 'Транзакции',
  },
  {
    path: '/app/charts',
    icon: <ChartBarIcon className={iconClasses}/>,
    name: 'Аналитика',
  },
  {
    path: '/app/integration',
    icon: <BoltIcon className={iconClasses}/>,
    name: 'Итеграция',
  },
  {
    path: '/app/calendar',
    icon: <CalendarDaysIcon className={iconClasses}/>,
    name: 'Календарь',
  },

  {
    path: '',
    icon: <Cog6ToothIcon className={`${iconClasses} inline` }/>,
    name: 'Настройки',
    submenu : [
      {
        path: '/app/settings-profile',
        icon: <UserIcon className={submenuIconClasses}/>,
        name: 'Профиль',
      },
      {
        path: '/app/settings-billing',
        icon: <WalletIcon className={submenuIconClasses}/>,
        name: 'Счета',
      },
      {
        path: '/app/settings-team',
        icon: <UsersIcon className={submenuIconClasses}/>,
        name: 'Участники команды',
      },
    ]
  },

  
]

export default routes


