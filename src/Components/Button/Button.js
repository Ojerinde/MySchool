const Button = (props) => {
  return (
    <button
      type={`${props.type}|| button `}
      onClick={props.onClick}
      className={`${props.className} button`}
    >
      {props.children}
    </button>
  );
};
export default Button;
