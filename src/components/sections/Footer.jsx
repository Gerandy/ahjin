import { RevealOnScroll } from "../RevealOnScroll";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-100 py-10">
      <RevealOnScroll>
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Ahjin Guild. BSIT 3D, All rights reserved.
          </p>
        </div>
      </RevealOnScroll>
    </footer>
  );
}