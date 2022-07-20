import { useState } from 'react';
import { Button } from "../stories/Button";
import { TextInput } from '../ui/atoms/TextInput';
import { Title } from '../ui/atoms/Title';
const MyPage = () => {
    const [count, setCount] = useState(0);
    return(
        <div>
            <div>
            <Title/>
            <h3>This will be my website to start</h3>
            <Button label="Click me!"
            onClick={()=>{setCount(count + 1)}}></Button>
        </div>
        <div>
            <TextInput/>
        </div>
        </div>
        
    )
}
export default MyPage;