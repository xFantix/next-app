import Table from './components/Table';
export default function Home() {
  return (
    <main className="font-sans flex justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <section className="flex flex-col gap-4">
        <Table />
      </section>
    </main>
  );
}
