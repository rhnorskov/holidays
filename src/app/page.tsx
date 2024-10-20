export default function HomePage() {
  return (
    <main className="container mx-auto flex flex-col items-center gap-y-12 py-12 text-center">
      <div className="flex max-w-prose flex-col items-center gap-y-4">
        <h1 className="text-6xl font-bold tracking-tighter">Danish Holidays</h1>

        <p className="text-gray-500">
          Easily integrate Danish holidays into your calendar.
        </p>
      </div>

      <div className="flex max-w-prose flex-col items-center gap-y-4">
        <code>https://holidays.rhnorskov.com/da</code>
        <code>https://holidays.rhnorskov.com/en</code>
      </div>
    </main>
  );
}
