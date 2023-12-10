import { doAxiosAsyncFull } from "@/utils/axios.ts"
import axios from "axios"
import ScenicSpot = Application.HomeRecommend.ScenicSpot

export async function GetScenicSpot() {
  return await doAxiosAsyncFull<ScenicSpot[]>(axios.get("/api/home-recommend/scenic-spot"), "获取推荐景点")
}
