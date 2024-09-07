import PrintAllPosts from "@/components/PrintAllPosts";
import MainLayout from "@/layouts/MainLayout";
import MainAside from "@/components/MainAside";

export default function Home() {
  return (
    <MainLayout>
      <main className="grid grid-cols-12 gap-4">
        <aside className="col-span-3">
          <MainAside />
        </aside>
        <section className="col-span-6">
          <PrintAllPosts />
        </section>
        <div className="col-span-3"></div>
      </main>
    </MainLayout>
  );
}
