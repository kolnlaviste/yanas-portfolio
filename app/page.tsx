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
      <section id="work" className="px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-widest text-sage-600 font-bold mb-4">
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