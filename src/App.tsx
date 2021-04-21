import React from "react";
import {Formik,Field,useField,FieldAttributes} from 'formik';
import {TextField,Button,Checkbox,Radio,FormControlLabel} from '@material-ui/core';


type MyRadioProps = { label: string } & FieldAttributes<{}>;
const MyRadio: React.FC<MyRadioProps> = ({ label, ...props }) => {
  const [field] = useField<{}>(props);
  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

const App = () => {
 
  
          return (
           
       <div>
  <Formik initialValues={{firstName: "",
  lastname:"",
  isTall:false,
  gender:[],
  color:""}}
          onSubmit={(data, {setSubmitting}) => {
           setSubmitting(true);
            // make async call
            console.log('submit',data);
            setSubmitting(false)
          }}
  >

  
  {({values,isSubmitting,handleSubmit}) => (
    <form onSubmit={handleSubmit}>
    <Field placeholder="firstname"
          name="firstName"
           type="input"
           as={TextField}
           />
     <div>
           <Field placeholder="lastname"
          name="lastname"
           type="input"
           as={TextField}
           />
           </div>
           <div>
           <Field name="isTall"
           type="checkbox"
           as={Checkbox}
           />
           </div>

           <div> cookies: </div>
           <Field name="gender" value="male" type="checkbox" as={Checkbox}/>
           <Field name="gender" value="female" type="checkbox" as={Checkbox}/>
           <Field name="gender" value="bakla" type="checkbox" as={Checkbox}/>
           <Field name="gender" value="tomboy" type="checkbox" as={Checkbox}/>
          
           <div> color: </div>
           <MyRadio name="color" type='radio' value="red" label="red" />
           <MyRadio name="color" type='radio' value="yellow" label="yellow" />
           <MyRadio name="color" type='radio' value="green" label="green" />
           <MyRadio name="color" type='radio' value="blue" label="blue" />
           
           
          
          
          
          
          
           <div>
           <Button type='submit' disabled={isSubmitting}>submit</Button>
    </div>
    <pre>{JSON.stringify(values,null,2)}</pre>
    
    
    </form>


  )}
  
  
  
  
  
  </Formik>     
       
       </div>     
               
               
 





 
    

    );
  
}

export default App;
