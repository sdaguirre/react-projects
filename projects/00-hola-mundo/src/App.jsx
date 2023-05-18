import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatUsername = (username) => `@${username}`;

  return (
    <section className="App">
      <TwitterFollowCard
        formatUser={formatUsername}
        username={"reddit.com"}
        name={"Reddit"}
      />
      <TwitterFollowCard
        formatUser={formatUsername}
        username={"elonmusk"}
        name={"Elon Musk"}
      />
    </section>
  );
}
