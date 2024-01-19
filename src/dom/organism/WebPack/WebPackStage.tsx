import Image from 'next/image'
import { SocialMediaRow } from "@/dom/atom/popup/SocialMediaRow";
import PackTabsScene from "@/model/level/pack/PackTabsScene";

export default function WebPackStage({}:any) {
    return (<>
        
    {/* <div className='pos-fix top-0 w-100 flex-col noverflow h-100vh z-2 ' 
    style={{width: '100vw',}}>
      <div className={`${true ? "_ddg" : "_ddr"} h-50 w-100 bord-r-100p spin-60 blur opaci-10 `} 
        style={{filter:"blur(200px)"}}
      >
      </div>
    </div> */}
    {"chart" == "chart" && <>
      <div className='flex-row pos-abs top-0 left-0 tx-black  Q_lg_x  z-800'>
        <h1 className=" flex-1 mb-0 pb-0  block">
          <a href="/" className="tx-black nodeco  px-6 opaci-chov--50 flex-center">
          <Image src="/www.jpg" alt="bank" width={50} height={50} className=' bord-r-100p mr-2 block' />
            <div className='tx-altfont-5'>Web</div>
            <div className='tx-altfont-6'>Pack</div>
          </a>
        </h1>
      </div>
      <div className='flex-row pos-abs top-0 left-0 flex-align-stretch   Q_xs_lg z-800 tx-black'>
        <a href="/" className="flex-col tx-black nodeco px-6 opaci-chov--50  ">
          <h2 className="mb-0 pb-0 flex-center bg-w-50 px-4 gap-2 bg-glass-10 box-shadow-2-b pt-2 bord-r-25 pb-3">
            WebPack
          </h2>
        </a>
      </div>
    </>}

    
    <div className='flex-row flex-align-stretch tx-black w-100 z-10 h-100vh' >
         <div className='pa-3 ma-3 pos-abs z-800 left-0 bottom-0 Q_md_x w-10 box-shadow-9-b bg-glass-20 bord-r-25 neu-convex flex-col flex-justify-start'>
        <SocialMediaRow />
        </div>
      <div className='tx-roman flex flex-align-stretch flex-1  flex-center pos-rel' >
        {"chart" == "chart" && <>
          <div className="w-100  pos-rel bord-r-25 h-100" style={{minHeight:"100vh"}}>
            <div className=' w-100 noverflow h-100 '
              style={{}}
            >
                <PackTabsScene />
            </div>
            </div>
        </>}
        </div>
        </div>
    </>)
}