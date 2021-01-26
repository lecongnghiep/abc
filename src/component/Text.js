function Text(props) {
  const {isTitle, content} = props;
  if (isTitle) {
    return <h1>{content}</h1>
  } else {
    return <p>{content}</p>
  }
}

export default Text;
