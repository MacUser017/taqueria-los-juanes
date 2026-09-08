export default function PlaceholderImage({ className = "" }: { className?: string }) {
  return (
    <div className={`flex h-64 w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-cocoa/30 bg-cocoa/5 text-cocoa/50 ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-10 w-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5V7.5A1.5 1.5 0 0 1 4.5 6h3l1.2-1.8A1.5 1.5 0 0 1 9.95 3.5h4.1a1.5 1.5 0 0 1 1.25.7L16.5 6h3A1.5 1.5 0 0 1 21 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16.5Z" />
        <circle cx="12" cy="12" r="3.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-sm font-medium">Photo coming soon</span>
    </div>
  );
}
