import Image from "next/image";
import type { Sponsor } from "@/types/sponsor";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.07-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm0 18a8 8 0 0 1-4.07-1.11l-.29-.17-3 .79.8-2.92-.19-.3A8 8 0 1 1 12 20Zm4.39-5.61c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.17-.7-.62-1.18-1.39-1.32-1.63-.14-.24-.01-.37.11-.49.12-.12.27-.31.4-.46.13-.16.18-.27.27-.45.09-.18.04-.33-.04-.45-.08-.12-.5-1.2-.68-1.65-.18-.43-.37-.37-.51-.38-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.65.31-.23.25-.87.85-.87 2.06s.89 2.39 1.02 2.56c.13.16 1.74 2.66 4.23 3.62 2.49.96 2.49.64 2.94.6.45-.04 1.43-.58 1.63-1.15.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.22-2.43.47-.66.26-1.22.6-1.77 1.15-.55.55-.89 1.11-1.15 1.77-.25.64-.42 1.37-.47 2.43C2.01 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.06.22 1.79.47 2.43.26.66.6 1.22 1.15 1.77.55.55 1.11.89 1.77 1.15.64.25 1.37.42 2.43.47C8.94 21.99 9.28 22 12 22s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.47.66-.26 1.22-.6 1.77-1.15.55-.55.89-1.11 1.15-1.77.25-.64.42-1.37.47-2.43.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.79-.47-2.43a4.9 4.9 0 0 0-1.15-1.77 4.9 4.9 0 0 0-1.77-1.15c-.64-.25-1.37-.42-2.43-.47C15.06 2.01 14.72 2 12 2Zm0 1.8c2.67 0 2.99.01 4.04.06.97.04 1.5.2 1.85.34.46.18.79.4 1.14.74.34.35.56.68.74 1.14.14.35.3.88.34 1.85.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.97-.2 1.5-.34 1.85-.18.46-.4.79-.74 1.14-.35.34-.68.56-1.14.74-.35.14-.88.3-1.85.34-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.97-.04-1.5-.2-1.85-.34a3.1 3.1 0 0 1-1.14-.74 3.1 3.1 0 0 1-.74-1.14c-.14-.35-.3-.88-.34-1.85-.05-1.05-.06-1.37-.06-4.04s.01-2.99.06-4.04c.04-.97.2-1.5.34-1.85.18-.46.4-.79.74-1.14.35-.34.68-.56 1.14-.74.35-.14.88-.3 1.85-.34C9.01 3.81 9.33 3.8 12 3.8Zm0 3.07a5.13 5.13 0 1 0 0 10.26 5.13 5.13 0 0 0 0-10.26Zm0 8.46a3.33 3.33 0 1 1 0-6.66 3.33 3.33 0 0 1 0 6.66Zm6.54-8.66a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
    </svg>
  );
}

export default function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-zinc-200 bg-white shadow-sm">
      <div className="flex flex-1 items-center justify-between gap-4 p-4">
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-zinc-900">{sponsor.name}</h3>
          <div className="flex gap-3">
            <a
              href={`https://wa.me/${sponsor.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp de ${sponsor.name}`}
              className="text-zinc-500 transition-colors hover:text-green-600"
            >
              <WhatsAppIcon />
            </a>
            <a
              href={`https://instagram.com/${sponsor.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram de ${sponsor.name}`}
              className="text-zinc-500 transition-colors hover:text-pink-600"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          width={200}
          height={200}
          className="shrink-0 rounded-lg object-cover"
        />
      </div>
      {sponsor.discount && (
        <div className="rounded-b-xl border-t border-zinc-100 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-800">
          🎁 {sponsor.discount}
        </div>
      )}
    </div>
  );
}
