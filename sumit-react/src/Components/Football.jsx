function Football(props) {
  const shoot = (a, b) => {
    alert(b.type);
    /*
		'b' represents the React event that triggered the function.
    In this case, the 'click' event
		*/
  };
  return (
    <button onClick={(event) => shoot("Goal!", event)}>{props.variable}</button>
  );
}

export default Football;
