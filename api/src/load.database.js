const axios = require("axios");
const e = require("express");
const { Country } = require("./db");

const REST_CONTRIES_API = `https://restcountries.com/v3.1/all`;

async function LoadDatabase() {
  try {
    {
      const response = await axios.get(REST_CONTRIES_API);
      const countries = response.data.map((e) => ({
        id: e.cca3,
        name: e.name.official,
        flag_image: e.flags.svg,
        continent: e.continents ?? [e.name.official],
        capital: e.capital ?? [e.name.official],
        subregion: e.subregion ?? null,
        area: e.area,
        population: e.population,
      }));
      console.log(countries[0].capital[0]);

      countries.forEach(async (country) => {
        if (typeof country.id !== "string") {
          console.log(country);
        }
        await Country.findOrCreate({
          where: {
            id: country.id,
            name: country.name,
            flag_image: country.flag_image,
            continent: country.continent,
            capital: country.capital,
            subregion: country.subregion,
            area: country.area,
            population: country.population,
          },
        });
      });
    }

    console.log("DB SUCCESS");
  } catch (error) {
    return error;
  }

  //   console.log(response);
}

module.exports = { LoadDatabase };

// ------------------------------------------------- Object model
// {
//     name: [Object],
//     tld: [Array],
//     cca2: 'GI',
//     ccn3: '292',
//     cca3: 'GIB',
//     independent: false,
//     status: 'officially-assigned',
//     unMember: false,
//     currencies: [Object],
//     idd: [Object],
//     capital: [Array],
//     altSpellings: [Array],
//     region: 'Europe',
//     subregion: 'Southern Europe',
//     languages: [Object],
//     translations: [Object],
//     latlng: [Array],
//     landlocked: false,
//     borders: [Array],
//     area: 6,
//     demonyms: [Object],
//     flag: '🇬🇮'  ,
//     maps: [Object],
//     population: 33691,
//     fifa: 'GIB',
//     car: [Object],
//     timezones: [Array],
//     continents: [Array],
//     flags: [Object],
//     coatOfArms: [Object],
//     startOfWeek: 'monday',
//     capitalInfo: [Object]
//   }
// -------------------------------------------------------------
