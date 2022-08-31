import axios from "axios";
import connection from "../databases/postgres";

async function lookingUsers(firstUser: string,secondUser: string) {
    const lookingFirstUser = await axios.get(`https://api.github.com/users/${firstUser}/repos`);
    const lookingSecondUser = await axios.get(`https://api.github.com/users/${secondUser}/repos`);

    if(lookingFirstUser.data.length === 0) throw null;
    if(lookingSecondUser.data.length === 0) throw null;
}

export const batleRepository = {
    lookingUsers
}
