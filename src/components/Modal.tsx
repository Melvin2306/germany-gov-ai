"use client";

export function Modal({
  onClose,
  children,
  wide = false,
  dismissable = true,
}: {
  onClose?: () => void;
  children: React.ReactNode;
  wide?: boolean;
  dismissable?: boolean;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-3 backdrop-blur-[2px] sm:p-6"
      onClick={() => dismissable && onClose?.()}
    >
      <div
        className={`animate-fade-up relative max-h-[90vh] w-full overflow-y-auto rounded-[28px] bg-white p-6 shadow-2xl sm:p-8 ${wide ? "max-w-2xl" : "max-w-lg"}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal
      >
        {dismissable && onClose && (
          <button
            onClick={onClose}
            aria-label="Schließen"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
          >
            ✕
          </button>
        )}
        {children}
      </div>
    </div>
  );
}
