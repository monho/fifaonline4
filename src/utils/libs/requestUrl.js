export const UserInformation = {
    searchNickname: (nickname) => {
      return `fifaonline4/v1.0/users?nickname=${nickname}`;
    },
    searchAccessid: (accessid) => {
      return `fifaonline4/v1.0/users/${accessid}`;
    },
    searchAccessidForHighest: (accessid) => {
      return `fifaonline4/v1.0/users/${accessid}/maxdivision`;
    },
    searchAccessidForMatch: (accessid, matchtype, offset, limit) => {
      return `fifaonline4/v1.0/users/${accessid}/matches?matchtype=${matchtype}&offset=${offset}&limit=${limit}`;
    },
    searchAccessidForTrade: (accessid, tradetype, offset, limit) => {
      return `fifaonline4/v1.0/users/${accessid}/markets?tradetype=${tradetype}&offset=${offset}&limit=${limit}`;
    },
  };
  
  export const MatchInformation = {
    searchEveryMatch: (matchtype, offset, limit, orderby) => {
      return `fifaonline4/v1.0/matches?matchtype=${matchtype}&offset=${offset}&limit=${limit}&orderby=${orderby}`;
    },
    searchMatchDetail: (matchid) => {
      return `fifaonline4/v1.0/matches/${matchid}`;
    },
  };
  
  export const MetaInformation = {
    searchMatchMeta: () => {
      return `fifaonline4/latest/matchtype.json`;
    },
    searchPlayersAction: (spid) => {
      return `live/externalAssets/common/playersAction/p${spid}.png`;
    },
  };