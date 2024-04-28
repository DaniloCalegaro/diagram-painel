import { Navibar } from "./_components/navbar";
import { OrgSideBar } from "./_components/org-siderbar";
import { SiderBar } from "./_components/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="h-full">
      <SiderBar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSideBar />
          <div className="h-full flex-1">
            <Navibar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
