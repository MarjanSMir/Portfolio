import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

export type BubbleItem = {
  src: string; // مسیر عکس (PNG هم اوکیه)
  label: string; // متنِ وسط همان دایره
};

export type CircleBubblesSliderProps = {
  items: BubbleItem[];
  /** قطر هر دایره (px). پیش‌فرض: 96 */
  size?: number;
  /** فاصله بین دایره‌ها (px). پیش‌فرض: 16 */
  gap?: number;
  /** محو شدن کناره‌ها. پیش‌فرض: true */
  sideFade?: boolean;
};

export default function CircleBubblesSlider({
  items,
  size = 96,
  gap = 16,
}: CircleBubblesSliderProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragBounds, setDragBounds] = useState<{ left: number; right: number }>(
    { left: 0, right: 0 }
  );

  // محاسبه‌ی محدودیت‌های درگ بر اساس عرض محتوای واقعی
  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const update = () => {
      const maxScroll = Math.max(0, track.scrollWidth - viewport.clientWidth);
      setDragBounds({ left: -maxScroll, right: 0 });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(viewport);
    ro.observe(track);
    return () => ro.disconnect();
  }, [items]);

  const bubbleStyle = useMemo<React.CSSProperties>(
    () => ({
      width: size,
      height: size,
      minWidth: size,
      minHeight: size,
      borderRadius: size / 2,
      overflow: "hidden",
      position: "relative",
      boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
      border: "1px solid rgba(0,0,0,0.08)",
      userSelect: "none",
    }),
    [size]
  );

  const trackStyle = useMemo<React.CSSProperties>(
    () => ({
      display: "flex",
      alignItems: "center",
      padding: "16px 0",
      gap: `${gap}px`,
    }),
    [gap]
  );

  return (
    <div style={{ position: "relative", width: "100%" }}>
      {/* ترک قابل درگ */}
      <motion.div
        ref={trackRef}
        style={trackStyle}
        drag="x"
        dragConstraints={dragBounds}
        dragElastic={0.08}
        dragMomentum={true}
        onDragEnd={() => {
          const viewport = viewportRef.current;
          const el = trackRef.current as HTMLElement | null;
          if (!viewport || !el) return;
          const matrix = new DOMMatrixReadOnly(getComputedStyle(el).transform);
          const deltaX = matrix.m41;
          if (deltaX !== 0) {
            viewport.scrollLeft -= deltaX;
            el.style.transform = ""; // ریست
          }
        }}
      >
        {items.map((item, i) => (
          <div key={i} style={bubbleStyle} title={item.label}>
            {/* عکس دایره‌ای */}
            <img
              src={item.src}
              alt={item.label}
              className="absolute inset-0 w-full h-full object-cover"
              onLoad={() => console.debug("Loaded:", item.src)}
              onError={(e) => {
                console.warn("Image failed:", item.src);
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            {/* لایهٔ تیرهٔ ملایم برای کنتراست متن */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.25))",
              }}
            />
            {/* لیبل وسط هر دایره */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "6px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 700,
                  lineHeight: 1.1,
                  textShadow: "0 1px 2px rgba(0,0,0,0.6)",
                  wordBreak: "break-word",
                }}
              >
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
