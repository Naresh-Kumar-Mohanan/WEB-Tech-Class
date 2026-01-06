export default function Parent(anyName) {

    console.log(anyName);

    return <div>
        <h2> Hellooo!!</h2>
        <ul>
            <h2>{anyName.fam.map((e, i) => {
                return <li key={i}>{e} </li>
            })}</h2>
        </ul>


        <h2>User Name: {anyName.me.name}</h2>
        <h2>Email: {anyName.me.email}</h2>
        {anyName.children}



    </div>
}