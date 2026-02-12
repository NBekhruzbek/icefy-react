import axios from "axios";
import { serverApi } from "../../lib/config";
import { Member } from "../../lib/types/member";

class MemberService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async getTopMembers(): Promise<Member[]> {
    try {
      let url = `${this.path}/member/top-users`;

      const result = await axios.get(url); // axios installed ? useIt : install;
      console.log("getTopMembers:", result);

      return result.data;
    } catch (err) {
      console.log("ERROR, getTopMembers:", err);
      throw err;
    }
  }

  public async getAdmin(): Promise<Member> {
    try {
      let url = `${this.path}/member/getAdmin`;

      const result = await axios.get(url); // axios installed ? useIt : install;
      console.log("getAdmin:", result);

      const admin: Member = result.data;
      return admin;
    } catch (err) {
      console.log("ERROR, getAdmin:", err);
      throw err;
    }
  }
}

export default MemberService;
