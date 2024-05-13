// @ts-ignore
import LogoBlack from "./extensions/logo-wongames-black.svg";
// @ts-ignore
import Icon from "./extensions/icon-wongames.svg";
// @ts-ignore
import favicon from "./extensions/favicon.png";

const config = {
  auth: { logo: LogoBlack },
  menu: { logo: Icon },
  tutorials: false,
  head: {
    favicon: favicon,
  },
  // theme: {
  //   light: {
  //     colors: {
  //       primary100: "#F2F2",
  //       primary200: "#F2F2",
  //       primary500: "#F2F2",
  //       primary600: "#F2F2",
  //       primary700: "#F2F2",
  //       danger700: "#F2F2",
  //     },
  //   },
  // },
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
