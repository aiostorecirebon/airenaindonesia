import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface ArticlePreview {
  id: string;
  title: string;
  slug: string;
  briefDescription: string;
  featuredImageUrl: string;
  category?: string;
  publishedDate?: string;
  author?: string;
}

const Artikel = () => {
  const [articles, setArticles] = useState<ArticlePreview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      console.log("Fetching latest articles from Contentful.");

      const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
      const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

      if (!spaceId || !accessToken) {
        setError("Contentful credentials are missing.");
        setLoading(false);
        return;
      }

      const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}&content_type=article`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch from Contentful.");

        const data = await response.json();

        const linkedAssets = data.includes.Asset;
        const formattedArticles = data.items.map((item: any) => {
          const imageAsset = linkedAssets.find(
            (asset: any) => asset.sys.id === item.fields.images?.sys.id
          );

          const imageUrl = imageAsset
            ? `https:${imageAsset.fields.file.url}`
            : "https://via.placeholder.com/400x300?text=Coming+Soon";

          return {
            id: item.sys.id,
            title: item.fields.title,
            slug: item.fields.slug,
            briefDescription: item.fields.description,
            featuredImageUrl: imageUrl,
            category: item.fields.category || "Tips & Trik",
            publishedDate:
              item.fields.publishedDate ||
              new Date().toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              }),
            author: item.fields.author || "Tim AIRENA",
          };
        });

        setArticles(formattedArticles);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Demo data untuk testing tampilan
  const demoArticles = [
    {
      id: "1",
      title: "Tips Merawat AC Agar Awet dan Hemat Listrik",
      slug: "tips-merawat-ac-awet-hemat-listrik",
      briefDescription:
        "Pelajari cara merawat AC yang benar untuk menjaga performa optimal dan menghemat tagihan listrik bulanan Anda.",
      featuredImageUrl: "https://via.placeholder.com/400x300?text=Coming+Soon",
      category: "Tips & Trik",
      publishedDate: "15 Januari 2024",
      author: "Tim AIRENA",
    },
    {
      id: "2",
      title: "Kapan Waktu yang Tepat untuk Service AC?",
      slug: "kapan-waktu-tepat-service-ac",
      briefDescription:
        "Mengetahui tanda-tanda AC perlu diservice dapat mencegah kerusakan yang lebih parah dan biaya perbaikan yang mahal.",
      featuredImageUrl: "https://via.placeholder.com/400x300?text=Coming+Soon",
      category: "Panduan",
      publishedDate: "10 Januari 2024",
      author: "Tim AIRENA",
    },
    {
      id: "3",
      title: "Perbedaan AC Inverter dan Non-Inverter",
      slug: "perbedaan-ac-inverter-non-inverter",
      briefDescription:
        "Memahami perbedaan teknologi AC untuk membantu Anda memilih AC yang sesuai dengan kebutuhan dan budget.",
      featuredImageUrl: "https://via.placeholder.com/400x300?text=Coming+Soon",
      category: "Edukasi",
      publishedDate: "5 Januari 2024",
      author: "Tim AIRENA",
    },
  ];

  // Use demo data if no articles are loaded or for testing
  const displayArticles = articles.length > 0 ? articles : demoArticles;

  if (loading)
    return <div className="text-center py-16">Memuat artikel...</div>;
  if (error)
    return (
      <div className="text-center py-16 text-red-600">
        Terjadi Kesalahan: {error}
      </div>
    );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Artikel & Tips AC
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Temukan tips, panduan, dan informasi terbaru seputar perawatan dan
            perbaikan AC dari para ahli AIRENA.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                {/* Image */}
                <Link to={`/artikel/${article.slug}`}>
                  <div className="w-full h-48 bg-gradient-to-br from-teal-200 to-teal-300 flex items-center justify-center">
                    {article.featuredImageUrl.includes("placeholder") ? (
                      <span className="text-white text-lg font-medium">
                        Coming Soon
                      </span>
                    ) : (
                      <img
                        src={article.featuredImageUrl}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6">
                  {/* Category and Date */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block bg-teal-100 text-teal-600 text-sm font-medium px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {article.publishedDate}
                    </div>
                  </div>

                  {/* Title */}
                  <Link to={`/artikel/${article.slug}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {article.title}
                    </h3>
                  </Link>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {article.briefDescription}
                  </p>

                  {/* Author and Read More */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      {article.author}
                    </div>
                    <Link
                      to={`/artikel/${article.slug}`}
                      className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors duration-200"
                    >
                      Baca Selengkapnya
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Muat Lebih Banyak Artikel
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Artikel;
