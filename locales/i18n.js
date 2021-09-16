import I18n from "react-native-i18n";
import en from "./en/en";
import ar from "./ar/ar";
import { Platform, I18nManager } from "react-native";
import RNRestart from "react-native-restart";
import { LanguageDirectionContext } from "../context/context";
import { useContext } from "react";

import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

I18n.fallbacks = true;
I18n.defaultLocale = "en";
I18n.locale = I18nManager.isRTL ? "ar" : "en";
I18n.translations = {
  en,
  ar,
};

console.log("loclae " + I18nManager.isRTL);
export const Trans = () => {
  const { direction, setDirection } = useContext(LanguageDirectionContext);
  const [loc, setLocal] = useState("");

  const changeLaguage = (languageKey) => {
    I18n.locale = languageKey;
    setLocal(languageKey);
    languageKey === "en"
      ? I18nManager.forceRTL(false)
      : I18nManager.forceRTL(true);

    setDirection(languageKey);
    console.log(languageKey);
  };

  useEffect(() => {
    loc === "en"
    ? I18nManager.forceRTL(false)
    : I18nManager.forceRTL(true);
  }, [loc]);

  return (
    <Button
      onPress={() => {
        const current = I18n.locale === "en" ? "ar" : "en";
        changeLaguage(current);
      }}
    >
      {I18n.locale === "en" ? "عربي" : "EN"}
    </Button>
  );
};

export default I18n;
