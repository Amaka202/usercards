import React from 'react'

export default function UserCard(props) {
    const userArr = props.userArr
    console.log(props);
    return (
        <div>
            <div className="user">
                <div className="img-div">

                </div>
                <div className="userDetails">
                    <p>Name: <span>{userArr.name}</span></p>
                    <p>UserName: <span>{userArr.username}</span></p>
                    <p>Email: <span>{userArr.email}</span></p>
                    <p>Address: <span>{userArr.address.street}, {userArr.address.suite}, {userArr.address.city}. </span></p>
                    <p>Phone No: <span>{userArr.phone}</span></p>
                    <p>Website: 
                        <span>
                            <a href="{userArr.website}">{userArr.website}</a>
                        </span>
                    </p>
                    <p>Company Info: <span>{userArr.company.name}</span></p> 
                </div>               
            </div>
        </div>
    )
}
