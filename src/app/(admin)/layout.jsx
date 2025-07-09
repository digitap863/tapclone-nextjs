
import Sidebar from "@/components/admin/Sidebar";



export const metadata = {
  title: "Tapclone Admin",
  description: "Admin panel for tapclone",
};

export default function AdminLayout({ children }) {
  return (

    <div>
      <Sidebar />
      <div className="p-4 sm:ml-24">
        <div className="flex w-full gap-10">{children}</div>
      </div>
    </div>

  );
}
