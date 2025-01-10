import type { Metadata } from "next";
import StyledComponentsWrapper from "@/components/StyledComponentsWrapper";

export const metadata: Metadata = {
  title: "Todo List",
  description: "할 일 목록을 관리하는 To Do 서비스",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Square:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsWrapper>{children}</StyledComponentsWrapper>
      </body>
    </html>
  );
}
