import { PokemonStat } from "pokenode-ts";

const statToString = ({ stat, base_stat }: PokemonStat) => {
  if (stat) {
    const maxLengthString = 20;
    const statName = stat.name;
    const pokeStatStringLength = statName.length + base_stat.toString().length;
    return (
      statName +
      new Array(maxLengthString - pokeStatStringLength).fill(".").join("") +
      base_stat
    );
  }
  return "";
};

export default statToString;
