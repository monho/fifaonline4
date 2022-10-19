import { UserInformation } from "../libs/requestUrl";
import RequestApi from "../libs/requestApi";

class User {
  async searchNickname(nickname) {
    try {
      return await RequestApi({
        url: UserInformation.searchNickname(nickname),
      });
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default new User();