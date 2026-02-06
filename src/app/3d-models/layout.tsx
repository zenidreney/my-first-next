import type { RootLayoutProps } from "../types";

import SideBar from "../components/SideBar";

export default function ModelsLayout({ children }: RootLayoutProps) {
  
  return (
    <div className="relative flex flex-col min-h-screen md:flex-row">
      {/* Responsive Navigation */}
      
      <SideBar />
      {/* Main Content Area */}
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  )
}
