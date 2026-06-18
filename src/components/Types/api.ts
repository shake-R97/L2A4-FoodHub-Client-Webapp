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
    meals: [
        {
            id: number,
            name: string,
            price: string,
            description: string,
            image: string,
        }
    ]
}

export interface GetMenuParams {
    rating?: number,
    search?: string,
}



export interface CacheOptions {
    cache?: RequestCache,
    revalidate?: number,
}


// foodCard type for restaurant profile
export interface FoodItem {
  id: number;
  name: string;
  price: number;
  description: string;
  deliveryFee: number;
  image: string;
  category?: string;
  ingredients?: string[],
  isAvailable?: string,
  averageRating?: number,
  ratingCount?: number,
  calories?: number,
}

export interface CartItem extends FoodItem {
  quantity: number;
}

export interface RestaurantProfileProps {
  restaurant: {
    businessName: string;
    coverImage?: string;
    logo?: string;
    address?: string;
    rating?: number;
    reviewCount?: number;
    deliveryTime?: string;
    cuisineType?: string;
  };
  meal: FoodItem[];
  onFoodCardClick?: (food: FoodItem) => void;
}