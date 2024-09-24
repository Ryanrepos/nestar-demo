"use client";
import { useState } from "react";

const Community = () => {
    const [title, setTitle] = useState<string>("hello");
    return <div>COMMUNITY <button onClick={() => alert("hello MIT")}>Click me</button></div>
}

export default Community;