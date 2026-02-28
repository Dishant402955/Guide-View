// apps/web/app/admin/layout.tsx
import React, { ReactNode } from "react";

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <header className="mb-4">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
      </header>
      <main>{children}</main>
    </div>
  );
}