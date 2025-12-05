export default function ProductRecommendations({ profile }) {
  const getRecommendedProducts = () => {
    const products = [];

    // Produits selon les sports
    if (profile.sports.includes('yoga')) {
      products.push({
        name: 'Tapis de Yoga Antidérapant',
        price: '29.99€',
        image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop',
        description: 'Tapis confortable et antidérapant pour vos séances',
        link: 'https://www.decathlon.fr/p/tapis-yoga',
        benefits: ['Épaisseur 5mm', 'Antidérapant', 'Facile à nettoyer']
      });

      products.push({
        name: 'Brique de Yoga',
        price: '9.99€',
        image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=400&fit=crop',
        description: 'Support pour améliorer votre souplesse',
        link: 'https://www.decathlon.fr/p/brique-yoga',
        benefits: ['Aide aux postures', 'Légère', 'Durable']
      });
    }

    if (profile.sports.includes('musculation') || profile.sports.includes('fitness')) {
      products.push({
        name: 'Bandes de Résistance',
        price: '14.99€',
        image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop',
        description: 'Set de 5 bandes pour tous les niveaux',
        link: 'https://www.decathlon.fr/p/bandes-resistance',
        benefits: ['5 niveaux de résistance', 'Portable', 'Polyvalent']
      });

      products.push({
        name: 'Tapis de Sol Fitness',
        price: '19.99€',
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop',
        description: 'Protection optimale pour vos exercices au sol',
        link: 'https://www.decathlon.fr/p/tapis-fitness',
        benefits: ['Épais et confortable', 'Facile à ranger', 'Antidérapant']
      });
    }

    if (profile.sports.includes('course')) {
      products.push({
        name: 'Chaussures de Running',
        price: '79.99€',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
        description: 'Amorti optimal pour protéger vos articulations',
        link: 'https://www.decathlon.fr/p/chaussures-running',
        benefits: ['Bon amorti', 'Respirantes', 'Légères']
      });
    }

    // Produits généraux
    products.push({
      name: 'Gourde Isotherme 500ml',
      price: '12.99€',
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop',
      description: 'Restez hydraté pendant vos entraînements',
      link: 'https://www.decathlon.fr/p/gourde',
      benefits: ['Garde au frais 12h', 'Sans BPA', 'Étanche']
    });

    products.push({
      name: 'Serviette Microfibre Sport',
      price: '7.99€',
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc8f7f5?w=400&h=400&fit=crop',
      description: 'Séchage rapide et compacte',
      link: 'https://www.decathlon.fr/p/serviette',
      benefits: ['Séchage rapide', 'Ultra compacte', 'Douce']
    });

    return products;
  };

  const products = getRecommendedProducts();

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          🛒 Produits Recommandés
        </h2>
        <p className="text-gray-600 mb-8">
          Équipez-vous avec les meilleurs produits Decathlon adaptés à votre pratique
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="border rounded-xl overflow-hidden hover:shadow-xl transition duration-300 bg-white"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-purple-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                  {product.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">
                    Avantages :
                  </h4>
                  <ul className="space-y-1">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-xs text-gray-600">
                        ✓ {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                
                  <a href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-[#ba45a5] to-[#e505fa] text-white py-3 rounded-lg font-bold hover:opacity-90 transition"
                >
                  Voir sur Decathlon →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bannière Decathlon */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">
            🏪 Partenaire Officiel : Decathlon
          </h3>
          <p className="mb-4">
            Tous ces produits sont disponibles sur Decathlon.fr avec livraison rapide
          </p>
          
            <a href="https://www.decathlon.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Visiter Decathlon.fr
          </a>
        </div>
      </div>
    </div>
  );
}