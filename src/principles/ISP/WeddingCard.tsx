import { Image, IImage } from "./image";

interface IWeddingCard extends IImage {
    title: string;
    description: string;
  }
  
  export function WeddingCard(props: IWeddingCard) {
    const { title, description, imageUrl } = props;
  
    return (
        <>
        <div>{title}</div>
        <div>{description}</div>
        <Image imageUrl={imageUrl}/>
        </>
    );
  }
  