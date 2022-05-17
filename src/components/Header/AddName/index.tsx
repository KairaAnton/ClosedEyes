import { Link } from "react-router-dom";
import './index.scss';

type AddNameProps = {}
 
const AddName:React.FC<AddNameProps> = () => {
    return (
        <Link to='/' className="add-name">[ДОДАТИ ІМ'Я]</Link>
    );
}
 
 
export default AddName;