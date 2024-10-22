import { Container } from "@/shared/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christmas Gift",
  description: "Collect gifts, protect Christmas!",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header></header>
      <main className="min-h-screen">{children}</main>
      <footer>
        <Container>©Сreator and Author by Bodich</Container>
      </footer>
    </>
  );
}
