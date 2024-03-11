
const Spinner = () => {
  
    return (
      <div>
        <div className="text-center" style={{overflow: 'hidden'}}>
          <div
            className="spinner-border"
            role="status"
            style={{ width: "2rem", height: "2rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  
}

export default Spinner
