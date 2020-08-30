import React from 'react';

const CommentDetail = ({ imageUrl, author, timeAgo, comment }) => {
    return (
        <div className="comment">
            <a className="avatar" href="/">
                <img alt="avatar" src={imageUrl}></img>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {author}
                </a>
                <div className="metadata">
                    <span className="date">{timeAgo}</span>
                </div>
                <div className="text">
                    {comment}
                </div>
            </div>
        </div>
    )
};

export default CommentDetail;
