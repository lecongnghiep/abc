function Status(props) {
  switch (props.status) {
    case 'done':
      return <p style={{ color: 'green', fontWeight: 'bold' }}>{props.status}</p>
    case 'Doing':
      return <p style={{ color: 'red', textDecoration: 'line-through'  }}>{props.status}</p>
    case 'New':
      return <p style={{ color: 'violet', textDecoration: 'underline' }}>{props.status}</p>
    default:
      return <p>{props.status}</p>
      ;
  }
}

export default Status;
