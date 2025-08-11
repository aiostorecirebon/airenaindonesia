import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface ContentBlock {
  type: string;
  children?: Array<{
    type: string;
    text: string;
    bold?: boolean;
    italic?: boolean;
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
}

const API_BASE_URL = "http://localhost:1337";

const ArtikelDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [artikel, setArtikel] = useState<Artikel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArtikel = async () => {
      if (!slug) {
        setError("Slug artikel tidak ditemukan");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `${API_BASE_URL}/api/artikels?filters[slug][$eq]=${slug}&populate=*`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ApiResponse = await response.json();

        if (!data.data || data.data.length === 0) {
          throw new Error("Artikel tidak ditemukan");
        }

        setArtikel(data.data[0]);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to fetch article";
        setError(errorMessage);
        console.error("Error fetching article:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArtikel();
  }, [slug]);

  const renderContent = (contentBlocks: ContentBlock[]): React.ReactNode => {
    if (!Array.isArray(contentBlocks)) return null;

    return contentBlocks.map((block, index) => {
      if (block.type === "paragraph" && block.children) {
        return (
          <p
            key={index}
            style={{
              marginBottom: "16px",
              lineHeight: "1.7",
              fontSize: "1.1rem",
              color: "#333",
            }}
          >
            {block.children.map((child, childIndex) => {
              let style: React.CSSProperties = {};

              if (child.bold) style.fontWeight = "bold";
              if (child.italic) style.fontStyle = "italic";

              return (
                <span key={childIndex} style={style}>
                  {child.text}
                </span>
              );
            })}
          </p>
        );
      }

      if (block.type === "heading" && block.children) {
        return (
          <h3
            key={index}
            style={{
              marginBottom: "16px",
              marginTop: "24px",
              fontSize: "1.4rem",
              color: "#222",
              fontWeight: "600",
            }}
          >
            {block.children.map((child) => child.text).join("")}
          </h3>
        );
      }

      return null;
    });
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <p>Loading article...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2 style={{ color: "#d32f2f", marginBottom: "16px" }}>Error</h2>
        <p style={{ marginBottom: "20px" }}>{error}</p>
        <Link
          to="/artikel"
          style={{
            padding: "10px 20px",
            backgroundColor: "#1976d2",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
          }}
        >
          Kembali ke Daftar Artikel
        </Link>
      </div>
    );
  }

  if (!artikel) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <p>Artikel tidak ditemukan</p>
        <Link
          to="/artikel"
          style={{
            padding: "10px 20px",
            backgroundColor: "#1976d2",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
          }}
        >
          Kembali ke Daftar Artikel
        </Link>
      </div>
    );
  }

  const imageUrl = artikel.coverImage?.url
    ? `${API_BASE_URL}${artikel.coverImage.url}`
    : null;

  return (
    <article style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      {/* Navigation */}
      <nav style={{ marginBottom: "30px" }}>
        <Link
          to="/artikel"
          style={{
            color: "#1976d2",
            textDecoration: "none",
            fontSize: "0.9rem",
          }}
        >
          ← Kembali ke Daftar Artikel
        </Link>
      </nav>

      {/* Cover Image */}
      {imageUrl && (
        <div style={{ marginBottom: "30px", textAlign: "center" }}>
          <img
            src={imageUrl}
            alt={artikel.coverImage?.alternativeText || artikel.title}
            style={{
              width: "100%",
              maxHeight: "400px",
              objectFit: "cover",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      )}

      {/* Article Header */}
      <header style={{ marginBottom: "30px" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            color: "#222",
            marginBottom: "16px",
            lineHeight: "1.2",
          }}
        >
          {artikel.title}
        </h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            fontSize: "0.9rem",
            color: "#666",
            borderBottom: "1px solid #eee",
            paddingBottom: "16px",
          }}
        >
          <span>
            Published:{" "}
            {new Date(artikel.published).toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span>
            Updated:{" "}
            {new Date(artikel.updatedAt).toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </header>

      {/* Article Content */}
      <div
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.8",
          color: "#333",
        }}
      >
        {renderContent(artikel.Content)}
      </div>

      {/* Footer Navigation */}
      <footer
        style={{
          marginTop: "50px",
          padding: "20px 0",
          borderTop: "1px solid #eee",
          textAlign: "center",
        }}
      >
        <Link
          to="/artikel"
          style={{
            padding: "12px 24px",
            backgroundColor: "#1976d2",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
            fontWeight: "500",
          }}
        >
          Lihat Artikel Lainnya
        </Link>
      </footer>
    </article>
  );
};

export default ArtikelDetail;
