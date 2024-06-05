export default function Avatar({size}) {
    let width = 'w-12';
    let height = 'h-12'
    if(size === 'big'){
        width = 'w-24';
        height = 'h-24';
    }
        
    return (
        <div className= {`${width} ${height} rounded-full overflow-hidden`}>
                <img src = "https://cdn.britannica.com/27/232027-050-A176084E/Indian-chess-player-Viswanathan-Anand-2015.jpg"></img>
        </div>
    );
}