"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type GalleryImage = {
  n: number;
  width: number;
  height: number;
};

function getColumnCount() {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth <= 767) return 1;
  if (window.innerWidth <= 1024) return 3;
  return 4;
}

function ProjectGalleryItem({ image }: { image: GalleryImage }) {
  const itemRef = useRef<HTMLAnchorElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { n, width, height } = image;
  const imageSrc = `/images/projects-live/Garage-DoorGate-Services-${n}.jpg`;

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px" },
    );

    observer.observe(item);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={itemRef}
      href={imageSrc}
      style={{ aspectRatio: `${width} / ${height}` }}
      className="group relative block overflow-hidden bg-white"
    >
      <Image
        src={shouldLoad ? imageSrc : "/images/anchor-garage-door-Fav.png"}
        alt={`Garage Door & Gate Services ${n}`}
        width={width}
        height={height}
        loading="lazy"
        onLoad={() => shouldLoad && setLoaded(true)}
        style={{
          filter: `opacity(${loaded ? 1 : 0})`,
          transform: `scale(${loaded ? 1 : 0.5})`,
        }}
        className="absolute inset-0 block h-full w-full origin-top object-cover transition-[filter,transform] duration-[800ms] ease-in-out"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-black/0 transition-colors duration-[800ms] group-hover:bg-black/50"
      />
    </a>
  );
}

export default function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const [columnCount, setColumnCount] = useState(getColumnCount);

  useEffect(() => {
    const updateColumnCount = () => setColumnCount(getColumnCount());
    window.addEventListener("resize", updateColumnCount);
    return () => window.removeEventListener("resize", updateColumnCount);
  }, []);

  const columns = useMemo(() => {
    const nextColumns = Array.from({ length: columnCount }, () => [] as GalleryImage[]);
    const heights = Array.from({ length: columnCount }, () => 0);

    for (const image of images) {
      const shortestColumn = heights.indexOf(Math.min(...heights));
      nextColumns[shortestColumn].push(image);
      heights[shortestColumn] += image.height / image.width;
    }

    return nextColumns;
  }, [columnCount, images]);

  return (
    <div className="grid grid-cols-1 gap-[15px] md:grid-cols-3 lg:grid-cols-4 max-lg:gap-[10px]">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="flex min-w-0 flex-col gap-[15px] max-lg:gap-[10px]">
          {column.map((image) => <ProjectGalleryItem key={image.n} image={image} />)}
        </div>
      ))}
    </div>
  );
}
