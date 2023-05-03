import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
function NewMeetupForm(){
    return(
        <div>
            <Card>
                <form className={classes.form}>
                    <div className={classes.control}>
                        <label htmlFor="title">Meetup title</label>
                        <input type="text" required id="title"/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="image">Image</label>
                        <input type="url" required id="image"/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="address">Address</label>
                        <input type="text" required id="address"/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="description">Description</label>
                        <textarea id="description" required rows="5"/>
                    </div>
                    <div className={classes.actions}>
                        <button>Add Meetup</button>
                    </div>
                </form>

            </Card>
        </div>
    );
}

export default NewMeetupForm;