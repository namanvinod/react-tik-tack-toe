const CollapseRow = ({ isDataAvailable, showData, handleToggle }) => {
    return (
        <>
            {
                isDataAvailable &&
                <div 
                    className={`fas ${showData ? 'fa-chevron-circle-up': 'fa-chevron-circle-down'}`}
                    onClick={handleToggle}
                >
                </div>
            }
        </>
    );
};

export default CollapseRow;