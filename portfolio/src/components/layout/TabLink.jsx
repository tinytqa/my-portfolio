"use client";

/**
 * Link between the navbar tabs. Every tab route renders the same TabView, so switching only
 * needs the URL to change: history.pushState updates usePathname without a server round trip.
 */
export default function TabLink({ href, onClick, children, ...props }) {
  const handleClick = (event) => {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (window.location.pathname !== href) window.history.pushState(null, "", href);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
