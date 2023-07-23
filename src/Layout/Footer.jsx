import tg from '../tg.png'
import vk from '../vk.png'

export default function Footer(){
    return(
        <footer className="w-4/5 mx-auto py-5 flex justify-center">
            <div className='flex items-center mr-10'>
                <a href="https://t.me/IskanderNV" target="_blank" className=" mr-2 text-xl" rel="noreferrer">telegram</a>
                <img src={tg} alt="tg" className=' w-5 h-5'/>
            </div>
            <div className='flex items-center'>
                <a href="https://vk.com/id348137701" target="_blank" className=" mr-2 text-xl" rel="noreferrer">vk</a>
                <img src={vk} alt="tg" className=' w-5 h-5'/>
            </div>
            
        </footer>
    )
}