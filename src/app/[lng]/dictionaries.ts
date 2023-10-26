const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ko: () => import("./dictionaries/ko.json").then((module) => module.default),
};

function getLocaleDictionaries(locale: string) {
  if (locale === "en") {
    return dictionaries.en();
  } else if (locale === "ko") {
    return dictionaries.ko();
  } else {
    return dictionaries.ko();
  }
}

export const getDictionary = async (locale: string) =>
  getLocaleDictionaries(locale);
