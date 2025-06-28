import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Dashboard from "@/pages/admin/Dashboard";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="px-6 py-4">
        <Dashboard />
      </main>
    </>
  );
}
