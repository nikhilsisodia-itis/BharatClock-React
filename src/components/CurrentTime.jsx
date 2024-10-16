let CurrentTime = () => {
    let time = new Date().toLocaleTimeString();
    return <h1 className="text-center text-5xl">Current time is: {time}</h1>
}

export default CurrentTime;