import { useTranslation } from "react-i18next";

export function LocaleTest() {
  const { t } = useTranslation();

  return (
    <div style={{ marginTop: "20px", fontSize: "24px" }}>{t("hello")}</div>
  );
}
