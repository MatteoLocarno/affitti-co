
import { useEffect } from "react";

export default function GoogleTranslateWidget() {
  useEffect(() => {
    const addScript = () => {
      if (document.getElementById("google-translate-script")) return;
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    };
    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement({
        pageLanguage: "it",
        includedLanguages: "en,it,fr,de,es,ru,zh-CN,ar,pt,ja,pl,tr,uk,ro,cs,el,sv,hu,nl,fi,da,sk,bg,hr,lt,sl,et,lv,he,th,ko,hi,id,ms,vi,fa,ta,ur,ml,te,kn,gu,mr,pa,bn,si,sw,am,zu,af,eu,ca,gl,is,mt,ga,cy,lb,fo,nn,nb,rm,sa,sm,mi,qu,ay,gn,tk,uz,ky,tt,mn,lo,km,my,ne,ps,sd,so,ug,yi,yo,zu,ceb,haw,hmn,ig,jw,la,mg,mi,ny,st,su,tl,ts,uz,xh,yi,yo,zu",
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
      }, "google_translate_element");
    };
    addScript();
  }, []);

  return (
    <div style={{position: 'fixed', bottom: 24, right: 24, zIndex: 9999, background: 'rgba(255,255,255,0.95)', borderRadius: '12px', boxShadow: '0 2px 16px rgba(0,0,0,0.10)', padding: '8px 16px'}}>
      <div id="google_translate_element" />
    </div>
  );
} 