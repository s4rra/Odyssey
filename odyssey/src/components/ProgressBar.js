const ProgressBar = ({ value }) => {
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${value}%` }}></div>
      </div>
    );
  };
  
  export default ProgressBar;
  