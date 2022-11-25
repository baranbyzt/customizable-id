![Barcode-PNG-Image](https://user-images.githubusercontent.com/87334718/203976028-5410652e-f849-4d68-9b05-fdc7cf4e6baf.png)

# customizable-id

- **Small.** xx bytes (minified and gzipped). No dependencies.
  [Size Limit] controls the size.
- **Safe.** It uses hardware random generator. Can be used in clusters.
- **Short IDs.** It uses a larger alphabet than UUID (`A-Za-z0-9_-`).
  So ID size was reduced from 36 to 21 symbols.
- **Portable.** Nano ID was ported
  to [20 programming languages](./README.md#other-programming-languages).

---

<br/>

We are working on this project by spending Jeff Bezos'
money on various products. Our main goal in this project
is to develop a web project using redux toolset and
styling components.

## Try it Now

...

## Install

```bash
npm install customizable-id
```

## Create a custom (ES6 module syntax)

```bash
import { customV6 as custom } from 'customizable-id';
custom(); // ⇨ 'J0cySD/M§18j86~Gkgæ4%A'
```

or use it by customizing

```bash
import { customV6 as custom } from 'customizable-id';
custom(10); // ⇨ '6≥6∂Hd½qhP'
```

## Customizable Structures

| special versions | version features                                  |
| ---------------- | ------------------------------------------------- |
| customV1         | only lowercase letters                            |
| customV2         | capital letters only                              |
| customV3         | mixed upper or lower case letters                 |
| customV4         | only numbers                                      |
| customV5         | only symbols                                      |
| customV6         | upper & lowercase letters symbols & numbers mixed |
| customV7         | symbols and numbers                               |
| customV8         | lowercase letters and symbols                     |
| customV9         | upper letters symbols                             |
| customV10        | lowercase letters and numbers                     |
| customV11        | upper letters and numbers                         |
| customV12        | lowercase letters and numbers and symbols         |
| customV13        | lowercase and uppercase letters mixed and symbols |
| customV14        | lowercase uppercase symbol random mixed           |
| customV15        | capital letters lowercase letters numbers         |

## versions

- 1.0.0 --> for basic use

## Features for version --> 2.0.0

- separator for encryption data
- Better code quality for 1.0.0
- better documentation
- better handling
