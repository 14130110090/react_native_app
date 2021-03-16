import { RouteManage } from "src/manage"

export const GotoPage=(uri,param)=>{
  RouteManage.GotoPage("UserPage",uri,"ds",param)
}