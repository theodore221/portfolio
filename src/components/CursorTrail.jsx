import { useEffect, useRef } from "react";

const COLORS = {
  tubes: [0xB53C0F, 0xE8541C, 0xF2865A],
  lights: { intensity: 155, colors: [0xC1431A, 0xE8541C, 0xF6A07A] },
};
const BG = 0x0C0907;

const isTouch = () =>
  typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
const isReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const CursorTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (isTouch() || isReducedMotion()) return;

    let cursor = null;
    let cancelled = false;
    let kickRaf = 0;

    const config = {
      bloom: { threshold: 0, strength: 1.5, radius: 0.5 },
      tubes: {
        colors: COLORS.tubes,
        lights: COLORS.lights,
        lerp: 0.65,
        minTubularSegments: 16,
        maxTubularSegments: 56,
      },
    };

    const init = async () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const [{ default: TubesCursor }, { Color, Euler }] = await Promise.all([
        import("threejs-components/build/cursors/tubes1.min.js"),
        import("three"),
      ]);
      if (cancelled) return;
      const result = TubesCursor(canvas, config);

      const scene = result.three.scene;
      scene.isScene = true;
      scene.type = "Scene";
      scene.background = new Color(BG);
      scene.environment = null;
      scene.fog = null;
      scene.backgroundBlurriness = 0;
      scene.backgroundIntensity = 1;
      scene.backgroundRotation = new Euler();
      scene.environmentIntensity = 1;
      scene.environmentRotation = new Euler();
      scene.overrideMaterial = null;

      cursor = result;

      // Kick the cursor library so tubes follow the mouse from launch
      // instead of waiting for the first real pointer event.
      const kick = () => {
        const x = Math.round(window.innerWidth / 2);
        const y = Math.round(window.innerHeight / 2);
        const evt = new PointerEvent("pointermove", {
          clientX: x,
          clientY: y,
          pointerType: "mouse",
          bubbles: true,
        });
        window.dispatchEvent(evt);
        document.dispatchEvent(evt);
      };
      kickRaf = requestAnimationFrame(() => {
        kick();
        kickRaf = requestAnimationFrame(kick);
      });
    };

    init();

    return () => {
      cancelled = true;
      if (kickRaf) cancelAnimationFrame(kickRaf);
      cursor?.dispose?.();
    };
  }, []);

  if (isTouch() || isReducedMotion()) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default CursorTrail;
