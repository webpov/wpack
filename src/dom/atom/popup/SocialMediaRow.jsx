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
      
    <Link className='pa-1 nodeco opaci-chov--50' href="https://webpov.vercel.app/" >
        <img src="/webpovlogo.jpg" alt="bank" width={64} height={64} className='block bord-r-100p noverflow' /> 
      </Link>
      <Link className='pa-1 nodeco opaci-chov--50' href="https://wpack.vercel.app/" >
        <img src="/www.jpg" alt="bank" width={64} height={64} className='block bord-r-100p noverflow'
          style={{border:"2px solid #eeaa33"}}
          /> 
        <div className='tx-white tx-center'>PACK</div>
      </Link>
      <Link className='pa-1 nodeco opaci-chov--50' href="https://wtrade.vercel.app/" >
        <img src="/webt2.jpg" alt="bank" width={64} height={64} className='block bord-r-100p noverflow'
         /> 
        <div className='tx-white tx-center'>TRADE</div>
      </Link>
      <Link className='pa-1 nodeco opaci-chov--50' href="https://wqub.vercel.app/?hd=1" >
        <img src="/webcity.jpg" alt="bank" width={64} height={64} className='block bord-r-100p noverflow' /> 
        <div className='tx-white tx-center'>QUB</div>
      </Link>
      <Link className='pa-1 nodeco opaci-chov--50' href="https://wfun.vercel.app/" >
        <img src="/wfun.jpg" alt="bank" width={64} height={64} className='block bord-r-100p noverflow'
         /> 
        <div className='tx-white tx-center'>FUN</div>
      </Link>
{/*       
      <Link className='nodeco pa-1 opaci-chov--50' href="https://wtrade.vercel.app/web/pack" >
        <div className='tx-white bg-black tx-lx w-50px h-50px bord-r-10 flex-col '>P</div>
        <div className='tx-white tx-center'>PACK</div>
      </Link> */}
      
    </div>
    </div>
  )
}