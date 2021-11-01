function Notification(props) {
    return (
        <div className="mt-12 mb-0 ml-auto bg-purple-200 mr-12 w-60 h-12 rounded-lg flex items-center justify-center">
            <h1 className="text-lg text-purple-700 font-medium">
                {props.text}
            </h1>
        </div>
    );
}

export default Notification;
