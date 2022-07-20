import { useState } from 'react';
import { Button } from "../stories/Button";
import { Title } from '../ui/atoms/Title';
const MyPage = () => {
    const [count, setCount] = useState(0);
    return(
        <div>
            <Title/>
            <h3>This will be my website to start</h3>
            <Button label="Click me!"
            onClick={()=>{setCount(count + 1)}}></Button>
        </div>
    )
}
export default MyPage;