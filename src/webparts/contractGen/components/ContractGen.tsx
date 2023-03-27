import * as React from 'react'
import { sp } from '../../../spauth';
import { useEffect } from "react";

type Props = {}

const ContractGen = (props: Props) => {

  useEffect(() => {
    sp.web.lists.getByTitle("Users").items().then((users) => {
      console.log(users);
    }).catch(function (error) {
      console.log("Error: " + error);
    });
  }, []);



  return (
    <div>ContractGen</div>
  )
}

export default ContractGen