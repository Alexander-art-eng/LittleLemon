import underConstruction from "../../images/underconstruction.png"
import "./UnderConstruction.css"

const UnderConstruction = () => {

    return (
        <div className="under-construction">
            <h1 className="title">Page is still Cooking...</h1>
            <p className="description">Please check back later</p>
            <img src={underConstruction} alt="Under construction page" />
        </div>
    );
};

export default UnderConstruction;