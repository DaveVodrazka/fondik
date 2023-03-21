# Fondik

Tento projekt generuje script, který obstarává reklamu na webu [www.fondik.cz](https://www.fondik.cz/).

## Vývoj

Pro práci s tímto projektem je potřeba [Nodejs](https://nodejs.org/en) a [NPM](https://www.npmjs.com/package/npm) - NPM by mělo být automaticky nainstalováno při instalaci Nodejs.

Kód je psaný v TypeScriptu a rozdělený na jednotlivé moduly, je proto potřeba vytvořit [bundle](https://nextjs.org/learn/foundations/how-nextjs-works/bundling) a ten vložit do produkčního prostředí.

Poprvé je potřeba nainstalovat závislé balíčky pomocí příkazu

```
npm install
```

Po provedení změn je třeba vytvořit updatovanou verzi JS bundlu příkazem

```
npm run build
```

Tento příkaz vytvoří JS soubor ve složce _dist_: `/dist/main.js`. Toto je výsledný produkční kód, který je třeba vložit do stránky.

## Výdej

Momentálně je kód servírován přes [JSDelivr](https://www.jsdelivr.com/), ale možností jak jej vložit do stránky je samozřejmě mnoho. JSDelivr umožňuje jednoduché hostování zdarma pro soubory ve veřejných Github projektech, což tento projekt splňuje (proto je potřeba bundlený kód commitovat a držet jej v Gitu).

Pro verzování kódu se používají [Github releases](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) a na stránce se pak aktualizuje nová verze, URL pro verzi `1.5.0` vypadá takto:

```
https://cdn.jsdelivr.net/gh/DaveVodrazka/fondik@v1.5.0/dist/main.js
```

Pokud se nechcete zatěžovat verzováním jednotlivých releasů, pak je možné vždy servírovat `master` verzi přes tuto URL:

```
https://cdn.jsdelivr.net/gh/DaveVodrazka/fondik/dist/main.js
```

## Funkcionalita

Tento projekt zastřešuje řadu funkcionalit:

#### Obecné moduly

Modul pro vykreslování reklam `src/ads/AdsManager.ts` - hlavní význam toho jak je navržený, je vložení reklamního kódu do stránky a po jeho stažení vykreslení reklamy. Takto je možné vkládat v různých situacích reklamy od různých DSP, ale vždy stahovat reklamní kód pouze toho DSP, které je právě využíváno.

Modul _StickySky_ - `src/StickySky/index.ts` - tento modul zajišťuje to, že se reklamní formát _Skyscraper_ posouvá když uživatel scrolluje (pouze desktop).

#### Seznam reklama

Pokud jsou některé články zařazeny v [Seznam Newsfeed](https://partner.seznam.cz/seznam-newsfeed/), je potřeba vyhodnotit pomocí UTM, zda uživatel přišel ze Seznamu a pokud ano, tak je potřeba toto UTM držet po celou návštěvu.

Práci s UTM zastřešuje modul `src/utils/persistentUtm.js`.

Vkládání Seznam reklamy zastřešuje modul `src/ads/SeznamAds.ts`.

Seznam využívá speciální formát zvaný _Branding_, který orámovává celou stránku (pouze na desktopu), aby bylo možné tento formát vykreslit je třeba výrazně upravit formát webu. O tuto úpravu se stará modul `src/ads/utils/seznam.ts`.

#### GoogleAds reklama

Řešená obdobně jako Seznam reklama pomocí modulu `src/ads/GoogleAds.ts`.

#### AdSense reklama

Řešená obdobně jako GoogleAds reklama pomocí modulu `src/ads/AdSense.ts`.

#### Ads.txt

Pro výdej reklamy je zásadní soubor `ads.txt`, tento soubor je také v tomto repozitáři a je možné jej servírovat přes JSDelivr stejně jako script `main.js`, master verze je přístupná na tomto URL:

```
https://cdn.jsdelivr.net/gh/DaveVodrazka/fondik/dist/ads.txt
```
