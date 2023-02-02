export function getMovies(name: string): Promise<string[]> {
  const movies = [
    "Zack",
    "Youth in Revolt",
    "You Will Meet a Tall Dark Stranger",
    "When in Rome",
    "What Happens in Vegas",
    "Water For Elephants",
    "WALL-E",
    "Waitress",
    "Waiting For Forever",
    "Valentine's Day",
    "Tyler Perry's Why Did I get Married",
    "Twilight: Breaking Dawn",
    "Twilight",
    "The Ugly Truth",
    "The Twilight Saga: New Moon",
    "The Proposal",
  ];

  return new Promise((resolve, reject) => {
    resolve(
      movies.filter((movie) => movie.toLowerCase().includes(name.toLowerCase()))
    );
    // setTimeout(() => {

    // }, Math.random() * 1000);
  });
}
