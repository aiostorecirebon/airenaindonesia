import React, { useEffect, useState, useCallback } from "react";
import { Calendar, User, ArrowRight } from "lucide-react";

interface ContentBlock {
  type: string;
  children?: Array<{
    type: string;
    text: string;
  }>;
}

interface Artikel {
  id: number;
  documentId: string;
  title: string;
  Content: ContentBlock[];
  coverImage: {
    id: number;
    url: string;
    alternativeText?: string;
    name: string;
  };
  slug: string;
  published: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse {
  data: Artikel[];
  meta?: {
    pagination: {
      total: number;
      page: number;
      pageSize: number;
      pageCount: number;
    };
  };
}

// Constants
const API_BASE_URL = "http://localhost:1337";
const ENDPOINTS = {
  artikels: `${API_BASE_URL}/api/artikels?populate=*`,
};

const ArtikelList: React.FC = () => {
  const [artikels, setArtikels] = useState<Artikel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArtikels = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(ENDPOINTS.artikels);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ApiResponse = await response.json();

      if (!data.data) {
        throw new Error("Invalid API response structure");
      }

      setArtikels(data.data);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to fetch articles";
      setError(errorMessage);
      console.error("Error fetching articles:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchArtikels();
  }, [fetchArtikels]);

  const getImageUrl = (coverImage: any): string | null => {
    return coverImage?.url ? `${API_BASE_URL}${coverImage.url}` : null;
  };

  const extractContentText = (contentBlocks: ContentBlock[]): string => {
    if (!Array.isArray(contentBlocks)) return "";

    return contentBlocks
      .map((block) => {
        if (block.children && Array.isArray(block.children)) {
          return block.children.map((child) => child.text || "").join(" ");
        }
        return "";
      })
      .join(" ")
      .trim();
  };

  const truncateContent = (
    content: string,
    maxLength: number = 120
  ): string => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength).trim() + "...";
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return date.toLocaleDateString("id-ID", options);
  };

  const getCategoryFromContent = (content: string): string => {
    // Simple category logic based on content keywords
    const lowerContent = content.toLowerCase();
    if (lowerContent.includes("tips") || lowerContent.includes("cara"))
      return "Tips & Trik";
    if (lowerContent.includes("panduan") || lowerContent.includes("tutorial"))
      return "Panduan";
    if (
      lowerContent.includes("perbedaan") ||
      lowerContent.includes("pengetahuan")
    )
      return "Edukasi";
    return "Tips & Trik";
  };

  const getCategoryColor = (category: string): string => {
    switch (category) {
      case "Tips & Trik":
        return "bg-green-100 text-green-700";
      case "Panduan":
        return "bg-blue-100 text-blue-700";
      case "Edukasi":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Artikel & <span className="text-[#01b2b7]">Tips AC</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Temukan tips, panduan, dan informasi terbaru seputar perawatan dan
              perbaikan AC dari para ahli AIRENA.
            </p>
          </div>

          {/* Loading Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="h-64 bg-gray-200 animate-pulse"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded animate-pulse mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Oops!</h2>
          <p className="text-gray-600 mb-8">{error}</p>
          <button
            onClick={fetchArtikels}
            className="bg-[#01b2b7] hover:bg-[#01b2b7] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Artikel & <span className="text-[#01b2b7]">Tips AC</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Temukan tips, panduan, dan informasi terbaru seputar perawatan dan
            perbaikan AC dari para ahli AIRENA.
          </p>
        </div>

        {/* Articles Grid */}
        {artikels.length === 0 ? (
          <div className="text-center py-16">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl text-gray-400">📝</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Belum Ada Artikel
            </h3>
            <p className="text-gray-600 mb-8">
              Artikel dan tips menarik akan segera hadir untuk Anda.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {artikels.map((artikel) => {
                const imageUrl = getImageUrl(artikel.coverImage);
                const contentText = extractContentText(artikel.Content);
                const category = getCategoryFromContent(contentText);

                return (
                  <article
                    key={artikel.id}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
                    onClick={() => {
                      window.location.href = `/artikel/${artikel.slug}`;
                    }}
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={
                            artikel.coverImage?.alternativeText || artikel.title
                          }
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.src =
                              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23a7d8d8'/%3E%3Ctext x='200' y='150' font-family='Arial, sans-serif' font-size='18' fill='white' text-anchor='middle' dominant-baseline='middle'%3EComing Soon%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#01b2b7] to-[#01b2b7] flex items-center justify-center">
                          <span className="text-white text-lg font-semibold">
                            Coming Soon
                          </span>
                        </div>
                      )}

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                            category
                          )}`}
                        >
                          {category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Date */}
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(artikel.published)}
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#01b2b7] transition-colors duration-200">
                        {artikel.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {contentText
                          ? truncateContent(contentText)
                          : "Content will be available soon..."}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500 text-sm">
                          <User className="w-4 h-4 mr-2" />
                          <span>Tim AIRENA</span>
                        </div>

                        <div className="text-[#01b2b7] font-semibold text-sm flex items-center group-hover:text-[#01b2b7]">
                          Baca Selengkapnya
                          <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Load More Button */}
            <div className="text-center">
              <button
                onClick={fetchArtikels}
                className="bg-[#01b2b7] hover:bg-[#01b2b7] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Muat Lebih Banyak Artikel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ArtikelList;
