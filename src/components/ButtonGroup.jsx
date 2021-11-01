function ButtonGroup(props) {
    return (
        <div className="flex mt-8">
            <button className="bg-blue-500 rounded-lg w-40 h-12 text-white text-md font-sans font-bold focus:ring-4 ring-blue-300 mr-8">
                {props.controlText}
            </button>
            <button className="bg-blue-500 rounded-lg w-40 h-12 text-white text-md font-sans font-bold focus:ring-4 ring-blue-300">
                Reset
            </button>
        </div>
    );
}

export default ButtonGroup;
