"use client";

import { ODivider } from "@/dom/atom/ODivider";

export const ChartWindowSubMenu = ({ chartConfig, state, calls }: any) => {
  return (<>
  <details className="">
      <summary className="flex opaci-chov--50 pos-abs bottom-0">
        <button className=" bg-b-90 py-1 bord-r-50 tx-mdl noclick">
          ⚙️
        </button>
      </summary>
      <div className="pa-2 bg-b-90 bord-r-10 mb-8 bg-glass-10 box-shadow-9-b">
        <div className="flex-col w-200px">
          {/* <button className="flex tx-mdl pa-1 w-100 flex-justify-between opaci-chov--50 bg-b-90 tx-white bord-r-10 noborder" onClick={()=>{
          chartConfig.s__isGizmoVisible(!chartConfig.isGizmoVisible)
        }}>
          <div>Use Gizmo</div>
          <div className={`${chartConfig.isGizmoVisible ? "tx-green" : "tx-red"} tx-altfont-4`}>{chartConfig.isGizmoVisible ? "True" : "False"}</div>
        </button> */}
          
          <button className="flex tx-mdl pa-1 w-100 flex-justify-between opaci-chov--50 bg-b-90 tx-white bord-r-10 noborder" onClick={() => {
            chartConfig.s__isOverlayLabeled(!chartConfig.isOverlayLabeled);
          }}>
            <div>Labels</div>
            <div className={`${chartConfig.isOverlayLabeled ? "tx-green" : "tx-red"} tx-altfont-4`}>{chartConfig.isOverlayLabeled ? "True" : "False"}</div>
          </button>
          <button className="Q_lg_x flex tx-mdl pa-1 w-100 flex-justify-between opaci-chov--50 bg-b-90 tx-white bord-r-10 noborder" onClick={() => {
            chartConfig.s__isLeftSidebarVisible(!chartConfig.isLeftSidebarVisible);
          }}>
            <div>Left Sidebar</div>
            <div className={`${chartConfig.isLeftSidebarVisible ? "tx-green" : "tx-red"} tx-altfont-4`}>{chartConfig.isLeftSidebarVisible ? "True" : "False"}</div>
          </button>

          <button className="flex tx-mdl Q_xl_x pa-1 w-100 flex-justify-between opaci-chov--50 bg-b-90 tx-white bord-r-10 noborder" onClick={() => {
            chartConfig.s__isNotesVisible(!chartConfig.isNotesVisible);
          }}>
            <div>Show Notes</div>
            <div className={`${chartConfig.isNotesVisible ? "tx-green" : "tx-red"} tx-altfont-4`}>{chartConfig.isNotesVisible ? "True" : "False"}</div>
          </button>

          <ODivider className="w-90 " />


          <button className="flex tx-mdl pa-1 w-100 flex-justify-between opaci-chov--50 bg-b-90 tx-white bord-r-10 noborder" onClick={() => {
            chartConfig.s__isTrendUp(!chartConfig.isTrendUp);
          }}>
            <div>Trend Up</div>
            <div className={`${chartConfig.isTrendUp ? "tx-green" : "tx-red"} tx-altfont-4`}>{chartConfig.isTrendUp ? "True" : "False"}</div>
          </button>
          <button className="flex tx-mdl pa-1 w-100 flex-justify-between opaci-chov--50 bg-b-90 tx-white bord-r-10 noborder" onClick={() => {
            chartConfig.s__isChartMovable(!chartConfig.isChartMovable);
          }}>
            <div>Movable Camera</div>
            <div className={`${chartConfig.isChartMovable ? "tx-green" : "tx-red"} tx-altfont-4`}>{chartConfig.isChartMovable ? "True" : "False"}</div>
          </button>

          {!!state.fuelPoints && <>
            <ODivider className="w-90 " />
            <div className="flex pointer ">
              <button className="opaci-chov--50 bg-b-90 py-1 bord-r-50 tx-mdl tx-white px-3 "
                onClick={() => calls.s__fuelPoints(0)}
              >
                Stop
              </button>
            </div>
          </>}
        </div>
      </div>
    </details>
  </>);
};

export default ChartWindowSubMenu