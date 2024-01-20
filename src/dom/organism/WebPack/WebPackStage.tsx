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
      <div className='flex-row pos-abs top-0 left-0 tx-black  Q_lg_  z-800 bg-glass-50' 
        style={{borderRadius: "0 0 50px 0"}}
      >
        <h1 className="mt-3 flex-1 mb-0 pb-0  block">
          <div className='pa-'>
            <a href="/" className="spin-60  tx-black nodeco    opaci-chov--50 flex-center  ">
            {/* <Image src="/www.jpg" alt="bank" width={32} height={32} className='mr-1 bord-r-100p  block Q_xs' /> */}
            <Image src="/webpovlogo.jpg" alt="bank" width={50} height={50} className='mr-1 bord-r-100p  block ' />
            {/* <div className="flex gap">
              <div style={{textShadow:"2px 2px black",color:"white", }} className='tx-altfont-5 tx-bold-4'>Web</div>
              <div style={{textShadow:"",color:"black",paddingTop:"2px", paddingLeft:"2px"}} className='tx-bold-6 tx-altfont- '>Pack</div>
              </div> */}
            </a>
          </div>
          
          <a href="/" className="tx-black nodeco  pa-3 opaci-chov--50 flex-center   ">
          {/* <Image src="/www.jpg" alt="bank" width={32} height={32} className='mr-1 bord-r-100p  block Q_xs' /> */}
          <Image src="/www.jpg" alt="bank" width={50} height={50} className='mr-1 bord-r-100p  block ' />
          {/* <div className="flex gap">
            <div style={{textShadow:"2px 2px black",color:"white", }} className='tx-altfont-5 tx-bold-4'>Web</div>
            <div style={{textShadow:"",color:"black",paddingTop:"2px", paddingLeft:"2px"}} className='tx-bold-6 tx-altfont- '>Pack</div>
            </div> */}
          </a>
        </h1>
      </div>
      {/* <div className='flex-row pos-abs top-0 left-0 flex-align-stretch   Q_xs_lg z-800 tx-black'>
        <a href="/" className="flex-col tx-black nodeco px-6 opaci-chov--50  ">
          <h2 className="mb-0 pb-0 flex-center bg-w-50 px-4 gap-2 bg-glass-10 box-shadow-2-b pt-2 bord-r-25 pb-3">
            WebPack
          </h2>
        </a>
      </div> */}
    </>}

    
    <div className='flex-row flex-align-stretch tx-black w-100 z-10 h-100vh' >
         <div className='ma-3 pa-1 pos-abs z-800 left-0 bottom-0 Q_sm_x w-10 box-shadow-9-b bg-glass-20 bord-r-25 neu-convex flex-col flex-justify-start'>
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