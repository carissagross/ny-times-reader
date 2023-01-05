const getNews = () => {
    return (
        fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=BPtsHM1ArKr3MPNGGZBWlAoPoOTG8y27')
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(`HTTP Error! Status ${response.status}`)
            }
        })
    )
}
export { getNews }