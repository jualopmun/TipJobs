import { useState } from "react";
import { i18nConfig } from "../config/i18nConfig";

type es = "es";

export function useI18n(language = 'es') {
    const [languageSelect, setlanguageSelect] = useState(language)

    return {
        i18n: i18nConfig['es'],
        setlanguageSelect
    }
}