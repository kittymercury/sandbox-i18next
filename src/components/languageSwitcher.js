import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  function clickMenu() {
    const $menu = document.getElementById('language-switcher');

    $menu.classList.toggle('is-active');
  }

  function changeLanguage(e) {

  }

  return (
    <div className="select is-warning">
      <select
        value={i18n.language}
        onChange={(e) =>
          i18n.changeLanguage(e.target.value)
        }
      >
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  );
}
