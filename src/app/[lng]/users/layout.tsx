export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>hello this is users layout</div>
      {children}
    </div>
  );
}
