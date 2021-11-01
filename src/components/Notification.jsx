function Notification(props) {
    return (
        <div className="absolute right-0 top-8 bg-purple-200 dark:bg-purple-500 mr-12 w-60 h-12 rounded-lg flex items-center justify-center">
            <h1 className="text-lg text-purple-800 dark:text-purple-100 font-medium">
                {props.text}
            </h1>
        </div>
    );
}

export default Notification;
