const DisplayList = ({ todoItems, handleOnClick }) => {
  return (
    <>
      <div className="container text-center display">
        {todoItems.map((items) => (
          <div key={items.name} className="row tasklist">
            <div className="col taskname">{items.name}</div>
            <div className="col taskdate">{items.dueDate}</div>

            <button
              type="button"
              className="btn btn-danger col deltaskbtn"
              onClick={() => handleOnClick(items.name)}
            >
              Delete Task
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayList;
