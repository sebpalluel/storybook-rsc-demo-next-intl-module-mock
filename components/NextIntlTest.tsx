import { useTranslations } from "next-intl";

export function NextIntlTest() {
  const t = useTranslations("Index");
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("text-with-icl", {number:10})}</p>
    </div>
  );
}
