import Figure from 'react-bootstrap/Figure';
import { Col } from 'react-bootstrap';

export default function CovertArtSm() {
    return (
        <Col>
        <Figure style={{'textAlign':'center'}}>
            <Figure.Image
            height={'150px'}
            width={'150px'}
            src='https://i.discogs.com/MCASre9uU0pQ3TdfiNK-6Fsb8HF0WEvm-8iOFNBlo60/rs:fit/g:sm/q:90/h:602/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1ODYx/ODYtMTQ0NDY2NjQ4/Ny03NTU4LmpwZWc.jpeg'
            style={{'borderRadius':'5px'}}/>
            <Figure.Caption style={{'fontSize':'8 pt'}}>
                Hounds of Love<br/>
                Kate Bush<br/>
                1985
            </Figure.Caption>


        </Figure>
        </Col>

    )
}