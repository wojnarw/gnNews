import Popup from "./Popup";

const About = ({ hidePopup }) => {
    const title = "About";

    return (
        <Popup title={title} hidePopup={hidePopup}>
            <p>I created this project in 2 days after regular work, unfortunately late due to release of new product at work this week and lack of free time after work.
                What I liked the most was creating React components, CSS design, writing JS functions and working with good API.</p>

            <p>The part that I disliked the most was the fact, that I didn't know Redux Toolkit and I had very little time to learn it and Indian videos were very long. It took me around 12 hours of programming, not counting hours spent on learning.</p>

            <p>Website uses API caching and keeps articles for 30 minutes before refreshing, especially due to very high limitations of free news APIs, that limit requests to 100 per day.</p>
        </Popup>
    )
}

export default About;