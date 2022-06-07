export const fetchData = () => {
  return fetch(
    `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=iNYRcI3lJpSmHjV63gkiFv8Q8wkx1iVq`
  ).then((response) => response.json())
}
