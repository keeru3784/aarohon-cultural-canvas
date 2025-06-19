
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Image, Download, Share2, Filter, Eye } from "lucide-react";
import AlbumView from "@/components/AlbumView";

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [albumViewOpen, setAlbumViewOpen] = useState(false);

  const filters = [
    { id: "all", label: "All Events", count: 350 },
    { id: "durga-puja", label: "Durga Puja", count: 120 },
    { id: "kali-puja", label: "Kali Puja", count: 85 },
    { id: "food-distribution", label: "Food Distribution", count: 60 },
    { id: "cultural", label: "Cultural Programs", count: 95 },
    { id: "community", label: "Community Service", count: 40 },
    { id: "education", label: "Educational", count: 30 }
  ];

  const galleryAlbums = [
    {
      id: "durga-puja-2024",
      title: "Durga Puja 2024",
      category: "durga-puja",
      year: "2024",
      date: "October 2024",
      imageCount: 120,
      coverImage: "/lovable-uploads/2635923e-c8e1-4146-a7bc-1ac251e1ad56.png",
      description: "Grand celebration of Durga Puja with traditional rituals, cultural programs, and community participation.",
      highlights: ["Traditional Rituals", "Cultural Dance", "Community Feast", "Children's Programs"]
    },
    {
      id: "kali-puja-2024",
      title: "Kali Puja 2024",
      category: "kali-puja",
      year: "2024",
      date: "November 2024",
      imageCount: 85,
      coverImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
      description: "Sacred Kali Puja celebrations with devotional ceremonies and cultural activities.",
      highlights: ["Sacred Ceremonies", "Evening Aarti", "Traditional Music", "Community Prayers"]
    },
    {
      id: "food-distribution-2024",
      title: "Food Distribution Drive",
      category: "food-distribution",
      year: "2024",
      date: "Throughout 2024",
      imageCount: 60,
      coverImage: "https://images.unsplash.com/photo-1593113630400-ea4288922497?w=800",
      description: "Monthly food distribution drives supporting underprivileged families in our community.",
      highlights: ["Monthly Drives", "Family Support", "Volunteer Efforts", "Community Impact"]
    },
    {
      id: "cultural-night-2024",
      title: "Cultural Night 2024",
      category: "cultural",
      year: "2024",
      date: "December 2024",
      imageCount: 95,
      coverImage: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800",
      description: "An evening of Bengali cultural performances including dance, music, and drama.",
      highlights: ["Classical Dance", "Folk Music", "Drama Performance", "Children's Acts"]
    },
    {
      id: "durga-puja-2023",
      title: "Durga Puja 2023",
      category: "durga-puja",
      year: "2023",
      date: "October 2023",
      imageCount: 110,
      coverImage: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=800",
      description: "Previous year's memorable Durga Puja celebrations with record community participation.",
      highlights: ["Record Attendance", "Traditional Ceremonies", "Cultural Programs", "Community Unity"]
    },
    {
      id: "community-service-2024",
      title: "Community Service Projects",
      category: "community",
      year: "2024",
      date: "Various Dates",
      imageCount: 40,
      coverImage: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800",
      description: "Various community service activities including clean-up drives and welfare programs.",
      highlights: ["Clean-up Drives", "Elder Care", "Health Camps", "Environmental Initiatives"]
    },
    {
      id: "education-initiatives",
      title: "Educational Initiatives",
      category: "education",
      year: "2024",
      date: "Year Round",
      imageCount: 30,
      coverImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
      description: "Educational support programs including tutoring and scholarship distributions.",
      highlights: ["Free Tutoring", "Scholarship Awards", "Digital Literacy", "Career Guidance"]
    }
  ];

  const filteredAlbums = selectedFilter === "all" 
    ? galleryAlbums 
    : galleryAlbums.filter(album => album.category === selectedFilter);

  const openAlbum = (album) => {
    setSelectedAlbum(album);
    setAlbumViewOpen(true);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-secondary">
        {/* Hero Section */}
        <section className="py-20 bg-primary text-secondary relative overflow-hidden">
          <div className="absolute inset-0 mandala-pattern opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 animate-fade-in-up">
              Event Gallery
            </h1>
            <div className="w-32 h-2 bg-secondary mx-auto mb-8 rounded-full animate-scale-in"></div>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-1">
              Relive the memorable moments from our cultural celebrations, community service activities, and social impact initiatives.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center mr-6 mb-4">
                <Filter className="w-5 h-5 text-primary mr-2" />
                <span className="font-semibold text-primary">Filter by:</span>
              </div>
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  variant={selectedFilter === filter.id ? "default" : "outline"}
                  className={`mb-4 transition-all duration-300 hover:scale-105 ${
                    selectedFilter === filter.id
                      ? "bg-primary text-secondary primary-shadow"
                      : "border-primary/30 text-primary hover:bg-primary hover:text-secondary"
                  }`}
                >
                  {filter.label}
                  <Badge variant="secondary" className="ml-2">
                    {filter.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAlbums.map((album, index) => (
                <Card 
                  key={album.id} 
                  className="group overflow-hidden border-2 border-primary/20 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={album.coverImage} 
                      alt={album.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-all duration-500"></div>
                    
                    {/* Overlay Content */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-secondary/90 text-primary">
                        {album.year}
                      </Badge>
                    </div>
                    
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-secondary/90 border-primary text-primary">
                        <Image className="w-3 h-3 mr-1" />
                        {album.imageCount}
                      </Badge>
                    </div>

                    {/* Action Buttons - Visible on Hover */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 flex gap-2">
                      <Button size="sm" className="bg-secondary/90 text-primary hover:bg-secondary">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button size="sm" className="bg-secondary/90 text-primary hover:bg-secondary">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* View Album Button - Center */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <Button
                        onClick={() => openAlbum(album)}
                        className="bg-primary/90 text-secondary hover:bg-primary transform scale-90 group-hover:scale-100 transition-all duration-300"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Gallery
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-playfair font-bold text-primary group-hover:text-primary/80 transition-colors">
                        {album.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {album.date}
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {album.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {album.highlights.slice(0, 3).map((highlight, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                        {album.highlights.length > 3 && (
                          <Badge variant="outline" className="text-xs border-primary/30">
                            +{album.highlights.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Button 
                      onClick={() => openAlbum(album)}
                      className="w-full bg-primary hover:bg-primary/90 text-secondary font-semibold transition-all duration-300 hover:scale-105"
                    >
                      View Album
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredAlbums.length === 0 && (
              <div className="text-center py-20 animate-fade-in-up">
                <div className="text-6xl mb-4">📸</div>
                <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
                  No Albums Found
                </h3>
                <p className="text-muted-foreground">
                  No albums match the selected filter. Try selecting a different category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Gallery Stats */}
        <section className="py-20 bg-primary text-secondary relative overflow-hidden">
          <div className="absolute inset-0 mandala-pattern opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold mb-6 animate-fade-in-up">
                Gallery Statistics
              </h2>
              <div className="w-24 h-2 bg-secondary mx-auto rounded-full animate-scale-in"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "350+", label: "Total Photos" },
                { number: "15+", label: "Event Albums" },
                { number: "25+", label: "Cultural Events" },
                { number: "500+", label: "Community Members" }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center animate-fade-in-up hover-scale"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-5xl font-bold mb-2 animate-glow-pulse">{stat.number}</div>
                  <div className="text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download & Share CTA */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-6 animate-fade-in-up">
              Share Our Journey
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up stagger-1">
              Download and share photos from our events to spread awareness about our cultural and social initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-2">
              <Button className="bg-primary text-secondary px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all duration-300 hover:scale-105 primary-shadow">
                <Download className="w-5 h-5 mr-2" />
                Download High-Res Photos
              </Button>
              <Button variant="outline" className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-secondary transition-all duration-300 hover:scale-105">
                <Share2 className="w-5 h-5 mr-2" />
                Share Gallery
              </Button>
            </div>
          </div>
        </section>
      </div>

      <AlbumView
        album={selectedAlbum}
        isOpen={albumViewOpen}
        onClose={() => setAlbumViewOpen(false)}
      />
    </Layout>
  );
};

export default Gallery;
