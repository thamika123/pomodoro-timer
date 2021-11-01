function Button(props) {
    return (
        <button
            className={`bg-purple-600 rounded-lg w-40 h-12 text-white text-md font-sans font-bold focus:ring-4 ring-purple-300 ${props.styles}`}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
}

function ButtonGroup(props) {
    return (
        <div className="flex mt-8">
            <Button
                styles="mr-8"
                onClick={props.controlClick}
                text={props.controlText}
            />
            <Button onClick={props.resetClick} text="Reset" />
        </div>
    );
}

export default ButtonGroup;
