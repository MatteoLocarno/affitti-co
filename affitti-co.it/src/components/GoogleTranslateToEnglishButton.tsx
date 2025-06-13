import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

function GoogleTranslateToEnglishButton() {
  useEffect(() => {
    if (document.getElementById("google-translate-script")) return;
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);
    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement({
        pageLanguage: "it",
        includedLanguages: "en",
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
      }, "hidden_google_translate_element");
    };
  }, []);

  const translateToEnglish = () => {
    const select = document.querySelector("select.goog-te-combo") as HTMLSelectElement | null;
    if (select) {
      select.value = "en";
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <>
      <div id="hidden_google_translate_element" style={{ display: "none" }} />
      <button
        onClick={translateToEnglish}
        style={{
          position: "static",
          background: "#2b2361",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "8px 14px",
          fontWeight: "bold",
          fontSize: "15px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          cursor: "pointer",
          letterSpacing: '0.5px',
          marginLeft: '8px',
          transition: 'background 0.2s',
        }}
        className="hover:bg-[#cebd6d] hover:text-[#2b2361] transition-colors"
      >
        IT | EN
      </button>
    </>
  );
}

export default GoogleTranslateToEnglishButton; 