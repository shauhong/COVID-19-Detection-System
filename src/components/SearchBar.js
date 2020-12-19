function SearchBar(){
    const height={
        height: '32px',
    }
    return(
        <form className="form-row" method="" action="">
            <input type="text" className="form-control" placeholder="Name" style={height}/>
            <input type="submit" className="button medium" value="Search" style={height}/>
        </form>
    );
}

export default SearchBar;