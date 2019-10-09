export interface CoinMarketResponse {
  data: null | [{
    circulating_supply: number,
    cmc_rank: number,
    date_added: string,
    id: number,
    last_updated: string,
    max_supply: number,
    name: string,
    num_market_pairs: number,
    platform: null | string,
    quote: any,
    slug: string,
    symbol: string,
    tags: [string],
   total_supply: number,
  }];
  status: {
    credit_count: number,
    elapsed: number,
    error_code: number,
    error_message: null | string,
    timestamp: string,
  },
}

export interface BitcoinElement {
  circulating_supply: number,
  cmc_rank: number,
  date_added: string,
  id: number,
  last_updated: string,
  max_supply: number,
  name: string,
  num_market_pairs: number,
  platform: null | string,
  quote: { [key: string]: CurrencyQuote },
  slug: string,
  symbol: string,
  tags: string[],
  total_supply: number,
}

export interface CurrencyQuote {
  last_updated: string,
  market_cap: number,
  percent_change_1h: number,
  percent_change_24h: number,
  percent_change_7d: number,
  price: number,
  volume_24h: number,
}