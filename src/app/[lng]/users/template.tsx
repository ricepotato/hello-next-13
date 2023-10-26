export default function UsersTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>hello this is users template</div>
      {children}
    </div>
  );
}
