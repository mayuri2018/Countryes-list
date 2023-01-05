

export type Country = {
    name: {
        common: string;
        official: string;
    },
    region: string;
    subregion: string;
    
    area: number;
    
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    },
    population: number;
    languages: object;
    flags: {
        png: string;
        svg : string;
        
    },
    flag: string;
    borders: string;
  capital: string;
  currencies: { [key: string]: { name: string; symbol: string } };
    
}