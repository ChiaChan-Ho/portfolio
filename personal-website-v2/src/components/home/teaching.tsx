"use client";
import { data } from "@/data/data";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionHeading, headingIconClass } from "@/components/layout/section-heading";
import { IconSchool } from "@tabler/icons-react";
import { SpotlightGlow } from "@/components/ui/spotlight-glow";

export default function Teaching() {
  return (
    <div className="flex flex-col">
      <SectionHeading icon={<IconSchool className={headingIconClass} />}>
        Teaching
      </SectionHeading>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {data.teaching.map((course, index) => (
          <BlurFade key={course.code} delay={0.1 + index * 0.05} direction="up" inView>
            <div className="group/glow relative overflow-hidden p-5 border rounded-xl bg-background transition-all duration-400 h-full flex flex-col">
              <SpotlightGlow />
              <h3 className="font-bold tracking-tight text-base text-primary">
                {course.title}
                <span className="mx-1 text-muted-foreground font-normal">
                  ({course.code})
                </span>
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">{course.terms}</p>
              <p className="mt-3 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{course.studentsTutored}</span>{" "}
                students tutored
              </p>
              <ul className="mt-3 flex-1 list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                {course.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
