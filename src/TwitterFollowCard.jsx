export function TwitterFollowCard({ userName, name, isFollowing }) {
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src={`https://unavatar.io/${userName}`} alt="Avatar de midu" />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName"> Midu</span>
                </div>
            </header>
            <aside>
                <button className="tw-followCard-button"> Seguir</button>
            </aside>
        </article>
    )
}
