export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-8 lg:mx-96 text-white min-h-screen">
      {children}
    </div>
  );
}