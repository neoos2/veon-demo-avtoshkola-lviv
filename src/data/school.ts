// Єдине джерело фактів сторінки: veon/client.json (company.contacts, products_services, C-B005..C-B019).
export const school = {
  name: "Автошкола Львів",
  legal: "Львівський обласний учбовий спортивно-технічний центр Товариства сприяння обороні України",
  edrpou: "22332984",
  phone: { href: "tel:+380974404436", text: "+38 (097) 440 44 36", short: "+38 097 440 44 36" },
  phones: [
    { href: "tel:+380974404436", text: "+38 (097) 440 44 36" },
    { href: "tel:+380322520444", text: "(032) 252-04-44" },
    { href: "tel:+380322520526", text: "(032) 252-05-26" },
  ],
  email: "office@avtoshkola.lviv.ua",
};

export const priceNote = "Ціни — за даними школи, актуальну вартість уточнюйте за телефоном.";

export type Category = {
  id: string;
  letter: string;
  title: string;
  age: string;
  term: string;
  price: string;
  extra?: string;
};

export const categories: Category[] = [
  { id: "a1", letter: "A1", title: "Категорія A1", age: "з 16 років", term: "8 тижнів", price: "4000 грн" },
  { id: "a", letter: "A", title: "Категорія A", age: "з 16 років", term: "8 тижнів", price: "4000 грн" },
  {
    id: "b", letter: "B", title: "Категорія B", age: "з 18 років", term: "10 тижнів", price: "10000 грн",
    extra: "Водіння окремо: 250 грн/год (МКП), 350 грн/год (АКП)",
  },
  { id: "c1", letter: "C1", title: "Категорія C1", age: "уточнюйте за телефоном", term: "10 тижнів", price: "6000 грн" },
  { id: "c", letter: "C", title: "Категорія C", age: "з 18 років", term: "10 тижнів", price: "6000 грн" },
  {
    id: "bc", letter: "B→C", title: "Перепідготовка B → C/C1", age: "для водіїв з категорією B",
    term: "уточнюйте за телефоном", price: "6000 грн",
  },
];

export type Lane = { kind: "day" | "eve"; from: number; to: number; days: string; time: string; open?: boolean };
export type SchoolClass = { id: string; name: string; note?: string; map: string; lanes: Lane[] };

const D = (from: number, to: number, days: string): Pick<Lane, "from" | "to" | "days"> => ({ from, to, days });
export const weekdays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];

export const classes: SchoolClass[] = [
  {
    id: "varshavska", name: "вул. Варшавська, 1", note: "головний офіс", map: "Львів, вул. Варшавська, 1",
    lanes: [
      { kind: "day", ...D(0, 2, "Пн–Ср"), time: "08:00–12:00" },
      { kind: "day", ...D(1, 3, "Вт–Чт"), time: "08:00–12:00" },
      { kind: "eve", ...D(0, 6, ""), time: "18:00–20:00", open: true },
    ],
  },
  {
    id: "tvorcha", name: "вул. Творча, 1", note: "СЗШ № 99", map: "Львів, вул. Творча, 1",
    lanes: [{ kind: "eve", ...D(1, 3, "Вт–Чт"), time: "18:00–20:00" }],
  },
  {
    id: "zhovkivska", name: "вул. Жовківська, 27", map: "Львів, вул. Жовківська, 27",
    lanes: [
      { kind: "day", ...D(0, 2, "Пн–Ср"), time: "08:00–12:00" },
      { kind: "day", ...D(1, 3, "Вт–Чт"), time: "08:00–12:00" },
      { kind: "eve", ...D(0, 6, ""), time: "18:00–20:00", open: true },
    ],
  },
  {
    id: "doroshiv", name: "с. Великий Дорошів", note: "Дорошівська СЗШ", map: "с. Великий Дорошів, Львівська область",
    lanes: [
      { kind: "eve", ...D(4, 4, "Пт"), time: "18:00–20:00" },
      { kind: "day", ...D(5, 5, "Сб"), time: "10:00–12:00" },
    ],
  },
];

export const addresses = [
  { id: "varshavska", city: "Львів", street: "вул. Варшавська, 1", note: "головний офіс" },
  { id: "tvorcha", city: "Львів", street: "вул. Творча, 1", note: "СЗШ № 99" },
  { id: "zhovkivska", city: "Львів", street: "вул. Жовківська, 27", note: "Львівський р-н" },
  { id: "doroshiv", city: "Львівський р-н", street: "с. Великий Дорошів", note: "Дорошівська СЗШ" },
];

export const mapHref = (q: string) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
