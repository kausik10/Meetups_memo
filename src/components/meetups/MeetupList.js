import MeetupItems from "./MeetupItems";
import styles from "./Meetups.module.css";
function MeetupList(props) {
  // const meetups = Array.isArray(props.meetups) ? props.meetups : [];
  return (
    <>
      <ul className={styles.list}>
        {props.meetups.map((meetup) => {
          return (
            <MeetupItems
              key={meetup.id}
              id={meetup.id}
              image={meetup.image}
              title={meetup.title}
              address={meetup.address}
              description={meetup.description}
            />
          );
        })}
      </ul>
    </>
  );
}

export default MeetupList;
