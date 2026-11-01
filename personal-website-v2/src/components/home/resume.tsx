"use client";
import { IconFileText, IconDownload } from "@tabler/icons-react";
import { SectionHeading, headingIconClass } from "@/components/layout/section-heading";

const RESUME_PATH = "/resume/Henry-ChiaChan-Ho-Resume.pdf";

export default function Resume() {
  return (
    <div className="flex flex-col">
      <SectionHeading icon={<IconFileText className={headingIconClass} />}>
        Resume
      </SectionHeading>

      <div className="flex justify-center sm:justify-end mb-4">
        <a
          href={RESUME_PATH}
          download
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <IconDownload className="h-4 w-4" />
          Download PDF
        </a>
      </div>

      <div className="overflow-hidden rounded-xl border bg-white">
        <object
          data={RESUME_PATH}
          type="application/pdf"
          className="h-[70vh] sm:h-[85vh] w-full"
        >
          <div className="p-8 text-center text-neutral-600">
            Your browser can&apos;t preview the PDF inline.{" "}
            <a href={RESUME_PATH} download className="text-blue-600 underline">
              Download it here
            </a>{" "}
            instead.
          </div>
        </object>
      </div>
    </div>
  );
}
