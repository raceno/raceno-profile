import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { BlogPostPage } from "./components/BlogPostPage";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-page-bg)]">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </div>
  );
}

export default App;
