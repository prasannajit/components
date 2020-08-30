import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4PM" comment="Nice blog" imageUrl={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Today at 3PM" comment="Nice blog buddy" imageUrl={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Joy" timeAgo="Yesterday at 5PM" comment="Nice blog dude" imageUrl={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

