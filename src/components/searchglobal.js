import React from "react";
import { FormControl,InputLabel ,Input} from '@material-ui/core';



const InputSearch=()=>{
    return(
<FormControl className='search-global'>
  <InputLabel htmlFor="my-input">Search...</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />

</FormControl>
    )

}

export default InputSearch