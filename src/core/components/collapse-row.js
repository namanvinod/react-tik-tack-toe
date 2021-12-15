const CollapseRow = ({ isDataAvailable, showData, handleToggle }) => {
    return (
        <>
            {
                isDataAvailable &&
                <div 
                    className={`margin-left-5 fas ${showData ? 'fa-chevron-circle-up': 'fa-chevron-circle-down'}`}
                    onClick={handleToggle}
                >
                </div>
            }
        </>
    );
};

export default CollapseRow;