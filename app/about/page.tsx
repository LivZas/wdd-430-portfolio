import FavoritesCard from "@/components/FavoritesCard";

const favorites = {
  title: 'My Favorite Things',
  description: 'Some of my favorite activities.',
  favorites: [
    'Playing videogames',
    'listening to music',
    'reading books',
    'watching movies',
    'spending time with my loved ones.'
  ]
};

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-400">
        This about page shares more information about my background and work.
      </p>

      <FavoritesCard {...favorites} />
    </main>
  );
}