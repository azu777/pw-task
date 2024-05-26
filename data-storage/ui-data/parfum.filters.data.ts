enum Categories {
  Highlights = 'Highlights',
  Marke = 'Marke',
  Produktart = 'Produktart',
  Geschenkfur = 'Geschenk für',
  Furwen = 'Für Wen',
}

enum Options {
  Sale = 'Sale',
  Neu = 2,
  Limitiert = 3,
  MarkeOpt = 0,
  ProduktartOpt = 0,
  FurWenOpt = 0,
  GeschenkFurOpt = 0,
}

// enum Options {
//   Sale = 0,
//   Neu = 2,
//   Limitiert = 3,
//   MarkeOpt = 0,
//   ProduktartOpt = 0,
//   FurWenOpt = 0,
//   GeschenkFurOpt = 0,
// }

const params = [
  {
    filter: Categories.Produktart,
    option: Options.ProduktartOpt,
  },
  {
    filter: Categories.Furwen,
    option: Options.FurWenOpt,
  },
  {
    filter: Categories.Marke,
    option: Options.MarkeOpt,
  },
  {
    filter: Categories.Geschenkfur,
    option: Options.GeschenkFurOpt,
  },
];

const parfumFiltersData = {
  saleProduktartFurwenMarkeParams: [
    {
      filter: Categories.Highlights,
      option: Options.Sale,
    },
    ...params.slice(0, 3),
  ],
  neuProduktartFurwenParams: [
    {
      filter: Categories.Highlights,
      option: Options.Neu,
    },
    ...params.slice(0, 2),
  ],
  saleProduktartFurwenMarkeGeschenkfurParams: [
    {
      filter: Categories.Highlights,
      option: Options.Limitiert,
    },
    ...params
  ],
};

export { parfumFiltersData, Categories, Options };
