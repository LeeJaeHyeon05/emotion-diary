const MyButton = (text, type, onClick) => {
  const btnTpye = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <div>
      <button
        className={["MyButton", `MyButton_${btnTpye}`].join(" ")}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
