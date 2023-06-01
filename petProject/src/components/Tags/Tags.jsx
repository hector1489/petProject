import Badge from 'react-bootstrap/Badge'

const Tags = ({text, color}) => {
    return (
        <Badge bg={color}>{text}</Badge>
    )
}

export default Tags