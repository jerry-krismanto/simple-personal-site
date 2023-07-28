import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Resume() {
  return (
    <div>
      <Navbar />
      <embed
        src="assets/pdfs/resume.pdf"
        type="application/pdf"
        className="w-full h-96"
      />
      <Footer />
    </div>
  );
}
