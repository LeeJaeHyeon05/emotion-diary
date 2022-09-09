const MyHeader = ({ headText, leftChild, rightCHild }) => {
  return (
    <header>
      <div className="head_btn_left">{leftChild}</div>
      <div className="head_text">{headText}</div>
      <div className="head_btn_right">{rightCHild}</div>
    </header>
  );
};

export default MyHeader;
