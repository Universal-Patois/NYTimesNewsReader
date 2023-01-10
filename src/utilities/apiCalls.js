export const fetchTopStories = async () => {
  const response = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=cVmfn2b50bqSPs6mKHWXkxYuGAqWN2y4', {
    method: "GET",
    headers: {
      "Accept": "application/json"
    },
  })
  if(!response.ok) {
    throw Error(response.status + ":" + response.statusText)
  }
  return response.json()
}