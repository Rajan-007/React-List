import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';


function ListGroup(){
    let items=['HI','Hello','Hey','Nice'];
    
    //  items=[];
     const notify = () => toast.success("Wow , List is so easy!");
    // if( items.length === 0)
    //     return<p>no item in the list</p>
    return (
        <>
            <h1> List </h1>
            { items.length === 0 ? <p> No item in the list</p> :null }
            <ul className='List-group'>
                {items.map((item) => (<li key={item} > {item} </li>))}
            </ul>
                <div>
                    <button onClick={notify}>Notify!</button>
                    <ToastContainer />
                </div>
        </>
    );
};
export default ListGroup;

// import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function ListGroup(){
//   const notify = () => toast("Wow so easy!");

//   return (
//     <div>
//       <button onClick={notify}>Notify!</button>
//       <ToastContainer />
//     </div>
//   );
// }

// export default ListGroup;