enum Categories {
  Highlights = 'Highlights',
  Marke = 'Marke',
  Produktart = 'Produktart',
  Geschenkfur = 'Geschenk für',
  FurWen = 'Für Wen',
}

enum Options {
  HighlightsSale = 'Sale',
  HighlightsNeu = 'Neu',
  HighlightsLimitiert = 'Limitiert',
  MarkeOpt = 'Armani',
  ProduktartOpt = 'Eau de Toilette',
  FurWenOpt = 'Unisex',
  GeschenkFurOpt = 'Anniversary',
}

const params = [
  {
    filter: Categories.Produktart,
    option: Options.ProduktartOpt,
  },
  {
    filter: Categories.FurWen,
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
      option: Options.HighlightsSale,
    },
    ...params.slice(0, 3),
  ],
  neuProduktartFurwenParams: [
    {
      filter: Categories.Highlights,
      option: Options.HighlightsNeu,
    },
    ...params.slice(0, 2),
  ],
  saleProduktartFurwenMarkeGeschenkfurParams: [
    {
      filter: Categories.Highlights,
      option: Options.HighlightsLimitiert,
    },
    ...params
  ],
};

export { parfumFiltersData, Categories, Options };
