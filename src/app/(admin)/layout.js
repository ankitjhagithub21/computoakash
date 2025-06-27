import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function AdminLayout({ children }) {
  return (
    <SidebarProvider>

      <AdminSidebar/>
      <main>
        <SidebarTrigger/>
        {children}
      </main>
    </SidebarProvider>
  );
}
