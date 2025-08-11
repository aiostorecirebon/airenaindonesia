import React, { useEffect, useState, useCallback } from "react";

interface CoverImageAttributes {
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
}

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
  Content: ContentBlock[]; // Content adalah array dari blocks
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

      console.log("Processed articles:", data.data);
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

  const getImageAlt = (coverImage: any, title: string): string => {
    return coverImage?.alternativeText || `Cover image for ${title}`;
  };

  // Function to extract text content from Content blocks
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
    maxLength: number = 150
  ): string => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength).trim() + "...";
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <p>Loading articles...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "20px", color: "#d32f2f" }}>
        <h2>Error</h2>
        <p>{error}</p>
        <button
          onClick={fetchArtikels}
          style={{
            padding: "8px 16px",
            backgroundColor: "#1976d2",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Daftar Artikel
      </h1>

      {artikels.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px" }}>
          <p>Tidak ada artikel yang tersedia.</p>
        </div>
      ) : (
        <div style={{ display: "grid", gap: "20px" }}>
          {artikels.map((artikel) => {
            console.log("Processing artikel:", artikel);

            const { id, title, Content, coverImage, published } = artikel;
            const imageUrl = getImageUrl(coverImage);
            const contentText = extractContentText(Content);

            return (
              <article
                key={id}
                style={{
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  padding: "20px",
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  transition: "box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 8px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
                }}
              >
                {imageUrl && (
                  <div style={{ marginBottom: "15px" }}>
                    <img
                      src={imageUrl}
                      alt={getImageAlt(coverImage, title)}
                      style={{
                        width: "100%",
                        maxWidth: "400px",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "4px",
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                )}

                <h2
                  style={{
                    margin: "0 0 10px 0",
                    fontSize: "1.5rem",
                    color: "#333",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                  }}
                  onClick={() => {
                    // Navigate to single article page
                    window.location.href = `/artikel/${artikel.slug}`;
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#1976d2";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#333";
                  }}
                >
                  {title || "Untitled Article"}
                </h2>

                {published && (
                  <p
                    style={{
                      margin: "0 0 10px 0",
                      fontSize: "0.9rem",
                      color: "#999",
                    }}
                  >
                    Published: {new Date(published).toLocaleDateString()}
                  </p>
                )}

                <p
                  style={{
                    margin: "0",
                    lineHeight: "1.6",
                    color: "#666",
                  }}
                >
                  {contentText
                    ? truncateContent(contentText)
                    : "No content available"}
                </p>

                <button
                  onClick={() => {
                    window.location.href = `/artikel/${artikel.slug}`;
                  }}
                  style={{
                    display: "inline-block",
                    marginTop: "15px",
                    padding: "8px 16px",
                    backgroundColor: "#1976d2",
                    color: "white",
                    textDecoration: "none",
                    border: "none",
                    borderRadius: "4px",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#1565c0";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#1976d2";
                  }}
                >
                  Baca Selengkapnya
                </button>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ArtikelList;
