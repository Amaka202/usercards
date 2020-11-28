import React from 'react'

export default function UserCard(props) {
    const {userArr} = props;
    const myUserArr = userArr.map((user, index) => {
        
    return (
        <div>
            <div className="user">
                <div className="img-div">
                    <img src={`https://robohash.org/${user.id}`} alt=""/> 
                </div>
                <div className="userDetails">
                    <p>Name: <span>{user.name}</span></p>
                    <p>UserName: <span>{user.username}</span></p>
                    <p>Email: <span>{user.email}</span></p>
                    <p>Address: <span>{user.address.street}, {user.address.suite}, {user.address.city}. </span></p>
                    <p>Phone No: <span>{user.phone}</span></p>
                    <p>Website: 
                        <span>
                            <a href="{user.website}">{user.website}</a>
                        </span>
                    </p>
                    <p>Company Info: <span>{user.company.name}</span></p> 
                </div>               
            </div>
        </div>
    )

})
return <div className="users">{myUserArr}</div>

}
