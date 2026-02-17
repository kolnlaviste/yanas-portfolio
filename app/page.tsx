import MasonryGrid from './components/MasonryGrid';
import CornerPet from './components/CornerPet';

export const metadata = {
  title: 'Yana - Social Media VA & Graphic Designer',
  description: 'Portfolio showcasing social media management and graphic design work'
};

export default function Home() {
  return (
    <>
      {/* Corner decorations */}
      <CornerPet type="dog" corner="top-right" />

      {/* Hero Section - Bold and Structured */}
      <section className="min-h-screen flex items-center px-8 py-24">
        <div className="max-w-5xl">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-widest text-sage-600 font-bold mb-4">
              Portfolio 2024
            </p>
            <h1 className="heading-xl mb-8">
              Social Media<br />
              & Design
            </h1>
            <div className="w-24 h-1 bg-sage-500 mb-8"></div>
            <p className="body-text max-w-2xl text-xl">
              Strategic social media management and brand design for businesses that want to stand out.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="#work" className="btn-primary">
              View Work
            </a>
            <a href="/contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-widest text-sage-600 font-bold mb-4">
              Selected Projects
            </p>
            <h2 className="heading-lg">Recent Work</h2>
            <div className="w-24 h-1 bg-sage-500 mt-4"></div>
          </div>

          <MasonryGrid />
        </div>
      </section>

    </>
  );
}