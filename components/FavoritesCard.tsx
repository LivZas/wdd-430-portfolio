interface FavoritesCardProps {
    title: string;
    description: string;
    favorites: string[];
}

export default function FavoritesCard({
    title,
    description,
    favorites
}: FavoritesCardProps) {
    return (
        <article className="p-4 border-l-4 border-orange-600 bg-gray-800 rounded">
        <h3 className="text-xl font-bold mb-2">
            {title}
            </h3>

            <p className="text-white mb-3">
                {description}
                </p>

                <p className="text-sm text-white">
                    <strong>Favorites:</strong>{" "}
                    {favorites.join(', ')}
                    </p>
        </article>
    );
}