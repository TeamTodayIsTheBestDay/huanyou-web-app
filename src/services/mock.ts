import Mock from "mockjs"
import ApiResponse = Application.ApiResponse
import HomeRecommend = Application.HomeRecommend

function mockApiResp<T>(data: T): ApiResponse<T> {
  return { code: 10000, data: data, msg: "成功" }
}

Mock.mock(
  "/api/home-recommend/scenic-spot",
  "get",
  mockApiResp<HomeRecommend.ScenicSpot[]>([
    { description: "上海市 - 外滩", imageUrl: "/mock/shanghai-bund.jpg" },
    { description: "杭州市 - 西湖", imageUrl: "/mock/west-lake.jpg" },
    { description: "北京市 - 天坛祈年殿", imageUrl: "/mock/temple-of-heaven.jpg" },
  ]),
)
