import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

import userData from "../../userData.json";
import friends from "../../friends.json";
import transactionHistory from "../../transactionHistory.json";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <hr />
      <FriendList friend={friends} />
      <hr />
      <TransactionHistory transactions={transactionHistory} />
    </>
  );
}

export default App;
