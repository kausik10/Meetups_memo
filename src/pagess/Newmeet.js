import { useNavigate } from "react-router-dom";
import NewMeetupform from "../components/meetups/NewMeetupform";

function Newmeet() {
  const navigate = useNavigate();
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-1c6e9-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  }

  return (
    <section>
      <h1>New meetups</h1>
      <NewMeetupform onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default Newmeet;
