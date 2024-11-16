const Counter = (props) => {
  const {counter, setCounter, children } = props;
  return (
    <div>
      <button onClick={() => setCounter(counter - 1)} className="btn btn-sm btn-success">-</button>
      {children}  
        <button onClick={() => setCounter(counter + 1)} className="btn btn-sm btn-success">+</button>
    </div>
  );
};

export default Counter;
