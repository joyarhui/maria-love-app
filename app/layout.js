export const metadata = {
  title: "Maria System ❤️",
  description: "A special app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
