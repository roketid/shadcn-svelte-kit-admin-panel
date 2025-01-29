import { setLocale, setRoute } from "@/i18n";

export const load = async ({ data }) => {
  const { i18n } = data;
  const { locale, route } = i18n;

  await setRoute(route);
  await setLocale(locale);

  return i18n;
};