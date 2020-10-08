
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useForm } from "react-hook-form";
import { FormControl,InputLabel ,Input} from '@material-ui/core';
export default function AjoutClient() {
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Customer
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add Customer"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">


{/* 
          <form onSubmit={handleSubmit(onSubmit)}>

          <FormControl className='search-global'>
  <InputLabel htmlFor="my-input">Customer...</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" ref={register({ required: true })} />

</FormControl>
<FormControl className='search-global'>
  <InputLabel htmlFor="my-input">Contact...</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" ref={register({ required: true })} />

</FormControl>
<FormControl className='search-global'>
  <InputLabel htmlFor="my-input">Email...</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" ref={register({ required: true })}/>

</FormControl>
<FormControl className='search-global'>
  <InputLabel htmlFor="my-input">Date...</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" ref={register({ required: true })}/>

</FormControl>
<FormControl className='search-global'>
  <InputLabel htmlFor="my-input">Chiffre d'affaire...</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" ref={register({ required: true })}/>

</FormControl>

<FormControl className='search-global'>
  <InputLabel htmlFor="my-input">Adress...</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" ref={register({ required: true })}/>

</FormControl>
<FormControl className='search-global'>
  <InputLabel htmlFor="my-input">Matricule fiscale...</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" ref={register({ required: true })}/>

</FormControl>
<FormControl className='search-global'>
  <InputLabel htmlFor="my-input">Logo</InputLabel>
  <Input  id="my-input" aria-describedby="my-helper-text" ref={register({ required: true })}/>
 {errors.exampleRequired && <span>This field is required</span>}
</FormControl>

</form> */}


<form onSubmit={handleSubmit(onSubmit)}>
  
     
 
  <input
  placeholder="nom prenom"
    name="exampleRequired"
    ref={register({ required: true, maxLength: 10 })}
  />
  {errors.exampleRequired && <p>This field is required</p>}
  <input
   placeholder=" Telephone"
   type="number"
    name="exampleRequired"
    ref={register({ required: true, maxLength: 10 })}
  />
  {errors.exampleRequired && <p>This field is required</p>}
  <input
  placeholder=" Email"
  
    name="exampleRequired"
    ref={register({ pattern:(/^[^@]+@[^@]+\.[^@]+$/) },{ required: true, maxLength: 10,})}
  />
  {errors.exampleRequired && <p>This field is required</p>}
  <input
  type="date"
    name="exampleRequired"
    ref={register({ required: true, maxLength: 10 })}
  />
  {errors.exampleRequired && <p>This field is required</p>}
  <input
  placeholder="Chiffre d'affaires"
    name="exampleRequired"
    ref={register({ required: true, maxLength: 10 })}
  />
  {errors.exampleRequired && <p>This field is required</p>}
  <input
  placeholder="adresse"
    name="exampleRequired"
    ref={register({ required: true, maxLength: 10 })}
  />
  {errors.exampleRequired && <p>This field is required</p>}
  <input
  placeholder="Matricule Fiscale"
    name="exampleRequired"
    ref={register({ required: true, maxLength: 10 })}
  />
  {errors.exampleRequired && <p>This field is required</p>}
  <input
  placeholder="logo"
    name="exampleRequired"
    ref={register({ required: true,})}
  />
  {errors.exampleRequired && <p>This field is required</p>}
  <input type="submit" />
</form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
         
      
        </DialogActions>
      </Dialog>
    </div>
  );
}