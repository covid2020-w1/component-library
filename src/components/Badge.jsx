

export default function Badge({shape = "square", color = "gray", children = "badge"}){



    return(
        <span className={`badge ${shape} ${color}`}>{children}</span>
    )
}