import css from "./FriendListItem.module.css"

export default function FriendListItem({ data }) {
    return (
<>
  <img className={css.image} src={data.avatar} alt="Avatar" width="48" />
  <p className={css.text}>{data.name}</p>
  {data.isOnline ? <p className={css.online}>Online</p> : <p className={css.offline}>Offline</p> }
</>
);
}