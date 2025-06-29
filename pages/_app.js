import "@/styles/globals.css";
import { Toaster } from 'react-hot-toast';
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Toaster position="top-center" />
      <main className="px-6 py-4">
        <Component {...pageProps} />
      </main>
    </>
  );
}
