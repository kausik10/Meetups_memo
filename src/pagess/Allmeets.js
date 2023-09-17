import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function Allmeets() {
  const [isLoading, setisLoading] = useState(true);
  const [isgotData, setisgotData] = useState([]);

  useEffect(() => {
    setisLoading(true);
    fetch(
      "https://react-getting-started-1c6e9-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setisLoading(false);
        setisgotData(meetups);
      });
  }, []);

  if (isLoading) {
    return <h4>Loading ...</h4>;
  }

  return (
    <section>
      <h1>All MeetUps</h1>
      <MeetupList meetups={isgotData} />
    </section>
  );
}

export default Allmeets;
