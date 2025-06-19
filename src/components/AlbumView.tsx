
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Image, Download, Share2, ArrowLeft } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  date: string;
  category: string;
}

interface Album {
  id: string;
  title: string;
  category: string;
  year: string;
  date: string;
  imageCount: number;
  coverImage: string;
  description: string;
  highlights: string[];
}

interface AlbumViewProps {
  album: Album | null;
  isOpen: boolean;
  onClose: () => void;
}

const AlbumView = ({ album, isOpen, onClose }: AlbumViewProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!album) return null;

  // Generate sample images for the album
  const albumImages: GalleryImage[] = Array.from({ length: album.imageCount }, (_, index) => ({
    id: `${album.id}-${index}`,
    src: index === 0 ? album.coverImage : `https://images.unsplash.com/photo-${1500000000000 + index}?w=800&h=600&fit=crop`,
    alt: `${album.title} - Photo ${index + 1}`,
    title: `${album.title} - ${index + 1}`,
    date: album.date,
    category: album.category,
  }));

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-4 mb-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="hover:bg-primary/10"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex-1">
                <DialogTitle className="text-3xl font-playfair text-primary mb-2">
                  {album.title}
                </DialogTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {album.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Image className="w-4 h-4" />
                    {album.imageCount} photos
                  </div>
                  <Badge variant="secondary">{album.year}</Badge>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download All
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Album
                </Button>
              </div>
            </div>
          </DialogHeader>

          {/* Album Description */}
          <div className="mb-6">
            <p className="text-muted-foreground mb-4">{album.description}</p>
            <div className="flex flex-wrap gap-2">
              {album.highlights.map((highlight, idx) => (
                <Badge key={idx} variant="outline" className="border-primary/30">
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {albumImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-lg border-2 border-primary/20 hover:border-primary transition-all cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300" />
                <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Badge className="text-xs">
                    {index + 1}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <ImageLightbox
        images={albumImages}
        initialIndex={selectedImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
};

export default AlbumView;
