import { AppSidebar } from "@/components/layout/app-sidebar"
import { MealCard } from "@/components/layout/mealCard"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { MealService } from "@/services/meals.service"


export default async function MenuPage() {

  const {data , error} = await MealService.getMeals({
    rating: 4,
    search: "Burger",
  },
  {
    // cache: "no-store"
    revalidate: 60,
  }
)

 if(error){
  console.log(error.message);
  return;
 }

  const meals = data.data;


  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "17rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-1 md:gap-2 px-4 my-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-vertical:h-4 data-vertical:self-auto"
          />
          {/* search input */}
          <div className="w-full">
            <div className="mx-auto flex  sm:flex-row gap-1.5  md:gap-3 max-w-sm lg:max-w-3xl sm:max-w-sm">

                    <input
                        type="text"
                        placeholder="Search, Your Favorite Food ex:('Burger, Pizza')etc."
                        className="flex-1 rounded-full px-2.5 py-1.5 md:px-5 md:py-3 bg-white border border-[#4caf78] text-[#4caf78] dark:bg-[rgba(255,255,255,0.05)] dark:text-[#8fa897] focus:border-[#3aad65] dark:border-[#3aad65] dark:focus:border-[#3aad65]"
                    />
                    <Button variant={"ghost"} className="bg-[#3aad65] text-white dark:text-white font-semibold rounded-full text-[13px] md:text-[16px] px-4 py-5 md:px-6 md:py-6 hover:bg-[#2d9958] whitespace-nowrap">
                        Search
                    </Button>
                </div>
          </div>

        </header>
        <div className="flex flex-1 flex-col gap-4 p-2 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-screen flex-1 px-5  py-5 lg:py-8 rounded-xl bg-muted/50 md:min-h-min"> 
          
           <div className="grid grid-cols-1 gap-5 md:gap-3 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
            
               {
            meals.map((meal)=> (
              <MealCard key={meal.id} meal={meal} />
            ))
          }
          
           </div>

          
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
