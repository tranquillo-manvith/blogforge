import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="px-6 py-4">
        <Component {...pageProps} />
      </main>
    </>
  );
}
