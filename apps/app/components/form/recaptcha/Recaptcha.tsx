import React, { forwardRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaSiteKey = "6LeKXh4bAAAAAGHSeTQ_DIRsohDxUV1N78mR3LW5";

interface Props {
  onChange: (data: any) => void;
}

function Recaptcha({ onChange }: Props, ref: any) {
  return (
    <ReCAPTCHA
      hl="fr"
      ref={ref}
      sitekey={recaptchaSiteKey}
      onChange={onChange}
    />
  );
}

export default forwardRef(Recaptcha);
