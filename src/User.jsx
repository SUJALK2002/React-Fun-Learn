export function User({user}){
    return(
        <>
            <h3>NAME:{user.name}</h3>
            <h3>AGE:{user.age}</h3>
            <h3>EMAIL:{user.mail}</h3>
            <hr/>
        </>
    )
}