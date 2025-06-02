import Writer from "./components/writer";

const writers = [
    {name: 'john',lastName:"doe", id:1},
    {name: 'asdv',lastName:"seb", id:2},
    {name: 'wef22',lastName:"qg542", id:3},
    {name: 'ceqwr32',lastName:"brwrwc", id:4},
    {name: 'mtmt',lastName:"yfnr", id:5},
    {name: 'eh',lastName:"ryn", id:6},
    {name: 'hehr',lastName:"h3ty4", id:7},
]

const Writers = (props) => {

    return(
        <div>
            {/* <Writer  {...writers[0]} />
            <Writer  {...writers[1]} />
            <Writer  {...writers[2]} />
            <Writer  {...writers[3]} />
            <Writer  {...writers[4]} /> */}

            {writers.map((item, index) => {
                return (<Writer {...item} key={item.id}/>)
            })}

        </div>
    )
}
export default Writers;