import { site } from '../../data/site'

/** Floating mobile quick-contact bar */
export default function FloatingContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/90 p-3 backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-3 gap-2">
        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-accent px-3 py-2.5 text-center text-xs font-semibold text-on-accent"
        >
          WhatsApp
        </a>
        <a
          href={site.callUrl}
          className="rounded-full border border-line px-3 py-2.5 text-center text-xs font-semibold text-ink"
        >
          Call
        </a>
        <a
          href={site.smsUrl}
          className="rounded-full border border-line px-3 py-2.5 text-center text-xs font-semibold text-ink"
        >
          SMS
        </a>
      </div>
    </div>
  )
}
