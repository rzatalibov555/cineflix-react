import Items from '../items/Items';
import './ItemsList.css'

function ItemsList() {
    return (
        
            <div className="ItemsList">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <Items/>
                        <Items/>
                        <Items/>
                        <Items/>
                        <Items/>
                        <Items/>
                        <Items/>
                        <Items/>
                        <Items/>
                        <Items/>
                    </div>
                </div>
            </div>
        
    );
}

export default ItemsList;