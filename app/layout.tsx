import { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
