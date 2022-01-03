import { useGuest } from "../../context/GuestContext";

export default function PrivateRoute(){
    const { guest } = useGuest();
    if (guest) return;
}