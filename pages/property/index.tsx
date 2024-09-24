import { useRouter } from "next/router";

const PropertyList = () => {
    const router = useRouter();
    const {productId} = router.query;
    return <div>PROPERTY LIST {productId}</div>
}

export default PropertyList;