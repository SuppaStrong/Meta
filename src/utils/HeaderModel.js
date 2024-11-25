import axios from "axios";
import ApiData from "./ApiData";

class HeaderModel {
  constructor() {
    this.headerData = null;
    this.footerData = null;
    this.fetchTimestamp = null;
  }

  isDataStale() {
    if (!this.fetchTimestamp) return true;
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    return this.fetchTimestamp < oneHourAgo;
  }

  async fetchHeaderAndFooterData() {
    try {
      const { data } = await axios.get(ApiData.headerAndFooterUrl);
      if (!data || !data.data) {
        throw new Error("Invalid response structure.");
      }
      this.headerData = data.data.header || null;
      this.footerData = data.data.footer || null;
      this.fetchTimestamp = new Date();
    } catch (error) {
      throw new Error("Error fetching header and footer data: " + error.message);
    }
  }

  async getHeaderData() {
    if (this.isDataStale() || !this.headerData) {
      await this.fetchHeaderAndFooterData();
    }
    return this.headerData;
  }

  async getFooterData() {
    if (this.isDataStale() || !this.footerData) {
      await this.fetchHeaderAndFooterData();
    }
    return this.footerData;
  }
}

const headerModelInstance = new HeaderModel();

export default headerModelInstance;
