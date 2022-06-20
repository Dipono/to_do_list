import './Add.css';

function Add(props) {
    return (props.trigger) ? (

        <div className="popup">
            <div className="popup-inner">
                <button className="popup-btn" onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Add;