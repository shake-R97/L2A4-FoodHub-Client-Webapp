import MainHero from "@/components/module/Home-Sections/mainHero";
import { userService } from "@/services/userService";


export default async function Home() {

  const {data , error} = await userService.getUserSession();

  console.log({data , error});

  return (
    <header>
      <div className="min-h-screen bg-background">
        <MainHero></MainHero>
      </div>
    </header>
  );
}
