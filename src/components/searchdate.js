import React from "react";
import { FormControl,InputLabel ,Input} from '@material-ui/core';



const InputDate=()=>{
    return(
<FormControl className='search-global'>
  
  <Input  type="date"id="my-input" aria-describedby="my-helper-text" />

</FormControl>
    )

}

export default InputDate