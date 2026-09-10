/* Real brand marks. Most come from the simple-icons package (CC0). A few
   aren't in the installed version (OpenAI, VS Code) or aren't a good fit
   there (Express's simple-icons mark renders too faint at tile size; CSS3
   is a spec badge, not a "brand", so simple-icons doesn't carry it) — for
   those, path data pulled from simple-icons' latest release or the
   devicon set (verified by each source SVG) is inlined by hand instead.
   Official colour per each brand's own guidelines. */
import {
  siReact,
  siNodedotjs,
  siMongodb,
  siMongoose,
  siGithub,
  siHtml5,
  siBootstrap,
  siJavascript,
  siTailwindcss,
  siClaude,
  siPostman,
  siVercel,
  siRender
} from "simple-icons";

const brand = (icon) => (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...props}>
    <path d={icon.path} fill={`#${icon.hex}`} />
  </svg>
);

/* not shipped by the installed simple-icons version */
const siOpenai = {
  hex: "000000",
  path: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
};
const siVisualstudiocode = {
  hex: "007ACC",
  path: "M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"
};
/* devicon's mark (24x24) — simple-icons' Express glyph reads as a faint
   sliver at tile size, this one stays legible small */
const deviconExpress = {
  hex: "000000",
  path: "M23.75 18.457c-.855.218-1.384.01-1.858-.703-1.065-1.596-2.24-3.12-3.377-4.671-.146-.2-.298-.398-.487-.647-1.23 1.667-2.444 3.28-3.628 4.916-.45.642-.923.92-1.762.694l4.998-6.774-4.67-6.25c.807-.157 1.365-.076 1.86.647 1.093 1.598 2.297 3.12 3.5 4.726 1.208-1.601 2.398-3.124 3.523-4.705.452-.641.938-.884 1.75-.648-.616.815-1.216 1.618-1.822 2.415-.816 1.074-1.62 2.16-2.465 3.21-.302.376-.253.618.017.972 1.548 2.043 3.073 4.107 4.646 6.216M0 12.53c.135-.676.223-1.365.412-2.026C1.535 6.518 6.31 4.91 9.652 6.88c2.08 1.222 2.812 3.199 2.708 5.556H1.33c-.157 4.163 2.838 6.677 6.66 5.395 1.34-.448 2.13-1.502 2.523-2.816.192-.658.53-.76 1.15-.573-.317 1.64-1.033 3.013-2.533 3.87-2.242 1.285-5.454.868-7.14-.916C.75 16.116.335 14.5.17 12.813c-.012-.122-.086-.238-.13-.357-.014-.573-.014-1.146 0-1.72m1.35-.007h9.44c-.062-3.007-1.933-5.144-4.492-5.164-2.804-.022-4.826 2.062-4.948 5.164z"
};
const deviconCss3 = {
  viewBox: "0 0 128 128",
  paths: [
    { fill: "#1572B6", d: "M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z" },
    { fill: "#33A9DC", d: "M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z" },
    { fill: "#fff", d: "M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z" },
    { fill: "#EBEBEB", d: "M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z" },
    { fill: "#fff", d: "M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z" },
    { fill: "#EBEBEB", d: "M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z" }
  ]
};

export const ReactBrand = brand(siReact);
export const NodeBrand = brand(siNodedotjs);
export const ExpressBrand = brand(deviconExpress);
export const MongoBrand = brand(siMongodb);
export const MongooseBrand = brand(siMongoose);
export const GitHubBrand = brand(siGithub);
export const Html5Brand = brand(siHtml5);
export const BootstrapBrand = brand(siBootstrap);
export const JsBrand = brand(siJavascript);
export const TailwindBrand = brand(siTailwindcss);
export const ClaudeBrand = brand(siClaude);
export const PostmanBrand = brand(siPostman);
export const VercelBrand = brand(siVercel);
export const RenderBrand = brand(siRender);
export const OpenAiBrand = brand(siOpenai);
export const VscodeBrand = brand(siVisualstudiocode);

export const Css3Badge = (props) => (
  <svg viewBox={deviconCss3.viewBox} width="1em" height="1em" aria-hidden="true" {...props}>
    {deviconCss3.paths.map((p, i) => (
      <path key={i} d={p.d} fill={p.fill} />
    ))}
  </svg>
);
