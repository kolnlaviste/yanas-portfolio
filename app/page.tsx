import MasonryGrid from './components/MasonryGrid';
import Hero from './components/Hero';

export const metadata = {
  title: 'Yana - Social Media VA & Graphic Designer',
  description: 'Portfolio showcasing social media management and graphic design work'
};

export default function Home() {
  return (
    <>
      <Hero />
      <section id="work" className="px-8 py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-widest text-sage-600 font-bold mb-4">
              What I Offer
            </p>
            <h2 className="heading-lg">Services & Specialties</h2>
            <div className="w-24 h-1 bg-sage-500 mt-4"></div>
          </div>
          <MasonryGrid />
        </div>
      </section>
    </>
  );
}