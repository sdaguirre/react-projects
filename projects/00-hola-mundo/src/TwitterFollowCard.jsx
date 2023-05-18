import { useState } from "react";

export function TwitterFollowCard({ formatUser, username, name }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const texto = isFollowing ? "Siguiendo" : "Seguir";

  const clase = isFollowing
    ? "tw-followCard-button is-followed"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${username}`}
          alt=""
        />
        <div className="tw-followCard-info">
          <strong> {name}</strong>
          <span className="tw-followCard-infoUserName">
            {formatUser(username)}
          </span>
        </div>
      </header>
      <aside>
        <button onClick={handleClick} className={clase}>
          {texto}
        </button>
      </aside>
    </article>
  );
}
