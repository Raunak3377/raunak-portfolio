import React, { useState, useEffect, useRef } from "react";
import { Play, Maximize2, X, Instagram, ExternalLink, Loader2 } from "lucide-react";

interface GalleryItem {
  id: number;
  type: "reel" | "post";
  permalink: string; // FULL INSTAGRAM LINK
  title: string;
  category: "reels" | "static";
  thumb: string;
  description: string;
}

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const CreativeGallery: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState<null | GalleryItem>(null);
  const [isLoading, setIsLoading] = useState(true);
  const embedRef = useRef<HTMLDivElement>(null);

  // FULL LINKS for different clients/pages
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: "reel",
      permalink: "https://www.instagram.com/reel/DTuWN8uk-3P/",
      title: "Aura National Strategy",
      category: "reels",
      thumb:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop",
      description:
        "The creative that spearheaded the Aura National academy growth campaign.",
    },
    {
      id: 2,
      type: "post",
      permalink: "https://www.instagram.com/reel/DT4EpwMFCjA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      title: "Anisha Makeover Academy",
      category: "static",
      thumb:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      description:
        "Breakdown of our proprietary 3-stage scaling protocol for D2C brands.",
    },
    {
      id: 3,
      type: "reel",
      permalink: "https://www.instagram.com/reel/DTX7lETAW1y/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      title: "UGC Ad Structure",
      category: "reels",
      thumb:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=600&auto=format&fit=crop",
      description: "Direct response creative that generated 4.2x ROAS.",
    },
    {
      id: 4,
      type: "post",
      permalink: "https://www.instagram.com/p/CSzZ8mXlX9Y/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      title: "Lakme Academy Darbhanga",
      category: "static",
      thumb:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=600&auto=format&fit=crop",
      description:
        "High-converting static ad creative for Lakme Academy Darbhanga.",
    },
  ];

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((i) => i.category === filter);

  useEffect(() => {
    if (selectedMedia) {
      setIsLoading(true);

      const timer = setTimeout(() => {
        if (window.instgrm) window.instgrm.Embeds.process();
        setIsLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [selectedMedia]);

  return (
    <div className="py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h1 className="text-5xl md:text-8xl font-black font-display mb-6">
              Live <br />
              <span className="text-gradient">Portfolio.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl">
              Interactive creative evidence. Click to view high-performance
              content directly on Instagram.
            </p>
          </div>

          {/* Filters */}
          <div className="flex bg-white/5 p-2 rounded-2xl border border-white/10">
            {["all", "reels", "static"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-xl text-sm font-bold capitalize transition-all ${
                  filter === cat
                    ? "bg-brand-accent text-white shadow-lg shadow-brand-accent/20"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedMedia(item)}
              className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden glass-card cursor-pointer border border-white/5 hover:border-brand-accent/30 transition-all duration-500"
            >
              <img
                src={item.thumb}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-brand-accent text-[10px] font-bold uppercase tracking-widest mb-2">
                      {item.type}
                    </span>
                    <h3 className="text-xl font-black text-white">
                      {item.title}
                    </h3>
                  </div>

                  <div className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl group-hover:bg-brand-accent transition-colors">
                    {item.type === "reel" ? (
                      <Play size={20} fill="white" stroke="none" />
                    ) : (
                      <Maximize2 size={20} />
                    )}
                  </div>
                </div>
              </div>

              {item.type === "reel" && (
                <div className="absolute top-6 right-6 p-2.5 bg-black/60 backdrop-blur rounded-xl border border-white/10">
                  <Instagram size={16} className="text-white" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors z-[110]"
            onClick={() => setSelectedMedia(null)}
          >
            <X size={40} />
          </button>

          <div
            className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-10 items-center justify-center h-full max-h-[90vh] overflow-y-auto no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Instagram Embed */}
            <div className="lg:col-span-6 h-full flex items-center justify-center relative py-10">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <Loader2
                    className="animate-spin text-brand-accent"
                    size={48}
                  />
                </div>
              )}

              <div
                ref={embedRef}
                className="w-full max-h-full overflow-y-auto flex justify-center"
              >
                <blockquote
                  key={selectedMedia.permalink}
                  className="instagram-media"
                  data-instgrm-captioned
                  data-instgrm-permalink={`${selectedMedia.permalink}?utm_source=ig_embed&utm_campaign=loading`}
                  data-instgrm-version="14"
                />
              </div>
            </div>

            {/* Side Panel */}
            <div className="lg:col-span-6 hidden lg:flex flex-col justify-center text-left">
              <span className="text-brand-accent font-bold uppercase tracking-[0.2em] text-sm mb-4">
                Strategic Analysis
              </span>
              <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                {selectedMedia.title}
              </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                {selectedMedia.description}
              </p>

              <div className="flex gap-4">
                <a
                  href={selectedMedia.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-accent text-white px-10 py-5 rounded-full font-black flex items-center justify-center gap-3 hover:scale-105 transition-transform w-fit"
                >
                  Open Original <ExternalLink size={20} />
                </a>

                <button
                  onClick={() => setSelectedMedia(null)}
                  className="glass-card text-white px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-colors"
                >
                  Close Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreativeGallery;
