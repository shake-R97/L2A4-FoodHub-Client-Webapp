import { Star } from "lucide-react"

type RatingProps = {
    rating: number;
    onChange?: (rating: number)=> void;
}

export default function Ratings({rating, onChange,}: RatingProps) {
  return (
    <div className="flex flex-col gap-1 pl-3 pt-4">
        <div>
            <h1 className="text-foreground text-[18px] font-medium">Ratings </h1>
        </div>
        <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5].map((star)=> 
            (<Star
            key={star}
            size={22}
            onClick={()=> onChange?.(star)}
            className={`text-green-500 ${
                star <= rating 
                ? "fill-green-500"
                : ""
            } ${
                onChange ? "cursor-pointer": ""
            }`}
            />))}
        </div>
    </div>
  )
}
