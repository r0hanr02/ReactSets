/* eslint-disable react/prop-types */

function UserGreeting(props) {
    // if (props.isLoggedIn) {
    //     /
    //     return <h2>Welcome {props.userName}</h2>
    // }
    // else {
    //     return <h2>Please log in to view your greeting</h2>
    // }
    return (props.isLoggedIn ? <h2 className="bg-green-500 text-4xl">Welcome {props.userName}</h2> : <h2 className="bg-red-600 text-4xl">Please log in to view your greeting</h2>)
}

export default UserGreeting
