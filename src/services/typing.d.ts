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

    export interface TravelNote {
      coverUrl: string
      title: string
      description: string
      likes: number
      favorites: number
    }
  }
}
