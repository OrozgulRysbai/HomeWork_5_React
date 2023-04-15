function Button({ userColor, userTitle,onClick, children, onSubmit , onDelete}) {
  return (
    <button
      style={{ backgroundColor: userColor }}
      className="red blue"
      onClick={onClick}
      children={children}
      onSubmit={onSubmit}
      onDelete={onDelete}
    >
      {userTitle}
    </button>
  );
}
export default Button;
