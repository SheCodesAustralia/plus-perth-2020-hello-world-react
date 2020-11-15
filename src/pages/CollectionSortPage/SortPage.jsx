//////////////////////////// imports ////////////////////////////

import React, { useEffect, useState } from 'react';
import { useParams, useHistory, useLocation } from "react-router-dom";

// sorting
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { setTokenSourceMapRange } from 'typescript';


//////////////////////////// components ////////////////////////////

// sortables
const SortableItem = SortableElement(({value, sortIndex}) => <ul>{value.name}, #{sortIndex}</ul>);

const SortableList = SortableContainer(({items}) => {
    return (
        <ul>
        {items.map((value, index) => (
            <SortableItem key={`item-${index}`} index={index} sortIndex={index} value={value} />
        ))}
        </ul>
    );
});

//////////////////////////// main function ////////////////////////////
function SortableComponent(props) {

   /////////////// variables

   // location
   const { id } = useParams();
   const history = useHistory();

   // error handling
   const [hasError, setHasError] = useState(false)
   const [errorMessage, setErrorMessage] = useState()
   const [token, setToken] = useState(window.localStorage.getItem("token"))

   // get props passed down from <Link > component in CollectionDetailPage
   let data = useLocation()
   const [items, setItems] = useState(data.state.itemsProps);

   // change order of elements
   const onSortEnd = ({oldIndex, newIndex}) => {
      setItems(arrayMove(items, oldIndex, newIndex))
      setToken(window.localStorage.getItem("token"))
   };

   // get an array with the item.ids in the order they are displayed on the screen
   let myArray = []
   items.forEach(item => {myArray.push(item.id)})


   /////////////// methods

   // save order of items in the backend
   const postData = async () => {

      // // get token for authentication
      // let token = window.localStorage.getItem("token");

      // get the data ready in a "dictionary"
      let jsonData = {}
      jsonData.ranking = myArray
      jsonData.collection_id = id

      console.log(token)

      const response = await fetch(`${process.env.REACT_APP_API_URL}collection/${id}/ranking/`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify(jsonData),
      });
      return response.json();
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      postData().then((response) => {
         console.log("---------------- RESPONSE ", response)
         if (response.ok) {
            // history.push(`/collection/${id}/`);
            // window.location.reload();
         } else {
            console.log("items order ---- : ", response.detail)
            setErrorMessage(response.detail)
            setHasError(true)
         }

      });

   };


   useEffect(() => {

      if (token === null) {
         console.log("token === null! ")
         setErrorMessage("You are not logged in! Please log in to see your items!")
         setHasError(true)
      } 
 
   }, [token])


  
   /////////////// return
   return (
      <div>
            {/* There is NO error */}
            {(!hasError) ? (<div>
               <SortableList items={items} onSortEnd={onSortEnd} />
               <button onClick={handleSubmit}>Save</button>
            </div>) : null}


            {/* There IS an error message */}
            {(hasError) ? (<div>
               <div id="errormessage">
                  <br></br>
                  <img className="backgroundimage" alt="Error!" src="https://www.pngitem.com/pimgs/m/119-1190787_warning-alert-attention-search-error-icon-hd-png.png" />
                  <h2>{errorMessage}</h2>
               </div>
            </div>) : null}

      </div>
   )

}

export default SortableComponent