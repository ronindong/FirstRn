"use strict";
import React, {Component} from 'react';

class CommentBox extends Component {

    render() {
        return (
            <div className="ui comments">
                <h1>评论</h1>
                <div className="ui divider"></div>
            </div>
        );
    }
}

export {CommentBox as default};
