import  m1 from '../images/m1.jpeg';
import m2 from  '../images/m2.jpg';
import MeetupList from "../components/meetups/MeetupList";
const DUMMY_DATA=[
    {
        id:'m1',
        title:'this is a first meetup',
        image:m1,
        description:'this is a first meetup we get to learn about oop and data structures concepts... '
    },
    {
        id:'m2',
        title:'this is a second meetup',
        image:m2,
        description:'this is a second meetup we get to learn about oop and data structures concepts... '  
    }


]

function AllMeetups(){
    return(
        
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={DUMMY_DATA}/>
           
           
        </section>
    )

}
export default AllMeetups;