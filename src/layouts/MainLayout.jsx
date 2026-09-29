import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Outlet />
    </div>
  );
};

export default MainLayout;