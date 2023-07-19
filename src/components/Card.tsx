import Feels from './Icons/Feels'
import Humidity from './Icons/Humidity'
import Pop from './Icons/Pop'
import Pressure from './Icons/Pressure'
import Visibility from './Icons/Visibility'
import Wind from './Icons/Wind'

type Props = {
  icon: 'wind' | 'feels' | 'humidity' | 'visibility' | 'pressure' | 'pop'
  title: string
  info: string | JSX.Element
  description?: string | JSX.Element
}

const icons = {
  wind: Wind,
  feels: Feels,
  humidity: Humidity,
  visibility: Visibility,
  pressure: Pressure,
  pop: Pop,
}

const Card = ({ icon, title, info }: Props): JSX.Element => {
  const Icon = icons[icon]

  return (
    <article className="w-[140px] h-[130px] text-gray-200 bg-sky-200/20 backdrop-blur-lg rounded-[10px] drop-shadow-lg p-2 mb-5 flex flex-col justify-center">
      <div className="flex flex-col items-center my-4">
        <Icon /> 
        <h4 className="ml-1 mt-4 text-xs text-gray-300">{title}</h4>
        <h3 className="text-lg font-medium">{info}</h3>
      </div>
      
    </article>
  )
}
export default Card