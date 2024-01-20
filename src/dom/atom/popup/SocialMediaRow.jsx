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
      
    <div className='tx-white w-max-200px  Q_xs_flex-col flex-wrap flex-justify-aroun  tx-center'

    >
      <div className='w-100 Q_md_x tx-center tx-black opaci-50 gap-1 tx-center flex Q_xs_flex-col pt-2 flex-align-center flex-justify-center'>
        <div className='x-sm'>Ecosystem</div>
      </div>
      <Link className='pt-1 flex-col w-100 nodeco opaci-chov--50' href="https://webpov.vercel.app/" >
        <img src="/webpovlogo.jpg" alt="bank" width={50} height={50} className='border-white spin-60 block bord-r-100p noverflow' /> 
        <div className='tx-black tx-bold-5 tx-center Q_sm_x'>WebPOV</div>
        
    {/* <div className='w-100 Q_sm tx-center tx-black opaci-50 gap-1 tx-center flex Q_xs_flex-col pt-2 flex-align-center flex-justify-center'>
      <div className='x-sm'>POV</div>
    </div> */}
      </Link>
      
    {/*
      <Link className='pa-1 flex-col nodeco opaci-chov--50' href="https://wpack.vercel.app/" >
        <img src="/www.jpg" alt="bank" width={50} height={50} className='block bord-r-100p noverflow'
          style={{border:"2px solid #eeaa33"}}
          /> 
        <div className='tx-black tx-bold-5 tx-center Q_sm_x'>PACK</div>
      </Link> */}
      <hr className='w-50 mt-3 Q_xs' />
      <Link className='pa-1 Q_sm_x flex-col nodeco opaci-chov--50' href="https://wpack.vercel.app/" >
        <img src="/www.jpg" alt="bank" width={36} height={36} className='block bord-r-100p noverflow'
          style={{border:"1px solid gold"}}
         /> 
        <div className='tx-black tx-bold-5 tx-center Q_sm_x'>Pack</div>
      </Link>
      <Link className='pa-1 flex-col nodeco opaci-chov--50' href="https://wtrade.vercel.app/" >
        <img src="/webtrade11.jpg" alt="bank" width={36} height={36} className='block bord-r-100p noverflow'
         /> 
        <div className='tx-black tx-bold-5 tx-center Q_sm_x'>Trade</div>
      </Link>
      <Link className='pa-1 Q_sm_x flex-col nodeco opaci-chov--50' href="https://wqub.vercel.app/?hd=1" >
        <img src="/webcity.jpg" alt="bank" width={36} height={36} className='block bord-r-100p noverflow' /> 
        <div className='tx-black tx-bold-5 tx-center Q_sm_x'>Qub</div>
      </Link>
      {/* <Link className='pa-1 flex-col nodeco opaci-chov--50' href="https://wfun.vercel.app/" >
        <img src="/wfun.jpg" alt="bank" width={36} height={36} className='block bord-r-100p noverflow'
         /> 
        <div className='tx-black tx-bold-5 tx-center Q_sm_x'>FUN</div>
      </Link> */}
{/*       
      <Link className='nodeco pa-1 opaci-chov--50' href="https://wtrade.vercel.app/web/pack" >
        <div className='tx-white bg-black tx-lx w-50px h-50px bord-r-10 flex-col '>P</div>
        <div className='tx-black tx-bold-5 tx-center Q_sm_x'>PACK</div>
      </Link> */}
      
    </div>
    </div>
  )
}