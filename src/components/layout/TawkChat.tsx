import Script from "next/script";

// Tawk.to live chat widget — loaded on every page, bottom-right bubble.
export function TawkChat() {
  return (
    <Script id="tawk-to">
      {`
        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
        (function () {
          var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
          s1.async = true;
          s1.src = 'https://embed.tawk.to/673991804304e3196ae3ce86/1icse0np9';
          s1.charset = 'UTF-8';
          s1.setAttribute('crossorigin', '*');
          s0.parentNode.insertBefore(s1, s0);
        })();
      `}
    </Script>
  );
}
