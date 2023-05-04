import NewMeetupForm from "../components/meetups/NewMeetupForm"

function NewMeetUpsUpsPage(){

    function addMeetupHandler(meetupData){

        fetch(
            'https://react-demo-app-7ecd7-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        );
    }

    return(
        <NewMeetupForm onAddMeetup = {addMeetupHandler}/>
    );
}

export default NewMeetUpsUpsPage;