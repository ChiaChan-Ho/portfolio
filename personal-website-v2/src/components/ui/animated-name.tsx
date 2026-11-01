"use client";

import { motion } from "motion/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const INITIAL_REVEAL_MS = 1100;
export const SWAP_REVEAL_MS = 600;
export const HOLD_MS = 5000;

// Each clip-path'd element creates its own stacking context, so the parent
// gradient masking doesn't reach inside. We apply the same gradient directly
// to the name so the cursive matches the sans text in both light and dark.
const GRADIENT_TEXT =
    "bg-gradient-to-b from-zinc-200 dark:from-zinc-50 to-zinc-950 dark:to-zinc-300 bg-clip-text text-transparent pb-[0.5em] -mb-[0.5em]";

const CLIP_REVEALED = "inset(0 0% 0 0)";
const CLIP_CLIPPED = "inset(0 100% 0 0)";

export type Phase = "initial" | "hold" | "exit" | "enter";
export type Suffix = "en" | "cc";

// The two spellings the hero swaps between — an English given name and a
// Chinese given name, matching how the name appears on the resume.
const NAMES: Record<Suffix, string> = {
    en: "Henry",
    cc: "Chia-Chan",
};

interface AnimatedNameProps {
    phase: Phase;
    suffix: Suffix;
    onExitComplete?: () => void;
    className?: string;
}

export function AnimatedName({
    phase,
    suffix,
    onExitComplete,
    className,
}: AnimatedNameProps) {
    // Pre-measured natural widths of each full name in the rendered
    // font/size. The slot animates between these (with 0 in the middle of
    // the swap), so surrounding text shifts via real CSS layout every frame.
    const enRef = useRef<HTMLSpanElement>(null);
    const ccRef = useRef<HTMLSpanElement>(null);
    const [widths, setWidths] = useState<{ en: number; cc: number } | null>(
        null,
    );

    useLayoutEffect(() => {
        const measure = () => {
            const en = enRef.current?.getBoundingClientRect().width;
            const cc = ccRef.current?.getBoundingClientRect().width;
            if (en && cc) setWidths({ en, cc });
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    // Re-measure once webfonts are ready: the first synchronous measure may
    // use a fallback metric until Pacifico loads.
    useEffect(() => {
        if (!document.fonts?.ready) return;
        document.fonts.ready.then(() => {
            const en = enRef.current?.getBoundingClientRect().width;
            const cc = ccRef.current?.getBoundingClientRect().width;
            if (en && cc) setWidths({ en, cc });
        });
    }, []);

    const measureClass = cn(
        "absolute left-[-9999px] top-0 invisible whitespace-pre pointer-events-none",
        className,
    );
    const measureSpans = (
        <>
            <span ref={enRef} aria-hidden="true" className={measureClass}>
                {NAMES.en}
            </span>
            <span ref={ccRef} aria-hidden="true" className={measureClass}>
                {NAMES.cc}
            </span>
        </>
    );

    if (phase === "initial") {
        return (
            <>
                <motion.span
                    initial={{ clipPath: CLIP_CLIPPED }}
                    animate={{ clipPath: CLIP_REVEALED }}
                    transition={{
                        duration: INITIAL_REVEAL_MS / 1000,
                        ease: [0.6, 0.05, 0.3, 1],
                    }}
                    className={cn("inline-block", GRADIENT_TEXT, className)}
                >
                    {NAMES.en}
                </motion.span>
                {measureSpans}
            </>
        );
    }

    // The slot's width carries the layout: from the current name's width
    // down to 0 on exit, back up from 0 to the new name's width on enter.
    // The inner motion.span's clip-path produces the visual wipe in exact
    // sync (same duration + easing + key, both mount together).
    const restWidth = widths?.[suffix];
    const slotInitial = phase === "enter" ? 0 : restWidth;
    const slotTarget = phase === "exit" ? 0 : restWidth;

    const innerInitialClip =
        phase === "enter" ? CLIP_CLIPPED : CLIP_REVEALED;
    const innerTargetClip =
        phase === "exit" ? CLIP_CLIPPED : CLIP_REVEALED;

    const slotMotionProps = widths
        ? {
              initial: { width: slotInitial },
              animate: { width: slotTarget },
          }
        : {};

    return (
        <span className={cn("inline-block", className)}>
            <motion.span
                key={phase}
                {...slotMotionProps}
                transition={{
                    duration: SWAP_REVEAL_MS / 1000,
                    ease: "easeInOut",
                }}
                onAnimationComplete={() => {
                    if (phase === "exit") onExitComplete?.();
                }}
                style={{
                    display: "inline-block",
                    verticalAlign: "baseline",
                    whiteSpace: "pre",
                }}
            >
                <motion.span
                    initial={{ clipPath: innerInitialClip }}
                    animate={{ clipPath: innerTargetClip }}
                    transition={{
                        duration: SWAP_REVEAL_MS / 1000,
                        ease: "easeInOut",
                    }}
                    style={{ display: "inline-block" }}
                    className={GRADIENT_TEXT}
                >
                    {NAMES[suffix]}
                </motion.span>
            </motion.span>
            {measureSpans}
        </span>
    );
}
