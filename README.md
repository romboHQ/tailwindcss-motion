# ✨ [tailwindcss-motion](https://rombo.co/tailwind/) ✨

[![NPM Version](https://img.shields.io/npm/v/tailwindcss-motion?color=F3FC6F)](https://www.npmjs.com/package/tailwindcss-motion)
[![NPM Downloads](https://img.shields.io/npm/dw/tailwindcss-motion?color=F3FC6F)](https://www.npmjs.com/package/tailwindcss-motion)

tailwindcss-motion is a Tailwind CSS Plugin made at [RomboHQ](https://rombo.co/).
It’s a simple, yet powerful, animation library with a simple syntax.

_Motion, without commotion._

## ⚒️ Installation

**1. Install npm package**

```bash
npm i -D tailwindcss-motion
```

**2. Add into your tailwind.config.js**

```js
// tailwind.config.js

export default {
     content: [...],
     theme: {
        extend: {...},
     },
     plugins: [require('tailwindcss-motion')],
};
```

**or,** to use ESM:

```js
import tailwindcssMotion from "tailwindcss-motion";

/** @type {import('tailwindcss').Config} */
export default {
     content: [...],
     theme: {
          extend: {},
     },
     plugins: [tailwindcssMotion],
};
```

## 📝 TypeScript Support

The plugin includes TypeScript definitions out of the box. Theme customizations and plugin configuration are fully typed:

```ts
import type { Config } from "tailwindcss";
import motion from "tailwindcss-motion";

const config: Config = {
  theme: {
    extend: {
      motionScale: {
        "200": "200%",
      },
      motionTimingFunction: {
        custom: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [motion],
};
```

## How does it work?

We provide a simple syntax to animate any element in your Tailwind project. Instead of defining custom keyframes, we provide utility classes to animate every dimension, inline.

For example, for a slide and fade effect — you simply need `motion-translate-x-in-25 motion-opacity-in-0` or, you can use one of our presets with `motion-preset-fade`

## Documentation

For full documentation, visit [docs.rombo.co/tailwind](https://docs.rombo.co/tailwind)

## 🧩 Introducing the Chrome Extension

Take your animations to the next level with the [Rombo Chrome Extension](https://rombo.co/extension/)!

Create animations visually:

- Use our intuitive animator directly in your browser.
- Loop animations
- Save presets: Keep your animations organized and reusable.
- Export options: Output animations as Tailwind classes, pure CSS, or Framer Motion code.

![extension](https://github.com/user-attachments/assets/68a751f7-00a5-449e-a92d-f5499d3b9152)

## Examples

Landing page - https://play.tailwindcss.com/uAuVF8F1vC

![example-1](https://github.com/user-attachments/assets/c847e7ee-f5b6-4620-afdc-2f8b037c36fd)

Chat dialog - https://play.tailwindcss.com/gjGqEKswjQ

![example-2](https://github.com/user-attachments/assets/f11fbe59-7902-4d73-ab13-0e20ca7cc21b)

Low Battery Dynamic Island - https://play.tailwindcss.com/tvYFbHtNNQ

![example-3](https://github.com/user-attachments/assets/5f1e67d7-5f93-46d5-badb-ab1d3d526efc)

Apple Color Swatches - https://play.tailwindcss.com/cvQ3Nk3v8j

![example-4](https://github.com/user-attachments/assets/887fba04-9642-4a4f-8ace-7375a4aa65b6)

Rombo Loop - https://play.tailwindcss.com/MLdegkb9Wq

![example-5](https://github.com/user-attachments/assets/7138fb7a-d622-4590-92b5-6682806797e0)

Emoji Animations - https://play.tailwindcss.com/86s55I4wmC

![example-6](https://github.com/user-attachments/assets/3143dc8c-99c1-4df7-8709-a52b67d2824a)

## What's Rombo?

Rombo is an early-stage company, building tools to help companies build beautiful interactive interfaces. We're starting out with a toolkit for engineers, designers and creative marketers to animate natively inside common Workflows — like Tailwind, Figma, Webflow, Shopify & more to come!

## More Resources

- [Bringing Motion to Tailwind CSS: Building an animation plugin at Rombo](https://www.kvin.me/posts/tailwind-motion) - Blog post about the creation of this library
- [Animator Builder](https://rombo.co/tailwind/#animator) - Create animations intuitively and export them to Tailwind classes
- [UnoCSS port](https://github.com/whatnickcodes/unocss-preset-tailwindcss-motion) - Port created by [@whatnickcodes](https://github.com/whatnickcodes)


## 🌐 Web Resources & Interactive Index
- [STICKMAN ARCHER SHOOTING ARROWS AT REDS](https://eduquestsjp.pages.dev/stickman-archer-shooting-arrows-at-reds.html)
- [CAKE LINK MASTER](https://eduquests.netlify.app/cake-link-master.html)
- [FROM ZOMBIE TO GLAM A SPOOKY TRANSFORMATION](https://eduquestses.pages.dev/from-zombie-to-glam-a-spooky-transformation.html)
- [TAP AWAY](https://brainquests.pages.dev/tap-away.html)
- [ROMANTIC K POP TRANSFORMATION](https://learnaction.github.io/romantic-k-pop-transformation.html)
- [PRINXY HOUSE OF FASHION](https://eduquestsfr.pages.dev/prinxy-house-of-fashion.html)
- [WHAT S THE DIFFERENCE ONLINE](https://learnaction.github.io/what-s-the-difference-online.html)
- [CATEGORY RACING DRIVING 2](https://eduquestspt.pages.dev/category-racing-driving-2.html)
- [INDEX8](https://welearnaction.onrender.com/index8.html)
- [SID GINNY Y2K GLAM CLASH](https://learnaction.netlify.app/sid-ginny-y2k-glam-clash.html)
- [CATEGORY FLASH 3](https://eduquestsfr.pages.dev/category-flash-3.html)
- [ITALIAN ANIMAL ALCHEMY BRAINROT](https://learnaction.github.io/italian-animal-alchemy-brainrot.html)
- [MY COTTAGECORE AESTHETIC LOOK](https://eduquests.netlify.app/my-cottagecore-aesthetic-look.html)
- [MY DREAMY FLORA FASHION LOOK](https://eduquests.pages.dev/my-dreamy-flora-fashion-look.html)
- [RUN FROM BABA YAGA](https://eduquestsfr.pages.dev/run-from-baba-yaga.html)
- [MERGE PIXEL](https://eduquestsfr.pages.dev/merge-pixel.html)
- [FAST LAP](https://brainquests.pages.dev/fast-lap.html)
- [MEGA ESCAPE CAR PARKING PUZZLE](https://ieduquests.web.app/mega-escape-car-parking-puzzle.html)
- [LITTLE BUGS](https://learnaction.netlify.app/little-bugs.html)
- [SPIDER ROPE HERO CITY FIGHT](https://eduquestsfr.pages.dev/spider-rope-hero-city-fight.html)
- [CATEGORY GROW99](https://eduquests.onrender.com/category-grow99.html)
- [PIN PUZZLE SAVE THE SHEEP](https://eduquestkr.pages.dev/pin-puzzle-save-the-sheep.html)
- [CATEGORY DEFENSE176](https://eduquestspt.pages.dev/category-defense176.html)
- [RAINBOW BALLS 2048](https://learnaction.netlify.app/rainbow-balls-2048.html)
- [AXE THROW](https://learnaction.github.io/axe-throw.html)
- [UNDERWATER SURVIVAL](https://learnaction.netlify.app/underwater-survival.html)
- [COLOR BLOCK JAM 2](https://learnaction.github.io/color-block-jam-2.html)
- [SHOOT AND DRIVE](https://eduquestsfr.pages.dev/shoot-and-drive.html)
- [DIY MAKEUP SALON SPA MAKEOVER STUDIO](https://learnaction.netlify.app/diy-makeup-salon-spa-makeover-studio.html)
- [INDEX21](https://eduquests.github.io/index21.html)
- [STOCKINGS DILEMMA](https://eduquestspt.pages.dev/stockings-dilemma.html)
- [ELYTRA FLIGHT](https://brainquests.pages.dev/elytra-flight.html)
- [PUZZLE BLOCKS](https://brainquests.pages.dev/puzzle-blocks.html)
- [MR THROW](https://learnaction.netlify.app/mr-throw.html)
- [LEMONADE TYCOON IDLE](https://eduquestsfr.pages.dev/lemonade-tycoon-idle.html)
- [PIXEL FLOW](https://learnaction.netlify.app/pixel-flow.html)
- [CATEGORY AIRPLANE29](https://eduquests.github.io/category-airplane29.html)
- [TAXI DRIVER SIMULATOR](https://eduquestspt.pages.dev/taxi-driver-simulator.html)
- [CUNNING GINGER](https://eduquestspt.pages.dev/cunning-ginger.html)
- [UNICORN FIND THE DIFFERENCES](https://learnaction.netlify.app/unicorn-find-the-differences.html)
- [PIZZA MAKER COOKING GAMES FOR KIDS](https://eduquests.pages.dev/pizza-maker-cooking-games-for-kids.html)
- [ARROW SHIFT LOGIC TREE](https://ieduquests.web.app/arrow-shift-logic-tree.html)
- [MATCH COLLECTION](https://eduquests.pages.dev/match-collection.html)
- [TWISTED ROPE](https://learnaction.github.io/twisted-rope.html)
- [HORSE CHAMPS](https://learnaction.netlify.app/horse-champs.html)
- [TINY GOLF KING](https://ieduquests.web.app/tiny-golf-king.html)
- [FISHING BEAR](https://eduquestsfr.pages.dev/fishing-bear.html)
- [ELLIE AND BEN CHRISTMAS EVE](https://learnaction.netlify.app/ellie-and-ben-christmas-eve.html)
- [THE LOST CITY MATCH 3](https://eduquests.onrender.com/the-lost-city-match-3.html)
- [DINOSAUR SHIFTING RUN](https://eduquests.pages.dev/dinosaur-shifting-run.html)
- [FNF 2 PLAYER](https://eduquestsfr.pages.dev/fnf-2-player.html)
- [BLOCK BREAKER](https://eduquestses.pages.dev/block-breaker.html)
- [BFFS K POP FANGIRLS](https://eduquests.netlify.app/bffs-k-pop-fangirls.html)
- [CATEGORY PARTY23](https://welearnaction.onrender.com/category-party23.html)
- [HEXA SORT WINTER EDITION](https://eduquestsfr.pages.dev/hexa-sort-winter-edition.html)
- [CATEGORY FASHION](https://eduquests.pages.dev/category-fashion.html)
- [MOJICON SPRING CONNECT](https://learnaction.netlify.app/mojicon-spring-connect.html)
- [UNICORN FIND THE DIFFERENCES](https://eduquests.onrender.com/unicorn-find-the-differences.html)
- [PIZZA PUZZLE](https://ieduquests.web.app/pizza-puzzle.html)
- [CATEGORY BIKE 2](https://eduquestspt.pages.dev/category-bike-2.html)
- [HIGH SPEED CRAZY BIKE](https://eduquestsfr.pages.dev/high-speed-crazy-bike.html)
- [STELLAR STYLE SPECTACLE FASHION](https://welearnaction.onrender.com/stellar-style-spectacle-fashion.html)
- [CATEGORY BASKETBALL 3](https://brainquests.pages.dev/category-basketball-3.html)
- [TILE MATCH CAFE](https://eduquestspt.pages.dev/tile-match-cafe.html)
- [TAP 3D BLOCKS](https://brainquests.pages.dev/tap-3d-blocks.html)
- [HOSPITAL INC](https://eduquestses.pages.dev/hospital-inc.html)
- [BLOCKSSS](https://brainquests.pages.dev/blocksss.html)
- [SNAKE PUZZLE ESCAPE](https://welearnaction.onrender.com/snake-puzzle-escape.html)
- [RICH CHOICE RUN](https://eduquests.onrender.com/rich-choice-run.html)
- [CATEGORY CAN T STOP PLAYING212](https://eduquestkr.pages.dev/category-can-t-stop-playing212.html)
- [BOTTLE CHALLENGE](https://welearnaction.onrender.com/bottle-challenge.html)
- [CATEGORY SIMULATION 4](https://eduquestspt.pages.dev/category-simulation-4.html)
- [MAHJONG CRIMES PUZZLE STORY](https://learnaction.netlify.app/mahjong-crimes-puzzle-story.html)
- [CATEGORY ESCAPE](https://eduquests.pages.dev/category-escape.html)
- [FLAPPY RUSH](https://eduquestsfr.pages.dev/flappy-rush.html)
- [PLANET EVOLUTION IDLE CLICKER](https://eduquestsfr.pages.dev/planet-evolution-idle-clicker.html)
- [MY LITTLE CAR WASH](https://eduquestspt.pages.dev/my-little-car-wash.html)
- [TRAFFIC PARKING](https://eduquestsfr.pages.dev/traffic-parking.html)
- [GORILLA ADVENTURE](https://eduquestses.pages.dev/gorilla-adventure.html)
- [KIDS SUPERMARKET](https://eduquestspt.pages.dev/kids-supermarket.html)
- [TOILET PIN](https://learnaction.netlify.app/toilet-pin.html)
- [WATERMELON MERGE](https://eduquestsfr.pages.dev/watermelon-merge.html)
- [POTION MERGE WITCH](https://eduquests.github.io/potion-merge-witch.html)
- [CATEGORY CASUAL 5](https://eduquestspt.pages.dev/category-casual-5.html)
- [GOING BALLS 3D](https://learnaction.netlify.app/going-balls-3d.html)
- [ROYAL GARDEN MATCH 2](https://ieduquests.web.app/royal-garden-match-2.html)
- [GRANNY 2 ASYLUM HORROR HOUSE](https://eduquests.onrender.com/granny-2-asylum-horror-house.html)
- [PANDA RESTAURANT](https://eduquests.netlify.app/panda-restaurant.html)
- [BR BR PATAPIM OBBY CHALLENGE](https://eduquests.onrender.com/br-br-patapim-obby-challenge.html)
- [STOP THE BULLET](https://brainquests.pages.dev/stop-the-bullet.html)
- [TWO BLOCKS](https://ieduquests.web.app/two-blocks.html)
- [TAP OUT PUZZLE](https://learnaction.netlify.app/tap-out-puzzle.html)
- [CHROMA TOWER](https://eduquests.onrender.com/chroma-tower.html)
- [2020 CONNECT](https://eduquestspt.pages.dev/2020-connect.html)
- [SPEEDRUN PLATFORMER](https://eduquestsfr.pages.dev/speedrun-platformer.html)
- [OFFICE PYRAMID SOLITAIRE](https://eduquestses.pages.dev/office-pyramid-solitaire.html)
- [BRAINROT ICE TRUCK](https://brainquests.pages.dev/brainrot-ice-truck.html)
- [MUSHROOM BLOCKS](https://eduquestses.pages.dev/mushroom-blocks.html)
- [GOAL RUSH](https://brainquests.pages.dev/goal-rush.html)
- [FIRE BALL AND WATER BALL PARKOUR LOVE BALLS](https://eduquests.pages.dev/fire-ball-and-water-ball-parkour-love-balls.html)
- [LIMITED DEFENSE](https://eduquestspt.pages.dev/limited-defense.html)
- [THREE CHICKENS](https://ieduquests.web.app/three-chickens.html)
- [WACKY WHEELS](https://learnaction.netlify.app/wacky-wheels.html)
- [CATEGORY SIMULATION 3](https://eduquestspt.pages.dev/category-simulation-3.html)
- [CATEGORY FREE RAGDOLL GAMES](https://eduquestspt.pages.dev/category-free-ragdoll-games.html)
- [YARN FEVER UNRAVEL PUZZLE](https://eduquestsfr.pages.dev/yarn-fever-unravel-puzzle.html)
- [FLYING BILL](https://welearnaction.onrender.com/flying-bill.html)
- [ITALIAN BRAINROT PUZZLE](https://ieduquests.web.app/italian-brainrot-puzzle.html)
- [SLINGSHOT CHICKEN](https://brainquests.pages.dev/slingshot-chicken.html)
- [UFO IO ARMADA](https://eduquestsfr.pages.dev/ufo-io-armada.html)
- [SURVIVE LAVA FOR BRAINROTS](https://eduquests.github.io/survive-lava-for-brainrots.html)
- [SITEMAP](https://brainquests.pages.dev/sitemap.html)
- [GENFIRE](https://eduquestsfr.pages.dev/genfire.html)
- [FARM MERGE HARVEST](https://eduquests.github.io/farm-merge-harvest.html)
- [CATEGORY ARCHERY](https://ieduquests.web.app/category-archery.html)
- [FIGHTER STICK HERO](https://welearnaction.onrender.com/fighter-stick-hero.html)
- [BEAT BLADER 3D](https://eduquests.pages.dev/beat-blader-3d.html)
- [CATEGORY ART](https://ieduquests.web.app/category-art.html)
- [CATEGORY TRAIN YOUR BRAIN24](https://brainquests.pages.dev/category-train-your-brain24.html)
- [FRUITE SWIPE](https://ieduquests.web.app/fruite-swipe.html)
- [CATEGORY LISTS](https://eduquestkr.pages.dev/category-lists.html)
- [LINKLINK](https://eduquests.pages.dev/linklink.html)
- [WINTER MAHJONG](https://eduquestses.pages.dev/winter-mahjong.html)
- [UNSCREW WOOD PUZZLE](https://eduquests.pages.dev/unscrew-wood-puzzle.html)
- [GEOMETRY ARROW 2](https://eduquestkr.pages.dev/geometry-arrow-2.html)
- [PUT THE FRUIT TOGETHER](https://welearnaction.onrender.com/put-the-fruit-together.html)
- [DUCKLINGS](https://eduquests.onrender.com/ducklings.html)
- [SHIP CONTROL 3D](https://eduquestses.pages.dev/ship-control-3d.html)
- [CATEGORY OBBY](https://welearnaction.onrender.com/category-obby.html)
- [BINGO HALLOWEEN](https://learnaction.netlify.app/bingo-halloween.html)
