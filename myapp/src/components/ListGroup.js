

function ListGroup(){
    const items=['HI',
    'Hello',
    'Hey',
    'Nice'];
    return(
        <ul class='List-group'>

            {items.map(item => <li> {item} </li>)}
            
        </ul>
    );
};
export default ListGroup;