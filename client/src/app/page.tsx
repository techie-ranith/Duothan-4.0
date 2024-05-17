import MiniDrawer from "@/components/layouts/drawer-employer";
import Component from "@/components/layouts/Navigation";

const Page = () => {
  return (
    <MiniDrawer>
      <Component />
      <div className="flex items-center justify-center">
        {/* Add your content here */}
      </div>
    </MiniDrawer>
  );
};

export default Page;
