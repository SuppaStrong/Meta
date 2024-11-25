import axios from "axios";
import ApiData from "./ApiData";

class GameModel {
  /**
   * Initializes a new instance of the GameModel class.
   *
   * Sets the @see games property to an empty array and the @see fetchTimestamp
   * property to `null`.
   */
  constructor() {
    this.games = [];
    this.fetchTimestamp = null;
  }

  isDataStale() {
    if (!this.fetchTimestamp) return true;
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    return this.fetchTimestamp < oneHourAgo;
  }

  async fetchGames() {
    try {
      const response = await axios.post(ApiData.graphqlUrl, {
        query: `{
          games {
            nodes {
              appInfo {
                __typename
                appName
                iosLink
                androidLink
                isFeatureGames
                appImage {
                  node {
                    mediaItemUrl
                  }
                }
              }
            }
          }
        }`,
      });

      const fetchedApps = response.data.data.games.nodes.flatMap((games) => games.appInfo || []);
      this.games = fetchedApps;
      this.fetchTimestamp = new Date();
      return fetchedApps;
    } catch (error) {
      throw new Error("Error fetching games: " + error.message);
    }
  }

  // Get games, fetching if needed
  async getGames() {
    if (this.isDataStale()) {
      return await this.fetchGames();
    }
    return this.games;
  }

}

const gameModelInstance = new GameModel(); 

export default gameModelInstance; 