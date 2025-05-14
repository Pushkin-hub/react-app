import Writer from "./component/writer"
const writers = [
    {name: 'John', lastName: "Doe", id:1},
    {name: 'dfdfdf', lastName: "Doedf", id:2},
    {name: 'xcccxc', lastName: "Ddfdffoe", id:3},
    {name: 'sjdsjkd', lastName: "Dldld", id:4},
    {name: 'Jdsdsds', lastName: "Jkdsfe", id:5},
    {name: 'Johfd', lastName: "fvfdg", id:6},
    {name: 'LLDdsds', lastName: "dkskdsk", id:7},

]
const Writers = (props) => {

    return (
        <div>
            {/* <Writer {...writers[0]} />
            <Writer {...writers[1]} />
            <Writer {...writers[2]} />
            <Writer {...writers[3]} />
            <Writer {...writers[4]} />
            <Writer {...writers[5]} />
            <Writer {...writers[6]} /> */}

            {writers.map((item, index) => {
                return (<Writer {...item} key={item.id}/>)
            })}
        </div>
    )

}

export default Writers