import SharedLayout from "#/components/shared-layout";
import type { Metadata } from "next";

import { Inter } from "next/font/google"

const inter = Inter({
   subsets: ['latin'],
   preload: true
})


export const metadata: Metadata = {
   title: "Dashboard | chinesewithmeggie",
   description: "CMS admin to handle content",
};

type TAdminLayout = Readonly<{ children: React.ReactNode }>

export default function AdminLayout({ children }: TAdminLayout) {
   return (
      <html lang="en">
         <body
            className={`antialiased ${inter.className}`}>
            <SharedLayout>
               {children}
            </SharedLayout>
         </body>
      </html>
   );
}
