import { Link } from "react-router-dom"

const ConditionalLink = ({target, url, children}) => {


    if(url) {
        return <Link target={target} to={url}>
            {children && children}
        </Link>
    }
    else {
        return <div>
            {children && children}
        </div>
    }
}

export default ConditionalLink;