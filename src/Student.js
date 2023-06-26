function Student(props){
    console.log(props)
    return(
        <div>
            <h1>hello {props.name}</h1>
        <h1>{props.email}</h1>
        </div>
    )

}
export default Student;