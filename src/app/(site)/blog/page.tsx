import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import exp from "constants";

export default function Blog() {
  return (
    <div className="prose prose-invert max-w-none">
      <Navbar />
      <div>
        <h3 className="text-center">Blog Posts</h3>
      </div>
    </div>
  );
}
