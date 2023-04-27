import React, {FC} from "react";
import {Link} from "react-router-dom";


interface IProps {
}

const AdvancedSettings: FC<IProps> = () => {
    return (
        <div>
            <div>
                <Link to="/install">Стартова страница</Link>
            </div>
        </div>
    );
};

export default AdvancedSettings;
