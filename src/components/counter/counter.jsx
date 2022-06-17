import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { moreprice } from "../../refactors/cart/cartAction";
export const Counter = ({price}) => {
  const [counter, setcounter] = useState(1);
  const dispatch = useDispatch();
  const handlecounter = (value) => {
    return setcounter(counter + value);
  };

  // const add = async (id) => {
  //         try {
  //           let updateprice = {
  //             Dprice:price+singledata.Dprice
  //           }
  //           const res = await fetch(`http://localhost:8080/cart/${id}`,{
  //             method:"PATCH",
  //             headers:{
  //               "content-type":"Application/json",
  //             },
  //             body:JSON.stringify(updateprice)
  //             });
  //             console.log(res.json())
  //          cartfun()
  //         } catch (error) {
  //           console.log(error)
  //         }

  // }

  // const sub = async (id) => {
  //   try {
  //     let updateprice = {
  //       Dprice:singledata.Dprice-price
  //     }
  //     const res = await fetch(`http://localhost:8080/cart/${id}`,{
  //       method:"PATCH",
  //       headers:{
  //         "content-type":"Application/json",
  //       },
  //       body:JSON.stringify(updateprice)
  //       });
  //       console.log(res.json())
  //    cartfun()
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  return (
    <div>
      <div>
        <button
          onClick={() => {
            dispatch(moreprice(price));
            handlecounter(1);
          }}
        >
          +
        </button>
        {counter}
        <button
          onClick={() => {
            if (counter <= 1) {
              return;
            }
            handlecounter(-1);
            dispatch(moreprice(-price));
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

;
