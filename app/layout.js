import "./globals.css";

export const metadata = {
  title: {
    default: "Tackle",
    template: "%s | Tackle",
  },
  description: "We design and develop softwares for businesses",
  keyword: ["Design", "Development", "Creative Agency"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
