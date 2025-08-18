import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface ArticleDetailData {
  title: string;
  featuredImageUrl: string;
  articleBody: any;
  category?: string;
  publishedDate?: string;
  author?: string;
}

interface RelatedArticle {
  id: string;
  title: string;
  slug: string;
  category: string;
  publishedDate: string;
  featuredImageUrl: string;
}

const ArticleDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState<ArticleDetailData | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<RelatedArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
      const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

      const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}&content_type=article&fields.slug=${slug}`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch article.");
        const data = await response.json();

        if (data.items.length === 0) throw new Error("Article not found.");

        const item = data.items[0];
        const imageUrl = data.includes?.Asset?.find(
          (asset: any) => asset.sys.id === item.fields.images?.sys.id
        )?.fields.file.url;

        // Format tanggal dari Contentful
        const formatDate = (dateString: string) => {
          const date = new Date(dateString);
          return date.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          });
        };

        setArticle({
          title: item.fields.title,
          featuredImageUrl: imageUrl
            ? `https:${imageUrl}`
            : "https://via.placeholder.com/800x400?text=Featured+Image",
          articleBody: item.fields.articlebody,
          category: item.fields.category || "Edukasi",
          publishedDate: item.fields.publishedDate
            ? formatDate(item.fields.publishedDate)
            : formatDate(item.sys.createdAt),
          author: item.fields.author || "Tim AIRENA",
        });

        // Fetch related articles (exclude current article)
        await fetchRelatedArticles(item.fields.category, item.sys.id);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchRelatedArticles = async (
      category: string,
      currentArticleId: string
    ) => {
      const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
      const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

      try {
        const relatedUrl = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}&content_type=article&limit=4&fields.category=${category}`;

        const relatedResponse = await fetch(relatedUrl);
        if (relatedResponse.ok) {
          const relatedData = await relatedResponse.json();

          // Filter out current article and map to RelatedArticle interface
          const related = relatedData.items
            .filter((item: any) => item.sys.id !== currentArticleId)
            .slice(0, 2) // Limit to 2 related articles
            .map((item: any) => {
              const imageUrl = relatedData.includes?.Asset?.find(
                (asset: any) => asset.sys.id === item.fields.images?.sys.id
              )?.fields.file.url;

              const formatDate = (dateString: string) => {
                const date = new Date(dateString);
                return date.toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                });
              };

              return {
                id: item.sys.id,
                title: item.fields.title,
                slug: item.fields.slug,
                category: item.fields.category || "Edukasi",
                publishedDate: item.fields.publishedDate
                  ? formatDate(item.fields.publishedDate)
                  : formatDate(item.sys.createdAt),
                featuredImageUrl: imageUrl
                  ? `https:${imageUrl}`
                  : "https://via.placeholder.com/300x200?text=Featured+Image",
              };
            });

          setRelatedArticles(related);
        }
      } catch (err) {
        console.error("Error fetching related articles:", err);
        // Don't set error for related articles, just keep empty array
      }
    };

    if (slug) fetchArticle();
  }, [slug]);

  const handleShare = (platform: string) => {
    if (!article) return;

    const url = window.location.href;
    const title = article.title;

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(title)}`
        );
        break;
      case "whatsapp":
        window.open(
          `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`
        );
        break;
    }
  };

  if (loading)
    return <div className="text-center py-16">Memuat artikel...</div>;
  if (error)
    return (
      <div className="text-center py-16 text-red-600">
        Terjadi Kesalahan: {error}
      </div>
    );

  if (!article) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-teal-600">
              Beranda
            </Link>
            <span className="mx-2">/</span>
            <Link to="/artikel" className="hover:text-teal-600">
              Artikel
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{article.category}</span>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Article Meta */}
        <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
          <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full font-medium">
            {article.category}
          </span>
          <div className="flex items-center">
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

        {/* Article Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
          {article.title}
        </h1>

        {/* Featured Image */}
        <div className="w-full h-64 md:h-80 bg-gradient-to-br from-teal-200 to-teal-300 rounded-lg mb-8 flex items-center justify-center">
          {article.featuredImageUrl.includes("placeholder") ? (
            <span className="text-white text-lg font-medium">
              Featured Image
            </span>
          ) : (
            <img
              src={article.featuredImageUrl}
              alt={article.title}
              className="w-full h-full object-cover rounded-lg"
            />
          )}
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          {article.articleBody &&
            documentToReactComponents(article.articleBody)}
        </div>

        {/* Share Section */}
        <div className="border-t border-gray-200 pt-8 mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Bagikan Artikel Ini
          </h3>
          <div className="flex gap-4">
            <button
              onClick={() => handleShare("facebook")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>
            <button
              onClick={() => handleShare("twitter")}
              className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              Twitter
            </button>
            <button
              onClick={() => handleShare("whatsapp")}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.085" />
              </svg>
              WhatsApp
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-teal-50 rounded-lg p-8 text-center mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Butuh Bantuan | Hubungi AIRENA
          </h3>
          <Link
            to="/kontak"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            Hubungi Kami
          </Link>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Artikel Terkait
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  to={`/artikel/${relatedArticle.slug}`}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="h-48">
                    <img
                      src={relatedArticle.featuredImageUrl}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-teal-100 text-teal-600 text-sm px-3 py-1 rounded-full">
                        {relatedArticle.category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {relatedArticle.publishedDate}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                      {relatedArticle.title}
                    </h3>
                    <div className="flex items-center text-teal-600 text-sm font-medium">
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
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ArticleDetail;
