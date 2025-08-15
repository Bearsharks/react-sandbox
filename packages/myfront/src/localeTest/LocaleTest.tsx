import { useTranslation } from "react-i18next";

export function LocaleTest() {
  const { t, i18n } = useTranslation("tasks");

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleChangeLanguage("ko")}>한국어</button>
        <button onClick={() => handleChangeLanguage("en")}>English</button>
      </div>
      <div style={{ marginTop: "20px", fontSize: "24px" }}>{t("hello")}</div>
      <div style={{ marginTop: "10px", color: "#666" }}>
        Current language: {i18n.language}
      </div>
    </div>
  );
}
