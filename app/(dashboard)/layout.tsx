import Navbar from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { checkSubscription } from "@/lib/subscription";
import { getApiLimitCount } from "@/lib/api-limit";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  // const apiLimitCount = await getApiLimitCount(); // Await the async function

//   return (
//     <div>
//       <p>API Limit Count: {apiLimitCount}</p>
//       {children}
//     </div>
//   );
//}

// const DashboardLayout = async ({
//   children,
// }: {
//   children: React.ReactNode
// }) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return ( 
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </div>
      <main className="md:pl-72 pb-10">
        <Navbar />
        {children}
      </main>
    </div>
   );
}
 
// export default DashboardLayout;
