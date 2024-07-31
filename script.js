console.log("working");
async function fetchPokemonCategories() {
  const response = await fetch(
    "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand"
  );
  const data = await response.json();
  console.log(data);
  return data;
}
fetchPokemonCategories()
  .then((pokemons) => console.log(pokemons))
  .catch((error) => console.error("Error fetching Pokémon:", error));
