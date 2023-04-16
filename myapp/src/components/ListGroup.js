

function ListGroup(){
    let items=['HI','Hello','Hey','Nice'];

     items=[];

    // if( items.length === 0)
    //     return<p>no item in the list</p>
    return (
        <>
            <h1> List </h1>
            { items.length === 0 ? <p> No item in the list</p> :null }
            <ul class='List-group'>
                {items.map((item) => (<li> {item} </li>))}

            </ul>
        </>
    );
};
export default ListGroup;