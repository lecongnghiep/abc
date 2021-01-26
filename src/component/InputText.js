function InputText(props) {
 return(
   <input type='text' onChange={(e) => {
     const value  = e.target.value.trim();
     if ( value ) {
     props.getValue(value, props.index)
     }
   }} />
 )
}

export default InputText;
