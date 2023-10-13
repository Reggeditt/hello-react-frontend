import { useEffect } from "react";
import { fetchGreeting } from "./redux/greeting/greetingSlice";
import { useDispatch, useSelector } from "react-redux";

const GreetingComponent = () => {
    const dispatch = useDispatch();
    const greeting = useSelector((store) => store.greeting);
    console.log(greeting);

    useEffect(() => {
        dispatch(fetchGreeting());
    }, [dispatch]);
    return ( 
        <div>
            <h1>{greeting.greeting}</h1>
        </div>
    );
}
 
export default GreetingComponent;
