declare namespace Application {
  export interface ApiResponse<T> {
    code: number
    msg: string
    data?: T
  }

  declare namespace HomeRecommend {
    export interface ScenicSpot {
      imageUrl: string
      description: string
    }
  }
}
