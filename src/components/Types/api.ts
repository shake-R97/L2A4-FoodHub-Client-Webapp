export type ApiResponse<T> =
    { data: T, error: null } |
    { data: null, error: ApiError }



export interface ApiError {
    message: string,
    status?: number,
    code?: string,
}


export interface ApiSuccessRes<T> {
    success: boolean,
    message: string,
    data: T,
}


export interface Meal {
    id: number,
    name: string,
    providerId: string,
    description?: string,
    image: string,
    foodTags: string[],
    price: number,
    preparationTime: string,
    ingredients: string[],
    calories?: number,
    isAvailable: string,
    deletedAt?: Date,
    isFeatured: boolean,
    averageRating: number,
    ratingCount: number,
    createdAt: Date,
    updatedAt: Date,
    categoryId: number,
    provider: {
        businessName: string,
        logo: string,
        city: string,
        deliveryFee: string,
        slug: string,
    }


}

export interface Restaurant {
    userId: string,
    businessName: string,
    description: string,
    logo: string,
    address: string,
    slug: string,
    city: string,
    deliveryFee: string,
    openingTime: string,
    closingTime: string,
    isVerified: boolean,
    coverImage: string,
    isOpen: boolean,
    createdAt: Date,
    updatedAt: Date,
}

export interface GetMenuParams {
    rating?: number,
    search?: string,
}



export interface CacheOptions {
    cache?: RequestCache,
    revalidate?: number,
}