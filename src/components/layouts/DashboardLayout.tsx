import type { ReactNode } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
} from "../ui/sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const navigate = useNavigate();

  const goTo = (path: string) => () => navigate(path);

  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
        <Sidebar>
          <SidebarHeader>
            <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              BankApp
            </h2>
          </SidebarHeader>

          {/* Sidebar Container */}
          <div className="m-4 rounded-2xl bg-white p-4 shadow-md dark:bg-gray-900 dark:shadow-lg space-y-6">
            {/* Main Navigation */}
            <SidebarGroup>
              <SidebarGroupLabel>Main</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-white"
                      onClick={goTo("/dashboard")}
                    >
                      Dashboard
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-white"
                      onClick={goTo("/transactions")}
                    >
                      Transactions
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-white"
                      onClick={goTo("/send-money")}
                    >
                      Send Money
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Account Navigation */}
            <SidebarGroup>
              <SidebarGroupLabel>Account</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-white"
                      onClick={goTo("/profile")}
                    >
                      Profile
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-white"
                      onClick={goTo("/settings")}
                    >
                      Settings
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-900"
                      onClick={logout}
                    >
                      Logout
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </div>

          <SidebarRail />
        </Sidebar>

        <div className="flex w-full flex-col md:ml-20 lg:ml-64">
          <Header />
          <main className="flex-1 p-4 md:p-6">{children}</main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
}
