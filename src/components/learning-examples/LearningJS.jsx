const person={
    name:'Abdullah Nabil',
    address:{
        city:"newCairo",
        state:"cairo",
        country:"egypt"
    },
    profiles:['twitter',"Xing","linkdin","facebook"],
    printProfile :() =>{
        person.profiles.map(
            (profile) =>{
                console.log(profile)
            }
        )
    }
}


export default function LearningJS(){
    return (
        <>
        <div>{person.name}</div>
        <div>{ person.address.city}</div>
        <div>{ person.address.state}</div>
        <div>{ person.address.country}</div>
        <div>{ person.profiles[0]}</div>
        <div>{ person.printProfile()}</div>
        </>
    )
}