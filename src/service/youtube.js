class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const response = await this.youtube.get('video', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResult: 25,
      },
    });
    return response.data.items;
    // const response = await fetch(
    //   `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
    //   this.requestOptions
    // );
    // const result = await response.json();
    // return result.items;
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        maxResult: 25,
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
    // const response = await fetch(
    //   `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
    //   this.requestOptions
    // );
    // const result = await response.json();
    // return result.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}

export default Youtube;
