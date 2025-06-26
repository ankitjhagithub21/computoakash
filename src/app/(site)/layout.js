import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";


export default function MainLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className="min-h-[calc(100vh-160px)]">{children}</main>
            <Footer />

        </>
    );
}
