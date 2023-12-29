"use client";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import crypto from "crypto";
import { computeHash } from '@/../script/util/webhelp'
import { useMap, MapOrEntries, useMediaQuery, useCopyToClipboard } from 'usehooks-ts';
import { updatePublicSecretKey } from "../../../script/state/service/local";

export function FavSymbols({ state, calls }: any) {
  const [hydrationSafeLoad, s__hydrationSafeLoad] = useState(0);
  const [livePassword, s__livePassword] = useState("");
  const pathname = usePathname()
  const [clipbloardValue, clipbloard__do] = useCopyToClipboard()


  const triggerClearFavs =()=>{
    calls.s__LS_favs([])
  }

  const triggerCloneResetFavs =()=>{
    calls.triggerCloneFromUrl()
    window.location.reload()
  }
  const triggerResetFavs =()=>{
    calls.s__LS_favs([])
    window.location.reload()
  }
  useEffect(() => {
    s__hydrationSafeLoad(hydrationSafeLoad + 1);
  }, []);
  const triggerExportAsUrl = () => {
    let returnString = "";
    state.LS_favs.map((item: any) => {
      // Use encodeURIComponent to encode the item as a URI component
      let returnObj:any = {
        symbol: item.symbol,
      }
      if (item.floor) { returnObj["floor"] = item.floor } 
      if (item.roof) { returnObj["roof"] = item.roof } 
      const encodedItem = encodeURIComponent(JSON.stringify(returnObj));
      returnString += `&${encodeURIComponent(item.posCode)}=${encodedItem}`;
    });
  
    let baseUrl = window.location.href.split("?")[0];
    // Ensure the entire query string is properly encoded
    returnString = `${baseUrl}?${returnString.substring(1)}`;
  
    clipbloard__do(returnString); // I assume you meant 'clipboard' here
    prompt("Export as URL", returnString);
  };

  
  const triggerExportLeanUrl = () => {
    let returnString = "";
    state.LS_favs.map((item: any) => {
      // Use encodeURIComponent to encode the item as a URI component
      let returnObj:any = {
        symbol: item.symbol,
      }
      // if (item.floor) { returnObj["floor"] = item.floor } 
      // if (item.roof) { returnObj["roof"] = item.roof } 
      const encodedItem = encodeURIComponent(JSON.stringify(returnObj));
      returnString += `&${encodeURIComponent(item.posCode)}=${encodedItem}`;
    });
  
    let baseUrl = window.location.href.split("?")[0];
    // Ensure the entire query string is properly encoded
    returnString = `${baseUrl}?${returnString.substring(1)}`;
  
    clipbloard__do(returnString); // I assume you meant 'clipboard' here
    prompt("Export as URL", returnString);
  };


  const triggerSetKeys = () => {
    let publicKey = prompt("Enter public key", "")
    if (!publicKey) { return }
    let secretKey = prompt("Enter secret key", "")
    if (!secretKey) { return }
    let personalCodeKey = prompt("Enter password", "")
    if (!personalCodeKey) { return }
    let wHash = computeHash(`${publicKey}:${secretKey}`, crypto.createHash)
    
  }

  const trigger__publicSecretKeys= (e:any) => {
    calls.s__LS_publicSecretKeys(e.target.value)
  }
  const trigger__livePassword= (e:any) => {
    s__livePassword(e.target.value)
  }
  const triggerSaveKeys= async (e:any) => {
    if (!state.LS_publicSecretKeys) { return }
    if (!livePassword) { return }

    const theHash = ""
    let wHash:string = computeHash(state.LS_publicSecretKeys, livePassword, crypto.createHash)
    s__livePassword("")
    calls.s__LS_publicSecretKeys(wHash)
    const keysRes = await updatePublicSecretKey(wHash, state.LS_publicSecretKeys)
  }

  const triggerChangeSymbol = (aSymbol:string) => {
    calls.s__isChartLoading(true)
    calls.s__focusSymbol(aSymbol)
  }
  
  const editSingleToken = (theItem:any, side:string) => {
    // console.log("asds", state.pricesObj[theItem.symbol], )
    calls.editSingleToken(theItem, side)
  }

  const selectedTradeLogs = useMemo(()=>{
    if (!state.tradeLogsObj) { return null }
    if (!state.focusSymbol) { return null }

    return state.tradeLogsObj[state.focusSymbol]
  },[state.tradeLogsObj, state.focusSymbol])

  if (!hydrationSafeLoad) {
    return (<></>);
  }
  return (<>
    <div className=" w-90  flex-col gap-1" >
      {!!state.LS_favs.length &&
        <button className={`tx-white ${"tx-mdl"} opaci-chov--50 bg-glass-10 bg-w-10 bord-r-25 pa-2 mb-2 translate-y--50`}
          onClick={triggerExportAsUrl}
        >
          Export as URL
        </button>
      }
      {!!state.LS_favs.length &&
        <button className={`tx-white ${"tx-sm"} opaci-chov--50 bg-glass-10 border-blue bg-w-10 bord-r-15 pa-1 mb-2 translate-y--50`}
          onClick={triggerExportLeanUrl}
        >
          Export Pack
        </button>
      }
      <div className="favSymbolsModalContent w-100 flex-col gap-1 autoverflow-y flex-justify-start" style={{maxHeight:"40vh"}}>
        {state.LS_favs.map((item: any, index: number) => {
          
          const lastLiveDiff = state.pricesObj[item.symbol] - state.ytdObj[item.symbol].output.lastOpen
          const lastWeekDiff = state.pricesObj[item.symbol] - state.ytdObj[item.symbol].output.lastWeeklyOpen
          const startOfMonthDiff = state.pricesObj[item.symbol] - state.ytdObj[item.symbol].output.startOfMonthOpen
          
          const liveChangePercent = (lastLiveDiff) / state.pricesObj[item.symbol] * 100
          const weekChangePercent = (lastWeekDiff) / state.pricesObj[item.symbol] * 100
          const monthChangePercent = (startOfMonthDiff) / state.pricesObj[item.symbol] * 100

          return (<div key={index} className=" w-100">
            <div className="  flex-col flex-align-stretch  bord-r-10  w-100 noborder tx-white "
              style={{ 
                background: "linear-gradient(45deg, #ffffff03, #ffffff11",
                
              }}
              

            >
              
              <div className="tx-bold-9 px-2 flex  flex-justify-between gap-3">
              <div className=" tx-mdl  pl-1 flex-align-start flex-col bg-w-10 bord-r-l-25 pl-3 w-min-50px w-250px gap-1 Q_md_x"
                  onClick={()=>{editSingleToken(item, "roof")}}
                >
                  {/* <div className="flex-col">|</div> */}
                  <div className="flex flex-justify-around w-100">
                  {<div className="tx-roman">
                    {(state.pricesObj[item.symbol]*((liveChangePercent)/100)).toFixed(1)}
                  </div>}
                  {<div className="tx-roman">
                    {(state.pricesObj[item.symbol]*((weekChangePercent)/100)).toFixed(1)}
                  </div>}
                  {<div className="tx-roman Q_lg_x">
                    {(state.pricesObj[item.symbol]*((monthChangePercent)/100)).toFixed(1)}
                  </div>}
                  </div>

                  
                  <div className="flex flex-justify-around w-100">
                    <div className="flex-center gap-1">
                      <small>d </small>
                      <div className={`tx-roman flex-col ${liveChangePercent < 0 ? "tx-red" : "tx-green"}`}>{liveChangePercent.toFixed(1)}%</div>
                    </div>
                    <div></div>
                    <div className="flex-center gap-1">
                      <small>w </small>
                      <div className={`tx-roman flex-col ${weekChangePercent < 0 ? "tx-red" : "tx-green"}`}>{weekChangePercent.toFixed(1)}%</div>
                    </div>
                    <div className="flex-center gap-1 Q_lg_x">
                      <small>m </small>
                      <div className={`tx-roman flex-col ${monthChangePercent < 0 ? "tx-red" : "tx-green"}`}>{monthChangePercent.toFixed(1)}%</div>
                    </div>
                  </div>
                </div>
                  {!!calls.isLogsFilled(item.symbol) &&  <>
                    <button className="tx-center  tx-lgx tx-blue noborder bg-trans "
                      // onClick={()=>{calls.triggerGetLogs()}}
                    >
                      |
                    </button>
                  </>}
                {/* <div className="tx-md tx-altfont-1">{index + 1}</div> */}
                <div className="flex-1 flex flex-justify-start tx-mdl py-1 my-2 tx-ls-2 tx-start bg-w-10 bord-r-r-25 pl-4 opaci-chov--50 gap-2" title={item.symbol}
                  onClick={()=>{triggerChangeSymbol(item.symbol)}}
                  style={{
                    ...(state.focusSymbol == item.symbol ? {borderLeft:"3px solid white", background: "linear-gradient(-90deg, #ffffff44, #ffffff11)"} : {})
                  }}
                >
                  <div className="underline">{item.token0}:</div> <div className="Q_sm_x">{state.pricesObj[item.symbol]}</div>
                </div>
                <div className="tx-roman tx-mdl  pl-1 flex-col w-min-50px"
                  onClick={()=>{editSingleToken(item, "floor")}}
                >
                  {<>
                    {item.floor || "N/A"}
                  </>}
                </div>
                <div className="flex-col">-</div>
                <div className="tx-roman tx-mdl  pl-1 flex-col w-min-50px"
                  onClick={()=>{editSingleToken(item, "roof")}}
                >
                  {<>
                    {item.roof || "N/A"}
                  </>}
                </div>
                
                
                
                
                <div className="flex-col gap-1">
                  {!!state.isFetchingLogs && <>
                    <button className={`tx-center  spin-${index+2}`}>
                      ...
                    </button>
                  </>}
                  
                  <button className={`bord-r-10 bg-trans tx-white tx-center opaci-chov--50 ${!!calls.isLogsFilled(item.symbol) ? "border-blue" : ""}` }
                      onClick={()=>{calls.exportLogs(item.symbol)}}
                    >
                      
                      <div className="Q_xs">E</div>
                      <div className="Q_sm_x">Exp.</div>
                    </button>
                  {process.env.NODE_ENV !== 'production' && 

                  !state.isFetchingLogs && <>
                    <button className={`bord-r-10 tx-center opaci-chov--50 ${!!calls.isLogsFilled(item.symbol) ? "border-blue" : ""}` }
                      onClick={()=>{calls.triggerGetLogs(item.symbol)}}
                    >
                      <div className="Q_xs">L</div>
                      <div className="Q_sm_x">Logs</div>
                    </button>
                  </>}
                  
                </div>
              </div>
            </div>
          </div>);
        })}
      </div>
        <div className="flex-center gap-2">
      {!!state.LS_favs.length &&
        <button className={`tx-white ${""} opaci-chov--50 bg-w-10 bord-r-25 pa-2 mt-2`}
          onClick={triggerClearFavs}
        >
          <div className="Q_sm_x tx-lgx">Clear</div>
          <div className="Q_xs ">Clear</div>
        </button>
      }
      {!!state.LS_favs.length &&
        <button className={`tx-white ${""} opaci-chov--50 bg-w-10 bord-r-25 pa-2 mt-2`}
          onClick={triggerResetFavs}
        >
          <div className="Q_sm_x tx-lgx">Reset</div>
          <div className="Q_xs ">Reset</div>
        </button>
      }
        </div>
      {!!state.LS_favs.length &&
        <button className={`tx-white ${""} opaci-chov--50 bg-w-10 bord-r-25 pa-2 mt-2`}
          onClick={triggerCloneResetFavs}
        >
          <div className="Q_sm_x tx-md">Clone & Reset</div>
          <div className="Q_xs ">Clone & Reset</div>
        </button>
      }
      
      
      {!state.urlStateKeys && !state.urlStateKeys.length &&  <>
        <div
          className="my-8 pa-1 px-2   tx-white noborder bord-r-10 tx-ls-2 tx-md tx-center"
        >
          No Selections <br /> Found
        </div>
      </>}
      {!state.LS_favs.length &&
        <div className={`tx-white ${"tx-lgx"} opaci-50 tx-lx bg-w-10 bord-r-25 pa-2 mt-2 tx-center`}
          // onClick={triggerClearFavs}
        >
          No Pairs <br /> Found
        </div>
      }
      
      {state.urlStateKeys && !!state.urlStateKeys.length &&  !state.LS_favs.length && <>
        <button onClick={calls.triggerCloneFromUrl}
          className="my-8 border-white pa-1 px-2 opaci-chov--50 bg-w-10 tx-white noborder bord-r-10 tx-ls-2 tx-md tx-center"
        >
          Clone Url Config
        </button>
      </>}
      <details className="w-100  flex-col flex-justify-center pos-rel flex-align-center pb-8 pos-rel">
        <summary className="flex-col opaci-chov--50 z-700">
          <div className="Q_sm_x mt-8"></div>
          <hr className="w-90 " />
          <button className="flex-col bg-trans noborder tx-white tx-mdl py-3 noclick ">
            Account Keys
          </button>
        </summary>
        <div className="pos-abs z-500 bottom-75p w-100 "
          
        >
          <div className="flex-wrap   flex-justify-center box-shadow-9-t  gap-2 w-100 flex-align-center    bg-b-90 bord-r-25 py-6 bg-glass-5"
            style={{boxShadow:"-4px -4px 4px -1px  #ffffff22"}}
          >
            <div className="flex-center px-3 w-100 ">
              <input className="bord-r-25 px-3 py-1 bg-w-10 w-100 tx-white tx-center"
                onChange={trigger__publicSecretKeys}
                value={state.LS_publicSecretKeys}
                placeholder="Public:Secret" type="text" 
              />
            </div>
            <div className="flex-center w-80">
              <input className="bord-r-25 px-3 py-1 bg-w-10 w-100 tx-mdl tx-white tx-center"
                onChange={trigger__livePassword}
                value={livePassword}
                placeholder="Password" type="text" 
              />
            </div>
            <div className="w-100 flex-center">
              <button className="tx-lg px-3 py-1 bord-r-10 mt-1 opaci-chov--50"
                onClick={triggerSaveKeys}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </details>
    </div>
  </>);
}
