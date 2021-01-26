import React from 'react';

import Text from './Text';
import Status from './Status';
import InputText from './InputText';

function Task(props) {
  const {
    isLastItem,
    isFirstItem,
    content,
    title,
    updateData,
    index,
  } = props;

  const [isEditting, setIsEditting] = React.useState(false);
  const [inputValue, setInputValue] = React.useState({value: '', index: 0});

  const getValue = (value, index) => {
    setInputValue({value: value, index: index});
  }
  // const chooseStyle = () => {
  //   if (isLastItem) return { color: 'red' };
  //   if (isFirstItem) return { color: 'blue' };
  //   return;
  // }

  const saveData =() => {
    setIsEditting(false)
    if(inputValue.value){
      updateData(inputValue.value, inputValue.index)
    }
  }
  
  const showInputText = () => {
    if (isEditting) {
      return(
        <div>
          <InputText getValue={getValue} index={index} />
          <p onClick={() => saveData()}>Save</p>
        </div>
      )
    } else {
      return (
        <div onClick={() => {
          setIsEditting(true)
        }}>
          <Text isTitle content={title} />
          <Text content={content} />
        </div>
      )
    }
  }

  return (
    <li >
     {showInputText()}
    </li>
  );
}

export default Task;