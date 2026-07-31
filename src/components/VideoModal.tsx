import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface VideoModalProps {
  children: React.ReactNode;
  videoUrl?: string;
}

export function VideoModal({ children, videoUrl = "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0&modestbranding=1" }: VideoModalProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none shadow-2xl sm:rounded-xl">
        {isOpen && (
          <div className="relative w-full aspect-video bg-black">
            <iframe
              src={videoUrl}
              title="Video player"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
