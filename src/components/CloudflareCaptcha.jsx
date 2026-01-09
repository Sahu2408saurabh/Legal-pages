import { useEffect, useRef } from "react";

const CloudflareCaptcha = ({ onVerify }) => {
  const captchaRef = useRef(null);

  useEffect(() => {
    if (!window.turnstile) return;

    window.turnstile.render(captchaRef.current, {
      sitekey: "0x4AAAAAACLc-mMUWGp7vKjo",
      callback: (token) => {
        onVerify(token);
      },
    });
  }, [onVerify]);

  return <div ref={captchaRef}></div>;
};

export default CloudflareCaptcha;
