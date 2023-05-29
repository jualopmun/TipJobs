import { CardContentType } from "./cardContentType";

export function CardContentComponent({children, title, description}: CardContentType) {
    return(
        <>
            <h4 className="text-2xl font-bold mb-2 text-gray-800">{title}</h4>
            {description && <p className="text-gray-700 whitespace-pre-line">{description}</p>}
            {children}
        </>
    )
}