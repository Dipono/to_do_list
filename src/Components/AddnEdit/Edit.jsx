import './Add.css';

function Edit(props) {
    return (props.triggerEdit) ? (

        <div className="popup">
            <div className="popup-inner">
                <button className="popup-btn" onClick={() => props.setTriggerEdit(false)}>close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Edit;