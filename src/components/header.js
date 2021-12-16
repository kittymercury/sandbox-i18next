import React from "react";
import { useTranslation } from "react-i18next";

export default function Header () {
  const { t } = useTranslation();

  return (
    <div className="header">
      <h1 className="title">{t("date", { today: new Date() })}</h1>
    </div>
  );
}
