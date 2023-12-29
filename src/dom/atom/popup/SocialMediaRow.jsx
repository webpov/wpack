import Link from 'next/link';
import { FaBook, FaDiscord, FaGithub } from 'react-icons/fa';
import { BsTelegram } from 'react-icons/bs'


export function SocialMediaRow ({}) {
  return (
    <div className='tx-white flex-wrap'>
      {/* <Link className='pa-2 tx-white opaci-chov--50' href="https://discord.gg/AC4sH4bd8T" target='_blank'>
        <FaDiscord className='tx-lgx' />
      </Link>
      <Link className='pa-2 tx-white opaci-chov--50' href="https://t.me/webpov" target='_blank'>
        <BsTelegram className='tx-lgx' />
      </Link>
      <Link className='pa-2 tx-white opaci-chov--50' href="https://github.com/webpov/qub" target='_blank'>
        <FaGithub className='tx-lgx' />
      </Link>
      <Link className='pa-2 tx-white opaci-chov--50' href="https://webpov.gitbook.io/qub" target='_blank'>
        <FaBook className='tx-lgx' />
      </Link> */}
      
    <div className='tx-white flex-wrap'>
      
      <Link className='pa-1 opaci-chov--50' href="https://wqub.vercel.app/" >
        <img src="/webcity.jpg" alt="bank" width={64} height={64} className='block bord-r-100p noverflow' /> 
      </Link>
      <Link className='pa-1 opaci-chov--50' href="https://wtrade.vercel.app/" >
        <img src="/webt.jpg" alt="bank" width={64} height={64} className='block bord-r-100p noverflow'
          style={{border:"2px solid #eeaa33"}}
         /> 
      </Link>
      <Link className='pa-1 opaci-chov--50' href="https://wfun.vercel.app/" >
        <img src="/wfun.jpg" alt="bank" width={64} height={64} className='block bord-r-100p noverflow'
         /> 
      </Link>
      
      <Link className='nodeco pa-1 opaci-chov--50' href="https://wtrade.vercel.app/web/pack" >
        {/* <img src="/wfun.jpg" alt="bank" width={64} height={64} className='block bord-r-100p noverflow' />  */}
        <div className='tx-white bg-black tx-lx w-50px h-50px bord-r-10 flex-col '>P</div>
      </Link>
      
      <Link className='pa-1 opaci-chov--50' href="https://webpov.vercel.app/" >
        <img src="/webpovlogo.jpg" alt="bank" width={64} height={64} className='block bord-r-100p noverflow' /> 
      </Link>
    </div>
    </div>
  )
}