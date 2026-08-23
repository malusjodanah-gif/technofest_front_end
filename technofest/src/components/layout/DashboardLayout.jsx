import { Menu } from "lucide-react";
import { useState } from "react";

import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function DashboardLayout({
  children,
  sidebarItems = [],
  user = null,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-beige-50">
      <div className="flex min-h-screen">
        <Sidebar
          items={sidebarItems}
          mobileOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
        />

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-6">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
              aria-label="Open navigation"
            >
              <Menu size={22} />
            </button>

            <div className="ml-auto flex items-center gap-3">
              <div className="hidden text-right sm:block">
                <p className="text-sm font-medium text-gray-900">
                  {user?.name || "User"}
                </p>

                <p className="text-xs text-gray-500">
                  {user?.role || "Account"}
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-maroon-100 text-sm font-semibold text-maroon-800">
                {(user?.name || "U").charAt(0).toUpperCase()}
              </div>
            </div>
          </header>

          <main className="flex-1 bg-beige-50 p-4 sm:p-6 lg:p-8">
            <div className="mx-auto w-full max-w-7xl">
              {children}
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}