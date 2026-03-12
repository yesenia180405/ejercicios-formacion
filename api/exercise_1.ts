const getData = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    if (!response.ok) {
      throw new Error("Error en la comunicación");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error en el Fetch: ", error);
  }
};
getData();
